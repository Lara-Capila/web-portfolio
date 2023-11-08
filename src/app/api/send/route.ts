import { NextResponse } from "next/server";
import React from "react";
import { Resend } from "resend";
import { EmailTemplate } from "../../../components/EmailTemplate";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request, res: Response) {
	const { email, subject, message } = await req.json();

	try {
		const data = await resend.emails.send({
			from: "Contact Porfolio Form <onboarding@resend.dev>",
			to: "laracapilak@gmail.com",
			subject: subject,
			react: React.createElement(EmailTemplate, {
				message: message,
				senderEmail: email,
			}),
		});

		return NextResponse.json(data);
	} catch (error) {
		return NextResponse.json({ error });
	}
}
