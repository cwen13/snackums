import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";

function Nav() {

	function showNavigation() {
		<ul className="flex-row">
		<li className="mx-1">
			<Link to="/Mexico">
				Signup
			</Link>
		</li>
		<li className="mx-1">
			<Link to="/Germany">
				Login
			</Link>
		</li>
		<li className="mx-1">
			<Link to="/Japan">
				Login
			</Link>
		</li>
		<li className="mx-1">
			<Link to="/Australia">
				Login
			</Link>
		</li>
	</ul>
		if (Auth.loggedIn()) {
			return (
				<ul className="flex-row">
					<li className="mx-1">
						<a href="/" onClick={() => Auth.logout()}>
							Logout
						</a>
					</li>
				</ul>
			);
		} else {
			return (
				<ul className="flex-row">
					<li className="mx-1">
						<Link to="/signup">
							Signup
						</Link>
					</li>
					<li className="mx-1">
						<Link to="/login">
							Login
						</Link>
					</li>
				</ul>
			);
		}
	}

	return (
		<header className="flex-row px-1">
			<h1>
				Sample Application
			</h1>

			<nav>
				{showNavigation()}
			</nav>
		</header>
	);
}

export default Nav;
