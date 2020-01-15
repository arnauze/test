import React from 'react'
import BUSINESS from './Images/business.png'
import Stepper from '@material-ui/core/Stepper'
import Step from '@material-ui/core/Step'
import StepLabel from '@material-ui/core/StepLabel'
import { ButtonBase } from '@material-ui/core'

// Enough workers
// Easily find workers
// Trusted workers

export default class Business extends React.Component {

    state = {
        logo_width: 180,
        logo_height: 65,
        type: 'row'
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
            this.setState({ type: 'column', logo_width: 90, logo_height: 32.5, width: window.innerWidth, height: window.innerHeight });
        } else {
            this.setState({ type: 'row', logo_width: 180, logo_height: 65, width: window.innerWidth, height: window.innerHeight });
        }
      }

    render() {
        return (
            <React.Fragment>
                <div style={{height: '70vh', width: '100vw', display: 'flex', alignItems: 'center', marginTop: '8vh', left: 0, position: 'relative', backgroundImage: 'url(' + BUSINESS +')', backgroundPosition: 'center', backgroundSize: 'cover', flexDirection: this.state.type}}>
                    {
                        this.state.type === 'row' ? 
                            <React.Fragment>
                                <div style={{display: 'flex', flex: 3, alignItems: 'center' , flexDirection: 'column', minHeight: '20vh', justifyContent: 'space-around'}}>
                                    <ButtonBase style={{outline: 'none'}}>
                                        <img alt="" src={require('./Images/apple_logo.png')} style={{width: this.state.logo_width, height: this.state.logo_height}}/>
                                    </ButtonBase>
                                    <ButtonBase style={{outline: 'none'}}>
                                        <img alt="" src={require('./Images/android_logo.png')} style={{width: this.state.logo_width, height: this.state.logo_height}}/>
                                    </ButtonBase>
                                </div>
                                <div style={{display: 'flex', flex: 7, alignItems: 'center', flexDirection: 'column', minHeight: '30vh', justifyContent: 'space-evenly'}}>
                                    <h1 style={{textAlign: 'center', margin: 7}}>More movers!</h1>
                                    <p style={{textAlign: 'center', margin: 7}}>
                                        MoverUp helps you find and hire the right movers faster, anywhere.<br/>
                                        Download the app and save 7-12 work hours a week.
                                    </p>
                                </div>
                            </React.Fragment>
                        :
                            <React.Fragment>
                                <div style={{display: 'flex', flex: 7, alignItems: 'center', flexDirection: 'column', minHeight: '30vh', justifyContent: 'space-evenly'}}>
                                    <h1 style={{textAlign: 'center', margin: 7}}>More movers!</h1>
                                    <p style={{textAlign: 'center', margin: 7}}>
                                        MoverUp helps you find and hire the right movers faster, anywhere.<br/>
                                        Download the app and save 7-12 work hours a week.
                                    </p>
                                </div>
                                <div style={{display: 'flex', flex: 3, alignItems: 'center' , flexDirection: 'column', minHeight: '20vh', justifyContent: 'space-around'}}>
                                    <ButtonBase style={{outline: 'none'}}>
                                        <img alt="" src={require('./Images/apple_logo.png')} style={{width: this.state.logo_width, height: this.state.logo_height}}/>
                                    </ButtonBase>
                                    <ButtonBase style={{outline: 'none'}}>
                                        <img alt="" src={require('./Images/android_logo.png')} style={{width: this.state.logo_width, height: this.state.logo_height}}/>
                                    </ButtonBase>
                                </div>
                            </React.Fragment>
                    }
                </div>
                <div style={{minHeight: '50vh', width: '100vw', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', borderBottom: '1px solid black'}}>
                    <div style={{width: '75vw', display: 'flex', alignItems: 'center'}}>
                        <div style={{display: 'flex', flex: 1, alignItems: 'center', justifyContent: 'space-evenly', flexDirection: 'column', minHeight: '30vh', margin: '1.3vw'}}>
                            <img alt="" src={require('./Images/schedule.png')} style={{width: '4vw', height: '6vh'}}/>
                            <b style={{textAlign: 'center'}}>Enough workers</b>
                            <p style={{textAlign: 'center'}}>Lorem ipsum dolor sit amet, augue accusamus per an, ex dolor salutandi maiestatis eum, eam inermis probatus no. Lorem ipsum dolor sit amet</p>
                        </div>
                        <div style={{display: 'flex', flex: 1, alignItems: 'center', justifyContent: 'space-evenly', flexDirection: 'column', minHeight: '30vh', margin: '1.3vw'}}>
                            <img alt="" src={require('./Images/cash.png')} style={{width: '4vw', height: '6vh'}}/>
                            <b style={{textAlign: 'center'}}>Easily find workers</b>
                            <p style={{textAlign: 'center'}}>Lorem ipsum dolor sit amet, augue accusamus per an, ex dolor salutandi maiestatis eum, eam inermis probatus no. Lorem ipsum dolor sit amet</p>
                        </div>
                        <div style={{display: 'flex', flex: 1, alignItems: 'center', justifyContent: 'space-evenly', flexDirection: 'column', minHeight: '30vh', margin: '1.3vw'}}>
                            <img alt="" src={require('./Images/trust.png')} style={{width: '4vw', height: '6vh'}}/>
                            <b style={{textAlign: 'center'}}>Trusted workers</b>
                            <p style={{textAlign: 'center'}}>Lorem ipsum dolor sit amet, augue accusamus per an, ex dolor salutandi maiestatis eum, eam inermis probatus no. Lorem ipsum dolor sit amet</p>
                        </div>
                    </div>
                </div>
                <div style={{height: '50vh', width: '100vw', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <div style={{width: '75vw', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        <Stepper activeStep={null} alternativeLabel style={{width: '75vw'}}>
                            <Step key={0} active={true}>
                                <StepLabel><b>Get the app</b></StepLabel>
                            </Step>
                            <Step key={1} active={true}>
                                <StepLabel><b>Post your job request</b></StepLabel>
                            </Step>
                            <Step key={2} active={true}>
                                <StepLabel><b>Relax while we find the right team for the job</b></StepLabel>
                            </Step>
                        </Stepper>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}