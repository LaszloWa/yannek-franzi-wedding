import Carousel from "../components/carousel/carousel";
import Photo from "../components/photo/photo";

import styles from "./qr-code.module.css";

export default function QrCode() {
	return (
		<main className={styles.main}>
			<h1 className={styles.heading}>Fotos</h1>
			<h2>Fotos herunterladen</h2>
			<br />
			<a href="https://arrestomomentum.pic-time.com/KnuUHf4WxrfjK">
				Hier findest du alle Fotos die wir mit euch teilen wollen
			</a>

			<br />

			<br />
			<br />

			<h2>Fotos teilen</h2>
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
