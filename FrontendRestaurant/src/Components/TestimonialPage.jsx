import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TestimonialPage = () => {
	const sliderSettings = {
		dots: true,
		infinite: true,
		speed: 3000,
		slidesToShow: 2, // Show 2 slides at once on larger screens
		slidesToScroll: 2, // Move 2 cards at once
		arrows: true,
		autoplay: true,
		autoplaySpeed: 4000,
		responsive: [
			{
				breakpoint: 1024, // Screens wider than 1024px (tablets and desktops)
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
				},
			},
			{
				breakpoint: 768, // For smaller devices (mobile)
				settings: {
					slidesToShow: 1, // Show 1 slide at a time on small screens
					slidesToScroll: 1,
				},
			},
		],
	};

	const testimonials = [
		{
			id: 1,
			name: "Vaishnavi Rewatkar",
			image: "./Testimonial13.jpg",
			feedback:
				"This service has transformed my life! The team is amazing, and the results speak for themselves. Highly recommend!",
		},
		{
			id: 2,
			name: "Pooja Chandewar",
			image: "./Testimonial14.jpg",
			feedback:
				"I've never been happier with a product. Outstanding quality and fantastic customer support!",
		},
		{
			id: 3,
			name: "Yashika Wanjari",
			image: "./Testimonial6.jpg",
			feedback:
				"A seamless experience from start to finish. I'll definitely be a returning customer!",
		},
		{
			id: 4,
			name: "Shivang Raj",
			image: "./Testimonial12.jpg",
			feedback:
				"A seamless experience from start to finish. I'll definitely be a returning customer!",
		},
		{
			id: 5,
			name: "Anshul Hanwate",
			image: "./Testimonial3.jpg",
			feedback:
				"A seamless experience from start to finish. I'll definitely be a returning customer!",
		},
	];

	return (
		<div className="relative min-h-screen bg-[#F8F5F1]">
			{/* Main Content */}
			<div className="max-w-4xl mx-auto p-8 sm:p-6 text-center pb-2">
				{/* Title Section */}
				<div className="mb-8">
					<h1 className="text-3xl sm:text-5xl font-bold text-[#B88A5B] mb-4">
						What Our Happy Guests Say
					</h1>
					<p className="text-[#6B4C3B] text-lg sm:text-xl">
						Hear directly from our valued guests about their experiences with
						us. Discover why they love dining at our restaurant!
					</p>
				</div>

				{/* Slider Section */}
				<Slider {...sliderSettings}>
					{testimonials.map((testimonial) => (
						<div key={testimonial.id} className="p-4">
							<div className="bg-white shadow-lg rounded-lg border border-[#E5C6A5] p-6">
								{/* Customer Image */}
								<img
									src={testimonial.image}
									alt={testimonial.name}
									className="w-40 h-40 rounded-full object-cover mx-auto mb-6 border-4 border-[#B88A5B]"
								/>

								{/* Customer Name */}
								<h3 className="text-xl font-semibold text-[#3A2D2B] mb-2">
									{testimonial.name}
								</h3>

								{/* Customer Feedback */}
								<p className="text-gray-600 text-sm leading-relaxed">
									"{testimonial.feedback}"
								</p>
							</div>
						</div>
					))}
				</Slider>
			</div>
			<div className="flex justify-end absolute bottom-24 right-0 p-4 lg:flex-col lg:items-center items-center flex-col lg:space-y-2 w-full">
				<p className="text-black">
					&copy; {new Date().getFullYear()} Flavor Fusion. All rights reserved.
				</p>
				<h3 className="text-black">Developed By Dipanshu Dilip Kale</h3>
			</div>
		</div>
	);
};

export default TestimonialPage;
