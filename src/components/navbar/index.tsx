import React, {Component} from "react";
import {Link} from "react-router-dom";

interface NavigationBarState {
	currentTab: string;
}

export default class NavigationBar extends Component<{}, NavigationBarState> {
	state = {
		currentTab: "about",
	};

	render() {
		return (
			<div className="row p-0 bg-primary">
				<ul className="text-decoration-none px-0 ">
					<div className="me-auto">
						<li className={this.state.currentTab === "about" ? "active" : ""}>
							<Link
								to="/about"
								onClick={() => this.setState({currentTab: "about"})}
							>
								About
							</Link>
						</li>
						<li
							className={this.state.currentTab === "education" ? "active" : ""}
						>
							<Link
								to="education"
								onClick={() => this.setState({currentTab: "education"})}
							>
								Education
							</Link>
						</li>
						<li className={this.state.currentTab === "skills" ? "active" : ""}>
							<Link
								to="/skills"
								onClick={() => this.setState({currentTab: "skills"})}
							>
								Skills
							</Link>
						</li>
						<li
							className={this.state.currentTab === "projects" ? "active" : ""}
						>
							<Link
								to="/projects"
								onClick={() => this.setState({currentTab: "projects"})}
							>
								Project
							</Link>
						</li>
					</div>
				</ul>
			</div>
		);
	}
}
