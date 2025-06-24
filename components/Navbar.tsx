"use client";

import { useInView } from "react-intersection-observer"; // 👉 correct import
import { motion } from "framer-motion";

const Navbar = () => {
	const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.1 });

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
			<p className="text-[3.25vh] w-2/5">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla molestiae
				fugiat earum quo non. Eos?
			</p>
			<div className="flex w-2/5 gap-[1rem] items-start justify-end">
				<a
					href=""
					className=" uppercase text-[0.75rem] font-semibold bg-neutral-800 px-[1.5rem] py-[0.5rem] h-fit w-fit text-white rounded-full"
				>
					Let&apos;s Talk •
				</a>
				<a
					href=""
					className=" uppercase text-[0.75rem] font-semibold shadow-md bg-neutral-100 px-[1.5rem] py-[0.5rem] h-fit w-fit text-black rounded-full"
				>
					Menu +
				</a>
			</div>
		</div>
	);
};

export default Navbar;
