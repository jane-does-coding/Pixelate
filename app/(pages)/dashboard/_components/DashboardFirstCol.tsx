"use client";
import React from "react";
import {
	FaHeart,
	FaBatteryHalf,
	FaRegLightbulb,
	FaBrain,
	FaHandshake,
} from "react-icons/fa6";
import { motion, Variants } from "framer-motion";

// Animation variant
const fadeInUp = (delay: number): Variants => ({
	hidden: { opacity: 0, y: 20 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { delay, duration: 0.3, ease: "easeOut" },
	},
});

// Skill Component
const Skill = ({
	name,
	icon: Icon,
	rating,
	delay,
}: {
	name: string;
	icon: React.ElementType;
	rating: number;
	delay: number;
}) => {
	return (
		<motion.div
			variants={fadeInUp(delay)}
			initial="hidden"
			animate="visible"
			className="w-full py-[1vh] px-[0.75vw] bg-neutral-50 border-2 border-neutral-200 rounded-[0.5rem]"
		>
			<div className="flex items-center justify-start gap-[0.5vw] text-[1.75vh]">
				<Icon size={18} />
				<p>{name}</p>
			</div>
			<div className="flex items-center justify-between mt-[1vh]">
				<div className="flex gap-[0.25vw] items-center justify-center">
					{Array.from({ length: 10 }).map((_, idx) => (
						<div
							key={idx}
							className={`w-[1.1vh] h-[1.1vh] ${
								idx < rating ? "bg-neutral-600" : "bg-neutral-300"
							} rounded-[2px]`}
						></div>
					))}
				</div>
				<p className="text-[2vh]">{rating}/10</p>
			</div>
		</motion.div>
	);
};

// Dashboard Component
const DashboardFirstCol = () => {
	return (
		<motion.div initial="hidden" animate="visible" className="pb-[3vh]">
			{/* Avatar */}
			<motion.img
				variants={fadeInUp(0)}
				src="/avatars/avatar1.png"
				alt=""
				className="p-[1vh] w-[85%] mx-auto"
			/>

			{/* Name */}
			<motion.div
				variants={fadeInUp(0.1)}
				className="flex items-center justify-between mb-[0.15vh]"
			>
				<p className="text-[1.75vh] text-neutral-600">HeyYevheniia</p>
			</motion.div>

			{/* Level + Coins */}
			<motion.div
				variants={fadeInUp(0.2)}
				className="flex items-center justify-between  mb-[1vh]"
			>
				<p className="text-[1.75vh] text-neutral-600">Level 2</p>
				<p className="text-[1.75vh] text-neutral-600">231 coins</p>
			</motion.div>

			{/* Hearts + Battery */}
			<motion.div
				variants={fadeInUp(0.3)}
				className="flex items-center justify-between pb-[1.5vh] mb-[1vh] border-b-[1.5px] border-neutral-300"
			>
				<div className="flex gap-[0.25vw] ">
					{Array.from({ length: 5 }).map((_, i) => (
						<FaHeart key={i} size={16} className="text-red-700" />
					))}
				</div>
				<FaBatteryHalf size={20} className="text-amber-600" />
			</motion.div>

			{/* Objectives + Strengths/Weaknesses */}
			<motion.div
				variants={fadeInUp(0.4)}
				className="pb-[1.5vh] mb-[1vh] border-b-[1.5px] border-neutral-300"
			>
				<div className="flex items-center justify-between">
					<h3 className="text-neutral-500 text-[1.75vh]">Master Objective:</h3>
					<p className="font-medium">Find a job</p>
				</div>
				<div className="flex items-center justify-between">
					<h3 className="text-neutral-500 text-[1.75vh]">Minor Objective:</h3>
					<p className="font-medium">Learn to cook</p>
				</div>
				<div className="flex items-center justify-between">
					<h3 className="text-neutral-500 text-[1.75vh]">Strengths:</h3>
					<p className="font-medium">Programming</p>
				</div>
				<div className="flex items-center justify-between">
					<h3 className="text-neutral-500 text-[1.75vh]">Weaknesses:</h3>
					<p className="font-medium">Discipline</p>
				</div>
			</motion.div>

			{/* Level Up Progress */}
			<motion.div
				variants={fadeInUp(0.5)}
				className="pb-[1.5vh] mb-[1vh] border-b-[1.5px] border-neutral-300"
			>
				<h3 className="font-semibold text-[1.75vh] mb-[0vh]">Level up:</h3>
				<div className="flex items-center justify-between mt-[0.5vh]">
					<div className="flex gap-[0.25vw] items-center justify-center">
						{Array.from({ length: 10 }).map((_, idx) => (
							<div
								key={idx}
								className={`w-[1.1vh] h-[1.1vh] ${
									idx < 8 ? "bg-neutral-600" : "bg-neutral-300"
								} rounded-[2px]`}
							></div>
						))}
					</div>
					<p className="text-[2vh]">{8}/10</p>
				</div>
			</motion.div>

			{/* Skills */}
			<div className="flex flex-col gap-[1vh] mt-[1.5vh]">
				<Skill name="Creativity" icon={FaRegLightbulb} rating={6} delay={0.6} />
				<Skill name="Programming" icon={FaBrain} rating={9} delay={0.7} />
				<Skill name="Social Skills" icon={FaHandshake} rating={4} delay={0.8} />
			</div>
		</motion.div>
	);
};

export default DashboardFirstCol;
