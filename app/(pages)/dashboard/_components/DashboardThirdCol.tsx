"use client";
import { motion, Variants } from "framer-motion";
import { FaCaretRight } from "react-icons/fa";

const fadeInUp = (delay: number): Variants => ({
	hidden: { opacity: 0, y: 20 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { delay, duration: 0.3, ease: "easeOut" },
	},
});

const notifications = [
	{
		time: "Today 8:30AM",
		message:
			"You've gained _250 HP_ and _250 coins_ for completing morning routine",
		reward: "+ 250 HP!",
		color: "green",
	},
	{
		time: "Today 10:00AM",
		message: "You’ve completed _‘Apply to 5 jobs’_ quest",
		reward: "+ 100 coins!",
		color: "yellow",
	},
	{
		time: "Today 1:00PM",
		message: "New habit streak! _7 days_ of _'No Doomscrolling'_",
		reward: "+ 500 XP & 300 HP!",
		color: "green",
	},
	{
		time: "Today 3:00PM",
		message: "Missed habit! _'No Doomscrolling'_ failed today",
		reward: "- 100 HP!",
		color: "red",
	},
];

const parseMessage = (message: string) => {
	const parts = message.split(/(_.*?_)/g);
	return parts.map((part, idx) => {
		if (part.startsWith("_") && part.endsWith("_")) {
			const content = part.slice(1, -1);
			return (
				<span
					key={idx}
					className="bg-neutral-700 text-white border-[1px] border-neutral-900 rounded-sm px-[0.25vw] text-[1.5vh] mx-[0.25vw] inline py-[0vh]"
				>
					{content}
				</span>
			);
		} else {
			return <span key={idx}>{part}</span>;
		}
	});
};

const DashboardThirdCol = () => {
	return (
		<motion.div
			initial="hidden"
			animate="visible"
			className="flex flex-col gap-[0]"
		>
			{/* Headings */}
			<motion.h2
				variants={fadeInUp(0)}
				className="text-[3vh] text-left mb-[1vh]"
			>
				Today
			</motion.h2>
			<motion.h3
				variants={fadeInUp(0.1)}
				className="text-[2vh] text-left mb-[0.5vh]"
			>
				Notifications
			</motion.h3>

			{/* Notifications */}
			{notifications.map((notif, idx) => (
				<motion.div
					key={idx}
					variants={fadeInUp(0.2 + idx * 0.15)}
					className="w-full rounded-[0.5rem] bg-neutral-50 border-[1.5px] border-neutral-300 px-[1.5vw] py-[1.5vh] my-[0.75vh]"
				>
					<p className="text-[1.5vh] flex gap-[0.25vw] items-center justify-start mb-[1vh]">
						<FaCaretRight size={16} /> {notif.time}
					</p>
					<h3 className="text-[1.75vh] flex flex-wrap items-center justify-start">
						{parseMessage(notif.message)}
					</h3>
					<p
						className={`text-[1.75vh] font-semibold mt-[1vh] rounded-sm px-[1vw] ${
							notif.color === "green"
								? "text-green-700 bg-green-100"
								: notif.color === "blue"
								? "text-blue-700 bg-blue-100"
								: notif.color === "purple"
								? "text-purple-700 bg-purple-100"
								: notif.color === "yellow"
								? "text-yellow-700 bg-yellow-100"
								: notif.color === "red"
								? "text-red-700 bg-red-100"
								: ""
						}`}
					>
						{notif.reward}
					</p>
				</motion.div>
			))}
		</motion.div>
	);
};

export default DashboardThirdCol;
