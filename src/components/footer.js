import React from "react"

const Footer = () => {
	return (
		<footer>
			<p>
				© {new Date().getFullYear()}, Marque Aqui
				{` `}
			</p>
			<p style={{ fontSize: "smaller" }}>Todos os Direitos Reservados</p>
		</footer>
	)
}

export default Footer
