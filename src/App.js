import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import { ButtonBase } from '@material-ui/core'
import Movers from "./Movers"
import Contacts from "./Contacts"
import Business from "./Business"
import Policies from "./Policies"
import 'bootstrap/dist/css/bootstrap.min.css'
import { Dropdown } from 'react-bootstrap'
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom'

// Create routes for pages
// Policies
// Contact
// Mover
// Business

class App extends React.Component {

	state = {
		text: 'For movers',
		contacts: false
	}

	outputBottom = () => {
		return (
			<Switch>
				<Route exact path="/">
					<Movers />
				</Route>
				<Route path="/movers">
					<Movers />
				</Route>
				<Route exact path="/test">
					<Movers />
				</Route>
				<Route path="/business">
					<Business />
				</Route>
				<Route path="/contact">
					<Contacts />
				</Route>
				<Route path="/policy">
					<Policies />
				</Route>
			</Switch>
		)
	}

	render() {
		return (
			<Router>
				<div style={{position: 'absolute', top: 0, right: 0, left: 0}}>
					<div style={{position: 'relative'}}>
						<AppBar position="fixed" color="inherit" style={{height: '8vh'}}>
							<Toolbar>
								<div style={{height: '8vh', width: '100vw', top : 0, left: 0, right: 0, position: 'absolute', display: 'flex', flexDirection: 'row', alignItems: 'center', margin: 5}}>
									<ButtonBase
									style={{flex: 2, display: 'flex', justifyContent: 'center', outline: 'none', margin: 5}}
									disableRipple={true}
									onClick={() => this.setState({text: "For movers", contacts: false})}
									>
										<Link to="/" style={{textDecoration: 'none', color: 'black'}}>
											<b>Mover<b style={{color: 'orange'}}>Up</b></b>
										</Link>
									</ButtonBase>
									<Dropdown
									style={{flex: 5, display: 'flex', justifyContent: 'center'}}
									>
										<Dropdown.Toggle style={{backgroundColor: 'inherit', borderColor: 'inherit'}}>
											<b style={{color: 'black'}}>{this.state.text}</b>
										</Dropdown.Toggle>
										<Dropdown.Menu>
											<Dropdown.Item>
												<Link to="/movers" onClick={() => this.setState({ text: "For movers", contacts: false })} style={{textDecoration: 'none', color: 'black'}}>
													For movers
												</Link>
											</Dropdown.Item>
											<Dropdown.Item>
												<Link to="/business" onClick={() => this.setState({ text: "For business", contacts: false })} style={{textDecoration: 'none', color: 'black'}}>
													For business
												</Link>
											</Dropdown.Item>
										</Dropdown.Menu>
									</Dropdown>
									<ButtonBase
									style={{flex: 5, display: 'flex', justifyContent: 'center', outline: 'none'}}
									disableRipple={true}
									>
										<Link to="/contact" onClick={() => this.setState({...this.state, contacts: true})} style={{textDecoration: 'none', color: 'black'}}>
											<b>Contacts</b>
										</Link>
									</ButtonBase>
								</div>
							</Toolbar>
						</AppBar>
						{this.outputBottom()}
					</div>
				</div>
			</Router>
		);
	}
}

export default App;
