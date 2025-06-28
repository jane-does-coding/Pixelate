"use client";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { FaStar } from "react-icons/fa";

const tabs = ["Profile", "Main Quests", "Side Quests", "Habits", "Skills"];

const SetupForm = () => {
	const [activeTab, setActiveTab] = useState("Profile");

	// Dynamic fields state
	const [strengths, setStrengths] = useState([""]);
	const [weaknesses, setWeaknesses] = useState([""]);
	const [mainQuests, setMainQuests] = useState([
		{ name: "", deadline: "", subquests: [""] },
	]);
	const [sideQuests, setSideQuests] = useState([""]);
	const [dailyHabits, setDailyHabits] = useState([""]);
	const [quitHabits, setQuitHabits] = useState([""]);
	const [skills, setSkills] = useState([{ name: "", rating: 5 }]);

	return (
		<div className="flex flex-col w-full max-w-[90vw] mx-auto">
			{/* Tabs */}
			<div className={`grid grid-cols-5 gap-[0.5vw] mb-6 w-full`}>
				{tabs.map((tab) => (
					<Button
						key={tab}
						variant={activeTab === tab ? "default" : "outline"}
						onClick={() => setActiveTab(tab)}
						className="rounded-full px-[1.5vw] py-[1vh] text-[2vh] h-[5vh] w-full"
					>
						{tab}
					</Button>
				))}
			</div>

			{/* Profile */}
			{activeTab === "Profile" && (
				<div className="flex flex-col gap-4">
					<div>
						<p className="font-medium mb-[1.25vh]">Username</p>
						<Input placeholder="Enter your username" />
					</div>
					<div>
						<p className="font-medium mb-[1.25vh]">Email</p>
						<Input placeholder="Enter your email" />
					</div>
					<div className="flex gap-4">
						{/* Strengths */}
						<div className="w-1/2">
							<p className="font-medium mb-[1.25vh]">Strengths</p>
							{strengths.map((val, idx) => (
								<Input
									key={idx}
									placeholder="e.g. Discipline"
									value={val}
									onChange={(e) => {
										const newArr = [...strengths];
										newArr[idx] = e.target.value;
										setStrengths(newArr);
									}}
									className="mb-2"
								/>
							))}
							<Button
								variant="outline"
								onClick={() => setStrengths([...strengths, ""])}
							>
								+ Add Strength
							</Button>
						</div>

						{/* Weaknesses */}
						<div className="w-1/2">
							<p className="font-medium mb-[1.25vh]">Weaknesses</p>
							{weaknesses.map((val, idx) => (
								<Input
									key={idx}
									placeholder="e.g. Procrastination"
									value={val}
									onChange={(e) => {
										const newArr = [...weaknesses];
										newArr[idx] = e.target.value;
										setWeaknesses(newArr);
									}}
									className="mb-2"
								/>
							))}
							<Button
								variant="outline"
								onClick={() => setWeaknesses([...weaknesses, ""])}
							>
								+ Add Weakness
							</Button>
						</div>
					</div>
				</div>
			)}

			{/* Main Quests */}
			{activeTab === "Main Quests" && (
				<div className="flex flex-col gap-6">
					{mainQuests.map((quest, qIdx) => (
						<div
							key={qIdx}
							className="border border-neutral-400 rounded-xl p-4 flex flex-col gap-4"
						>
							<div>
								<p className="font-medium mb-[1.25vh] flex gap-[1vw]">
									Main Quest Name
								</p>
								<Input
									placeholder="e.g. Get a Job"
									value={quest.name}
									onChange={(e) => {
										const copy = [...mainQuests];
										copy[qIdx].name = e.target.value;
										setMainQuests(copy);
									}}
								/>
							</div>
							<div>
								<p className="font-medium mb-[1.25vh]">Deadline</p>
								<Input
									placeholder="e.g. 2025-09-01"
									value={quest.deadline}
									onChange={(e) => {
										const copy = [...mainQuests];
										copy[qIdx].deadline = e.target.value;
										setMainQuests(copy);
									}}
								/>
							</div>

							{/* Subquests */}
							<div>
								<p className="font-medium mb-[1.25vh]">Subquests</p>
								{quest.subquests.map((sub, sIdx) => (
									<Input
										key={sIdx}
										placeholder="e.g. Apply to 20 jobs"
										value={sub}
										onChange={(e) => {
											const copy = [...mainQuests];
											copy[qIdx].subquests[sIdx] = e.target.value;
											setMainQuests(copy);
										}}
										className="mb-2"
									/>
								))}
								<Button
									variant="outline"
									onClick={() => {
										const copy = [...mainQuests];
										copy[qIdx].subquests.push("");
										setMainQuests(copy);
									}}
								>
									+ Add Subquest
								</Button>
							</div>
						</div>
					))}
					<Button
						variant="outline"
						onClick={() =>
							setMainQuests([
								...mainQuests,
								{ name: "", deadline: "", subquests: [""] },
							])
						}
					>
						+ Add Another Main Quest
					</Button>
				</div>
			)}

			{/* Side Quests */}
			{activeTab === "Side Quests" && (
				<div className="flex flex-col gap-4">
					{sideQuests.map((quest, idx) => (
						<Input
							key={idx}
							placeholder="e.g. Learn Cooking"
							value={quest}
							onChange={(e) => {
								const copy = [...sideQuests];
								copy[idx] = e.target.value;
								setSideQuests(copy);
							}}
							className="mb-2 border-neutral-300"
						/>
					))}
					<Button
						variant="outline"
						onClick={() => setSideQuests([...sideQuests, ""])}
					>
						+ Add Side Quest
					</Button>
				</div>
			)}

			{/* Habits */}
			{activeTab === "Habits" && (
				<div className="flex flex-col gap-8">
					{/* Daily Habits */}
					<div className="flex flex-col gap-4">
						<h3 className="text-lg font-semibold">Daily Habits</h3>
						{dailyHabits.map((habit, idx) => (
							<Input
								key={idx}
								placeholder="e.g. Morning walk"
								value={habit}
								onChange={(e) => {
									const copy = [...dailyHabits];
									copy[idx] = e.target.value;
									setDailyHabits(copy);
								}}
								className="mb-2"
							/>
						))}
						<Button
							variant="outline"
							onClick={() => setDailyHabits([...dailyHabits, ""])}
						>
							+ Add Habit
						</Button>
					</div>

					{/* Habits to Quit */}
					<div className="flex flex-col gap-4">
						<h3 className="text-lg font-semibold">Habits to Quit</h3>
						{quitHabits.map((habit, idx) => (
							<Input
								key={idx}
								placeholder="e.g. Doomscrolling"
								value={habit}
								onChange={(e) => {
									const copy = [...quitHabits];
									copy[idx] = e.target.value;
									setQuitHabits(copy);
								}}
								className="mb-2"
							/>
						))}
						<Button
							variant="outline"
							onClick={() => setQuitHabits([...quitHabits, ""])}
						>
							+ Add Habit to Quit
						</Button>
					</div>
				</div>
			)}

			{/* Skills */}
			{activeTab === "Skills" && (
				<div className="flex flex-col ">
					<h3 className="text-lg font-semibold">Skills</h3>
					<p className="text-sm text-neutral-500 mb-[3vh]">
						Add any skill and rate yourself from 1 to 10.
					</p>
					{skills.map((skill, idx) => (
						<div
							key={idx}
							className="border border-neutral-300 rounded-xl p-4 flex flex-col gap-2 mb-[3vh]"
						>
							<div className="flex gap-4">
								<div className="flex-1">
									<Label className="mb-[2vh]">Skill Name</Label>
									<Input
										placeholder="e.g. React, Cooking"
										value={skill.name}
										onChange={(e) => {
											const copy = [...skills];
											copy[idx].name = e.target.value;
											setSkills(copy);
										}}
									/>
								</div>
								<div className="w-[120px]">
									<Label className="mb-[2vh]">Rating</Label>
									<Input
										type="number"
										min={1}
										max={10}
										value={skill.rating}
										onChange={(e) => {
											const copy = [...skills];
											copy[idx].rating = Number(e.target.value);
											setSkills(copy);
										}}
									/>
								</div>
							</div>
						</div>
					))}
					<Button
						variant="outline"
						onClick={() => setSkills([...skills, { name: "", rating: 5 }])}
					>
						+ Add Skill
					</Button>
				</div>
			)}

			{/* Submit */}
			<div className="flex justify-end mt-8">
				<Button>Save & Continue</Button>
			</div>
		</div>
	);
};

export default SetupForm;
