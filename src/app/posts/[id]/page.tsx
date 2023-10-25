import { remark } from "remark";
import html from "remark-html";
import path from "path";
import fs from "fs";
import matter from "gray-matter";

export async function generateStaticParams() {
	const data = await load();
	const ids = data.posts.map((post) => post?.id);
	return ids.map((id) => ({ id }));
}

const load = async () => {
	const postsDir = path.join(process.cwd(), "src/app/posts");
	const posts = (
		await Promise.all(
			fs.readdirSync(postsDir).map(async (fileName) => {
				const id = fileName.replace(/\.md$/, "");
				const fullPath = path.join(postsDir, fileName);
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

const preload = async (id: string) => {
	const fullPath = path.join("src/app/posts/", `${id}.md`);
	const fileContents = fs.readFileSync(fullPath, "utf8");

	// Use gray-matter to parse the post metadata section
	const matterResult = matter(fileContents);

	// Use remark to convert markdown into HTML string
	const processedContent = await remark()
		.use(html)
		.process(matterResult.content);
	const contentHtml = processedContent.toString();

	// Combine the data with the id and contentHtml
	return {
		id,
		title: undefined,
		date: new Date(),
		contentHtml,
		...matterResult.data,
	};
};

export default async function Post({ params }: { params: { id: string } }) {
	const postData = await preload(params.id);
	return (
		<>
			<h1>{postData.title}</h1>
			<h3>{postData.date.toString()}</h3>
			<div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
		</>
	);
}
