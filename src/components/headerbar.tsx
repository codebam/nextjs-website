import Link from "next/link";
import { Button } from "@nextui-org/button";

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
			<Link href="/posts">
				<Button>Posts</Button>
			</Link>
			<Link href="/resume">
				<Button>Resume</Button>
			</Link>
			<Link href="/contact">
				<Button>Contact</Button>
			</Link>
			<Link href="https://github.com/codebam">
				<Button>GitHub</Button>
			</Link>
			<Link href="https://p.seanbehan.ca">
				<Button>Pastebin</Button>
			</Link>
			<Link href="https://term.seanbehan.ca">
				<Button>Terminal</Button>
			</Link>
		</div>
	</header>
);

export default HeaderBar;
