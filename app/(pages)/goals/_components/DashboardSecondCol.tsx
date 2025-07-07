"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaExternalLinkAlt } from "react-icons/fa";

type MainQuestProps = {
	title: string;
	link: string;
	tasksCompleted: number;
	totalTasks: number;
	endDate: string;
	progressPercent: number;
	progressBehind?: boolean;
	taskList: string[];
	color?: string; // <-- NEW!!
};

const MainQuest = ({
	title,
	link,
	tasksCompleted,
	totalTasks,
	endDate,
	progressPercent,
	progressBehind = false,
	taskList,
	color = "red", // Default color
}: MainQuestProps) => {
	const progressGoalPercent = 40; // Fake goal target marker

	// Build Tailwind class names dynamically
	const backgroundShaded = `bg-${color}-300/50`;
	const progressColor = `bg-${color}-400`;

	return (
		<div className="border-[1.5px] border-neutral-300 w-full flex flex-col items-start justify-center rounded-[0.5rem] py-[2.5vh] px-[1.5vw]">
			<a
				href={link}
				className="font-semibold text-[2.25vh] flex items-center justify-start gap-[1vw] mb-[0.25vh]"
			>
				{title} <FaExternalLinkAlt size={16} />
			</a>
			<p className="text-[1.5vh] text-neutral-500">
				{tasksCompleted}/{totalTasks} Tasks •{" "}
				{Math.round((tasksCompleted / totalTasks) * 100)}% completed
			</p>
			<p className="text-[1.5vh] text-neutral-500">Goal end date: {endDate}</p>

			{/* Progress bar */}
			<div className="flex w-full relative mt-[1.5vh]">
				<div className="flex w-full h-6 bg-neutral-200 rounded-[0.5rem]" />

				{/* Behind Goal */}
				{progressBehind && (
					<div
						className={`absolute h-6 ${backgroundShaded} rounded-l-[0.5rem]`}
						style={{ width: `${progressGoalPercent}%` }}
					/>
				)}

				{/* Progress */}
				<div
					className={`absolute h-6 ${progressColor} rounded-[0.5rem]`}
					style={{ width: `${progressPercent}%` }}
				/>

				{/* Goal marker */}
				{(progressBehind || !progressBehind) && (
					<>
						<div
							className="absolute h-6 w-[2px] bg-black"
							style={{ marginLeft: `${progressGoalPercent}%` }}
						/>
						<div
							className="absolute top-[50%] translate-y-[-50%]"
							style={{ marginLeft: `${progressGoalPercent + 3}%` }}
						>
							{progressBehind && (
								<p className="text-[1.5vh] leading-[1.5vh]">Goal</p>
							)}
						</div>
					</>
				)}
			</div>

			{/* Tasks */}
			<div className="grid grid-cols-2 w-full gap-[0.5vw] mt-[1.75vh]">
				{taskList.map((task, i) => (
					<a
						key={i}
						href=""
						className="w-full bg-neutral-50 border-[1.5px] border-neutral-300 py-[0.25vh] rounded-[0.5rem] flex items-center justify-center text-center px-[0.5vw]"
					>
						{task}
					</a>
				))}
			</div>
		</div>
	);
};

const DashboardSecondCol = () => {
	const { ref: headingRef, inView: headingInView } = useInView({
		triggerOnce: true,
		threshold: 0.2,
	});

	const { ref: cardRef, inView: cardInView } = useInView({
		triggerOnce: true,
		threshold: 0.1,
	});

	return (
		<div>
			{/* Heading */}
			<motion.h2
				ref={headingRef}
				initial={{ opacity: 0, y: 20 }}
				animate={headingInView ? { opacity: 1, y: 0 } : {}}
				transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
				className="text-[4vh] px-[2vw] mb-[1vh]"
			>
				Main Quests
			</motion.h2>

			{/* Cards */}
			<motion.div
				ref={cardRef}
				initial={{ opacity: 0, y: 20 }}
				animate={cardInView ? { opacity: 1, y: 0 } : {}}
				transition={{ duration: 0.4, delay: 0.3, ease: "easeOut" }}
				className="flex flex-col md:flex-row gap-[2vw] px-[2vw]"
			>
				<MainQuest
					title="Get a job"
					link="/"
					tasksCompleted={2}
					totalTasks={8}
					endDate="08/01/2025"
					progressPercent={30}
					progressBehind={true}
					color="red"
					taskList={["Apply to 10 jobs", "Update Resume"]}
				/>

				<MainQuest
					title="Get a driver’s license"
					link="/"
					tasksCompleted={3}
					totalTasks={5}
					endDate="07/20/2025"
					progressPercent={60}
					progressBehind={false}
					color="blue"
					taskList={["Read handbook", "Practice tests"]}
				/>
			</motion.div>

			<motion.h2
				ref={headingRef}
				initial={{ opacity: 0, y: 20 }}
				animate={headingInView ? { opacity: 1, y: 0 } : {}}
				transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
				className="text-[4vh] px-[2vw] mb-[1vh] mt-[2vh]"
			>
				Side Quests
			</motion.h2>
		</div>
	);
};

export default DashboardSecondCol;
