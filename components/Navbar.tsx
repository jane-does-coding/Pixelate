import React from "react";

const Navbar = () => {
	return (
		<div className="flex w-[90vw] mx-auto mt-[2.25rem] mb-[1.5rem]">
			<h1 className="text-[4vh] w-1/5 font-semibold uppercase">Pixelate</h1>
			<p className="text-[3.25vh] w-2/5">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla molestiae
				fugiat earum quo non. Eos?
			</p>
			<div className="flex w-2/5 gap-[1rem] items-start justify-end">
				<a
					href=""
					className=" uppercase text-[1rem] bg-neutral-800 px-[1.5rem] py-[0.5rem] h-fit w-fit text-white rounded-full"
				>
					Let's Talk •
				</a>
				<a
					href=""
					className=" uppercase text-[1rem] bg-neutral-200 px-[1.5rem] py-[0.5rem] h-fit w-fit text-black rounded-full"
				>
					Menu +
				</a>
			</div>
		</div>
	);
};

export default Navbar;
