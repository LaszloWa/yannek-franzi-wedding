import FaqSection from "../components/faq-section/faq-section";
import styles from "./faq.module.css";

export default function FAQ() {
	return (
		<main className={styles.main}>
			<h1 className={styles.heading}>Fragen und Antworten</h1>
			<div className={styles.body}>
				<FaqSection title="Wieso drei Tage?">
					<p>
						Wir dürfen uns glücklich schätzen, viele Freunde und
						Familienmitglieder aus ganz Deutschland oder dem Ausland zu haben.
					</p>
					<p>
						Um mehr Zeit mit allen verbringen zu dürfen, haben wir uns dazu
						entschieden, ein ganzes gemeinsames Wochenende zu planen und zu
						feiern.
					</p>
				</FaqSection>

				<FaqSection title="Müssen wir an allen Tagen teilnehmen?">
					<p>
						Natürlich freuen wir uns über jede*n, der bereits Freitag anreist.
						Viele von euch sehen wir ja leider auch nicht ganz so häufig. Dies
						ist aber kein Muss!
					</p>
					<p>
						Wir freuen uns ebenfalls, wenn ihr „erst“ am Samstag zur Trauung
						anreist.
					</p>
					<p>Genauso verhält es sich mit der/den Übernachtung/en.</p>
				</FaqSection>

				<FaqSection title="Gibt es einen Dresscode?">
					<p>
						Wie unsere Homepage und Einladung schon zeigt, wünschen wir uns eine
						fröhliche und bunte Hochzeit. Wir freuen uns auf sommerlich schicke
						Kleidung, in der ihr euch wohl fühlt.
					</p>
					<p>Am Freitagabend kann es gerne auch legerer sein.</p>
				</FaqSection>

				<FaqSection title="Sind Kinder erwünscht? Gibt es ein Kinderprogramm?">
					<p>
						Wir stellen es euch frei, euch ein „Wochenend-Get-away“ ohne Kinder
						zu gönnen, oder die Kids mitzubringen. Gebt uns bitte diesbezüglich
						in der Rückmeldung bescheid.
					</p>
					<p>
						Direkt angrenzend an Schloss Hertefeld liegt der Tierpark Weeze
						<a href="https://www.tierparkweeze.de/">
							(https://www.tierparkweeze.de/)
						</a>
						. Dieser ist kostenfrei. Die Parkleitung freut sich natürlich über
						eine kleine Spende zur Erhaltung des Parks.
					</p>
					<p>
						Außerdem lädt der große Schlosspark zum Rumtoben und ein extra
						angrenzendes Zimmer beim Dinner zum Spielen ein.
					</p>
				</FaqSection>

				<FaqSection title="Sind Hunde erlaubt?">
					<p>
						In einigen Zimmern auf Schloss Hertefeld sind Hunde erlaubt und
						diese Zimmer besonders dafür geeignet. Aufgrund des Tierparks, der
						Gäste und ggf. anderen Hunde müssen die Hunde bitte dauerhaft an der
						Leine gehalten werden. Außerdem wäre es wichtig, dass sie ggf. beim
						Dinner/der Party auf dem Zimmer bleiben. Bitte entscheidet da für
						eure Hunde, ob es weniger Stress ist sie betreuen zu lassen oder
						mitzunehmen.
					</p>
				</FaqSection>

				<FaqSection title="Wo finde ich später Fotos der Hochzeit?">
					<p>
						Am Wochenende werden wir QR-Codes verteilen und so ein gemeinsames
						Album erstellen. Außerdem wird eine Fotografin den Samstag und
						besonders unsere Trauung festhalten. Wir bitten euch daher jetzt
						schon, die Handys während der Trauung in der Tasche zu lassen.
					</p>
				</FaqSection>

				<FaqSection title="Was wünscht ihr euch zu eurer Hochzeit?">
					<p>
						Wir wünschen uns vor allem, dass ihr alle dabei seid, um dieses
						Wochenende mit uns zu feiern. Wir wissen, dass dies bereits einige
						Ausgaben beinhaltet. Darüber hinaus freuen wir uns über
						Geldgeschenke für unsere Flitterwochen, um direkt von Weeze aus
						loszustarten.
					</p>
				</FaqSection>

				<FaqSection title="Was wird es zu essen geben?">
					<p>
						Für den Freitag haben wir uns passend zum lockeren Abend für einen
						Foodtruck entschieden, der uns deftiges Essen zaubern wird. Am
						Samstag gibt es Fingerfood zum Sektempfang, ein leckeres Sharing
						Dinner, bei dem ihr euch ganz einfach rauspicken könnt, was ihr mögt
						sowie mehrere Desserts. Alle Gerichte werden vegetarisch und
						großteils glutenfrei zubereitet sein.
					</p>
					<p>
						Da wir ja auch eigentlich immer essen könnten, werdet ihr auch in
						der Zeit von Frühstück bis Trauung nicht verhungern.
					</p>
				</FaqSection>
			</div>
		</main>
	);
}
