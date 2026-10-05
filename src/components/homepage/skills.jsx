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
						{INFO.skills.map((group, index) => (
							<div className="skill-group" key={index}>
								<div className="skill-category">
									{group.category}
								</div>
								<div className="skill-tags">
									{group.items.map((skill, i) => (
										<span className="skill-tag" key={i}>
											{skill}
										</span>
									))}
								</div>
							</div>
						))}
					</div>
				}
			/>
		</div>
	);
};

export default Skills;
