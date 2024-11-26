import React, { useState, useEffect } from 'react';
import './CarrouselStyle.css';

const imagePool = [
	"/imagenes/imagenes-scanner/scanner1.jpeg",
	"/imagenes/imagenes-scanner/scanner2.jpeg",
	"/imagenes/imagenes-scanner/scanner3.jpeg",
	"/imagenes/imagenes-scanner/scanner4.jpeg",
];

export const Carrousel = () => {
	const [images, setImages] = useState([
		imagePool[0],
		imagePool[1],
		imagePool[2],
		imagePool[3],
	]);
	const [positions, setPositions] = useState([
		{ x: 0, y: 0 },
		{ x: 100, y: 0 },
		{ x: 0, y: 100 },
		{ x: 100, y: 100 },
	]);

	useEffect(() => {
		const interval = setInterval(() => {
			setPositions((prevPositions) => {
				const newPositions = [...prevPositions];
				const index1 = Math.floor(Math.random() * 4);
				let index2 = Math.floor(Math.random() * 4);

				while (index1 === index2) {
					index2 = Math.floor(Math.random() * 4);
				}

				// Intercambiar las posiciones
				[newPositions[index1], newPositions[index2]] = [newPositions[index2], newPositions[index1]];

				return newPositions;
			});

			setImages((prevImages) => {
				const newImages = [...prevImages];
				const index1 = Math.floor(Math.random() * 4);
				let index2 = Math.floor(Math.random() * 4);

				while (index1 === index2) {
					index2 = Math.floor(Math.random() * 4);
				}

				// Intercambiar las imágenes
				[newImages[index1], newImages[index2]] = [newImages[index2], newImages[index1]];

				return newImages;
			});
		}, 2000);

		return () => clearInterval(interval);
	}, []);

	return (
		<div className="grid-container">
			{images.map((img, index) => (
				<div
					key={index}
					className="grid-item"
					style={{
						transform: `translate(${positions[index].x}%, ${positions[index].y}%)`,
						transition: 'transform 1s ease-in-out',
					}}
				>
					<img src={img} alt={`Imagen ${index}`} />
				</div>
			))}
		</div>
	);
};
