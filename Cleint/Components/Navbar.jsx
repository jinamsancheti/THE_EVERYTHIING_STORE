import React from "react";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";


export default function Navbar() {
	return (
		<div className="container">
			<header className="d-flex flex-wrap align-items-center justify-content-md-between py-3 mb-4 border-bottom">
				<div className="col-md-3 mb-2 mb-md-0 brand">
					<a href="/" className="d-inline-flex link-body-emphasis text-decoration-none">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="16"
							height="16"
							fillRule="currentColor"
							className="bi bi-bag-heart brand-logo"
							viewBox="0 0 16 16">
							<path
								fillRule="evenodd"
								d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0M14 14V5H2v9a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1M8 7.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132"
							/>
						</svg>
					</a>
					<h1>JINAMKART</h1>
				</div>

				<input
					type="search"
					className="search-bar"
					placeholder="Search..."
					aria-label="Search">
				</input>

				<div className="col-md-3 text-end">
					<Link to="/login" id="props.id">
						<button type="button" className="btn btn-outline-primary me-2">
							Login
						</button>
					</Link>
					<Link to="/signup" id="props.id">
						<button type="button" className="btn btn-primary">
							Sign-up
						</button>
					</Link>

				</div>
			</header>
		</div>
	);
}
