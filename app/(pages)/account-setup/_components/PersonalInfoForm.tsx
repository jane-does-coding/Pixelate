import React from "react";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";

const PersonalInfoForm = () => {
	return (
		<div className="w-full pt-[2vh] flex flex-col gap-[2vh]">
			<Select>
				<SelectTrigger className="w-full text-black border-neutral-400 text-[2.25vh] py-[2.5vh] px-[1.5vw]">
					<SelectValue placeholder="Gender" />
				</SelectTrigger>
				<SelectContent>
					<SelectItem
						className="text-black border-neutral-400 text-[2.25vh]"
						value="female"
					>
						Female
					</SelectItem>
					<SelectItem
						className="text-black border-neutral-400 text-[2.25vh]"
						value="male"
					>
						Male
					</SelectItem>
					<SelectItem
						className="text-black border-neutral-400 text-[2.25vh]"
						value="other"
					>
						Other
					</SelectItem>
				</SelectContent>
			</Select>
			<Input placeholder="Full Name" className="mb-2" />
		</div>
	);
};

export default PersonalInfoForm;
