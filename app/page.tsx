import styles from "./page.module.css";

export default function Home() {
	return (
		<main className={styles.main}>
			<div className={styles.description}>
				<h1 className={styles.heading}>
					Willkommen auf unserer Hochzeitshomepage.
				</h1>
				<br />
				<br />
				<div className={styles.body}>
					<p>Hier findet ihr alle wichtigen Infos.</p>
					<p>
						Wir freuen uns sehr, unser Hochzeitswochenende mit euch zu feiern!
					</p>
				</div>
			</div>
			<div className={styles.image}></div>
		</main>
	);
}
