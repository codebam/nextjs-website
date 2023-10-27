import "./globals.css";
import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import HeaderBar from "@/components/headerbar";
import MyFooter from "@/components/myfooter";
import Script from "next/script";
import { Providers } from "./providers";

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
				strategy="lazyOnload"
				src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3287237463323384"
			/>
			<body>
				<Providers>
					<HeaderBar />
					{children}
					<MyFooter />
				</Providers>
			</body>
		</html>
	);
}
