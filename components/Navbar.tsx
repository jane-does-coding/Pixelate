"use client";

import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const Navbar = () => {
	const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

	return (
		<div className="flex w-[90vw] mx-auto mt-[5vh] mb-[3vh]">
			<motion.h1
				ref={ref}
				initial={{ opacity: 0, y: 10 }}
				animate={inView ? { opacity: 1, y: 0 } : {}}
				transition={{ duration: 0.3, ease: "easeOut" }}
				className="text-[4vh] w-1/5 font-semibold uppercase"
			>
				Pixelate
			</motion.h1>
			<motion.p
				ref={ref}
				initial={{ opacity: 0, y: 10 }}
				animate={inView ? { opacity: 1, y: 0 } : {}}
				transition={{ duration: 0.3, delay: 0.1, ease: "easeOut" }}
				className="text-[3.25vh] w-2/5"
			>
				Level up your daily grind by turning goals and habits into quests you
				actually wanna complete.
			</motion.p>
			<div className="flex w-2/5 gap-[1rem] items-start justify-end">
				<motion.a
					ref={ref}
					initial={{ opacity: 0, y: 10 }}
					animate={inView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.3, delay: 0.2, ease: "easeOut" }}
					href=""
					className=" uppercase text-[0.75rem] font-semibold bg-neutral-800 px-[1.5rem] py-[0.5rem] h-fit w-fit text-white rounded-full"
				>
					Get Started •
				</motion.a>
				<motion.a
					ref={ref}
					initial={{ opacity: 0, y: 10 }}
					animate={inView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.3, delay: 0.3, ease: "easeOut" }}
					href=""
					className=" uppercase text-[0.75rem] font-semibold shadow-md bg-neutral-100 px-[1.5rem] py-[0.5rem] h-fit w-fit text-black rounded-full"
				>
					Menu +
				</motion.a>
			</div>
		</div>
	);
};

export default Navbar;
