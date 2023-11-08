interface EmailTemplateProps {
	message: string;
	senderEmail: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
	message,
	senderEmail,
}) => {
	return (
		<div style={{ backgroundColor: "#F3F4F6", color: "#000", padding: "40px" }}>
			<div
				style={{
					backgroundColor: "#FFF",
					border: "1px solid #000",
					borderRadius: "10px",
					padding: "20px",
					textAlign: "center",
					width: "700px",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				<h1>Você recebeu essa mensagem do seu fomulário de contato</h1>
				<div
					style={{
						backgroundColor: "#F3F4F6",
						color: "#000",
					}}
				>
					<p style={{ fontSize: "16px" }}>{message}</p>
				</div>
				<hr />
				<p style={{ fontSize: "16px" }}>
					O remetente do email é:{" "}
					<span style={{ fontWeight: "700" }}>{senderEmail}</span>
				</p>
			</div>
		</div>
	);
};
