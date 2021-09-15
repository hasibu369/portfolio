import React, { Component } from "react";
import data from "./skills.json"

interface Skill{
	image: string;
	name: string;
}
const skills:Skill[] = data

export default class Skills extends Component {
	render() {
		return (
			<div className="row p-0 main">
				<div className="col-12 bg-info p-5">
					<h1>Skills</h1>
					<div className="row">
						<hr />
						{skills.map((skill) => (
							<div
								className="col-6
                                    col-sm-6 col-md-4 col-lg-3
                                     p-2 my-2 d-flex flex-column
                                    justify-content-center
                                    align-items-center
                                    skillsIcon
                                    "
							>
								<img
									src={skill.image}
									alt=""
									width="100"
									height="100"
								/>
								<span>{skill.name}</span>
							</div>
						))}
					</div>
				</div>
			</div>
		);
	}
}
