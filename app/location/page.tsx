import styles from "./location.module.css";

export default function Location() {
	return (
		<main className={styles.main}>
			<h2 className={styles.heading}>Location und Anreise</h2>
			<div className={styles.body}>
				<p>
					<b>Location:</b>
				</p>
				<p>
					Schloss Hertefeld, Hertefeld 1-6, 47652 Weeze
					<p>
						<a href="https://www.hertefeld.de/">https://www.hertefeld.de/</a>
					</p>
				</p>
				<br />

				<p>
					<b>Anreise: </b>
				</p>
				<p>
					Mit dem <b>Auto</b> kommt ihr am einfachsten nach Hertefeld. Die A 57
					ist nur 3 km entfernt. Kostenlose Parkplätze stehen im Schlosspark
					ausreichend zur Verfügung.
				</p>
				<br />

				<p>
					Die <b>Bahn</b> bietet eine halbstündige (am Wochenende stündliche)
					Direktverbindung aus Düsseldorf. Der Weezer „Hauptbahnhof“ ist über
					die Niersbrücke 10 Fußminuten entfernt. Gäste können dort kostenfrei
					vom Hotel abgeholt werden.
				</p>
				<br />

				<p>
					Ihr könnt aber auch zur Location <b>fliegen</b> (10 min/8,5km zum
					Airport Weeze), <b>paddeln</b> (2 min zur Anlegestelle),{" "}
					<b>radfahren</b> (0 km zum Niersradwanderweg) oder <b>pilgern</b> (0
					km zum Jakobsweg).
				</p>
				<br />

				<p>Hauptsache ihr seid dabei!</p>
			</div>
		</main>
	);
}
