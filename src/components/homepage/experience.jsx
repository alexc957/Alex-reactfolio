import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import INFO from "../../data/user";

import "./styles/experience.scss";

const Experience = () => {
	return (
		<div className="experience">
			<Card
				icon={faBriefcase}
				title="Work Experience"
				body={
					<div className="experience-body">
						{INFO.experience.map((work, index) => (
							<div className="experience-entry" key={index}>
								<div className="experience-header">
									<div className="experience-role">
										{work.role}
									</div>
									<div className="experience-duration">
										{work.duration}
									</div>
								</div>
								<div className="experience-company">
									{work.company}, {work.location}
								</div>

								{work.projects ? (
									<div className="experience-projects">
										{work.projects.map((project, pi) => (
											<div
												className="experience-project"
												key={pi}
											>
												<div className="experience-project-head">
													<div className="experience-project-name">
														{project.name}
													</div>
													{project.stack && (
														<div className="experience-project-stack">
															{project.stack}
														</div>
													)}
												</div>
												<ul className="experience-points">
													{project.points.map(
														(point, i) => (
															<li key={i}>
																{point}
															</li>
														)
													)}
												</ul>
											</div>
										))}
									</div>
								) : (
									<ul className="experience-points">
										{work.points.map((point, i) => (
											<li key={i}>{point}</li>
										))}
									</ul>
								)}
							</div>
						))}
					</div>
				}
			/>
		</div>
	);
};

export default Experience;
