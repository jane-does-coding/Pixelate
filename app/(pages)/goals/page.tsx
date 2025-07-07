"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import DashboardFirstCol from "../dashboard/_components/DashboardFirstCol";
import DashboardSecondCol from "./_components/DashboardSecondCol";

const Page = () => {
	const { ref: headingRef, inView: headingInView } = useInView({
		triggerOnce: true,
		threshold: 0.2,
	});
	return (
		<div className="w-[92.5vw] mx-auto mt-[2vh]">
			<motion.h2
				ref={headingRef}
				initial={{ opacity: 0, y: 20 }}
				animate={headingInView ? { opacity: 1, y: 0 } : {}}
				transition={{ duration: 0.3, delay: 0.2, ease: "easeOut" }}
				className="text-[8vh]"
			>
				Life RPG
			</motion.h2>
			<div className="w-full flex">
				<div className="w-4/20">
					<DashboardFirstCol />
				</div>
				<div className="w-11/20 bg-red-100/0">
					<DashboardSecondCol />
				</div>
				<div className="w-5/20 bg-blue-100/0">
					<h2></h2>
				</div>
			</div>
		</div>
	);
};

export default Page;
