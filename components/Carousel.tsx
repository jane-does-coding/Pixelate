"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const slides = [
	{
		image: "https://placehold.co/1000x800",

		title: "Main Dashboard",
		description: "Goals — XP — Stats",
	},
	{
		image: "https://placehold.co/1000x800",

		title: "Quest Log",
		description: "Daily — Weekly — Challenges",
	},
	{
		image: "https://placehold.co/1000x800",

		title: "Skill Tracker",
		description: "Level Up — Progress — Growth",
	},
	{
		image: "https://placehold.co/1000x800",

		title: "Rewards Shop",
		description: "Earn — Spend — Celebrate",
	},
	{
		image: "https://placehold.co/1000x800",

		title: "Profile Stats",
		description: "Energy — Focus — Achievements",
	},
];

const Carousel = () => {
	const [currentSlide, setCurrentSlide] = useState(0);
	const { ref: bottomRef, inView: bottomInView } = useInView({
		triggerOnce: true,
		threshold: 0.2,
	});

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentSlide((prev) => (prev + 1) % slides.length);
		}, 6000);

		return () => clearInterval(interval); // <--- fixes the warning + good practice
	}, []);

	const { ref, inView } = useInView({
		triggerOnce: true,
		threshold: 0.2,
	});

	return (
		<div className="mb-[10vh]">
			<div className="w-[90vw] mx-auto flex justify-between items-end mb-[3vh]">
				<motion.h2
					ref={ref}
					initial={{ opacity: 0, y: 20 }}
					animate={inView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.3, delay: 0.1, ease: "easeOut" }}
					className="text-[12vh]"
				>
					See It in Action
				</motion.h2>
				<motion.p
					ref={ref}
					initial={{ opacity: 0, y: 20 }}
					animate={inView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.3, delay: 0.2, ease: "easeOut" }}
					className="w-[20vw] text-[2vh] pb-[1vh]"
				>
					Browse dashboards, quest logs, and stats in use. Get inspired, start
					building yours.
				</motion.p>
			</div>
			<div className="w-full max-w-[100vw] h-[80vh] mx-auto overflow-hidden relative ">
				{/* Slides */}
				{/* Slides */}
				<div
					className="w-[500vw] flex gap-[1.5vw] pl-[10vw] transition-transform duration-[1100ms] ease-in-out"
					style={{ transform: `translateX(-${currentSlide * 81.5}vw)` }}
				>
					{slides.map((slide, index) => (
						<div
							key={index}
							className="w-[80vw] h-[70vh] flex items-center justify-center rounded-[0.5rem] relative"
						>
							<img
								src={slide.image}
								className="w-[80vw] h-[70vh] object-cover rounded-[0.5rem]"
								alt={slide.title}
							/>
							{/* Tags at the top */}
							<div className="absolute top-[2vh] left-[50%] translate-x-[-50%] text-[2vh] rounded-full flex items-center justify-center gap-[1vw]">
								{slide.description.split(" — ").map((tag, i) => (
									<span
										key={i}
										className="px-[1.5vw] py-[0.25vh] font-semibold text-[1.5vh] bg-white rounded-full"
									>
										{tag}
									</span>
								))}
							</div>

							<div className="absolute bottom-[2vh] left-[50%] translate-x-[-50%] bg-neutral-50 font-semibold text-[2vh] rounded-full px-[3vw] py-[1vh]">
								{slide.title}
							</div>
						</div>
					))}
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
					<div
						className={`w-[7px] h-[7px] bg-black ${
							currentSlide == 3 ? "bg-black" : "bg-neutral-300 transition"
						} rounded-full`}
					></div>
					<div
						className={`w-[7px] h-[7px] bg-black ${
							currentSlide == 4 ? "bg-black" : "bg-neutral-300 transition"
						} rounded-full`}
					></div>
				</div>
			</div>
			<motion.div
				ref={bottomRef}
				initial={{ opacity: 0, y: 10 }}
				animate={bottomInView ? { opacity: 1, y: 0 } : {}}
				transition={{ duration: 0.3, delay: 0.3, ease: "easeOut" }}
				className="flex w-[90vw] mx-auto mt-[3vh]"
			>
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
			</motion.div>
		</div>
	);
};

export default Carousel;
