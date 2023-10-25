import fs from "fs";
import path from "path";
import matter from "gray-matter";

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
					return { id, title: undefined, ...matterResult.data };
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

export default async function sitemap() {
	const data = await load();
	return [
		{
			url: "https://seanbehan.ca",
			lastModified: new Date(),
			changeFrequency: "yearly",
			priority: 1,
		},
		{
			url: "https://seanbehan.ca/contact",
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.8,
		},
		{
			url: "https://seanbehan.ca/posts",
			lastModified: new Date(),
			changeFrequency: "weekly",
			priority: 0.5,
		},
		...data.posts.map((post) => ({
			url: `https://seanbehan.ca/posts/${post?.id}`,
			lastModified: new Date(),
			changeFrequency: "weekly",
			priority: 0.5,
		})),
	];
}
