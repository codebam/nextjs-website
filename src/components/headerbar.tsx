"use client";
import {
	Link,
	Image,
	Navbar,
	NavbarBrand,
	NavbarContent,
	NavbarItem,
	NavbarMenuToggle,
	NavbarMenu,
	NavbarMenuItem,
} from "@nextui-org/react";
import { useState } from "react";

const HeaderBar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	return (
		<Navbar shouldHideOnScroll={true} onMenuOpenChange={setIsMenuOpen}>
			<NavbarContent>
				<NavbarMenuToggle
					aria-label={isMenuOpen ? "Close menu" : "Open menu"}
					className="sm:hidden"
				/>
				<Link underline={"always"} href="/">
					<NavbarBrand>
						<Image
							isBlurred
							alt="profile"
							src="https://avatars.githubusercontent.com/u/6035884?v=4"
							width={"50px"}
							height={"50px"}
						/>
						<h1 className="text-lg font-bold ml-4">Sean Behan</h1>
					</NavbarBrand>
				</Link>
			</NavbarContent>

			<NavbarContent className="hidden sm:flex gap-4" justify="center">
				<NavbarItem>
					<Link underline={"always"} href="/">
						Home
					</Link>
				</NavbarItem>
				<NavbarItem>
					<Link underline={"always"} href="/posts">
						Posts
					</Link>
				</NavbarItem>
				<NavbarItem>
					<Link underline={"always"} href="https://github.com/codebam">
						GitHub
					</Link>
				</NavbarItem>
				<NavbarItem>
					<Link underline={"always"} href="/contact">
						Contact
					</Link>
				</NavbarItem>
				<NavbarItem>
					<Link underline={"always"} href="https://p.seanbehan.ca">
						Pastebin
					</Link>
				</NavbarItem>
				<NavbarItem>
					<Link underline={"always"} href="https://term.seanbehan.ca">
						Terminal
					</Link>
				</NavbarItem>
			</NavbarContent>
			<NavbarContent justify="end"></NavbarContent>
			<NavbarMenu>
				<NavbarMenuItem>
					<Link
						underline={"always"}
						color={"primary"}
						className="w-full"
						href="/"
						size="lg"
					>
						Home
					</Link>
					<Link
						underline={"always"}
						color={"primary"}
						className="w-full"
						href="/posts"
						size="lg"
					>
						Posts
					</Link>
					<Link
						underline={"always"}
						color={"primary"}
						className="w-full"
						href="https://github.com/codebam"
						size="lg"
					>
						GitHub
					</Link>
					<Link
						underline={"always"}
						color={"primary"}
						className="w-full"
						href="/contact"
						size="lg"
					>
						Contact
					</Link>
					<Link
						underline={"always"}
						color={"primary"}
						className="w-full"
						href="https://p.seanbehan.ca"
						size="lg"
					>
						Pastebin
					</Link>
					<Link
						underline={"always"}
						color={"primary"}
						className="w-full"
						href="https://term.seanbehan.ca"
						size="lg"
					>
						Terminal
					</Link>
				</NavbarMenuItem>
			</NavbarMenu>
		</Navbar>
	);
};

export default HeaderBar;
