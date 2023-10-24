import Link from "next/link";

const HeaderBar = () => (
	<header>
		<h1>Sean Behan</h1>
		<Link href="/">Home</Link>
		<Link href="/posts">Posts</Link>
		<Link href="/resume">Resume</Link>
		<Link href="/contact">Contact</Link>
		<Link href="https://github.com/codebam">GitHub</Link>
		<Link href="https://p.seanbehan.ca">Pastebin</Link>
		<Link href="https://term.seanbehan.ca">Terminal</Link>
	</header>
);

export default HeaderBar;
