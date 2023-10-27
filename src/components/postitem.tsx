"use client";
import { Link } from "@nextui-org/react";

const PostItem = ({
	post,
}: {
	post:
		| {
				title: string | undefined;
				date: Date | undefined;
				id: string | undefined;
		  }
		| undefined;
}) => (
	<li>
		<Link
			underline={"always"}
			className={"text-primary"}
			href={"/posts/" + post?.id}
		>
			{post?.title}
		</Link>
		<p className={"text-secondary text-right"}>{post?.date?.toDateString()}</p>
	</li>
);

export default PostItem;
