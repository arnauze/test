import React from 'react'
import MOVER from './Images/movers.png'
import Stepper from '@material-ui/core/Stepper'
import Step from '@material-ui/core/Step'
import StepLabel from '@material-ui/core/StepLabel'
import StepContent from '@material-ui/core/StepContent'
import Typography from '@material-ui/core/Typography';
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
                <div style={{ minHeight: '75vh', width: '100vw', display: 'flex', alignItems: 'center', marginTop: '8vh', left: 0, position: 'relative', backgroundImage: 'url(' + MOVER + ')', backgroundPosition: 'center', backgroundSize: 'cover', flexDirection: this.state.type }}>
                    <div style={{ display: 'flex', flex: 7, alignItems: 'center', flexDirection: 'column', minHeight: '30vh', justifyContent: 'space-evenly' }}>
                        <h1 style={{ textAlign: 'center', margin: 7 }}>Jobs for movers!</h1>
                        <b style={{ textAlign: 'center', fontWeight: 'normal', margin: 7 }}>
                            MoverUp helps you find jobs as a mover anytime, anywhere.<br />
                            Download the app, create your schedule and we will find a job for you.
                        </b>
                    </div>
                    <div style={{ flex: 3 }}>
                        <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', minHeight: '20vh', justifyContent: 'space-around' }}>
                            <ButtonBase style={{ outline: 'none', margin: 7 }}>
                                <img alt="" src={require('./Images/apple_logo.png')} style={{ width: this.state.logo_width, height: this.state.logo_height }} />
                            </ButtonBase>
                            <ButtonBase style={{ outline: 'none', margin: 7 }}>
                                <img alt="" src={require('./Images/android_logo.png')} style={{ width: this.state.logo_width, height: this.state.logo_height }} />
                            </ButtonBase>
                        </div>
                    </div>
                </div>
                <div style={{ minHeight: '35vh', width: '100vw', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', borderBottom: '1px solid black' }}>
                    <div style={{ width: '99vw', display: 'flex', flexDirection: 'column', alignItems: 'center', margin: 7 }}>
                        {
                            this.state.type === 'column' ?
                                <div style={{ minHeight: '35vh', display: 'flex', flexDirection: 'column' }}>
                                    <div style={{ display: 'flex', flex: 1, alignItems: 'center', width: '100%', flexDirection: 'column', margin: 5 }}>
                                        <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}><img alt="" src={require('./Images/schedule.png')} style={{ width: 60, height: 60, aspectRatio: 6 / 6 }} /></div>
                                        <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}><b style={{ textAlign: 'center' }}>Flexible schedule</b></div>
                                        <div style={{ flex: 2, display: 'flex', alignItems: 'flex-start', justifyContent: 'center', padding: 5 }}><p style={{ textAlign: 'center' }}>With MoverUp, you decide when you want to work, and we will find a job for you. Work from anywhere, anytime.</p></div>
                                    </div>
                                    <div style={{ display: 'flex', flex: 1, alignItems: 'center', width: '100%', flexDirection: 'column', margin: 5 }}>
                                        <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}><img alt="" src={require('./Images/cash.png')} style={{ width: 60, height: 60, aspectRatio: 6 / 6 }} /></div>
                                        <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}><b style={{ textAlign: 'center' }}>Lot of jobs</b></div>
                                        <div style={{ flex: 2, display: 'flex', alignItems: 'flex-start', justifyContent: 'center', padding: 5 }}><p style={{ textAlign: 'center' }}>Hundreds of businesses hiring thousands of workers everyday. We will find the perfect match for you.</p></div>
                                    </div>
                                    <div style={{ display: 'flex', flex: 1, alignItems: 'center', width: '100%', flexDirection: 'column', margin: 5 }}>
                                        <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}><img alt="" src={require('./Images/trust.png')} style={{ width: 60, height: 60, aspectRatio: 6 / 6 }} /></div>
                                        <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}><b style={{ textAlign: 'center' }}>Trusted employers</b></div>
                                        <div style={{ flex: 2, display: 'flex', alignItems: 'flex-start', justifyContent: 'center', padding: 5 }}><p style={{ textAlign: 'center' }}>We only work with trusted businesses and so will you.</p></div>
                                    </div>
                                </div>
                                :
                                <React.Fragment>
                                    <div style={{ display: 'flex', flex: 1, alignItems: 'center', margin: 5, width: '100%' }}>
                                        <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}><img alt="" src={require('./Images/schedule.png')} style={{ width: 60, height: 60, aspectRatio: 6 / 6 }} /></div>
                                        <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}><img alt="" src={require('./Images/cash.png')} style={{ width: 60, height: 60, aspectRatio: 6 / 6 }} /></div>
                                        <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}><img alt="" src={require('./Images/trust.png')} style={{ width: 60, height: 60, aspectRatio: 6 / 6 }} /></div>
                                    </div>
                                    <div style={{ display: 'flex', flex: 1, alignItems: 'center', margin: 5, width: '100%' }}>
                                        <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}><b style={{ textAlign: 'center' }}>Flexible schedule</b></div>
                                        <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}><b style={{ textAlign: 'center' }}>Lot of jobs</b></div>
                                        <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}><b style={{ textAlign: 'center' }}>Trusted employers</b></div>
                                    </div>
                                    <div style={{ display: 'flex', flex: 1, alignItems: 'flex-start', margin: 5, width: '100%' }}>
                                        <div style={{ flex: 1, display: 'flex', alignItems: 'flex-start', justifyContent: 'center', padding: 5 }}><p style={{ textAlign: 'center' }}>With MoverUp, you decide when you want to work, and we will find a job for you. Work from anywhere, anytime.</p></div>
                                        <div style={{ flex: 1, display: 'flex', alignItems: 'flex-start', justifyContent: 'center', padding: 5 }}><p style={{ textAlign: 'center' }}>Hundreds of businesses hiring thousands of workers everyday. We will find the perfect match for you.</p></div>
                                        <div style={{ flex: 1, display: 'flex', alignItems: 'flex-start', justifyContent: 'center', padding: 5 }}><p style={{ textAlign: 'center' }}>We only work with trusted businesses and so will you.</p></div>
                                    </div>
                                </React.Fragment>
                        }
                    </div>
                </div>
                <div style={{ width: '100vw', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <div style={{ width: '99vw', alignItems: 'center', justifyContent: 'center' }}>
                        <Stepper orientation="vertical" activeStep={null} connector={null} style={{ width: '98vw', alignItems: 'center', display: 'flex', justifyContent: 'space-evenly' }}>
                            <Step key={0} active={true} style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', margin: 20, maxWidth: '90vw' }}>
                                <div style={{flexDirection: 'row', alignItems: 'center', display: 'flex'}}>
                                    <StepLabel StepIconComponent={() => Comp({number: 1})}>
                                    </StepLabel>
                                    <h4>Create your schedule</h4>
                                </div>
                                <Typography style={{textAlign: 'center', marginTop: 10, color: 'gray', fontWeight: '300'}}>
                                    Decide when and where you want to work, and we will match you with companies that need you.
                                </Typography>
                                <div style={{flexDirection: 'row', alignItems: 'center', display: 'flex', padding: 10}}>
                                    <img src={require('./Images/add_slot.png')} style={{width: this.state.type === "column" ? 180 : 270, height: this.state.type === "column" ? 360 : 540, margin: 7}}/>
                                    <img src={require('./Images/empty_calendar.png')} style={{width: this.state.type === "column" ? 180 : 270, height: this.state.type === "column" ? 360 : 540, margin: 7}}/>
                                </div>
                            </Step>
                            <Step key={1} active={true} style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', margin: 20, maxWidth: '90vw' }}>
                                <div style={{flexDirection: 'row', alignItems: 'center', display: 'flex'}}>
                                    <StepLabel StepIconComponent={() => Comp({number: 2})}>
                                    </StepLabel>
                                    <h4>Choose the job you want and go to work</h4>
                                </div>
                                <Typography style={{textAlign: 'center', marginTop: 10, color: 'gray', fontWeight: '300'}}>
                                    We will match you with several companies, and you can choose the job that fits you best.
                                </Typography>
                                <div style={{flexDirection: 'row', alignItems: 'center', display: 'flex', padding: 10}}>
                                    <img src={require('./Images/list_with_requests.png')} style={{width: this.state.type === "column" ? 180 : 270, height: this.state.type === "column" ? 360 : 540, margin: 7}}/>
                                    <img src={require('./Images/confirm_job.png')} style={{width: this.state.type === "column" ? 180 : 270, height: this.state.type === "column" ? 360 : 540, margin: 7}}/>
                                </div>
                            </Step>
                            <Step key={2} active={true} style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', margin: 20, maxWidth: '90vw' }}>
                                <div style={{flexDirection: 'row', alignItems: 'center', display: 'flex'}}>
                                    <StepLabel StepIconComponent={() => Comp({number: 3})}>
                                    </StepLabel>
                                    <h4>Leave a rating and get paid</h4>
                                </div>
                                <Typography style={{textAlign: 'center', marginTop: 10, color: 'gray', fontWeight: '300'}}>
                                    Tell us about your experience working with the company, so we can find an even better match next time you use us.
                                </Typography>
                            </Step>
                        </Stepper>
                    </div>
                </div>
            </React.Fragment>
        )

        function Comp(props) {
            return (
                <div style={{ width: 40, height: 40, borderRadius: 25, backgroundColor: '#505fb4', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <b style={{color: 'white', fontSize: 16, fontWeight: 'normal'}}>{props.number}</b>
                </div>
            )
        }
    }
}