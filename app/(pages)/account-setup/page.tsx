"use client";
import AvatarSelection from "./_components/AvatarSelection";
import FormHeader from "./_components/FormHeader";
import PersonalInfoForm from "./_components/PersonalInfoForm";
import SetupForm from "./_components/SetupForm";
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FaBatteryHalf } from "react-icons/fa";

const page = () => {
	return (
		<div className="flex flex-col md:flex-row w-[90vw] mx-auto pt-[4vh]">
			<div className="w-full md:w-2/5 md:p-[2vh]">
				<AvatarSelection />
				<div className="flex items-center justify-between mt-[2vh]">
					<div className="flex gap-[0.5vw] ">
						<FaHeart size={22} className="text-red-700" />
						<FaHeart size={22} className="text-red-700" />
						<FaHeart size={22} className="text-red-700" />
						<FaHeart size={22} className="text-red-700" />
						<FaHeart size={22} className="text-red-700" />
					</div>
					<FaBatteryHalf size={26} className="text-amber-600" />
				</div>
				<PersonalInfoForm />
			</div>
			<div className="w-full md:w-3/5 pl-[2vw]">
				<FormHeader />
				<SetupForm />
			</div>
		</div>
	);
};

export default page;
