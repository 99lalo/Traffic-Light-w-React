import React, { useState, useEffect } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function TrafficLights() {
	const [color, setColor] = useState("red");
	useEffect(
		() => {
			const interval = setInterval(() => {
				color === "red"
					? setColor("yellow")
					: color === "yellow"
						? setColor("green")
						: color === "green"
							? setColor("red")
							: null;
			}, 3000);
			return () => clearInterval(interval);
		},
		[color]
	);
	return (
		<div className="container">
			<div className="post">
				<div
					className={color === "red" ? "red-selected" : "red-light"}
					onClick={() => setColor("red")}
				/>
				<div
					className={
						color === "yellow" ? "yellow-selected" : "yellow-light"
					}
					onClick={() => setColor("yellow")}
				/>
				<div
					className={
						color === "green" ? "green-selected" : "green-light"
					}
					onClick={() => setColor("green")}
				/>
			</div>
		</div>
	);
}
