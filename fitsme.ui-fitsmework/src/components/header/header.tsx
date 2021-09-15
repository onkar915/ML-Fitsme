import React from 'react';

import { NavLink, Link } from 'react-router-dom';

function Header() {
	return (
		<>
			<nav className="navbar navbar-expand-lg navbar-light shadow">
				<div className="container d-flex justify-content-between align-items-center">
					<NavLink
						className="navbar-brand text-fitsme logo h1 align-self-center"
						to="/home"
						activeClassName="active"
					>
						<img
							className="img-fluid"
							src="https://i.ibb.co/q5ZQVFN/SAIZblack.png"
							alt="fitsme"
							style={{ width: '200px' }}
						/>
					</NavLink>
					<button
						className="navbar-toggler border-0"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#templatemo_main_nav"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>
					<div
						className="align-self-center collapse navbar-collapse flex-fill  d-lg-flex justify-content-lg-between"
						id="templatemo_main_nav"
					>
						<div className="flex-fill">
							<ul className="nav navbar-nav d-flex justify-content-between mx-lg-auto">
								<li className="nav-item">
									<NavLink className="nav-link" activeClassName="active" to="/home">
										Home
									</NavLink>
								</li>
								<li className="nav-item">
									<NavLink className="nav-link" activeClassName="active" to="/about-us">
										About Us
									</NavLink>
								</li>
								<li className="nav-item">
									<Link
										className="nav-link"
										to={{
											pathname: `${process.env.PUBLIC_URL}/saenguin/sleeveless-blouse/sizing`,
										}}
										target="_parent"
									>
										Shirt Demo
									</Link>
								</li>
								<li className="nav-item">
									<Link
										className="nav-link"
										to={{
											pathname: `${process.env.PUBLIC_URL}/saenguin/brunch-pants/sizing`,
										}}
										target="_parent"
									>
										Pant Demo
									</Link>
								</li>
								<li className="nav-item">
									<NavLink className="nav-link" activeClassName="active" to="/contact">
										Contact
									</NavLink>
								</li>
							</ul>
						</div>
						{/* <div className="navbar align-self-center d-flex">
							<a className="nav-icon position-relative text-decoration-none" href="#">
								<i className="fa fa-fw fa-sign-in text-dark mr-3">SignIn</i>
							</a>
						</div> */}
					</div>
				</div>
			</nav>
		</>
	);
}

export default Header;
