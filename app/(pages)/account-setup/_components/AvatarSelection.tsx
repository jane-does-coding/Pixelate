"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { useInView } from "react-intersection-observer";

const AvatarSelection = () => {
	const [selected, setSelected] = useState(1);
	const { ref: headingRef, inView: headingInView } = useInView({
		triggerOnce: true,
		threshold: 0.2,
	});

	return (
		<div className="">
			<motion.h2
				ref={headingRef}
				initial={{ opacity: 0, y: 20 }}
				animate={headingInView ? { opacity: 1, y: 0 } : {}}
				transition={{ duration: 0.3, delay: 0.2, ease: "easeOut" }}
				className="text-[4vh] mb-[2vh]"
			>
				Select Avatar
			</motion.h2>

			<div className="grid grid-cols-3 gap-[2vh]">
				<img
					onClick={() => setSelected(0)}
					src="/avatars/avatar1.png"
					className={`rounded-[1.5rem] transition-all ${
						selected == 0
							? "border-[6px] border-neutral-300 scale-[0.97] shadow-md"
							: "border-[2px] border-neutral-200"
					}`}
					alt=""
				/>
				<img
					onClick={() => setSelected(1)}
					src="/avatars/avatar2.png"
					className={`rounded-[1.5rem] transition-all ${
						selected == 1
							? "border-[6px] border-neutral-300 scale-[0.97] shadow-md"
							: "border-[2px] border-neutral-200"
					}`}
					alt=""
				/>
				<img
					onClick={() => setSelected(2)}
					src="/avatars/avatar3.png"
					className={`rounded-[1.5rem] transition-all ${
						selected == 2
							? "border-[6px] border-neutral-300 scale-[0.97] shadow-md"
							: "border-[2px] border-neutral-200"
					}`}
					alt=""
				/>
				<img
					onClick={() => setSelected(3)}
					src="/avatars/avatar4.png"
					className={`rounded-[1.5rem] transition-all ${
						selected == 3
							? "border-[6px] border-neutral-300 scale-[0.97] shadow-md"
							: "border-[2px] border-neutral-200"
					}`}
					alt=""
				/>
				<img
					onClick={() => setSelected(5)}
					src="/avatars/avatar5.png"
					className={`rounded-[1.5rem] transition-all ${
						selected == 5
							? "border-[6px] border-neutral-300 scale-[0.97] shadow-md"
							: "border-[2px] border-neutral-200"
					}`}
					alt=""
				/>
				<img
					onClick={() => setSelected(6)}
					src="/avatars/avatar6.png"
					className={`rounded-[1.5rem] transition-all ${
						selected == 6
							? "border-[6px] border-neutral-300 scale-[0.97] shadow-md"
							: "border-[2px] border-neutral-200"
					}`}
					alt=""
				/>
			</div>
		</div>
	);
};

export default AvatarSelection;
