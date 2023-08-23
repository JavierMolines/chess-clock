import "./styles/globals.css";
import type { Metadata } from "next";

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
			<body>{children}</body>
		</html>
	);
}
