"use client";

import Image from "next/image";
import Link from "next/link";
import GithubIcon from "public/github-icon.svg";
import LinkedinIcon from "public/linkedin-icon.svg";
import { FormEventHandler, useState } from "react";
import { useSectionInView } from "../hooks/useSectionInView";
import Input from "./Input";
import Label from "./Label";
import SubmitFormButton from "./SubmitButton";

const Contact = () => {
	const [emailSubmitted, setEmailSubmitted] = useState(false);

	const { ref } = useSectionInView("Contato");

	const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
		event.preventDefault();
		const data = {
			email: event.currentTarget.email.value,
			subject: event.currentTarget.subject.value,
			message: event.currentTarget.message.value,
		};
		const JSONdata = JSON.stringify(data);
		const endpoint = "/api/send";

		const options = {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSONdata,
		};

		const response = await fetch(endpoint, options);

		if (response.status === 200) {
			console.log("Message sent.");
			setEmailSubmitted(true);
		}
	};

	return (
		<section
			ref={ref}
			id="contact"
			className="grid md:grid-cols-2 my-12 md:my-12 gap-4 relative"
		>
			<div>
				<h5 className="text-xl font-bold text-white my-2">
					Vamos nos conectar!
				</h5>
				<p className="text-grayText mb-4 max-w-md">
					Minha caixa de entrada está sempre aberta. Se você tiver alguma
					pergunta ou apenas quiser dizer olá, farei o meu melhor para
					responder!
				</p>
				<div className="socials flex flex-row gap-2">
					<Link
						href="https://github.com/Lara-Capila"
						className="hover:scale-110"
					>
						<Image src={GithubIcon} alt="GitHub icon" />
					</Link>
					<Link href="https://www.linkedin.com/in/lara-capila/">
						<Image
							src={LinkedinIcon}
							alt="Linkedin icon"
							className="hover:scale-110"
						/>
					</Link>
				</div>
			</div>

			<div>
				{emailSubmitted ? (
					<p className="text-green-500 text-sm mt-2">
						Email sent successfully!
					</p>
				) : (
					<form className="flex flex-col" onSubmit={handleSubmit}>
						<Input
							name="email"
							id="email"
							placeholder="teste@teste.com"
							label="Seu email"
						/>
						<Input
							name="subject"
							id="subject"
							placeholder="Diga oi"
							label="Assunto"
						/>
						<div className="mb-6">
							<Label htmlFor="message">Mensagem</Label>
							<textarea
								name="message"
								id="message"
								className="input"
								placeholder="Vamos conversar..."
								maxLength={500}
							/>
						</div>
						<SubmitFormButton />
					</form>
				)}
			</div>
		</section>
	);
};

export default Contact;
