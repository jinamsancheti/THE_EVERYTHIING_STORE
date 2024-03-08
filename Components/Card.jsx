import React from "react";
import Meme from "./Form";

export default function Card(props) 
{
	let badgeText = "";
	if (props.openSpots === 0) badgeText = "SOLD OUT";
	else if (props.place === "Online") badgeText = "ONLINE";
	function handleClick(){
		console.log("ha bhai hua click");
	}
	return (
		<div className="activity">
			{badgeText != "" && <div className="card_badge">{badgeText}</div>}
			<button onClick={handleClick} className="image_button">
				<img
					src={props.img}
					alt="activity"
					height="235px"
					className="activity_image"
				/>
			</button>
			<div className="image_description">
				<div className="ratings">
					<img src="src\Star.png" alt="rating" height="14px" className="star_image" />
					<span>{props.rating}</span>
					<span className="gray">({props.unit}) • </span>
					<span className="gray">{props.place}</span>
				</div>
				<div>
					<h2 className="card_title">{props.title}</h2>
				</div>
				<div>
					<p className="card_price">
						<b>From ${props.price}</b> / person
					</p>
				</div>
			</div>
		</div>
	);
}
