import React, { Component } from "react";

export default class About extends Component {
	render() {
		return (
			<div className="row p-0 main">
				<div className="col-12 bg-info p-5">
					<h1>About</h1>
					<hr />
					<div className="row">
						<div className="col-md-8 order-2 order-md-1 pe-md-5">
							<div className="card bg-info">
								<div className="card-body">
									<p>Hello!👋 I am Hasib!</p>
									<p>
										My journey into web development unfolded while I was pursuing a Level 3 Extended Diploma in IT at 
										South & City College Birmingham in 2019. Following the completion of my BTEC Level 3 Extended Diploma 
										with Distinction *** grade and receiving offers from several universities, including Abertay, South Wales, 
										and Birmingham City, the outbreak of the Covid-19 pandemic and local lockdown led me to explore virtual 
										learning options.
									</p>
									<p>
									After comprehensive research, I decided to embark on a journey into web development at Strive School,
									 which now has joined forces with another school in Italy and rebranded as Epicode. 
									</p>
									<p>
									During my time at Strive, the program demanded our utmost dedication, challenged us daily, and pushed the 
									boundaries of our abilities consistently. This intensive full-time commitment spanned 6 months, with classes 
									from 9:00 AM to 5:00 PM
									</p>
									<p>
									At Strive, I participated in live coding sessions, engaged in pair coding, and collaborated with multinational 
									teams across European countries, including Greece, Italy, France, Germany, the Netherlands, Norway, the UK, and Spain.
									</p>
									<p>
									As part of my capstone project at Strive, I developed an application called "helpsage" with the primary objective of 
									addressing climate change and air pollution. The app fosters a sense of communal responsibility, encouraging individuals 
									to share their belongings within their local communities rather than disposing of them carelessly to curb the influx of 
									used products into landfills and oceans.
									</p>
									<p>
									Upon successfully graduating from Strive, I set out on a mission to secure employment as a Junior Full Stack MERN Developer 
									and entered the job market. However, this journey has been met with challenges, as many companies require a combination of 
									industry experience and a formal degree in computer science or a related field —criteria that I currently do not meet.
									</p>
									<p>
									In light of this situation, I made the decision to join the Front End Web Developer Traineeship at Finglas Training Centre. 
									This decision stems from my eagerness to gain hands-on industry exposure and to further enhance my skill set. At present, 
									I am fully engaged in intensive full-time studies within this program.
									</p>
									<br />
									<p>
										<h3>Contact</h3>
										<strong>Email</strong>: hasibu369@gmail.com
										<br />
										<strong>Linkedin</strong>
										:https://www.linkedin.com/in/hasibu
									</p>
								</div>
							</div>
						</div>
						<div className="col-md-4 order-1 order-md-2 p-0">
							<div className="card bg-info">
								<div className="card-header text-center bg-secondary">
									<h5>Hasibullah Darwish</h5>
								</div>
								<div className="card-body">
									<img
										src="https://media.licdn.com/dms/image/D4E03AQFeZkKwclQOAw/profile-displayphoto-shrink_800_800/0/1688508748800?e=1699488000&v=beta&t=3OZy2mFg9aoj1EgFDoOHtKC927sGa7jmQcIn_qpz2Uk"
										alt="profile"
										className="img-fluid"
										style={{ borderRadius: "50%" }}
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
