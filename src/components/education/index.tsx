import React, {Component} from "react";
import data from "./education.json";

interface Course {
	organization: string;
	name: string;
	graduation: string;
	logo: string;
}

const courses: Course[] = data;

export default class Education extends Component {
	render() {
		return (
			<div>
				<div className="row p-0 main">
					<div className="col-12 bg-info p-5">
						<h1>Education</h1>
														<hr className="my-2" />

						{courses.map((course) => (
							<div className="row">
								
								<div className="col-12 col-md-9 col-lg-7 d-flex flex-row justify-content-between">
									<div className="">
										<div className="d-flex flex-column">
											<h5 className="card-title">{course.organization}</h5>
											<span className="card-text">{course.name}</span>
											<span>{course.graduation}</span>
										</div>
									</div>
<!-- 									<img
										src={course.logo}
										width="auto"
										height="90"
										className="icons me-3"
										alt="organisation logo"
									/> -->
								</div>
																<hr className="my-2" />

							</div>
						))}
					</div>
				</div>
			</div>
		);
	}
}
