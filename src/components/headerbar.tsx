import Link from "next/link";
import Button from "react-bootstrap/Button";

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
			<Button href="/posts">Posts</Button>
			<Button href="/resume">Resume</Button>
			<Button href="/contact">Contact</Button>
			<Button href="https://github.com/codebam">GitHub</Button>
			<Button href="https://p.seanbehan.ca">Pastebin</Button>
			<Button href="https://term.seanbehan.ca">Terminal</Button>
		</div>
	</header>
);

export default HeaderBar;
