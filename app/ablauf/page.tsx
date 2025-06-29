import Image from "next/image";
import styles from "./ablauf.module.css";

export default function Ablauf() {
	return (
		<main className={styles.main}>
			<h1 className={styles.heading}>Ablauf</h1>
			<div className={styles.body}>
				<div className={styles.section}>
					<p className={styles.dateHeading}>
						<b>01.08.2025</b>
					</p>
					<br />
					<Image
						src={"/icons/trauringe.png"}
						alt="Grafik von Trauringen"
						width={80}
						height={80}
					/>
					<p>
						<b>11:00 Uhr - Standesamtliche Trauung</b>
					</p>
					<p>
						Im Haus Spiess in Erkelenz beginnen wir den ersten Schritt in
						unserer Ehe. Es steht euch frei zum Zuschauen vorbei zu kommen und
						mit uns nach der Trauung anzustoßen.
					</p>
					<br />

					<Image
						src={"/icons/get-together.png"}
						alt="Grafik von anstossen mit Biergläsern"
						width={80}
						height={80}
					/>
					<p>
						<b>18:00 Uhr – „Get-Together“</b>
					</p>
					<p>
						Wir starten in unser Wochenende mit einem lockeren gemeinsamen Abend
						im Schloss Hertefeld und stoßen mit allen, die bereits anreisen
						möchten, an. Wir freuen uns über jede*n, der/die dabei ist!
					</p>
				</div>

				<div className={styles.section}>
					<p className={styles.dateHeading}>
						<b>02.08.2025</b>
					</p>
					<br />

					<Image
						src={"/icons/fruehstueck.png"}
						alt="Grafik von Frühstück"
						width={80}
						height={80}
					/>
					<p>
						<b>08:30-10:30 Uhr - Frühstück</b>
					</p>
					<p>
						Der Tag beginnt gemeinsam mit einem schönen kontinentalen Frühstück.
					</p>
					<br />

					<Image
						src={"/icons/freie-trauung.png"}
						alt="Grafik eines Kürbisses"
						width={80}
						height={80}
					/>
					<p>
						<b>13:30 Uhr – Freie Trauung </b>
					</p>
					<p>
						Wir freuen uns, euch spätestens jetzt bei unserer Hochzeit empfangen
						zu dürfen!
					</p>
					<br />

					<Image
						src={"/icons/sekt-empfang.png"}
						alt="Grafik von anstossen mit Sektgläsern"
						width={80}
						height={80}
					/>
					<p>
						<b>15:00 Uhr – Sektempfang & Snacks</b>
					</p>
					<p>
						Lasst die Korken knallen! Und natürlich gibt es auch einige
						herzhafte Snacks zur Stärkung.
					</p>
					<br />

					<Image
						src={"/icons/torte.png"}
						alt="Grafik einer Hochzeitstorte"
						width={80}
						height={80}
					/>
					<p>
						<b>16:00 Uhr – Kaffee & Tortenanschnitt</b>
					</p>
					<p>Essen geht immer, besonders Kuchen.</p>
					<br />

					<Image
						src={"/icons/abendessen.png"}
						alt="Grafik von Tischgedeck"
						width={80}
						height={80}
					/>
					<p>
						<b>18:30 Uhr – Abendessen </b>
					</p>
					<p>
						Wenn ihr eine Hochzeitsrede halten oder ein Spiel ausrichten
						möchtet, wendet euch bitte an unsere Trauzeug*innen.
					</p>
					<br />

					<Image
						src={"/icons/eroeffnungstanz.png"}
						alt="Grafik eines Hochzeitspaares beim Tanzen"
						width={80}
						height={80}
					/>
					<p>
						<b>21:00 Uhr – Eröffnungstanz & Party</b>
					</p>
					<p>
						Ab geht die Party! Wir legen unseren Hochzeitstanz aufs Parkett und
						erwarten danach eure besten Moves mit DJ Verena.
					</p>
				</div>

				<div className={styles.section}>
					<p className={styles.dateHeading}>
						<b>03.08.2025</b>
					</p>
					<br />

					<Image
						src={"/icons/verabschiedung.png"}
						alt="Grafik eines Croissants und Kaffee"
						width={80}
						height={80}
					/>
					<p>
						<b>09:30-11:30 Uhr – Frühstück & Verabschiedung</b>
					</p>
					<p>
						Egal für welches Hotel ihr euch entscheidet, wir würden uns freuen,
						gemeinsam mit euch in Hertefeld zu frühstücken.
					</p>
				</div>
			</div>
		</main>
	);
}
