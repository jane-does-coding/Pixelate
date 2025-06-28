"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const FormHeader = () => {
	const { ref: headingRef, inView: headingInView } = useInView({
		triggerOnce: true,
		threshold: 0.2,
	});
	const { ref: pRef, inView: pInView } = useInView({
		triggerOnce: true,
		threshold: 0.2,
	});

	return (
		<div className="w-full mx-auto flex flex-col justify-center items-center mb-[2vh]">
			<motion.h2
				ref={headingRef}
				initial={{ opacity: 0, y: 20 }}
				animate={headingInView ? { opacity: 1, y: 0 } : {}}
				transition={{ duration: 0.3, delay: 0.2, ease: "easeOut" }}
				className="text-[6vh]"
			>
				Customize Profile
			</motion.h2>
			<motion.p
				ref={pRef}
				initial={{ opacity: 0, y: 20 }}
				animate={pInView ? { opacity: 1, y: 0 } : {}}
				transition={{ duration: 0.3, delay: 0.3, ease: "easeOut" }}
				className="w-full text-[2vh] pb-[1vh] text-center"
			>
				Build habits, crush goals, and level up daily. Track progress, earn XP,
				and stay motivated.
			</motion.p>
		</div>
	);
};

export default FormHeader;
