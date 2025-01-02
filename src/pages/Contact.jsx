import '../assets/styles/pages/Contact.css'
import { useState } from 'react'

const Contact = () => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		message: '',
	})

	const [errors, setErrors] = useState({})

	const validateEmail = (email) => {
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
		const domainRegex = /@(gmail\.com|hotmail\.com|yahoo\.es|outlook\.com)$/
		return emailRegex.test(email) && domainRegex.test(email)
	}

	const validateName = (name) =>{
		const nameRegex = /^[a-zA-ZÁ-ÿ\s]+$/
		return nameRegex.test(name) && name.trim().length > 0
	}

	const validateMessage = (message) => {
		return message.trim().length >= 50 && message.trim().length <= 1000
	}

	const handleChange = (e) =>{
		const { name, value } = e.target
		setFormData({
			...formData,
			[name]: value,
		})
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		const newErrors = {}
		if (!validateName(formData.name)) {
			newErrors.name = 'El nombre debe contener solo letras y tener al menos un carácter'
		}
		if (!validateEmail(formData.email)) {
			newErrors.email = 'Ingresa un correo electrónico válido'
		}
		if (!validateMessage(formData.message)) {
			newErrors.message = 'El mensaje debe tener entre 50 y 1000 caracteres'
		}
		setErrors(newErrors)
		if (Object.keys(newErrors).length === 0) {
			console.log('Formulario enviado:', formData)
			setFormData({
				name: '',
				email: '',
				message: '',
			})
		}
	}

	return (
		<section className='contact-section'>
			<header className='contact-header'>
				<h2 className="contact-title">
					Contáctame
				</h2>
			</header>
			<form
				action="#"
				method="POST"
				className="contact-form"
				noValidate
				onSubmit={handleSubmit}
			>
				<div className="form-group">
					<label htmlFor="name" className="form-label" aria-label="Nombre completo">
						Nombre completo
					</label>
					<input
						type="text"
						id="name"
						name="name"
						className="form-input"
						required
						value={formData.name}
						onChange={handleChange}
					/>
					{errors.name && <span className="error-message">{errors.name}</span>}
				</div>
				<div className="form-group">
					<label htmlFor="email" className="form-label" aria-label="Correo electrónico">
						Correo electrónico
					</label>
					<input
						type="email"
						id="email"
						name="email"
						className="form-input"
						required
						value={formData.email}
						onChange={handleChange}
					/>
					{errors.email && <span className="error-message">{errors.email}</span>}
				</div>
				<div className="form-group">
					<label htmlFor="message" className="form-label" aria-label="Mensaje">
						Mensaje
					</label>
					<textarea
						name="message"
						id="message"
						className="form-textarea"
						cols="30"
						rows="10"
						placeholder="Escribe tu mensaje aquí"
						required
						value={formData.message}
						onChange={handleChange}
					></textarea>
					{errors.message && <span className="error-message">{errors.message}</span>}
				</div>
				<button type="submit" className="form-button">
					Enviar
				</button>
			</form>
		</section>
	)
}

export default Contact;