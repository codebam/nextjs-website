"use client";
import { Link, Image, Divider } from "@nextui-org/react";

const HeaderBar = () => (
	<header>
		<Link href="/">
			<Image
				isBlurred
				alt="profile"
				src="https://avatars.githubusercontent.com/u/6035884?v=4"
				width={100}
			/>
		</Link>
		<Link className="ml-0" underline="always" href="/">
			<h1>Sean Behan</h1>
		</Link>
		<div>
			<Link underline="always" href="/posts">
				Posts
			</Link>
			<Link underline="always" href="/resume">
				Resume
			</Link>
			<Link underline="always" href="/contact">
				Contact
			</Link>
			<Link underline="always" href="https://p.seanbehan.ca">
				Pastebin
			</Link>
			<Link underline="always" href="https://term.seanbehan.ca">
				Terminal
			</Link>
		</div>
	</header>
);

export default HeaderBar;
