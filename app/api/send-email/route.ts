import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest): Promise<NextResponse> {
	try {
		const formData = await request.formData();

		// Extract form data
		const name = formData.get("name") as string;
		const anreiseTag = formData.get("anreiseTag") as string;
		const hotel = formData.get("hotel") as string;
		const kommentar = formData.get("kommentar") as string;
		const redirectUrl = formData.get("redirectUrl") as string;

		// Validate form data
		if (!name || !anreiseTag || !hotel || !redirectUrl) {
			const errorUrl = new URL(
				request.headers.get("referer") || "/",
				request.url,
			);
			errorUrl.searchParams.set("outcome", "error");
			return NextResponse.redirect(errorUrl);
		}

		// Map the 'hotel' value to the corresponding label text
		let hotelText = "";
		switch (hotel) {
			case "zweiNaechte":
				hotelText = "Ja, ich/wir übernachten von Freitag bis Sonntag.";
				break;
			case "eineNacht":
				hotelText = "Ja, ich/wir übernachten von Samstag bis Sonntag.";
				break;
			case "Nein":
				hotelText = "Nein, ich/wir übernachten nicht.";
				break;
			default:
				hotelText = "Keine Angabe";
				break;
		}

		// Construct the email content
		const emailContent = `
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Anreisetag:</strong> ${anreiseTag}</p>
      <p><strong>Übernachtung:</strong> ${hotelText}</p>
      <p><strong>Kommentar:</strong></p>
      <p>${kommentar || "Keine Angabe"}</p>
    `;

		// Send the email using Resend
		await resend.emails.send({
			from: process.env.EMAIL_FROM!,
			to: process.env.EMAIL_TO!,
			subject: `Rückmeldung Hochzeit von ${name}`,
			html: emailContent,
		});

		// Redirect back to the form page with a success outcome
		const successUrl = new URL(
			redirectUrl,
			request.headers.get("referer") || "/",
		);
		successUrl.searchParams.set("outcome", "success");
		return NextResponse.redirect(successUrl, 303);
	} catch (error) {
		console.error("Error sending email:", error);

		// Redirect back with error outcome
		const errorUrl = new URL(
			request.headers.get("referer") || "/",
			request.url,
		);
		errorUrl.searchParams.set("outcome", "error");
		return NextResponse.redirect(errorUrl);
	}
}
