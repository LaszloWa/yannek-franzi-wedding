"use client";

import React, { useState } from "react";
import Collapse from "react-tiny-collapse";

import styles from "./collapsible-carousel.module.css";
import Carousel from "../carousel/carousel";

interface CollapsibleCarouselProps {
	photos: string[];
}

const CollapsibleCarousel: React.FC<CollapsibleCarouselProps> = ({
	photos,
}) => {
	const [isExpanded, setIsExpanded] = useState<boolean>(false);

	const toggleCollapse = () => {
		setIsExpanded((prevExpanded) => !prevExpanded);
	};

	return (
		<div>
			<button onClick={toggleCollapse} className={styles.expander}>
				{isExpanded ? "Bilder ausblenden" : "Bilder anzeigen"}
			</button>

			<Collapse isOpen={isExpanded}>
				<Carousel photos={photos} />
			</Collapse>
		</div>
	);
};

export default CollapsibleCarousel;
