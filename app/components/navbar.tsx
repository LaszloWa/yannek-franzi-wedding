"use client";

import React, { useState } from "react";
import styles from "./navbar.module.css";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	// Toggle the menu open/close state
	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	return (
		<nav className={styles.navbar}>
			<div className={styles.hamburger} onClick={toggleMenu}>
				<div
					className={`${styles.line} ${isOpen ? styles.line1Open : ""}`}
				></div>
				<div
					className={`${styles.line} ${isOpen ? styles.line2Open : ""}`}
				></div>
				<div
					className={`${styles.line} ${isOpen ? styles.line3Open : ""}`}
				></div>
			</div>

			<ul className={`${styles.menu} ${isOpen ? styles.menuOpen : ""}`}>
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
				<li>
					<a href="/faq">Fragen & Antworten</a>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
