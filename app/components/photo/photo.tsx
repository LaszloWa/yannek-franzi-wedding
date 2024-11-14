"use client";

import React from "react";
import Image from "next/image";

import styles from "./photo.module.css";

interface Photo {
	alt: string;
	src: string;
}

const Photo: React.FC<Photo> = ({ src, alt }) => {
	return (
		<div className={styles.photo}>
			<Image
				src={src}
				alt={alt}
				width={200}
				height={300}
				style={{ objectFit: "cover" }}
			/>
		</div>
	);
};

export default Photo;
