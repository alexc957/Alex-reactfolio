import React from "react";
import { faCode } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import INFO from "../../data/user";

import "./styles/skills.scss";

const Skills = () => {
	return (
		<div className="skills">
			<Card
				icon={faCode}
				title="Skills"
				body={
					<div className="skills-body">
						{INFO.skills.map((skill, index) => (
							<span className="skill-tag" key={index}>
								{skill}
							</span>
						))}
					</div>
				}
			/>
		</div>
	);
};

export default Skills;
