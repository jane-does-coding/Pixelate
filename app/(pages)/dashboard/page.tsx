"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Dashboard from "./_components/Dashboard";

const page = () => {
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
			<Dashboard />
		</div>
	);
};

export default page;
