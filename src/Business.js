import React from 'react'
import BUSINESS from './Images/business.png'
import Stepper from '@material-ui/core/Stepper'
import Step from '@material-ui/core/Step'
import StepLabel from '@material-ui/core/StepLabel'
import Typography from '@material-ui/core/Typography';
import { ButtonBase } from '@material-ui/core'
import { NavLink } from 'react-router-dom'

// Unlimited workforce
// Manage efficiently
// Trusted workers

export default class Business extends React.Component {

    state = {
        logo_width: 180,
        logo_height: 55,
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
            this.setState({ type: 'column', logo_width: 180, logo_height: 55, width: window.innerWidth, height: window.innerHeight });
        } else {
            this.setState({ type: 'row', logo_width: 180, logo_height: 55, width: window.innerWidth, height: window.innerHeight });
        }
    }

    render() {
        return (
            <React.Fragment>
                <div style={{ minHeight: '75vh', width: '100vw', display: 'flex', alignItems: 'center', left: 0, position: 'relative', backgroundImage: 'url(' + BUSINESS + ')', backgroundPosition: 'center', backgroundSize: 'cover', flexDirection: "column", marginTop: '8vh', justifyContent: 'center' }}>
                    <div style={{ width: this.state.type === "column" ? '90vw' : '70vw', display: 'flex', flexDirection: this.state.type, justifyContent: 'center', alignItems: 'center' }}>
                        {
                            this.state.type === 'row' ?
                                <React.Fragment>
                                    <div style={{ display: 'flex', flex: 7, alignItems: 'center', flexDirection: 'column', minHeight: '30vh', justifyContent: 'space-evenly' }}>
                                        <b style={{ textAlign: 'center', margin: 7, fontSize: this.state.type === 'column' ? 40 : 60, fontWeight: '600' }}>Mover<b style={{ fontWeight: '600', color: 'orange' }}>Up</b><br />More movers!</b>
                                        <b style={{ textAlign: 'center', fontWeight: 'normal', margin: 7, fontSize: this.state.type === 'column' ? 20 : 25, }}>
                                            MoverUp removes the hassle of finding and hiring trusted movers.<br />
                                            Download the app, movers are here.
                                        </b>
                                    </div>
                                    <div style={{ flex: 3 }}>
                                        <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', justifyContent: 'space-around' }}>
                                            <b style={{ textAlign: 'center', margin: 7, marginBottom: 0, fontSize: 30, fontWeight: '600' }}>App for business</b>
                                            <div style={{ minHeight: '15vh', display: 'flex', alignItems: 'center', flexDirection: 'column', justifyContent: 'space-around' }}>
                                                <ButtonBase style={{ outline: 'none', margin: 7 }} onClick={() => window.open("https://play.google.com/store/apps/details?id=com.moverup.company")}>
                                                    <img alt="" src={require('./Images/apple_logo.png')} style={{ width: this.state.logo_width, height: this.state.logo_height }} />
                                                </ButtonBase>
                                                <ButtonBase style={{ outline: 'none', margin: 7 }} onClick={() => window.open("https://testflight.apple.com/join/VzfTqKpZ")}>
                                                    <img alt="" src={require('./Images/android_logo.png')} style={{ width: this.state.logo_width, height: this.state.logo_height }} />
                                                </ButtonBase>
                                            </div>
                                            <NavLink
                                                to="/movers"
                                                onClick={() => this.props.changePage("For movers")}
                                                style={{
                                                    color: "black"
                                                }}
                                            >
                                                Are you a mover ?
                                            </NavLink>
                                        </div>
                                    </div>
                                </React.Fragment>
                                :
                                <React.Fragment>
                                    <div style={{ display: 'flex', flex: 7, alignItems: 'center', flexDirection: 'column', minHeight: '30vh', justifyContent: 'space-evenly' }}>
                                        <b style={{ textAlign: 'center', margin: 7, fontSize: this.state.type === 'column' ? 40 : 60, fontWeight: '600' }}>Mover<b style={{ fontWeight: '600', color: 'orange' }}>Up</b><br />More movers!</b>
                                        <b style={{ textAlign: 'center', fontWeight: 'normal', margin: 7, fontSize: this.state.type === 'column' ? 20 : 25 }}>
                                            MoverUp removes the hassle of finding and hiring trusted movers.<br />
                                            Download the app, movers are here.
                                        </b>
                                    </div>
                                    <div style={{ flex: 3 }}>
                                        <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', justifyContent: 'space-around' }}>
                                            <b style={{ textAlign: 'center', margin: 7, marginBottom: 0, fontSize: 30, fontWeight: '600' }}>App for business</b>
                                            <div style={{ minHeight: '15vh', display: 'flex', alignItems: 'center', flexDirection: 'column', justifyContent: 'space-around' }}>
                                                <ButtonBase style={{ outline: 'none', margin: 7 }} onClick={() => window.open("https://play.google.com/store/apps/details?id=com.moverup.company")}>
                                                    <img alt="" src={require('./Images/apple_logo.png')} style={{ width: this.state.logo_width, height: this.state.logo_height }} />
                                                </ButtonBase>
                                                <ButtonBase style={{ outline: 'none', margin: 7 }} onClick={() => window.open("https://testflight.apple.com/join/VzfTqKpZ")}>
                                                    <img alt="" src={require('./Images/android_logo.png')} style={{ width: this.state.logo_width, height: this.state.logo_height }} />
                                                </ButtonBase>
                                            </div>
                                            <NavLink
                                                to="/movers"
                                                onClick={() => this.props.changePage("For movers")}
                                                style={{
                                                    color: "black"
                                                }}
                                            >
                                                Are you a mover ?
                                            </NavLink>
                                        </div>
                                    </div>
                                </React.Fragment>
                        }
                    </div>
                </div>
                <div style={{ minHeight: '35vh', width: '100vw', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', borderBottom: '1px solid lightgray', paddingBottom: 50 }}>
                    <div style={{ maxWidth: 960, display: 'flex', flexDirection: 'column', alignItems: 'center', margin: 7 }}>
                        <div style={{ padding: 20, marginTop: 20 }}>
                            <Typography style={{ textAlign: 'center', fontWeight: '600', fontSize: this.state.type === 'column' ? 40 : 60 }}>
                                Why use us?
                            </Typography>
                        </div>
                        <div style={{ height: 5, width: 80, backgroundColor: 'orange', marginBottom: 50, marginTop: 10 }} />
                        {
                            this.state.type === 'column' ?
                                <div style={{ minHeight: '35vh', display: 'flex', flexDirection: 'column' }}>
                                    <div style={{ display: 'flex', flex: 1, alignItems: 'center', width: '100%', flexDirection: 'column', margin: 5 }}>
                                        <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}><img alt="" src={require('./Images/schedule.png')} style={{ width: 60, height: 60, aspectRatio: 6 / 6 }} /></div>
                                        <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}><h4 style={{ textAlign: 'center' }}>Unlimited workforce</h4></div>
                                        <div style={{ flex: 1, display: 'flex', alignItems: 'flex-start', justifyContent: 'center', padding: 5 }}><p style={{ textAlign: 'center' }}><Typography style={{ textAlign: 'flex-start', marginTop: 10, color: 'gray', fontWeight: '300' }}>Thousands of workers looking for jobs everyday. You will never struggle finding the right team again.</Typography></p></div>
                                    </div>
                                    <div style={{ display: 'flex', flex: 1, alignItems: 'center', width: '100%', flexDirection: 'column', margin: 5 }}>
                                        <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}><img alt="" src={require('./Images/cash.png')} style={{ width: 60, height: 60, aspectRatio: 6 / 6 }} /></div>
                                        <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}><h4 style={{ textAlign: 'center' }}>Manage efficiently</h4></div>
                                        <div style={{ flex: 1, display: 'flex', alignItems: 'flex-start', justifyContent: 'center', padding: 5 }}><p style={{ textAlign: 'center' }}><Typography style={{ textAlign: 'flex-start', marginTop: 10, color: 'gray', fontWeight: '300' }}>

                                            Spend less time on back-and-forth between you and potential worker. You only see those available for your specific job. Have a full overview of your current and planned jobs schedule. </Typography></p></div>
                                    </div>
                                    <div style={{ display: 'flex', flex: 1, alignItems: 'center', width: '100%', flexDirection: 'column', margin: 5 }}>
                                        <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}><img alt="" src={require('./Images/trust.png')} style={{ width: 60, height: 60, aspectRatio: 6 / 6 }} /></div>
                                        <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}><h4 style={{ textAlign: 'center' }}>Trusted workers</h4></div>
                                        <div style={{ flex: 1, display: 'flex', alignItems: 'flex-start', justifyContent: 'center', padding: 5 }}><p style={{ textAlign: 'center' }}><Typography style={{ textAlign: 'flex-start', marginTop: 10, color: 'gray', fontWeight: '300' }}>Candidates on MoverUp marketplace are rated and reviewed. You will be matched with high-quality, actively looking, ready to go workers. </Typography></p></div>
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
                                        <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}><h4 style={{ textAlign: 'center' }}>Unlimited workforce</h4></div>
                                        <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}><h4 style={{ textAlign: 'center' }}>Manage efficiently</h4></div>
                                        <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}><h4 style={{ textAlign: 'center' }}>Trusted workers</h4></div>
                                    </div>
                                    <div style={{ display: 'flex', flex: 1, alignItems: 'flex-start', margin: 5, width: '100%' }}>
                                        <div style={{ flex: 1, display: 'flex', alignItems: 'flex-start', justifyContent: 'center', padding: 5 }}><p style={{ textAlign: 'center' }}><Typography style={{ textAlign: 'flex-start', marginTop: 10, color: 'gray', fontWeight: '300' }}>Thousands of workers looking for jobs everyday. You will never struggle finding the right team again.</Typography></p></div>
                                        <div style={{ flex: 1, display: 'flex', alignItems: 'flex-start', justifyContent: 'center', padding: 5 }}><p style={{ textAlign: 'center' }}><Typography style={{ textAlign: 'flex-start', marginTop: 10, color: 'gray', fontWeight: '300' }}>  Spend less time on back-and-forth between you and potential worker. You only see those available for your specific job. Have a full overview of your current and planned jobs schedule. </Typography></p></div>
                                        <div style={{ flex: 1, display: 'flex', alignItems: 'flex-start', justifyContent: 'center', padding: 5 }}><p style={{ textAlign: 'center' }}><Typography style={{ textAlign: 'flex-start', marginTop: 10, color: 'gray', fontWeight: '300' }}>Candidates on MoverUp marketplace are rated and reviewed. You will be matched with high-quality, actively looking, ready to go workers. </Typography></p></div>
                                    </div>
                                </React.Fragment>
                        }
                    </div>
                </div>
                <div style={{ width: '100vw', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <div style={{ width: '100vw', alignItems: 'center', justifyContent: 'center' }}>
                        <Stepper orientation="vertical" activeStep={null} connector={null} style={{ width: '100vw', alignItems: 'center', display: 'flex', justifyContent: 'space-evenly' }}>
                            <div style={{ padding: 20, marginTop: 20 }}>
                                <Typography style={{ textAlign: 'center', fontWeight: '600', fontSize: this.state.type === 'column' ? 40 : 60 }}>
                                    How it works:
                                </Typography>
                                <Typography style={{ textAlign: 'center', color: 'gray', fontWeight: '300' }}>
                                    3 simple steps to get things done
                                </Typography>
                            </div>
                            <div style={{ height: 5, width: 80, backgroundColor: 'orange', marginBottom: 50, marginTop: 10 }} />
                            <Step key={0} active={true} style={{ display: 'flex', alignItems: 'flex-start', flexDirection: 'column', margin: 20, width: this.state.type === "column" ? '92vw' : 560 }}>
                                <div style={{ flexDirection: 'row', alignItems: 'center', display: 'flex' }}>
                                    <StepLabel StepIconComponent={() => Comp({ number: 1 })}>
                                    </StepLabel>
                                    <h4>Create your jobs</h4>
                                </div>
                                <Typography style={{ textAlign: 'flex-start', marginTop: 10, color: 'gray', fontWeight: '300' }}>
                                    Choose the type of jobs and how many workers you need, as well as any extra costs (bulky items, long carry, stairs, ...)
                                </Typography>
                                <div style={{ flexDirection: 'row', alignItems: 'center', display: 'flex', padding: 10, alignSelf: 'center' }}>
                                    <img src={require('./Images/create_job1.png')} style={{ width: this.state.type === "column" ? 180 : 270, height: this.state.type === "column" ? 360 : 540, margin: 7 }} />
                                    <img src={require('./Images/create_job2.png')} style={{ width: this.state.type === "column" ? 180 : 270, height: this.state.type === "column" ? 360 : 540, margin: 7 }} />
                                </div>
                            </Step>
                            <Step key={1} active={true} style={{ display: 'flex', alignItems: 'flex-start', flexDirection: 'column', margin: 20, width: this.state.type === "column" ? '92vw' : 560 }}>
                                <div style={{ flexDirection: 'row', alignItems: 'center', display: 'flex' }}>
                                    <StepLabel StepIconComponent={() => Comp({ number: 2 })}>
                                    </StepLabel>
                                    <h4>Choose your workers and start the job</h4>
                                </div>
                                <Typography style={{ textAlign: 'flex-start', marginTop: 10, color: 'gray', fontWeight: '300' }}>
                                    We will match you with several workers for each position, and you decide who fits best with your team.<br />
                                    You will have access to the workers contact informations as soon as they accept the job request.
                                </Typography>
                                <div style={{ flexDirection: 'row', alignItems: 'center', display: 'flex', padding: 10, alignSelf: 'center' }}>
                                    <img src={require('./Images/choose_workers1.png')} style={{ width: this.state.type === "column" ? 180 : 270, height: this.state.type === "column" ? 360 : 540, margin: 7 }} />
                                    <img src={require('./Images/choose_workers2.png')} style={{ width: this.state.type === "column" ? 180 : 270, height: this.state.type === "column" ? 360 : 540, margin: 7 }} />
                                </div>
                            </Step>
                            <Step key={2} active={true} style={{ display: 'flex', alignItems: 'flex-start', flexDirection: 'column', margin: 20, width: this.state.type === "column" ? '92vw' : 560 }}>
                                <div style={{ flexDirection: 'row', alignItems: 'center', display: 'flex' }}>
                                    <StepLabel StepIconComponent={() => Comp({ number: 3 })}>
                                    </StepLabel>
                                    <h4>Finish the job and leave a rating</h4>
                                </div>
                                <Typography style={{ textAlign: 'flex-start', marginTop: 10, color: 'gray', fontWeight: '300' }}>
                                    Tell us about your experience working with our helpers, so we can find an even better match next time you use us.
                                </Typography>
                                <img src={require('./Images/rate_helpers.png')} style={{ width: this.state.type === "column" ? 180 : 270, height: this.state.type === "column" ? 360 : 540, margin: 7, alignSelf: 'center' }} />
                            </Step>
                        </Stepper>
                    </div>
                </div>
            </React.Fragment>
        )

        function Comp(props) {
            return (
                <div style={{ width: 40, height: 40, borderRadius: 25, backgroundColor: '#505fb4', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <b style={{ color: 'white', fontSize: 16, fontWeight: 'normal' }}>{props.number}</b>
                </div>
            )
        }
    }


}