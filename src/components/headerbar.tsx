"use client";
import { Link, Image } from "@nextui-org/react";

const HeaderBar = () => (
	<header className="flex flex-wrap">
		<Link href="/" className="m-4">
			<Image
				className="m-2"
				isBlurred
				alt="profile"
				src="https://avatars.githubusercontent.com/u/6035884?v=4"
				width={"100px"}
				height={"100px"}
			/>
		</Link>
		<Link className="ml-0" underline="always" href="/">
			<h1>Sean Behan</h1>
		</Link>
		<div className="flex flex-wrap">
			<Link className="m-2 ml-4" underline="always" href="/posts">
				Posts
			</Link>
			<Link
				className="m-2"
				underline="always"
				href="https://github.com/codebam"
			>
				GitHub
			</Link>
			<Link className="m-2" underline="always" href="/contact">
				Contact
			</Link>
			<Link className="m-2" underline="always" href="https://p.seanbehan.ca">
				Pastebin
			</Link>
			<Link className="m-2" underline="always" href="https://term.seanbehan.ca">
				Terminal
			</Link>
		</div>
	</header>
);

export default HeaderBar;
