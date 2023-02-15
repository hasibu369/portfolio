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
											I am a Software Engineer with strong Front End and
Back End skills. An excellent team player with an eye for
detail. A self-motivated individual who can work as part of a
team with a good sense of humour or on his own using his
initiative.

										</p>
										
										<p>
											<h3>Contact</h3>
											
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
