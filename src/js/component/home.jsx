import React, { useState, useEffect } from "react";

//create your first component
const Home = () => {
	const [selected, setSelected] = useState("");

	const interval = setInterval(() => {
		if (selected == "") {
			setSelected("red");
		} else if (selected == "red") {
			setSelected("yellow");
		} else if (selected == "yellow") {
			setSelected("green");
		} else if (selected == "green") {
			setSelected("red");
		} else {
			setSelected(" ");
		}
	}, 3000);

	useEffect(() => {
		return () => {
			clearInterval(interval);
		};
	});

	return (
		<div>
			<div id="trafficTop"></div>
			<div className="container">
				<div
					className={`red light ${
						selected == "red" ? "selected" : ""
					}`}
					onClick={() => setSelected("red")}></div>
				<div
					className={`yellow light ${
						selected == "yellow" ? "selected" : ""
					}`}
					onClick={() => setSelected("yellow")}></div>
				<div
					className={`green light ${
						selected == "green" ? "selected" : ""
					}`}
					onClick={() => setSelected("green")}></div>
			</div>
		</div>
	);
};

export default Home;
