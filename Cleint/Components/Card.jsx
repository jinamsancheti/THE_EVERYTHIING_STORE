import React from "react";
import data from "..//data.js"
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";


export default function Card(props) {
	// console.log(data);
	let badgeText = "";
	if (props.openSpots === 0) badgeText = "SOLD OUT";
	else if (props.place === "Online") badgeText = "ONLINE";

	const id = props.id - 1;
	// console.log(id);
	const imgLink = data[id].img1;
	const [link, setLink] = React.useState(imgLink);
	function prevImage() {
		if (link === data[id].img1) setLink(data[id].img3);
		if (link === data[id].img2) setLink(data[id].img1);
		if (link === data[id].img3) setLink(data[id].img2);
	}

	function nextImage() {
		if (link === data[id].img1) setLink(data[id].img2);
		if (link === data[id].img2) setLink(data[id].img3);
		if (link === data[id].img3) setLink(data[id].img1);
	}

	function handleClick() {
		console.log("ha bhai hua click");
	}
	return (
		<div className="activity">
			{badgeText != "" && <div className="card_badge">{badgeText}</div>}
			<button className="image_button" aria-label="Go to item">
				{/* let flag = "/about" + props.id */}
				<Link to={`/detail/${props.id}`} id="props.id">
					<img src={link} alt="activity" height="235px" className="activity_image" />
				</Link>
			</button>
			<button
				className="carousel-control-prev"
				type="button"
				data-bs-target="#carouselExampleIndicators"
				data-bs-slide="prev"
				onClick={prevImage}>
				<span className="carousel-control-prev-icon" aria-hidden="true"></span>
				<span className="visually-hidden">Previous</span>
			</button>
			<button
				className="carousel-control-next"
				type="button"
				data-bs-target="#carouselExampleIndicators"
				data-bs-slide="next"
				onClick={nextImage}>
				<span className="carousel-control-next-icon" aria-hidden="true"></span>
				<span className="visually-hidden">Next</span>
			</button>
			<div className="image_description">
				{/* <Link to="/about"> */}
				<div className="ratings">
					<img src="/src/Star.png" alt="rating" height="14px" className="star_image" />
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
				{/* </Link> */}
			</div>
		</div>
	);
}
