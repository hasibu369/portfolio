import React, { Component } from "react";

export default class Projects extends Component {
	render() {
		return (
			<div className="row p-0 main">
				<div className="col-12 bg-info p-5">
					<h1>Projects</h1>
					<hr />
					<div className="row">
						<div className="card bg-info mb-3 col-12 col-lg-6">
							<div className="card-header">
								<h5 className="card-title">HelpSage</h5>
							</div>
							<div className="card-body">
								<p className="card-text">
								This project was part of my capstone project at Strive, which I developed with the primary 
								objective of addressing climate change and air pollution. The app fosters a sense of communal 
								responsibility, encouraging individuals to share their belongings within their local communities
								 rather than disposing of them carelessly.
								</p>
								<p>
								Helpsage provides functionalities for user registration, login, facilitating the exchange of used items 
								among neighbours, enabling discussions regarding desired products, and showcasing a selection of pre-owned
								 goods available within the community. As a result, helpsage significantly diminishes the volume of used 
								 products that find their way into landfills and oceans.
								</p>
								<p>
									<strong>Tech used:</strong>
									React, Typescript, React-router-dom, React Bootstrap, Redux, Redux-persist, Redux-thunk, Socket.io, Axios, NodeJS, ExpressJS, MongoDB, Jsonwebtoken, Multer, Cloudinary, GitHub auth, Google auth, Cookie-parser, etc…   
								</p>
							</div>
							<div className="card-footer d-flex flex-row justify-content-between">
								<button className="btn btn-primary">
									<a
										href="https://github.com/HasibDarwish/helpsage-frontend"
										target="_blank"
										rel="noreferrer"
									>
										<strong className="me-2 text-decoration-none text-white">
											F/E Code
										</strong>
										<img
											src="https://img.icons8.com/pastel-glyph/100/000000/code--v2.png"
											width="30"
											height="30"
											alt="source code"
										/>
									</a>
								</button>
								<button className="btn btn-primary">
									<a
										href="https://github.com/HasibDarwish/helpsage-back"
										target="_blank"
										rel="noreferrer"
									>
										<strong className="me-2 text-decoration-none text-white">
											B/E Code
										</strong>
										<img
											src="https://img.icons8.com/pastel-glyph/100/000000/code--v2.png"
											width="30"
											height="30"
											alt="source code"
										/>
									</a>
								</button>


							</div>
						</div>

						<div className="card bg-info mb-3 col-12 col-lg-6">
							<div className="card-header">
								<h5 className="card-title">Robot on Mars</h5>
							</div>
							<div className="card-body">
								<p className="card-text">
									
								This React application is designed to simulate the navigation of a robotic rover on a rectangular plateau 
								situated on Mars, enabling its on-board cameras to capture a comprehensive view of the surroundings and 
								transmit the images back to Earth. 

								</p>
								<p className="card-text">
								The application allows users to move the robot on the plateau grid through commands, visualise 
								its movements and final positions. The rover location is represented by a combination of x 
								and y coordinates, with a letter that designates one of the four cardinal compass points. 

								</p>
								<p className="card-text">
								For example, the rover position might be described as 1, 1, N, signifying its presence at the 
								bottom left corner and facing North. <br />
								Robot commands are:
								<br />“L” or left arrow - 90-degree left rotation 
								<br />“R” or right arrow - 90-degree right rotation 
								<br />"F" or up arrow - forward movement by one grid point
								</p>
								<p>
									<strong>Tech used:</strong>
									React, React Bootstrap
								</p>
							</div>
							<div className="card-footer d-flex flex-row justify-content-between">
								<button className="btn btn-primary">
									<a
										href="https://github.com/hasibu369/marsrobot.git"
										target="_blank"
										rel="noreferrer"
									>
										<strong className="me-2 text-decoration-none text-white">
											F/E Code
										</strong>
										<img
											src="https://img.icons8.com/pastel-glyph/100/000000/code--v2.png"
											width="30"
											height="30"
											alt="source code"
										/>
									</a>
								</button>


							</div>
						</div>


					</div>
				</div>
			</div>
		);
	}
}
