import Link from "next/link";
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
				if (fullPath.split(".").pop() === "md") {
					const contents = fs.readFileSync(fullPath, "utf8");
					const matterResult = matter(contents);
					return {
						id,
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

export default async function Home() {
	const data = await load();
	return (
		<main>
			<p className="my-8">
				I’m a full stack developer. I code in TypeScript, Rust, C#, and Python.
				I have a passion for open source and Linux.
			</p>
			<h2>Posts</h2>
			<ul>
				{data.posts.map((post) => (
					<li key={post?.id}>
						<Link href={"/posts/" + post?.id}>{post?.title}</Link>
						<p className={"text-gray-600 text-right"}>
							{/* @ts-ignore */}
							{post.date.toDateString()}
						</p>
					</li>
				))}
			</ul>
			<a rel="me" style={{ display: "none" }} href="https://mstdn.ca/@codebam">
				Mastodon
			</a>
		</main>
	);
}
