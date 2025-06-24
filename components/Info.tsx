import React from "react";
import { IoLogoInstagram } from "react-icons/io5";
import { LuLinkedin } from "react-icons/lu";
import { AiOutlineTikTok } from "react-icons/ai";

const Info = () => {
	return (
		<div className=" mb-[10vh]">
			<div className="w-[90vw] mx-auto flex flex-col md:flex-row h-[70vh]">
				<div className="w-full md:w-1/3 flex flex-col items-center justify-center p-[1.25rem] border-r-[2px] border-b-[2px] border-neutral-200">
					<div className="mb-[3vh] px-[1vw]">
						<h2 className="text-[4.5vh] pb-[1vh]">Lorem ipsum dolor</h2>
						<p className="text-[1.5vh] font-medium uppercase">
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores
							quas maiores pariatur, inventore reiciendis perspiciatis?
						</p>
					</div>
					<img
						src="https://placehold.co/300x300"
						className="w-full aspect-[1] object-cover rounded-[0.5rem]"
						alt=""
					/>
				</div>
				<div className="w-full md:w-1/3 flex flex-col items-center justify-center p-[1.25rem] border-b-[2px] border-neutral-200">
					<div className="mb-[3vh] px-[1vw]">
						<h2 className="text-[4.5vh] pb-[1vh]">Lorem ipsum dolor</h2>
						<p className="text-[1.5vh] font-medium uppercase">
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores
							quas maiores pariatur, inventore reiciendis perspiciatis?
						</p>
					</div>
					<img
						src="https://placehold.co/300x300"
						className="w-full aspect-[1] object-cover rounded-[0.5rem]"
						alt=""
					/>
				</div>
				<div className="w-full md:w-1/3 flex flex-col items-center justify-between p-[1.5rem] py-[5vh] bg-neutral-200 rounded-[0.5rem]">
					<div className="flex items-center justify-between w-full">
						<h3 className="text-[3.5vh]">Pixelate</h3>
						<div className="flex items-center gap-[1.5vw]">
							<IoLogoInstagram size={24} />
							<LuLinkedin size={24} />
							<AiOutlineTikTok size={24} />
						</div>
					</div>
					<div className="px-[1rem]">
						<h3 className="text-[5vh] mb-[1vh]">Lorem ipsum dolor sit amet.</h3>
						<h4 className="text-[2vh]">
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa
							perferendis voluptatem consectetur, nulla porro error.
						</h4>
					</div>
					<div className="pt-[1rem] border-t-2 border-neutral-300">
						<p className="text-[2vh]">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor,
							cum!
						</p>
					</div>
				</div>
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

export default Info;
