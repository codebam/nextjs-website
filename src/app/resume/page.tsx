import fs from "fs";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const load = async () => {
	const contents = fs.readFileSync("src/app/resume/resume.md", "utf8");
	const matterResult = matter(contents);
	const processedContent = await remark()
		.use(html)
		.process(matterResult.content);
	const contentHtml = processedContent.toString();
	return { title: undefined, contentHtml, ...matterResult.data };
};

export default async function Resume() {
	const data = await load();
	return (
		<main>
			<h1>{data.title}</h1>
			<div dangerouslySetInnerHTML={{ __html: data.contentHtml }} />
		</main>
	);
}
