import styles from "./contacts.module.css";

export default function Contacts() {
	return (
		<main className={styles.main}>
			<h1 className={styles.heading}>Trauzeug*innen</h1>
			<div className={styles.body}>
				<p>Unser Team für alle Fälle:</p>
				<p>
					Wenn ihr eine Hochzeitsrede halten oder ein Spiel ausrichten möchtet,
					wendet euch bitte an unsere Trauzeug*innen.
				</p>
				<p>Sie helfen außerdem gerne bei all euren Fragen und Wünschen.</p>
				<br />

				<p>Alina Reul - +49 178 5865329</p>
				<p>Lisa Dlugosch - +49 177 8294245</p>
				<br />

				<p>Laszlo Wagenblast - +49 157 92488102</p>
				<p>Simon Schmitz - +49 178 8546824</p>
				<p>
					Johannes Spanjersberg <br />- +49 176 34379067
				</p>
			</div>
		</main>
	);
}
