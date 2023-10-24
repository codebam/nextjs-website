import { remark } from "remark";
import html from "remark-html";
import path from "path";
import fs from "fs";
import matter from "gray-matter";

async function getPostData(id: string) {
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
}

export default async function Post({ params }: { params: { id: string } }) {
	const postData = await getPostData(params.id);
	return (
		<>
			<h1>{postData.title}</h1>
			<h2>{postData.date.toString()}</h2>
			<div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
		</>
	);
}
