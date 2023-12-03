import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import "./styles/globals.css";

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
			<body>
				{children}
				<Analytics />
			</body>
		</html>
	);
}
