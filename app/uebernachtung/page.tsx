import Carousel from "../components/carousel/carousel";

import styles from "./uebernachtung.module.css";

const photos = {
	hertefelderHof: [
		"/images/hertefelderhof/1.jpg",
		"/images/hertefelderhof/2.jpg",
		"/images/hertefelderhof/3.jpg",
		"/images/hertefelderhof/4.jpg",
		"/images/hertefelderhof/5.jpg",
	],
	jaegerhof: [
		"/images/jaegerhof/1.jpg",
		"/images/jaegerhof/2.jpg",
		"/images/jaegerhof/3.jpg",
	],
	"schloss-wissen": [
		"/images/schloss-wissen/1.jpg",
		"/images/schloss-wissen/2.jpg",
		"/images/schloss-wissen/3.jpg",
	],
};

export default function Uebernachtung() {
	return (
		<main className={styles.main}>
			<h1 className={styles.heading}>Übernachtungsmöglichkeiten</h1>
			<div className={styles.body}>
				<p>
					Wir haben mehrere Hotels rausgesucht, in denen ihr euch gerne
					selbstständig einbuchen könnt:
				</p>
				<br />

				<h2>Schloss Hertefeld</h2>
				<p>
					Wenn ihr nach unserer Hochzeitsparty nicht mehr nach Hause fahren
					möchtet, übernachtet gern mit uns auf Schloss Hertefeld. Bis zum 02.
					Dezember 2024 sind im Hertefeldhof (100 m von der Location) 18 Zimmer
					in verschiedenen Kategorien (BASIC, CLASSIC und COMFORT){" "}
					<b>für bis zu 5 personen</b> für euch geblockt. Pro Nacht liegen die
					Zimmer bei ca <b>50€ pro Person inkl. Frühstück.</b> Schaut euch am
					besten mal auf der Website um:
					<br />
					<a
						href="https://www.hertefeld.de/hotelzimmer/"
						className={styles.link}
					>
						https://www.hertefeld.de/hotelzimmer/
					</a>
				</p>
				<br />
				<p>
					Wenn ihr ein Hotelzimmer buchen möchtet, schreibt bitte eine Mail an{" "}
					<a href="mailto:post@hertefeld.de">post@hertefeld.de</a> mit folgenden
					Infos:
				</p>
				<br />
				<p>
					- Name
					<br />
					- Anschrift
					<br />
					- Telefonnummer
					<br />
					- Namen der Gäste im Zimmer
					<br />
					- Alter der Kinder
					<br />
					- Wunschzimmer oder -kategorie
					<br />
					- mit oder ohne Frühstück
					<br />- die Info, dass ihr unsere Gäste seid
				</p>
				<br />
				<a href="https://www.hertefeld.de/hotelzimmer/" className={styles.link}>
					https://www.hertefeld.de/hotelzimmer/
				</a>
				<br />
				<br />
				<Carousel photos={photos["hertefelderHof"]} />
				<br />

				<h2>Schloss Wissen</h2>
				<p>
					<b>3 km</b> von der Location entfernt liegt das Hotel im Schloss
					Wissen. Preislich liegen die Zimmer{" "}
					<b>pro Nacht bei ca. 50€ pro Person exkl. Frühstück.</b> Das Hotel
					bietet Zimmer und Gästehäuser für <b>bis zu 8 Personen.</b>
				</p>
				<br />
				<a href="https://schloss-wissen.de/hotel/" className={styles.link}>
					https://schloss-wissen.de/hotel/
				</a>
				<br />
				<br />
				<Carousel photos={photos["schloss-wissen"]} />
				<br />

				<h2>Jägerhof</h2>
				<p>
					Das Hotel Jägerhof liegt <b>1,2 km</b> von Schloss Hertefeld entfernt.
					Die Zimmer sind etwas günstiger, mit knapp{" "}
					<b>45€ pro Person pro Nacht exkl. Frühstück.</b> Im Hotel sind{" "}
					<b>Einzelzimmer</b> buchbar sowie Zimmer mit bis zu 4 Personen.
				</p>
				<br />
				<a href="https://www.jagerhofweeze.com/" className={styles.link}>
					https://www.jagerhofweeze.com/
				</a>
				<br />
				<br />
				<Carousel photos={photos["jaegerhof"]} />
				<br />

				<h2>Schlafen im Van</h2>
				<p>
					Falls ihr mit einem Van anreist, könnt ihr diesen am Parkplatz vom
					Schloss parken und dort übernachten. Das Frühstück für externe Gäste
					liegt <b>bei 27€ pP</b>. Das Schloss berechnet allerdings{" "}
					<b> 30€ p. P. </b> und stellt euch dafür ein Bad mit Dusche, WC und
					Handtüchern bereit. Falls ihr dies umgehen wollt, ist direkt am
					Tierpark ein Reisemobilstellplatz <b>mit 5€ Übernachtungsgebühr.</b>
					<br />
					<br />
					<a
						href="https://www.weeze.de/de/inhalt/reisemobile/"
						className={styles.link}
					>
						https://www.weeze.de/de/inhalt/reisemobile/
					</a>
				</p>
			</div>
		</main>
	);
}
