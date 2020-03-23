import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import { ButtonBase, Typography } from '@material-ui/core'
import Movers from "./Movers"
import Contacts from "./Contacts"
import Business from "./Business"
import Policies from "./Policies"
import Terms from "./Terms"
import 'bootstrap/dist/css/bootstrap.min.css'
import { Dropdown } from 'react-bootstrap'
import { BrowserRouter as Router, Link, Switch, Route, useHistory } from 'react-router-dom'

// Create routes for pages
// Policies
// Contact
// Mover
// Business

const myComp = React.forwardRef(({ children, onClick }, ref) => (
	<a
	  href=""
	  ref={ref}
	  onClick={e => {
		e.preventDefault();
		onClick(e);
	  }}
	>
	  {children}
	</a>
  ));

class App extends React.Component {

	state = {
		text: 'For movers',
		contacts: false,
		isSmall: false,
		show: false
	}

	constructor(props) {
		super(props);
		this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
	}

	componentDidMount() {
		this.updateWindowDimensions();
		window.addEventListener('resize', this.updateWindowDimensions);
	}

	componentWillUnmount() {
		window.removeEventListener('resize', this.updateWindowDimensions);
	}

	updateWindowDimensions() {
		if (window.innerWidth < 750) {
			this.setState({ ...this.state, isSmall: true });
		} else {
			this.setState({ ...this.state, isSmall: false });
		}
	}

	_changePage = page => {

		this.setState({
			...this.state,
			text: page,
			contacts: false
		})
	}

	outputBottom = () => {
		return (
			<Switch>
				<Route exact path="/">
					<Movers changePage={this._changePage} />
				</Route>
				<Route path="/movers">
					<Movers changePage={this._changePage} />
				</Route>
				<Route exact path="/test">
					<Movers changePage={this._changePage} />
				</Route>
				<Route path="/business">
					<Business changePage={this._changePage} />
				</Route>
				<Route path="/contact">
					<Contacts />
				</Route>
				<Route path="/policy">
					<Policies />
				</Route>
				<Route path="/terms">
					<Terms />
				</Route>
			</Switch>
		)
	}

	outputFooter = () => {
		return (
			<div style={{ display: 'flex', flex: 7, alignItems: 'center', flexDirection: 'column', minHeight: '20vh', width: '100vw', justifyContent: 'center', backgroundColor: 'rgba(255,255,255,1)' }}>
				<div style={{ display: 'flex', flex: 6, flexDirection: 'row', minHeight: '15vh', width: this.state.isSmall ? '90vw' : '75vw', alignItems: 'center', maxWidth: 960, marginTop: 40 }}>
					<div style={{ display: 'flex', flex: 1, minHeight: '15vh', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start' }}>
						<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
							<b style={{ fontSize: 20, marginBottom: 10 }}>MoverUp</b>
							<Link to="/movers" onClick={() => this.setState({ text: "For movers", contacts: false })} style={{ textDecoration: 'none', color: '#5b638f', marginTop: 2.5, marginBottom: 2.5 }}>
								For movers
							</Link>
							<Link to="/business" onClick={() => this.setState({ text: "For business", contacts: false })} style={{ textDecoration: 'none', color: '#5b638f', marginTop: 2.5, marginBottom: 2.5 }}>
								For business
							</Link>
						</div>
					</div>
					<div style={{ display: 'flex', flex: 1, minHeight: '15vh', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start' }}>
						<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
							<b style={{ fontSize: 20, marginBottom: 10 }}>Questions?</b>
							<Link to="/contact" style={{ textDecoration: 'none', color: '#5b638f', marginTop: 2.5, marginBottom: 2.5 }}>
								Contact us
							</Link>
						</div>
					</div>
					<div style={{ display: 'flex', flex: 1, minHeight: '15vh', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start' }}>
						<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
							<b style={{ fontSize: 20, marginBottom: 10 }}>About us</b>
							<Link style={{ textDecoration: 'none', color: '#5b638f', marginTop: 2.5, marginBottom: 2.5 }} onClick={() => window.open("https://www.42.us.org/introducing-the-new-additions-to-42-accelerate/")}>
								The team
							</Link>
						</div>
					</div>
				</div>
				<div style={{ height: 1, width: this.state.isSmall ? '90vw' : '70vw', backgroundColor: 'lightgray', maxWidth: 960 }} />
				<div style={{ flex: 2, display: 'flex', flexDirection: 'row', width: this.state.isSmall ? '90vw' : '70vw', maxWidth: 960 }}>
					<div style={{ flex: 1 }}>
						<b style={{ fontWeight: 'normal', fontSize: 14, textAlign: 'start' }}>© 2020 MoverUp</b>
					</div>
					<div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
						<Link style={{ textDecoration: 'none', color: 'black', fontSize: 14, textAlign: 'center' }} to="/policy">
							Privacy policy
						</Link>
					</div>
					<div style={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
						<Link style={{ textDecoration: 'none', color: 'black', fontSize: 14, textAlign: 'end' }} to="/terms">
							Terms and conditions
						</Link>
					</div>
				</div>
			</div>
		)
	}

	outputJoinUs = () => {
		return (
			<div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', minHeight: '20vh', width: '100vw', justifyContent: 'center', backgroundColor: '#fde992' }}>
				<Typography style={{ fontWeight: '600' }}>Apply to be a tester</Typography>
				<div style={{ display: 'flex', alignItems: 'center', flexDirection: this.state.isSmall ? "column" : 'row', justifyContent: 'space-around' }}>
					<ButtonBase style={{ outline: 'none', margin: 10 }} onClick={() => this.state.text === "For movers" ? window.open("https://play.google.com/store/apps/details?id=com.moverup.formovers") : window.open("https://play.google.com/store/apps/details?id=com.moverup.company")}>
						<img alt="" src={require('./Images/apple_logo.png')} style={{ width: 180, height: 55 }} />
					</ButtonBase>
					<ButtonBase style={{ outline: 'none', margin: 10 }} onClick={() => this.state.text === "For movers" ? window.open("https://testflight.apple.com/join/lue7aG4i") : window.open("https://testflight.apple.com/join/VzfTqKpZ")}>
						<img alt="" src={require('./Images/android_logo.png')} style={{ width: 180, height: 55 }} />
					</ButtonBase>
				</div>
			</div>
		)
	}

	render() {
		console.log(this.state)
		return (
			<Router>
				<div style={{ position: 'absolute', top: 0, right: 0, left: 0 }}>
					<div style={{ position: 'relative' }}>
						<AppBar position="fixed" color="inherit" style={{ height: '8vh' }}>
							<Toolbar>
								<div style={{ height: '8vh', width: '100vw', top: 0, left: 0, right: 0, position: 'absolute', display: 'flex', flexDirection: 'row', alignItems: 'center', margin: 5 }}>
									<ButtonBase
										style={{ flex: 2, display: 'flex', justifyContent: 'center', outline: 'none', margin: 5 }}
										disableRipple={true}
										onClick={() => this.setState({ text: "For movers", contacts: false })}
									>
										<Link to="/" style={{ textDecoration: 'none', color: 'black', fontWeight: '600' }}>
											Mover<b style={{ color: 'orange', fontWeight: '600' }}>Up</b>
										</Link>
									</ButtonBase>
									<div style={{flex: 6, display: 'flex'}}>
										{
											this.state.isSmall ? 
											<React.Fragment>
												<ButtonBase
													style={{ flex: 3, display: 'flex', justifyContent: 'center', outline: 'none', margin: 5 }}
													disableRipple={true}
												>
													<Link to="/movers" onClick={() => this.setState({ text: "For movers", contacts: false })} style={{ textDecoration: 'none', color: 'black', fontWeight: '600', color: this.state.text === "For movers" ? 'orange' : 'black' }}>
														For movers
													</Link>
												</ButtonBase>
												<ButtonBase
													style={{ flex: 4, display: 'flex', justifyContent: 'center', outline: 'none', margin: 5 }}
													disableRipple={true}
												>
													<Link to="/business" onClick={() => this.setState({ text: "For business", contacts: false })} style={{ textDecoration: 'none', color: 'black', fontWeight: '600', color: this.state.text === "For business" ? 'orange' : 'black' }}>
														For business
													</Link>
												</ButtonBase>
											</React.Fragment>
											:
											<React.Fragment>
												<div style={{flex: 1, display: 'flex'}}>
													<ButtonBase
														style={{ flex: 3, display: 'flex', justifyContent: 'center', outline: 'none', margin: 5 }}
														disableRipple={true}
													>
														<Link to="/movers" onClick={() => this.setState({ text: "For movers", contacts: false })} style={{ textDecoration: 'none', color: 'black', fontWeight: '600', color: this.state.text === "For movers" ? 'orange' : 'black' }}>
															For movers
														</Link>
													</ButtonBase>
													<ButtonBase
														style={{ flex: 3, display: 'flex', justifyContent: 'center', outline: 'none', margin: 5 }}
														disableRipple={true}
													>
														<Link to="/business" onClick={() => this.setState({ text: "For business", contacts: false })} style={{ textDecoration: 'none', color: 'black', fontWeight: '600', color: this.state.text === "For business" ? 'orange' : 'black' }}>
															For business
														</Link>
													</ButtonBase>
												</div>
												<div style={{flex: 1, display: 'flex'}}></div>
											</React.Fragment>
										}
									</div>
									<Dropdown
									style={{ flex: 1, display: 'flex', justifyContent: 'center', margin: 5 }}
									>
										<Dropdown.Toggle as={myComp}>
											<b style={{color: 'black'}}>...</b>
										</Dropdown.Toggle>
										<Dropdown.Menu show={this.state.show}>
											<Dropdown.Item>
												<Link to="/contact" onClick={() => this.setState({ ...this.state, contacts: true })} style={{ textDecoration: 'none', color: 'black', fontWeight: '600' }}>
													Contacts
												</Link>
											</Dropdown.Item>
										</Dropdown.Menu>
									</Dropdown>
								</div>
							</Toolbar>
						</AppBar>
						{this.outputBottom()}
						{this.outputJoinUs()}
						{this.outputFooter()}
					</div>
				</div>
			</Router>
		);
	}
}

export default App;
