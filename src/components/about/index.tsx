import React, {Component} from "react";

export default class About extends Component {
	render() {
		return (
			<div className="row p-0 main">
				<div className="col-12 bg-info p-5">
					<h1>About</h1>
					<hr />
					<div className="row">
						<div className="col-sm-8 order-2 order-sm-1 pe-sm-5">
								<div className="card bg-info">
									<div className="card-body">
										<p>Hello!👋 I am Hasib!</p>
										<p>
											After finishing my BTEC Level 3 Extended Diploma in IT at
											Distinction*** and getting offers from various
											Universities, due to Covid-19 and travel restrictions, I
											decided to join Strive School and give a shot at virtual
											learning.
										</p>
										<p>
											Studying at Strive School was a great experience as with
											the help and support I received, I was able to enrich my
											technical and soft skills and become a Full Stack Developer.
										</p>
										
										<p>
											<h3>Contact</h3>
											<a
												href="https://www.canva.com/design/DAEnxgZ6X1Y/IUhdLuGMoJusjbwJDDwDHw/view?utm_content=DAEnxgZ6X1Y&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink"
												className="btn btn-primary"
												target="_blank"
												rel="noreferrer"
											>
												CV
											</a>
											<br />
											<strong>Email</strong>: hasibu369@gmail.com
											<br />
											<strong>Linkedin</strong>
											:https://www.linkedin.com/in/hasib-darwish-737784211
										</p>	
									</div>
								</div>
						</div>
						<div className="col-sm-4 order-1 order-sm-2 p-0">
							<div className="card bg-info">
								<div className="card-header text-center bg-secondary">
									<h5>Hasibullah Darwish</h5>
								</div>
								<div className="card-body">
									<img
										src="https://media-exp1.licdn.com/dms/image/C4E03AQHhVAfov0-IFQ/profile-displayphoto-shrink_800_800/0/1631414090028?e=1637193600&v=beta&t=BRShgDOVN7bxERty-GlC6hgElTC8JVKs7ho0pWcSZ_8"
										alt=""
										className="img-fluid"
										style={{borderRadius: "50%"}}
									/>
								</div>
								<div className="card-footer"></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
