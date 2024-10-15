import styles from "./rsvp.module.css";

export default function Rsvp() {
	return (
		<main className={styles.main}>
			<h1>Rückmeldung</h1>
			<div>
				Bitte gebt uns eure Rückmeldung über das untenstehende Formular bis zum
				30.06.2025! Alternativ dürft ihr uns auch gerne telefonisch oder per
				E-Mail kontaktieren. Es genügt, wenn ihr das Formular pro Einladung
				ausfüllt.
			</div>
			<form className={styles.form} action="">
				<div>
					<label htmlFor="name">Name</label>
					<input type="text" id="name" name="name" />
				</div>
				<div>
					<label htmlFor="anreiseTag">Anreisetag</label>
					<select name="anreiseTag" id="anreiseTag">
						<option value="">Wãhle deinen Anreisetag</option>
						<option value="Freitag">Freitag</option>
						<option value="Samstag">Samstag</option>
					</select>
				</div>
				<div>
					<span>Übernachtung</span>
					<div>
						<label htmlFor="zweiNaechte">
							Ja, ich/wir übernachten von Freitag bis Sonntag.
						</label>
						<input type="radio" id="zweiNaechte" name="hotel" />
					</div>
					<div>
						<label htmlFor="eineNacht">
							Ja, ich/wir übernachten von Samstag bis Sonntag.
						</label>
						<input type="radio" id="eineNacht" name="hotel" />
					</div>
					<div>
						<label htmlFor="Nein">Nein, ich/wir übernachten nicht,</label>
						<input type="radio" id="Nein" name="hotel" />
					</div>
				</div>
				<div>
					<label htmlFor="kommentar">Sonstiges was wir wissen sollten?</label>
					<textarea id="kommentar" name="kommentar"></textarea>
				</div>
				<button type="submit">Und Abfahrt!</button>
			</form>
		</main>
	);
}
