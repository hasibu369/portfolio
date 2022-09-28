import React, {Component} from "react";

export default class Projects extends Component {
	render() {
		return (
			<div className="row p-0 main">
				<div className="col-12 bg-info p-5">
					<h1>Projects</h1>
					<hr />
					<div className="row">
						<div className="card bg-info mb-3 col-12 col-sm-10 col-md-8 col-lg-7 col-xl-6">
							<div className="card-header">
								<h5 className="card-title">HelpSage</h5>
							</div>
							<div className="card-body">
								<p className="card-text">
									The primary purpose of this project is to tackle the climate change crisis 
									and make the world a better place for upcoming generations. This app allows users 
									to share their usable spare items with others in their community instead of throwing 
									them in the bin. In this way, it reduces the number of useable products that go to landfills 
									each year and the air pollution that causes a lot of diseases.
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

								<button className="btn btn-primary">
									<a
										href="https://helpsage-frontend.vercel.app/"
										target="_blank"
										rel="noreferrer"
									>
										<strong className="me-2 text-decoration-none text-white">
											Demo
										</strong>
										<img
											src="https://img.icons8.com/ios/100/000000/screensharing.png"
											width="30"
											height="30"
											alt="demo"
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
