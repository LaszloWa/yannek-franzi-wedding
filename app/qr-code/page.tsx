import Carousel from "../components/carousel/carousel";
import Photo from "../components/photo/photo";

import styles from "./qr-code.module.css";

export default function QrCode() {
	return (
		<main className={styles.main}>
			<h1 className={styles.heading}>Fotos teilen</h1>
			<div className={styles.body}>
				<p>
					Hier könnt ihr die Fotos, die ihr während der Hochzeit gemacht
					habt,mit uns teilen. <br />
					Wir freuen uns über jedes Bild, das ihr hochladet!
				</p>

				<br />

				<br />

				<img src="/images/qr-code.jpg" alt="QR Code zum Teilen von Fotos" />

				<br />
				<br />
				<a href="https://www.dropbox.com/request/ULPPVSlSuszJskdhhH5h">
					Link zum Teilen von Fotos
				</a>
			</div>
		</main>
	);
}
