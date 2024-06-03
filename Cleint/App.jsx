import React from "react";
import Home from "./Pages//Home.jsx";
import SignUp from "./Components/SignUp";
import Login from "./Components/Login";
import DetailProduct from "./Pages/DetailProduct";
import Checkout1 from "./Pages/Checkout1";
import Checkout2 from "./Pages/Checkout2";
import ScrollToTop from "./ScrollToTop";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";


function App() {
	
		return (
			<>
				<ScrollToTop/>
				<Router>
					<Routes>
						<Route path="/" element={<Home/>}></Route>
						<Route path="/detail/:id" element={<DetailProduct/>}></Route>
						<Route path="/signup" element={<SignUp/>}></Route>
						<Route path="/login" element={<Login/>}></Route>
						<Route path="/checkout/step1" element={<Checkout1/>}></Route>
						<Route path="/checkout/step2" element={<Checkout2/>}></Route>
						<Route
								path="*"
								element={<Navigate to="/" />}
							/>
					</Routes>
				</Router>
			</>
		);
	
}

export default App;
