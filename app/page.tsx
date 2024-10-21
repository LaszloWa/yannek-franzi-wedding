import styles from "./page.module.css";

export default function Home() {
	return (
		<main className={styles.main}>
			<div className={styles.description}>
				Willkommen auf unserer Hochzeitshomepage.
				<br />
				<br />
				Hier findet ihr alle wichtigen Infos. Wir freuen uns sehr, unser
				Hochzeitswochenende mit euch zu feiern!
			</div>
			<div className={styles.image}></div>
		</main>
	);
}
