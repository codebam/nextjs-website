import Link from "next/link";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const HeaderBar = () => (
	<header>
		<h1>Sean Behan</h1>
		<Button variant="dark" href="/">
			Home
		</Button>
		<Button variant="dark" href="/posts">
			Posts
		</Button>
		<Button variant="dark" href="/resume">
			Resume
		</Button>
		<Button variant="dark" href="/contact">
			Contact
		</Button>
		<Button variant="dark" href="https://github.com/codebam">
			GitHub
		</Button>
		<Button variant="dark" href="https://p.seanbehan.ca">
			Pastebin
		</Button>
		<Button variant="dark" href="https://term.seanbehan.ca">
			Terminal
		</Button>
	</header>
);

export default HeaderBar;
