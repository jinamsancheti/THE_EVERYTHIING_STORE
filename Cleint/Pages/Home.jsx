import React from "react";
import Navbar from "..//Components//Navbar";
import Hero from "..//Components//Hero";
import Card from "..//Components//Card";
import meme_data from "..//data.js";
import Foot from "..//Components//Foot";

// console.log(meme_data);

const cardData = meme_data.map((cData) => {
	
	return (
		<Card
			key={cData.id}
			{...cData}
		/>
	);
});

function Home() {
	return (
		<div>
			<Navbar />
			<div className="main">
				<Hero/>	
				<div className="row-cards">
					<div className="Card-items">
						{cardData}
					</div>
					<div className="Card-items">
						{cardData}
					</div>
					<div className="Card-items">
						{cardData}
					</div>
					<div className="Card-items">
						{cardData}
					</div>
					<div className="Card-items">
						{cardData}
					</div>
				</div>
			</div>
			<Foot/>
		</div>
	);
	
}

export default Home;
