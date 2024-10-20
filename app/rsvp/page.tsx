import styles from "./rsvp.module.css";

export default function Rsvp() {
	return (
		<main className={styles.main}>
			<h1>Rückmeldung</h1>
			<form className={styles.form} action="/api/send-email" method="POST">
				<input type="hidden" name="redirectUrl" value="/rsvp" />
				<div className={styles.description}>
					Bitte gebt uns eure Rückmeldung über das untenstehende Formular bis
					zum 30.06.2025! Alternativ dürft ihr uns auch gerne telefonisch oder
					per E-Mail kontaktieren. Es genügt, wenn ihr das Formular pro
					Einladung ausfüllt.
				</div>
				<div className={styles.formSection}>
					<label htmlFor="name">
						<b>Name</b>
					</label>
					<br />
					<input type="text" id="name" name="name" />
				</div>
				<div className={styles.formSection}>
					<label htmlFor="anreiseTag">
						<b>Anreisetag</b>
					</label>
					<br />
					<select name="anreiseTag" id="anreiseTag" className={styles.button}>
						<option value="">Wãhle deinen Anreisetag</option>
						<option value="Freitag">Freitag</option>
						<option value="Samstag">Samstag</option>
					</select>
				</div>
				<div className={styles.radio}>
					<span>
						<b>Übernachtung</b>
					</span>

					<div className={styles.radioInput}>
						<input
							type="radio"
							id="zweiNaechte"
							name="hotel"
							value="zweiNaechte"
						/>
						<label htmlFor="zweiNaechte">
							Ja, ich/wir übernachten von Freitag bis Sonntag.
						</label>
					</div>

					<div className={styles.radioInput}>
						<input type="radio" id="eineNacht" name="hotel" value="eineNacht" />
						<label htmlFor="eineNacht">
							Ja, ich/wir übernachten von Samstag bis Sonntag.
						</label>
					</div>

					<div className={styles.radioInput}>
						<input type="radio" id="Nein" name="hotel" value="Nein" />
						<label htmlFor="Nein">Nein, ich/wir übernachten nicht.</label>
					</div>
				</div>
				<div className={styles.formSection}>
					<label htmlFor="kommentar">
						<b>Sonstiges was wir wissen sollten?</b>
					</label>
					<br />
					<textarea id="kommentar" name="kommentar"></textarea>
				</div>
				<button type="submit" className={styles.button}>
					Und Abfahrt!
				</button>
			</form>
		</main>
	);
}
