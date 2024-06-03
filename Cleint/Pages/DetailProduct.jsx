import React, { useContext, useEffect, useState } from "react";
import Navbar from "..//Components//Navbar.jsx";
import data from "..//data.js";
import Foot from "..//Components//Foot";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
	Link,
	useParams,
} from "react-router-dom";


export default function DetailProduct(){
	const params = useParams();
	const [detailProduct, setDetailProduct] = useState([data[0]]);

	useEffect(() => {
		if (params) {
			data.forEach((product) => {
				// console.log(product.id);
				// console.log(params.id);
				if (product.id == params.id) setDetailProduct(product);
			});
		}
	}, [params]);

	if (detailProduct.length === 0) 
		return null;

	// console.log(detailProduct)

	const [link, setLink] = useState(data[params.id-1].img1)
	// console.log(imgLink)

	function prevImage() 
	{
		if(link === detailProduct.img1)
			setLink(detailProduct.img3);
		if(link === detailProduct.img2)
			setLink(detailProduct.img1);
		if(link === detailProduct.img3)
			setLink(detailProduct.img2);
	} 

	function nextImage() 
	{
		if(link === detailProduct.img1)
			setLink(detailProduct.img2);
		if(link === detailProduct.img2)
			setLink(detailProduct.img3);
		if(link === detailProduct.img3)
			setLink(detailProduct.img1);
	}

	console.log(link);

	return (
		<div>
			<Navbar />
			<div className="detail">
				{/* <div className="product-image detailed-viwe"></div> */}
				<div className="product-img-big">
					<div className="product-image detailed-viwe">
						{/* let flag = "/about" + props.id */}
						<img
							src={link}
							className="product-image"
							alt="product-image"
						/>
					</div>
					<button
						className="carousel-control-prev"
						type="button"
						data-bs-target="#carouselExampleIndicators"
						data-bs-slide="prev"
						onClick={prevImage}
						>
						<span className="carousel-control-prev-icon" aria-hidden="true"></span>
						<span className="visually-hidden">Previous</span>
					</button>
					<button
						className="carousel-control-next"
						type="button"
						data-bs-target="#carouselExampleIndicators"
						data-bs-slide="next"
						onClick={nextImage}
						>
						<span className="carousel-control-next-icon" aria-hidden="true"></span>
						<span className="visually-hidden">Next</span>
					</button>
				</div>
				<div className="box-detail detailed-viwe">
					<div>
						<h1>
							<b>{detailProduct.title}</b>
						</h1>
					</div>
					<span className="product-rating" height="15px">
						{detailProduct.rating}{" "}
						<img
							src="/src/Star.png"
							alt="rating"
							height="15px"
							className="star_image"
						/>
					</span>
					<h3>
						<b>${detailProduct.price}</b>
					</h3>
					<p>{detailProduct.description}</p>
					{/* <Link to="/cart" className="cart">
						Buy Now
					</Link> */}
					<div className="product-buy">
						<Link to={`/checkout/step1`} className="buy-button-link">
							<button class="btn btn-primary buy-button" type="button">	
								BUY
							</button>
						</Link>
						<Link to={`/checkout/step1`} className="add-button-link">
							<button class="btn btn-outline-secondary add-button" type="button">
								ADD TO CART
							</button>
						</Link>
					</div>
				</div>
			</div>
			<Foot/>
		</div>
	);
};


