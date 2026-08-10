import React from "react";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import INFO from "../../data/user";

import "./styles/education.scss";

const Education = () => {
	return (
		<div className="education">
			<Card
				icon={faGraduationCap}
				title="Education"
				body={
					<div className="education-body">
						{INFO.education.map((edu, index) => (
							<div className="education-entry" key={index}>
								<div className="education-header">
									<div className="education-degree">
										{edu.degree}
									</div>
									<div className="education-duration">
										{edu.duration}
									</div>
								</div>
								<div className="education-institution">
									{edu.institution}, {edu.location}
								</div>
							</div>
						))}
					</div>
				}
			/>
		</div>
	);
};

export default Education;
