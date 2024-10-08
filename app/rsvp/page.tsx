import styles from "./rsvp.module.css";

export default function Rsvp() {
	return (
		<main className={styles.main}>
			<h2>RSVP</h2>
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
					<span>Möchtest du ein Hotelzimmer?</span>
					<div>
						<label htmlFor="Ja">Ja</label>
						<input type="radio" id="Ja" name="hotel" />
					</div>
					<div>
						<label htmlFor="Nein">Nein</label>
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
