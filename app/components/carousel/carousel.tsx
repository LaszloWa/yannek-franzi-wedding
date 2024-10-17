"use client";

import React, { useState } from "react";
import Image from "next/image";

import styles from "./carousel.module.css";

interface CarouselProps {
	photos: string[];
}

const Carousel: React.FC<CarouselProps> = ({ photos }) => {
	const [currentIndex, setCurrentIndex] = useState<number>(0);

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
	);
};

export default Carousel;
