import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/navbar";

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
				<Navbar />
				{children}
			</body>
		</html>
	);
}
