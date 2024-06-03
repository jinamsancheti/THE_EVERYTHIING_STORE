// export default [
//     {
//         id: 1,
//         title: "Life Lessons with Katie Zaferes",
//         description: "I will share with you what I call \"Positively Impactful Moments of Disappointment.\" Throughout my career, many of my highest moments only came after setbacks and losses. But learning from those difficult moments is what gave me the ability to rise above them and reach my goals.",
//         price: 136,
//         img: "/src/img1.png",
//         img2:  "/src/wedding-photography 1.png",
//         img3: "/src/img1.png",
// 		rating: 5.0,
// 		unit: 6,
//         place: "Online",
//         openSpots: 0,
//     },
//     {
//         id: 2,
//         title: "Learn Wedding Photography",
//         description: "Interested in becoming a wedding photographer? For beginner and experienced photographers alike, join us in learning techniques required to leave the happy couple with memories that'll last a lifetime.",
//         price: 125,
//         img: "https://i.imgflip.com/1g8my4.jpg",
//         img2:  "/src/wedding-photography 1.png",
//         img3: "/src/img1.png",
// 		rating: 5.0,
// 		unit: 30,
//         place: "Nashik",
//         openSpots: 27,
//     },
// 	{
//         id: 3,
//         title: "Learn Wedding Photography",
//         description: "Interested in becoming a wedding photographer? For beginner and experienced photographers alike, join us in learning techniques required to leave the happy couple with memories that'll last a lifetime.",
//         price: 125,
//         img:  "/src/wedding-photography 1.png",
//         img2:  "/src/wedding-photography 1.png",
//         img3: "/src/img1.png",
// 		rating: 5.0,
// 		unit: 30,
//         place: "Russia",
//         openSpots: 27,
//     },
// 	{
//         id: 4,
//         title: "Learn Wedding Photography",
//         description: "Interested in becoming a wedding photographer? For beginner and experienced photographers alike, join us in learning techniques required to leave the happy couple with memories that'll last a lifetime.",
//         price: 125,
//         img: "https://i.imgflip.com/261o3j.jpg",
//         img2:  "/src/wedding-photography 1.png",
//         img3: "/src/img1.png",
// 		rating: 5.0,
// 		unit: 30,
//         place: "Pakistan",
//         openSpots: 27,
//     },
// 	{
//         id: 5,
//         title: "Learn Wedding Photography",
//         description: "Interested in becoming a wedding photographer? For beginner and experienced photographers alike, join us in learning techniques required to leave the happy couple with memories that'll last a lifetime.",
//         price: 125,
//         img: "https://i.imgflip.com/43a45p.png",
//         img2:  "/src/wedding-photography 1.png",
//         img3: "/src/img1.png",
// 		rating: 5.0,
// 		unit: 30,
//         place: "Online",
//         openSpots: 27,
//     },
// 	{
//         id: 6,
//         title: "Learn Wedding Photography",
//         description: "Interested in becoming a wedding photographer? For beginner and experienced photographers alike, join us in learning techniques required to leave the happy couple with memories that'll last a lifetime.",
//         price: 125,
//         img: "https://i.imgflip.com/24y43o.jpg",
//         img2:  "/src/wedding-photography 1.png",
//         img3: "/src/img1.png",
// 		rating: 5.0,
// 		unit: 30,
//         place: "AUSTRALIA",
//         openSpots: 27,
//     },
// 	{
//         id: 7,
//         title: "Learn Wedding Photography",
//         description: "Interested in becoming a wedding photographer? For beginner and experienced photographers alike, join us in learning techniques required to leave the happy couple with memories that'll last a lifetime.",
//         price: 125,
//         img: "https://i.imgflip.com/22bdq6.jpg",
//         img2:  "/src/wedding-photography 1.png",
//         img3: "/src/img1.png",
// 		rating: 5.0,
// 		unit: 30,
//         place: "Online",
//         openSpots: 27,
//     },
// 	{
//         id: 8,
//         title: "Learn Wedding Photography",
//         description: "Interested in becoming a wedding photographer? For beginner and experienced photographers alike, join us in learning techniques required to leave the happy couple with memories that'll last a lifetime.",
//         price: 125,
//         img: "https://i.imgflip.com/3lmzyx.jpg",
//         img2:  "/src/wedding-photography 1.png",
//         img3: "/src/img1.png",
// 		rating: 5.0,
// 		unit: 30,
//         place: "INDIA",
//         openSpots: 27,
//     },
// 	{
//         id: 9,
//         title: "Learn Wedding Photography",
//         description: "Interested in becoming a wedding photographer? For beginner and experienced photographers alike, join us in learning techniques required to leave the happy couple with memories that'll last a lifetime.",
//         price: 125,
//         img: "https://i.imgflip.com/26jxvz.jpg",
//         img2:  "/src/wedding-photography 1.png",
//         img3: "/src/img1.png",
// 		rating: 5.0,
// 		unit: 30,
//         place: "USA",
//         openSpots: 27,
//     },
//     {
//         id: 10,
//         title: "Group Mountain Biking",
//         description: "Experience the beautiful Norwegian landscape and meet new friends all while conquering rugged terrain on your mountain bike. (Bike provided!)",
//         price: 50,
//         img: "/src/mountain-bike 1.png",
//         img2:  "/src/wedding-photography 1.png",
//         img3: "/src/img1.png",
// 		rating: 4.8,
// 		unit: 2,
//         place: "Norway",
//         openSpots: 3,
//     }
// ]

// import pg from "pg";

// const db = new pg.Client({
//   user: "postgres",
//   host: "localhost",
//   database: "JINAM_KART",
//   password: "Jainil2811*",
//   port: 5432,
// });
// db.connect();

// let result = await db.query("SELECT * FROM meme_data");
// console.log(result.rows);
// db.end();
// export default result.rows;

// const response = await fetch("http://localhost:4666/");
// console.log(response);
// const jsonData = await response.json();
// const data = jsonData;
// console.log(data);

// export default (data);
// export default (response.json());

// import React from "react";

// function data() {
// 	const [meme_data, setMemeData] = React.useState([]);
// 	// async function getData() {
// 	// 	try {
// 	// 		const response = await fetch(`http://localhost:4666/`, {
// 	// 			method: "GET"
// 	// 		});
// 	// 		const jsonData = response;
// 	// 		// console.log(jsonData);
// 	// 		setData(jsonData);
// 	// 	} catch (err) {
// 	// 		console.error(err.message);
// 	// 	}
// 	// }

// 	function getMemeData() {
// 		fetch('http://localhost:4666')
// 		.then(response => {
// 			return response.text();
// 		})
// 		.then(data => {
// 			setMemeData(data);
// 		});
//   	}

// 	useEffect(() => { getMemeData(); }, []);
// 	// console.log(data);
// 	// return data;
// 	return meme_data;
// }

let meme_data = [];

try {
	const response = await fetch("http://localhost:4666/");
	const jsonData = await response.json();

	meme_data = jsonData;
} catch (err) {
	console.error(err.message);
}

export default meme_data;
