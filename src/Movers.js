import React from 'react'
import MOVER from './Images/movers.png'
import Stepper from '@material-ui/core/Stepper'
import Step from '@material-ui/core/Step'
import StepLabel from '@material-ui/core/StepLabel'
import { ButtonBase } from '@material-ui/core'

// Flexible schedule
// Easily find ajob (lot of jobs)
// Trusted employers

// if width < 750 reduce size of image

export default class Movers extends React.Component {

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
            this.setState({ type: 'column', logo_width: 180, logo_height: 65, width: window.innerWidth, height: window.innerHeight });
        } else {
            this.setState({ type: 'row', logo_width: 180, logo_height: 65, width: window.innerWidth, height: window.innerHeight });
        }
      }

    render() {
        return (
            <React.Fragment>
                <div style={{minHeight: '70vh', width: '100vw', display: 'flex', alignItems: 'center', marginTop: '8vh', left: 0, position: 'relative', backgroundImage: 'url(' + MOVER +')', backgroundPosition: 'center', backgroundSize: 'cover', flexDirection: this.state.type}}>
                    <div style={{display: 'flex', flex: 7, alignItems: 'center', flexDirection: 'column', minHeight: '30vh', justifyContent: 'space-evenly'}}>
                        <h1 style={{textAlign: 'center', margin: 7}}>Jobs for movers!</h1>
                        <b style={{textAlign: 'center', fontWeight: 'normal', margin: 7}}>
                            MoverUp helps you find jobs as a mover anytime, anywhere.<br/>
                            Download the app, create your schedule and we will find a job for you.
                        </b>
                    </div>
                    <div style={{display: 'flex', flex: 3, alignItems: 'center' , flexDirection: 'column', minHeight: '20vh', justifyContent: 'space-around'}}>
                        <ButtonBase style={{outline: 'none', margin: 7}}>
                            <img alt="" src={require('./Images/apple_logo.png')} style={{width: this.state.logo_width, height: this.state.logo_height}}/>
                        </ButtonBase>
                        <ButtonBase style={{outline: 'none', margin: 7}}>
                            <img alt="" src={require('./Images/android_logo.png')} style={{width: this.state.logo_width, height: this.state.logo_height}}/>
                        </ButtonBase>
                    </div>
                </div>
                <div style={{minHeight: '50vh', width: '100vw', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', borderBottom: '1px solid black'}}>
                    <div style={{width: '75vw', display: 'flex', alignItems: 'center'}}>
                        <div style={{display: 'flex', flex: 1, alignItems: 'center', justifyContent: 'space-evenly', flexDirection: 'column', minHeight: '30vh', margin: '1.3vw'}}>
                            <img alt="" src={require('./Images/schedule.png')} style={{width: '5vw', height: '6vh', aspectRatio: 5/6}}/>
                            <b style={{textAlign: 'center'}}>Flexible schedule</b>
                            <p style={{textAlign: 'center'}}>With MoverUp, you decide when you want to work, and we will find a job for you. Work from anywhere, anytime.</p>
                        </div>
                        <div style={{display: 'flex', flex: 1, alignItems: 'center', justifyContent: 'space-evenly', flexDirection: 'column', minHeight: '30vh', margin: '1.3vw'}}>
                            <img alt="" src={require('./Images/cash.png')} style={{width: '5vw', height: '6vh', aspectRatio: 5/6}}/>
                            <b style={{textAlign: 'center'}}>Lot of jobs</b>
                            <p style={{textAlign: 'center'}}>Lorem ipsum dolor sit amet, augue accusamus per an, ex dolor salutandi maiestatis eum, eam inermis probatus no. Lorem ipsum dolor sit amet</p>
                        </div>
                        <div style={{display: 'flex', flex: 1, alignItems: 'center', justifyContent: 'space-evenly', flexDirection: 'column', minHeight: '30vh', margin: '1.3vw'}}>
                            <img alt="" src={require('./Images/trust.png')} style={{width: '5vw', height: '6vh', aspectRatio: 5/6}}/>
                            <b style={{textAlign: 'center'}}>Trusted employers</b>
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
                                <StepLabel><b>Make a schedule</b></StepLabel>
                            </Step>
                            <Step key={2} active={true}>
                                <StepLabel><b>Accept the job and get paid</b></StepLabel>
                            </Step>
                        </Stepper>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}