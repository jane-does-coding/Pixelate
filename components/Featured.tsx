import React from "react";

const Card = () => {
	return (
		<div className="flex flex-col">
			<img
				src="https://placehold.co/600x400"
				className="h-[45vh] w-full object-cover rounded-[0.5rem] mb-[0.75rem]"
				alt=""
			/>
			<p className="text-[1.5vh] font-medium uppercase">
				Lorem • ipsum • dolor • sit • amet
			</p>
			<h2 className="text-[5vh]">Lorem ipsum dolor</h2>
		</div>
	);
};

const Featured = () => {
	return (
		<div className="mb-[12.5vh]">
			<div className="w-[90vw] mx-auto flex justify-between items-end">
				<h2 className="text-[12vh]">Lorem Ipsum</h2>
				<p className="w-[20vw] text-[2vh] pb-[1vh]">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, ut.
					Lorem ipsum dolor sit amet.
				</p>
			</div>
			<br />
			<div className="grid grid-cols-1 md:grid-cols-2 gap-[4vh] gap-y-[8vh] w-[90vw] mb-[7.5vh] mx-auto">
				<Card />
				<Card />
				<Card />
				<Card />
			</div>
			<div className="w-[90vw] mx-auto flex items-center justify-center">
				<a
					href=""
					className=" uppercase text-[0.75rem] font-semibold bg-neutral-100 shadow-md px-[1.5rem] py-[0.5rem] h-fit w-fit text-black rounded-full"
				>
					Let's Talk •
				</a>
			</div>
			<div className="flex w-[90vw] mx-auto mt-[5vh]">
				<div className="w-1/3 flex items-center justify-start">
					<p className=" text-[4vh]">+</p>
				</div>
				<div className="w-1/3 flex items-center justify-between">
					<p className=" text-[4vh]">+</p>

					<p className=" text-[4vh]">+</p>
				</div>
				<div className="w-1/3 flex items-center justify-end">
					<p className=" text-[4vh]">+</p>
				</div>
			</div>
		</div>
	);
};

export default Featured;
