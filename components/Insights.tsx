import React from "react";

const Card = () => {
	return (
		<div className="border-t-2 border-neutral-200 flex flex-col md:flex-row py-[3vh] gap-[2.5vw] mb-[10vh]">
			<img
				src="https://placehold.co/600x400"
				className="w-full md:w-[30vw] rounded-[0.5rem]"
				alt=""
			/>
			<div className="flex flex-col  pb-[4vh] pt-[1vh]">
				<h3 className="text-center md:text-left text-[5vh] mb-[1vh]">
					Lorem, ipsum dolor.
				</h3>
				<p className="text-center md:text-left text-[2.25vh] w-[90%] mb-[4vh] md:mb-0">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
					similique nesciunt maiores facere quo iste cupiditate accusantium
					animi. Aspernatur, nostrum!
				</p>
				<div className="mt-auto flex flex-col md:flex-row items-center justify-between">
					<p className="text-[1.5vh] font-medium uppercase">
						Lorem • ipsum • dolor • sit • amet
					</p>
					<p className="text-[1.5vh] font-medium uppercase">
						September 21, 2025
					</p>
				</div>
			</div>
		</div>
	);
};

const Insights = () => {
	return (
		<div className="w-[90vw] mx-auto">
			<h2 className="text-[12vh] mb-[2vh]">Lorem Ipsum</h2>
			<div className="flex flex-col">
				<Card />
				<Card />
			</div>
		</div>
	);
};

export default Insights;
