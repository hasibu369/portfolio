import React, {Component} from "react";
import Skills from "../skill";
import "./home.css";
import {BrowserRouter, Route} from "react-router-dom";
import NavigationBar from "../navbar";
import About from "../about";
import Education from "../education";
import Projects from "../project";

export default class Home extends Component {
	render() {
		return (
			<>
				<BrowserRouter>
					<div className="container p-sm-4 p-md-5">
						<NavigationBar />
						<Route path="/" exact>
							<About />
						</Route>
						<Route path="/about" exact>
							<About />
						</Route>
						<Route path="/education" exact>
							<Education />
						</Route>
						<Route path="/skills" exact>
							<Skills />
						</Route>
						<Route path="/projects" exact>
							<Projects />
						</Route>
					</div>
				</BrowserRouter>
			</>
		);
	}
}
