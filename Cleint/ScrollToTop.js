import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop(){
  // Extracts pathname property(key) from an object
  try{
  	const { pathname } = useLocation();
  } catch(err) {
	console.log(err);
  }

  // Automatically scrolls to top whenever pathname changes
  try{
	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);
  } catch(err) {
	console.log(err);
  }
}

export default ScrollToTop;