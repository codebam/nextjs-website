import "./globals.css";
import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import Link from "next/link";
import HeaderBar from "@/components/headerbar";
import Script from "next/script";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Sean Behan",
	description: "Sean Behan's Website",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<Script
				async
				src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3287237463323384"
			/>
			<body>
				<HeaderBar />
				{children}
				<footer>
					<Link href="https://github.com/codebam">source code</Link>
				</footer>
			</body>
		</html>
	);
}
