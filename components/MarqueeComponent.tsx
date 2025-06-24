import React from "react";
import Marquee from "react-fast-marquee";
import {
	FiHome,
	FiFolderPlus,
	FiBriefcase,
	FiBookmark,
	FiHeadphones,
	FiGitlab,
} from "react-icons/fi";

const MarqueeComponent = () => {
	return (
		<div className="">
			<Marquee>
				<div className="flex mb-[5vh]">
					<div className="rounded-[0.5rem] bg-neutral-100 w-[20vw] h-[15vh] flex items-center justify-center px-[2vw] py-[2vh] mr-[2vw]">
						<FiBriefcase size={30} />
					</div>
					<div className="rounded-[0.5rem] bg-neutral-100 w-[20vw] h-[15vh] flex items-center justify-center px-[2vw] py-[2vh] mr-[2vw]">
						<FiBookmark size={30} />
					</div>
					<div className="rounded-[0.5rem] bg-neutral-100 w-[20vw] h-[15vh] flex items-center justify-center px-[2vw] py-[2vh] mr-[2vw]">
						<FiFolderPlus size={30} />
					</div>
					<div className="rounded-[0.5rem] bg-neutral-100 w-[20vw] h-[15vh] flex items-center justify-center px-[2vw] py-[2vh] mr-[2vw]">
						<FiHome size={30} />
					</div>
					<div className="rounded-[0.5rem] bg-neutral-100 w-[20vw] h-[15vh] flex items-center justify-center px-[2vw] py-[2vh] mr-[2vw]">
						<FiHeadphones size={30} />
					</div>
					<div className="rounded-[0.5rem] bg-neutral-100 w-[20vw] h-[15vh] flex items-center justify-center px-[2vw] py-[2vh] mr-[2vw]">
						<FiGitlab size={30} />
					</div>
				</div>
			</Marquee>
		</div>
	);
};

export default MarqueeComponent;
