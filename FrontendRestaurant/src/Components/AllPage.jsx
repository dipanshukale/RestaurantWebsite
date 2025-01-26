import React, {useEffect } from "react";
import HeroSection from "./HeroSection";
import AboutUs from "./AboutUs";
import MenuApp from "./MenuApp";
import BlogPage from "./BlogPage";
import TestimonialPage from "./TestimonialPage";
import ScrollingBanner from "./ScrollingBanner";

const AllPage = ({ addToCart, cart, updateCartItem }) => {
	     // Scroll to top on page render
 useEffect(() => {
   window.scrollTo(0, 0);
 }, []);


	return (
		<>
			<HeroSection />
			<ScrollingBanner/>
			<AboutUs />
			<MenuApp addToCart={addToCart} cart={cart} updateCartItem={updateCartItem} />
			<BlogPage />
			<TestimonialPage />
		</>
	);
};

export default AllPage;
