import { remark } from "remark";
import html from "remark-html";
import path from "path";
import fs from "fs";
import matter from "gray-matter";
import RSS from "rss";

const load = async () => {
	const postsDir = path.join(process.cwd(), "src/app/posts");
	const posts = (
		await Promise.all(
			fs.readdirSync(postsDir).map(async (fileName) => {
				const id = fileName.replace(/\.md$/, "");
				const fullPath = path.join(postsDir, fileName);
				console.log(fullPath);
				if (fullPath.split(".").pop() === "md") {
					const contents = fs.readFileSync(fullPath, "utf8");
					const matterResult = matter(contents);
					return {
						id,
						tags: undefined,
						date: undefined,
						title: undefined,
						...matterResult.data,
					};
				}
			})
		)
	).filter((x: any) => x !== undefined);
	const sortedPosts = posts.sort((a, b) => {
		// @ts-ignore
		return new Date(b.date) - new Date(a.date);
	});
	return { posts: sortedPosts };
};

export async function GET() {
	const data = await load();
	const feed = new RSS({
		title: "Sean Behan",
		description: "Sean Behan's Website",
		site_url: "https://seanbehan.ca",
		feed_url: "https://seanbehan.ca/rss.xml",
		copyright: `©${new Date().getFullYear()} Sean Behan`,
		language: "en",
		pubDate: new Date().toISOString(),
	});
	data.posts.map((post) => {
		feed.item({
			title: post?.title ?? "",
			guid: post?.id,
			url: `https://seanbehan.ca/posts/${post?.id}`,
			date: post?.date ?? new Date(),
			author: "Sean Behan",
			categories: post?.tags,
			description: "",
		});
	});
	return new Response(feed.xml(), {
		headers: { "Content-Type": "application/atom+xml; charset=utf-8" },
	});
}
