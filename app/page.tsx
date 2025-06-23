import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
	return (
		<div className="">
			<Navbar />
			<img
				src="/banner.jpg"
				className="w-[90vw] mx-auto rounded-[1rem] h-[66.5vh] object-cover"
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
}
