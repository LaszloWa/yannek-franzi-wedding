import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Yannek und Franzis Hochzeit",
	description: "Informationen und Bilder zu Yannek und Franzi's Hochzeit.",
	robots: {
		index: false,
		follow: false,
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="de-DE">
			<body className={inter.className}>
				<nav>
					<li>
						<a href="/">Home</a>
					</li>
					<li>
						<a href="/ablauf">Ablauf</a>
					</li>
					<li>
						<a href="/rsvp">RSVP</a>
					</li>
					<li>
						<a href="/location">Location</a>
					</li>
					<li>
						<a href="/uebernachtung">Übernachtung</a>
					</li>
				</nav>
				{children}
			</body>
		</html>
	);
}
