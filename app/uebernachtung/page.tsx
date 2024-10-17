import CollapsibleCarousel from "../components/collapsible-carousel/collapsible-carousel";
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

				<p>
					<a href="https://www.hertefeld.de/hotelzimmer/">
						https://www.hertefeld.de/hotelzimmer/
					</a>
				</p>
				<p>
					Die Location verfügt über ein tolles eigenes Hotel, welches{" "}
					<b>direkt am Schloss</b> und am angrenzenden Tierpark liegt. Preislich
					liegen die Zimmer{" "}
					<b>pro Nacht bei ca. 50€ pro Person inkl. Frühstück.</b> Auch Familien
					oder Gruppen von Freunden finden hier Zimmer mit{" "}
					<b>bis zu 5 Personen</b>.
				</p>
				<br />
				<CollapsibleCarousel photos={photos["hertefelderHof"]} />
				<br />

				<p>
					<a href="https://schloss-wissen.de/hotel/">
						https://schloss-wissen.de/hotel/
					</a>
				</p>
				<p>
					<b>3 km</b> von der Location entfernt liegt das Hotel im Schloss
					Wissen. Preislich liegen die Zimmer{" "}
					<b>pro Nacht bei ca. 50€ pro Person exkl. Frühstück.</b> Das Hotel
					bietet Zimmer und Gästehäuser für <b>bis zu 8 Personen.</b>
				</p>
				<br />
				<CollapsibleCarousel photos={photos["schloss-wissen"]} />
				<br />

				<p>
					<a href="https://www.jagerhofweeze.com/">
						https://www.jagerhofweeze.com/
					</a>
				</p>
				<p>
					Das Hotel Jägerhof liegt <b>1,2 km</b> von Schloss Hertefeld entfernt.
					Die Zimmer sind etwas günstiger, mit knapp{" "}
					<b>45€ pro Person pro Nacht exkl. Frühstück.</b> Im Hotel sind{" "}
					<b>Einzelzimmer</b> buchbar sowie Zimmer mit bis zu 4 Personen.
				</p>
				<br />
				<CollapsibleCarousel photos={photos["jaegerhof"]} />
				<br />

				<p>Schlafen im Van</p>
				<p>
					Falls ihr mit einem Van anreist, könnt ihr diesen am Parkplatz vom
					Schloss parken und dort übernachten. Das Frühstück für externe Gäste
					liegt bei 27€ pP. Das Schloss berechnet allerdings 30€ p. P. und
					stellt euch dafür ein Bad mit Dusche, WC und Handtüchern bereit. Falls
					ihr dies umgehen wollt, ist direkt am Tierpark ein
					Reisemobilstellplatz mit 5€ Übernachtungsgebühr
					<br />
					<a href="https://www.weeze.de/de/inhalt/reisemobile/">
						https://www.weeze.de/de/inhalt/reisemobile/
					</a>
					.
				</p>
			</div>
		</main>
	);
}
