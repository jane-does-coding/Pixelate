"use client";
import { useState } from "react";
import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";

const fadeInUp = (delay = 0): Variants => ({
	hidden: { opacity: 0, y: 10 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { delay, duration: 0.3, ease: "easeOut" },
	},
});

const gridItems = [
	{
		label: "Growth • Good Habits",
		image: "/growth.png",
		href: "/growth",
	},
	{
		label: "Fight • Bad Habits",
		image: "/fight.png",
		href: "/fight",
	},
	{
		label: "Goal • Objective",
		image: "/goals.png",
		href: "/goals",
	},
	{
		label: "Profile • Vision Board",
		image: "/profile.png",
		href: "/profile",
	},
	{
		label: "Adventure Log",
		image: "/journal.png",
		href: "/adventure",
	},
	{
		label: "P.A.R.A.",
		image: "/para.png",
		href: "/para",
	},
];

const taskData: Record<
	string,
	{ title: string; status: "Done" | "Not Done"; date: string }[]
> = {
	Today: [
		{ title: "Apply to 10 jobs", status: "Not Done", date: "06/28/2025" },
		{
			title: "Finish portfolio website",
			status: "Not Done",
			date: "06/28/2025",
		},
		{ title: "Walk the dog", status: "Done", date: "06/28/2025" },
	],
	Tomorrow: [
		{ title: "Grocery shopping", status: "Not Done", date: "06/29/2025" },
		{ title: "Study 2hr JavaScript", status: "Not Done", date: "06/29/2025" },
	],
	"Next 7 Days": [
		{ title: "Renew driver's license", status: "Not Done", date: "07/02/2025" },
		{ title: "Clean entire room", status: "Not Done", date: "07/03/2025" },
		{
			title: "Finish photography course",
			status: "Not Done",
			date: "07/04/2025",
		},
	],
};

const DashboardSecondCol = () => {
	const [openSections, setOpenSections] = useState<Record<string, boolean>>({
		Today: true,
		Tomorrow: false,
		"Next 7 Days": false,
	});

	const toggleSection = (section: string) => {
		setOpenSections((prev) => ({
			...prev,
			[section]: !prev[section],
		}));
	};

	return (
		<motion.div
			initial="hidden"
			animate="visible"
			className="pl-[3vw] pr-[2vw] pb-[5vh]"
		>
			{/* Main Center */}
			<div className="flex items-center justify-center w-full gap-[2vw]">
				<div className="w-full h-[0.35vh] rounded-full bg-neutral-900"></div>
				<motion.h2
					variants={fadeInUp(0)}
					className="text-[4vh] text-center mb-[2vh] min-w-fit"
				>
					Main Center
				</motion.h2>
				<div className="w-full h-[0.35vh] rounded-full bg-neutral-900"></div>
			</div>

			{/* Grid */}
			<motion.div variants={fadeInUp(0)} className="grid grid-cols-3 gap-[1vw]">
				{gridItems.map((item, idx) => (
					<Link key={item.label} href={item.href} className="w-full">
						<motion.div
							variants={fadeInUp(0.2 + idx * 0.1)}
							className="bg-white border-[1.5px] border-neutral-300 w-full rounded-[0.5rem] h-[20vh] flex flex-col items-center justify-center gap-[1vh] hover:scale-[1.02] transition-all duration-200"
						>
							<img
								src={item.image}
								alt={item.label}
								className="w-[8vh] h-[8vh] object-cover"
							/>
							<h3 className="text-[1.75vh] text-center px-[0.5vw]">
								{item.label}
							</h3>
						</motion.div>
					</Link>
				))}
			</motion.div>

			{/* Task Manager */}
			<motion.h2
				variants={fadeInUp(0.7)}
				className="text-[4vh] text-left mt-[2vh] mb-[1vh]"
			>
				Task manager
			</motion.h2>

			{/* Sections */}
			{Object.entries(taskData).map(([section, tasks], sectionIdx) => (
				<motion.div
					key={section}
					variants={fadeInUp(0.8 + sectionIdx * 0.3)}
					className="border-b-[1.5px] border-neutral-300"
				>
					{/* Section Header */}
					<motion.h2
						onClick={() => toggleSection(section)}
						variants={fadeInUp(0.9 + sectionIdx * 0.3)}
						className="text-[3vh] text-left mt-[2.5vh] mb-[1.75vh] flex gap-[1vw] items-center justify-start cursor-pointer select-none"
					>
						{openSections[section] ? (
							<FaChevronDown size={14} />
						) : (
							<FaChevronRight size={14} />
						)}
						{section}
					</motion.h2>

					{/* Tasks */}
					<motion.div
						initial={false}
						animate={openSections[section] ? "open" : "closed"}
						variants={{
							open: { opacity: 1, height: "auto" },
							closed: { opacity: 0, height: 0 },
						}}
						className="overflow-hidden"
					>
						<div className="flex flex-col my-[0.5vh]">
							{tasks.map((task, taskIdx) => (
								<motion.div
									key={task.title + taskIdx}
									variants={fadeInUp(1.0 + sectionIdx * 0.3 + taskIdx * 0.1)}
									className={`flex py-[1vh] items-center justify-between px-[1vw] ${
										taskIdx !== tasks.length - 1
											? "border-b-[1.5px] border-neutral-300"
											: ""
									}`}
								>
									<h3 className="w-3/5">{task.title}</h3>
									<span
										className={`${
											task.status === "Done"
												? "bg-green-200 text-green-900"
												: "bg-amber-200 text-amber-900"
										} font-semibold rounded-full text-[1.5vh] px-[1.25vw] py-[0.25vh] w-1/5 flex items-center justify-center mr-[1vw]`}
									>
										{task.status.toLowerCase()}
									</span>
									<p className="w-1/5 flex items-center justify-center">
										{task.date}
									</p>
								</motion.div>
							))}
						</div>
					</motion.div>
				</motion.div>
			))}
		</motion.div>
	);
};

export default DashboardSecondCol;
