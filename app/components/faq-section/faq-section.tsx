"use client";

import React, { useState } from "react";
import Collapse from "react-tiny-collapse";

import styles from "./faq-secion.module.css";

interface FaqSectionProps {
	title: string;
	children: React.ReactNode;
}

const FaqSection: React.FC<FaqSectionProps> = ({ title, children }) => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleCollapse = () => setIsOpen((prevState) => !prevState);

	return (
		<div className={styles.faqSection}>
			<div onClick={toggleCollapse} style={{ cursor: "pointer" }}>
				<i>{title}</i>
			</div>
			<Collapse isOpen={isOpen} duration={5} className={styles.collapse}>
				{children}
			</Collapse>
		</div>
	);
};

export default FaqSection;
