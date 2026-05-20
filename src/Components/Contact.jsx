import { useState } from "react";
import { CONTACTS } from "../Data";
import SectionTitle from "./SectionTitle";
import emailjs from "@emailjs/browser";
const Contact = () => {
	const [form, setForm] = useState({ name: "", email: "", message: "" });
	const [sent, setSent] = useState(false);

	const handleChange = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			await emailjs.send(
				"service_vo7n3kj",
				"template_1y2vk0b",
				{
					from_name: form.name,
					from_email: form.email,
					message: form.message,
				},
				"5cwqR01MLlL_mcbjJ",
			);

			alert("Message sent successfully");

			setForm({
				name: "",
				email: "",
				message: "",
			});
		} catch (error) {
			console.log(error);
			alert("Failed to send message");
		}
	};

	return (
		<section id="contact" className="section section--contact">
			<SectionTitle>Contact</SectionTitle>
			<div className="contact__socials animate">
				{CONTACTS.map((c, i) => (
					<a
						href={c.link}
						key={i}
						className="contact__btn"
						style={{ textDecoration: "none" }}>
						<div className="contact__btn-left">
							<span className="contact__btn-icon">{c.icon}</span>
							<span>{c.label}</span>
						</div>
						<span className="contact__btn-arrow">↗</span>
					</a>
				))}
			</div>
			<div className="contact__form-wrap animate">
				<div className="contact__form-glow" />

				<div className="contact__form-header">
					<p className="contact__form-title">Send me a message</p>
					{/* <p className="contact__form-desc">I'll get back to you as soon as possible.</p> */}
				</div>

				<form className="contact__form" onSubmit={handleSubmit}>
					<div className="contact__form-row">
						<div className="contact__field">
							<label className="contact__label">Your Name</label>
							<input
								type="text"
								name="name"
								value={form.name}
								onChange={handleChange}
								className="contact__input"
								required
								style={{ cursor: "none" }}
							/>
						</div>

						<div className="contact__field">
							<label className="contact__label">Your Email</label>
							<input
								type="email"
								name="email"
								value={form.email}
								onChange={handleChange}
								className="contact__input"
								style={{ cursor: "none" }}
								required
							/>
						</div>
					</div>

					<div className="contact__field">
						<label className="contact__label">Your Message</label>
						<textarea
							name="message"
							value={form.message}
							onChange={handleChange}
							className="contact__input contact__textarea"
							rows={5}
							required
							style={{ cursor: "none" }}
						/>
					</div>

					<button type="submit" className="contact__submit">
						{sent ? "Message Sent ✓" : "Send Message →"}
					</button>
				</form>
			</div>

			<p className="contact__footer">©2024 | Dev Frontend Portfolio</p>
		</section>
	);
};

export default Contact;
