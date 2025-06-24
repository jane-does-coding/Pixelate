import React from "react";
import { IoChevronUpOutline } from "react-icons/io5";

const Footer = () => {
	return (
		<div className="flex justify-between w-[90vw] mx-auto pb-[3vh]">
			<a className="flex gap-[1vw] items-center justify-center">
				Back to the top <IoChevronUpOutline size={20} />
			</a>
			<h2 className="font-semibold text-[2.25vh]">Pixelate</h2>
			<a className="">Lorem Ipsum</a>
		</div>
	);
};

export default Footer;
