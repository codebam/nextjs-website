"use client";
import { Link } from "@nextui-org/react";

const HeaderBar = () => (
	<header>
		<img
			alt="profile"
			src="https://avatars.githubusercontent.com/u/6035884?v=4"
		/>
		<Link href="/">
			<h1>Sean Behan</h1>
		</Link>
		<div>
			<Link href="/posts">Posts</Link>
			<Link href="/resume">Resume</Link>
			<Link href="/contact">Contact</Link>
			<Link href="https://p.seanbehan.ca">Pastebin</Link>
			<Link href="https://term.seanbehan.ca">Terminal</Link>
		</div>
	</header>
);

export default HeaderBar;
