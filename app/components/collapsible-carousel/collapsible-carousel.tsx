"use client";

import React, { useState } from "react";
import Collapse from "react-tiny-collapse";
import Image from "next/image";

import styles from "./collapsible-carousel.module.css";

interface CollapsibleCarouselProps {
	photos: string[];
}

const CollapsibleCarousel: React.FC<CollapsibleCarouselProps> = ({
	photos,
}) => {
	const [isExpanded, setIsExpanded] = useState<boolean>(false);
	const [currentIndex, setCurrentIndex] = useState<number>(0);

	const toggleCollapse = () => {
		setIsExpanded((prevExpanded) => !prevExpanded);
	};

	const prevPhoto = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex === 0 ? photos.length - 1 : prevIndex - 1,
		);
	};

	const nextPhoto = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex === photos.length - 1 ? 0 : prevIndex + 1,
		);
	};

	return (
		<div>
			<button onClick={toggleCollapse} className={styles.expander}>
				{isExpanded ? "Bilder ausblenden" : "Bilder anzeigen"}
			</button>

			<Collapse isOpen={isExpanded}>
				<div className={styles.carousel}>
					<Image
						src={photos[currentIndex]}
						alt={`Photo ${currentIndex + 1}`}
						fill
						sizes="(max-width: 600px) 100vw, 600px"
						style={{ objectFit: "cover" }}
					/>
					<div className={styles.navigation}>
						<button
							className={`${styles.button} ${styles.left}`}
							onClick={prevPhoto}
							aria-label="Previous Photo"
						>
							&#10094;
						</button>
						<button
							className={`${styles.button} ${styles.right}`}
							onClick={nextPhoto}
							aria-label="Next Photo"
						>
							&#10095;
						</button>
					</div>
				</div>
			</Collapse>
		</div>
	);
};

export default CollapsibleCarousel;
