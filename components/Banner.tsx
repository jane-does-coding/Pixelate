import React from "react";

const Banner = () => {
	return (
		<div className="mb-[10vh]">
			<img
				src="https://placehold.co/1080x600"
				className="w-[90vw] mx-auto rounded-[0.5rem] h-[66.5vh] object-cover"
				alt=""
			/>
			<div className="flex w-[90vw] mx-auto mt-[0.25rem]">
				<div className="w-1/3 flex items-center justify-start">
					<p className=" text-[4vh]">+</p>
				</div>
				<div className="w-1/3 flex items-center justify-between">
					<p className=" text-[4vh]">+</p>
					<h3 className="uppercase font-semibold text-[2.5vh]">
						Sroll to Explore
					</h3>
					<p className=" text-[4vh]">+</p>
				</div>
				<div className="w-1/3 flex items-center justify-end">
					<p className=" text-[4vh]">+</p>
				</div>
			</div>
		</div>
	);
};

export default Banner;
