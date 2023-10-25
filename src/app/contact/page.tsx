import fs from "fs";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const load = async () => {
	const contents = fs.readFileSync("src/app/contact/contact.md", "utf8");
	const matterResult = matter(contents);
	const processedContent = await remark()
		.use(html)
		.process(matterResult.content);
	const contentHtml = processedContent.toString();
	return { contentHtml, ...matterResult.data };
};

export default async function Resume() {
	const data = await load();
	console.log(data);
	return (
		<main>
			<h1>{data.title}</h1>
			<div dangerouslySetInnerHTML={{ __html: data.contentHtml }} />
		</main>
	);
}
