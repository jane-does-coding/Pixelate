"use client";
import React, { useEffect, useState } from "react";

const slides = [
	{
		image: "/banner.jpg",
		title: "Partner Films",
		description: "Branding — Neue Montreal",
	},
	{
		image: "/banner.jpg",
		title: "Fuku",
		description: "Branding — Neue Montreal",
	},
	{
		image: "/banner.jpg",
		title: "Something Else",
		description: "Design — Neue Montreal",
	},
];

const Carousel = () => {
	const [currentSlide, setCurrentSlide] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentSlide((prev) => (prev + 1) % slides.length);
		}, 6000);
	}, []);

	return (
		<div className="mb-[10vh]">
			<div className="w-[90vw] mx-auto flex justify-between items-end mb-[5vh]">
				<h2 className="text-[12vh]">Lorem Ipsum</h2>
				<p className="w-[20vw] text-[2vh] pb-[1vh]">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, ut.
					Lorem ipsum dolor sit amet.
				</p>
			</div>
			<div className="w-full max-w-[100vw] h-[80vh] mx-auto overflow-hidden relative ">
				{/* Slides */}
				<div
					className="w-[300vw] flex  gap-[1.5vw] pl-[10vw] transition-transform duration-[1100ms] ease-in-out"
					style={{ transform: `translateX(-${currentSlide * 81.5}vw)` }}
				>
					{/* Slide 1 */}
					<div className="w-[80vw] h-[70vh] flex items-center justify-center rounded-[0.5rem] relative">
						<img
							src="https://placehold.co/1000x600"
							className="w-[80vw] h-[70vh] object-cover rounded-[0.5rem]"
							alt=""
						/>
						{/* 						<h2>Slide 1</h2>
						 */}{" "}
						<div className="absolute top-[2vh] left-[50%] translate-x-[-50%] text-[2vh] rounded-full flex items-center justify-center gap-[1vw]">
							<span className="px-[1.5vw] py-[0.25vh] font-semibold text-[1.5vh] bg-white rounded-full">
								Lorem
							</span>
							<span className="px-[1.5vw] py-[0.25vh] font-semibold text-[1.5vh] bg-white rounded-full">
								Lorem
							</span>
						</div>
						<div className="absolute bottom-[2vh] left-[50%] translate-x-[-50%] bg-neutral-50 font-semibold text-[2vh] rounded-full px-[3vw] py-[1vh]">
							Lorem, ipsum.
						</div>
					</div>
					{/* Slide 2 */}
					<div className="w-[80vw] h-[70vh] flex items-center justify-center rounded-[0.5rem] relative">
						<img
							src="https://placehold.co/1000x600"
							className="w-[80vw] h-[70vh] object-cover rounded-[0.5rem]"
							alt=""
						/>
						{/* 						<h2>Slide 1</h2>
						 */}{" "}
						<div className="absolute top-[2vh] left-[50%] translate-x-[-50%] text-[2vh] rounded-full flex items-center justify-center gap-[1vw]">
							<span className="px-[1.5vw] py-[0.25vh] font-semibold text-[1.5vh] bg-white rounded-full">
								Lorem
							</span>
							<span className="px-[1.5vw] py-[0.25vh] font-semibold text-[1.5vh] bg-white rounded-full">
								Lorem
							</span>
							<span className="px-[1.5vw] py-[0.25vh] font-semibold text-[1.5vh] bg-white rounded-full">
								Lorem
							</span>
						</div>
						<div className="absolute bottom-[2vh] left-[50%] translate-x-[-50%] bg-neutral-50 font-semibold text-[2vh] rounded-full px-[3vw] py-[1vh]">
							Lorem, ipsum.
						</div>
					</div>
					{/* Slide 3 */}
					<div className="w-[80vw] h-[70vh] flex items-center justify-center rounded-[0.5rem] relative">
						<img
							src="https://placehold.co/1000x600"
							className="w-[80vw] h-[70vh] object-cover rounded-[0.5rem]"
							alt=""
						/>
						{/* 						<h2>Slide 1</h2>
						 */}{" "}
						<div className="absolute top-[2vh] left-[50%] translate-x-[-50%] text-[2vh] rounded-full flex items-center justify-center gap-[1vw]">
							<span className="px-[1.5vw] py-[0.25vh] font-semibold text-[1.5vh] bg-white rounded-full">
								Lorem
							</span>
							<span className="px-[1.5vw] py-[0.25vh] font-semibold text-[1.5vh] bg-white rounded-full">
								Lorem
							</span>
						</div>
						<div className="absolute bottom-[2vh] left-[50%] translate-x-[-50%] bg-neutral-50 font-semibold text-[2vh] rounded-full px-[3vw] py-[1vh]">
							Lorem, ipsum.
						</div>
					</div>
				</div>
				{/* Dots */}
				<div className="flex w-fit mx-auto gap-[0.5vw] mt-[5vh]">
					<div
						className={`w-[7px] h-[7px] bg-black ${
							currentSlide == 0 ? "bg-black" : "bg-neutral-300 transition"
						} rounded-full`}
					></div>
					<div
						className={`w-[7px] h-[7px] bg-black ${
							currentSlide == 1 ? "bg-black" : "bg-neutral-300 transition"
						} rounded-full`}
					></div>
					<div
						className={`w-[7px] h-[7px] bg-black ${
							currentSlide == 2 ? "bg-black" : "bg-neutral-300 transition"
						} rounded-full`}
					></div>
				</div>
			</div>
			<div className="flex w-[90vw] mx-auto mt-[3vh]">
				<div className="w-1/3 flex items-center justify-start">
					<p className=" text-[4vh]">+</p>
				</div>
				<div className="w-1/3 flex items-center justify-between">
					<p className=" text-[4vh]">+</p>

					<p className=" text-[4vh]">+</p>
				</div>
				<div className="w-1/3 flex items-center justify-end">
					<p className=" text-[4vh]">+</p>
				</div>
			</div>
		</div>
	);
};

export default Carousel;
