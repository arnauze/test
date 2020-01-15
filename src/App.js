import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import { ButtonBase } from '@material-ui/core'
import Movers from "./Movers"
import Contacts from "./Contacts"
import Business from "./Business"
import 'bootstrap/dist/css/bootstrap.min.css'
import { Dropdown } from 'react-bootstrap'

class App extends React.Component {

	state = {
		text: 'For movers',
		contacts: false
	}

	outputBottom = () => {
		if (this.state.contacts) {
			return <Contacts />
		} else {
			if (this.state.text === 'For movers') {
				return <Movers />
			} else if (this.state.text === 'For business') {
				return <Business />
			}
		}
	}

	componentWillMount() {
		document.title = 'MoverUp'
	}

	render() {
		return (
			<div style={{position: 'absolute', top: 0, right: 0, left: 0}}>
				<div style={{position: 'relative'}}>
					<AppBar position="fixed" color="inherit" style={{height: '8vh'}}>
						<Toolbar>
							<div style={{height: '8vh', width: '100vw', top : 0, left: 0, right: 0, position: 'absolute', display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
								<ButtonBase
								style={{flex: 2, display: 'flex', justifyContent: 'center', outline: 'none', margin: 5}}
								disableRipple={true}
								onClick={() => this.setState({text: "For movers", contacts: false})}
								>
									<b>Mover<b style={{color: 'orange'}}>Up</b></b>
								</ButtonBase>
								<Dropdown
								style={{flex: 5, display: 'flex', justifyContent: 'center'}}
								>
									<Dropdown.Toggle style={{backgroundColor: 'inherit', borderColor: 'inherit'}}>
										<b style={{color: 'black'}}>{this.state.text}</b>
									</Dropdown.Toggle>
									<Dropdown.Menu>
										<Dropdown.Item onClick={() => this.setState({ text: "For movers", contacts: false })}>For movers</Dropdown.Item>
										<Dropdown.Item onClick={() => this.setState({ text: "For business", contacts: false })}>For business</Dropdown.Item>
									</Dropdown.Menu>
								</Dropdown>
								<ButtonBase
								style={{flex: 5, display: 'flex', justifyContent: 'center', outline: 'none'}}
								disableRipple={true}
								onClick={() => this.setState({...this.state, contacts: true})}
								>
									<b>Contacts</b>
								</ButtonBase>
							</div>
						</Toolbar>
					</AppBar>
					{this.outputBottom()}
				</div>
			</div>
		);
	}
}

export default App;
