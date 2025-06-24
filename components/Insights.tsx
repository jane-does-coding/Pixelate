"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Card = () => {
	const { ref, inView } = useInView({
		triggerOnce: true,
		threshold: 0.2,
	});

	return (
		<motion.div
			ref={ref}
			className="border-t-2 border-neutral-200 flex flex-col md:flex-row py-[3vh] gap-[2.5vw] mb-[3vh]"
		>
			{/* Image */}
			<motion.img
				initial={{ opacity: 0, y: 20 }}
				animate={inView ? { opacity: 1, y: 0 } : {}}
				transition={{ duration: 0.4, ease: "easeOut" }}
				src="https://placehold.co/600x400"
				className="w-full md:w-[30vw] rounded-[0.5rem]"
				alt=""
			/>

			{/* Content */}
			<div className="flex flex-col pb-[4vh] pt-[1vh]">
				{/* Heading */}
				<motion.h3
					initial={{ opacity: 0, y: 20 }}
					animate={inView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
					className="text-center md:text-left text-[5vh] mb-[1vh]"
				>
					Lorem, ipsum dolor.
				</motion.h3>

				{/* Subtext */}
				<motion.p
					initial={{ opacity: 0, y: 20 }}
					animate={inView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.4, delay: 0.35, ease: "easeOut" }}
					className="text-center md:text-left text-[2.25vh] w-[90%] mb-[4vh] md:mb-0"
				>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
					similique nesciunt maiores facere quo iste cupiditate accusantium
					animi. Aspernatur, nostrum!
				</motion.p>

				{/* Footer Details */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={inView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.4, delay: 0.5, ease: "easeOut" }}
					className="mt-auto flex flex-col md:flex-row items-center justify-between"
				>
					<p className="text-[1.5vh] font-medium uppercase">
						Lorem • ipsum • dolor • sit • amet
					</p>
					<p className="text-[1.5vh] font-medium uppercase">
						September 21, 2025
					</p>
				</motion.div>
			</div>
		</motion.div>
	);
};

const Insights = () => {
	const { ref: headingRef, inView: headingInView } = useInView({
		triggerOnce: true,
		threshold: 0.2,
	});
	const { ref: pRef, inView: pInView } = useInView({
		triggerOnce: true,
		threshold: 0.2,
	});

	return (
		<div className="w-[90vw] mx-auto">
			{/* Section Heading */}
			<div className="w-[90vw] mx-auto flex justify-between items-end mb-[3vh]">
				<motion.h2
					ref={headingRef}
					initial={{ opacity: 0, y: 20 }}
					animate={headingInView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.3, delay: 0.1, ease: "easeOut" }}
					className="text-[12vh]"
				>
					Lorem Ipsum
				</motion.h2>
				<motion.p
					ref={pRef}
					initial={{ opacity: 0, y: 20 }}
					animate={pInView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.3, delay: 0.2, ease: "easeOut" }}
					className="w-[20vw] text-[2vh] pb-[1vh]"
				>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, ut.
					Lorem ipsum dolor sit amet.
				</motion.p>
			</div>

			{/* Cards */}
			<div className="flex flex-col">
				<Card />
				<Card />
				<Card />
			</div>
		</div>
	);
};

export default Insights;
