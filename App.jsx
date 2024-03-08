import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Card from "./Components/Card";
import data from "./data";
import Meme from "./Components/Form";

const cardData = data.map((cData) => {
	return (
		<Card
			key={cData.id}
			{...cData}
		/>
	);
});

function App() {
	return (
		<div>
			<Navbar />
			<div className="main">
				<Hero/>
				<div className="Card-items">
					{cardData}
				</div>
				{/* <Meme /> */}
			</div>
		</div>
	);
}

export default App;
