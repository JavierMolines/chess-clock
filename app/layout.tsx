import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { Inconsolata } from "next/font/google";
import "./styles/globals.css";

const font = Inconsolata({
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Chess Clock Online",
	description: "Clock to play with your friends.",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={font.className}>
				{children}
				<Analytics />
			</body>
		</html>
	);
}
