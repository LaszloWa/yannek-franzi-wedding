import styles from "./contacts.module.css";
import Photo from "../components/photo/photo";

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

				<div className={styles.section}>
					<div className={styles.names}>
						<p>Alina Reul - +49 178 5865329</p>
						<p>Lisa Dlugosch - +49 177 8294245</p>
					</div>
					<Photo
						src={"/images/traupersonen/Trauzeuginnen.jpeg"}
						alt={"Photo von Alina und Lisa"}
					/>
				</div>

				<div className={styles.section}>
					<p>Laszlo Wagenblast - +49 157 92488102</p>
					<Photo
						src={"/images/traupersonen/Laszlo.png"}
						alt={"Photo von Laszlo"}
					/>
				</div>
				<div className={styles.section}>
					<p>Simon Schmitz - +49 178 8546824</p>
					<Photo
						src={"/images/traupersonen/Simon.jpeg"}
						alt={"Photo von Simon"}
					/>
				</div>
				<div className={styles.section}>
					<p>
						Johannes Spanjersberg <br />- +49 176 34379067
					</p>
					<Photo
						src={"/images/traupersonen/Johannes.jpeg"}
						alt={"Photo von Johannes"}
					/>
				</div>
				<div className={styles.section}>
					<p>Wauzeugin Cosi</p>
					<Photo
						src={"/images/traupersonen/Cosi.jpeg"}
						alt={"Photo von Cosi"}
					/>
				</div>
			</div>
		</main>
	);
}
