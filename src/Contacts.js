import React from 'react'
import { ButtonBase } from '@material-ui/core'
import TextField from '@material-ui/core/TextField'
import Amplify, { API } from 'aws-amplify'

Amplify.configure({
    API: {
      endpoints: [
        {
            name: "MoverUp",
            endpoint: "https://u7e32avpt0.execute-api.us-west-1.amazonaws.com/test/api"
        }
    ]
    }
  })

export default class Contacts extends React.Component {

    state = {
        full_name: '',
        email: '',
        message: '',
        success_message: '',
        error: false
    }

    onSubmit = () => {

        console.log("Submitting form")
        var emailValid = this.state.email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);

        if (emailValid && this.state.full_name && this.state.message) {
            console.log("Valid form")

            let apiName = 'MoverUp'
            let path = '/sendFrontPageMail'
            let myInit = {
                body: {
                    fullName: this.state.full_name,
                    mess: this.state.message,
                    email: this.state.email
                }
            }

            console.log("Sending email")

            API.post(apiName, path, myInit)
            .then(response => {
                console.log("Success")
                console.log(response)
            })
            .catch(err => {
                console.log("Error")
                console.log(err)
            })

            this.setState({
                full_name: '',
                email: '',
                message: '',
                error: false,
                success_message: 'We received your message and will be contacting you soon. Thank you.'
            }, () => setTimeout(() => this.setState({...this.state, success_message: ''}), 5000))

        } else {
            console.log("Wrong email")
            this.setState({
                ...this.state,
                error: true,
                error_types: {
                    email: !emailValid,
                    full_name: (this.state.full_name.length === 0),
                    message: (this.state.message.length === 0)
                }
            })
        }
    }

    onChangeFullName = (e) => {
        var text = e.target.value
        this.setState({
            ...this.state,
            full_name: text
        })
    }

    onChangeEmail = (e) => {
        var text = e.target.value
        this.setState({
            ...this.state,
            email: text
        })
    }

    onChangeMessage = (e) => {
        var text = e.target.value
        this.setState({
            ...this.state,
            message: text
        })
    }

    render() {
        return (
            <div style={{width: '100vw', display: 'flex', justifyContent: 'center', marginTop: '8vh', left: 0, position: 'relative', minHeight: '72vh'}}>
                <div style={{display: 'flex', flexDirection: "column", width: '50vw', alignItems: 'center'}}>
                    <h2 style={{marginTop: '2vh'}}>
                        Contact us
                    </h2>
                    <TextField
                    id={this.state.error && this.state.error_types.full_name ? "outlined-error" : "outlined-basic"}
                    error={this.state.error && this.state.error_types.full_name}
                    helperText={this.state.error && this.state.error_types.full_name ? "This field is required" : null}
                    variant="outlined"
                    label="Full Name"
                    value={this.state.full_name}
                    onChange={this.onChangeFullName}
                    style={{width: '75vw', fontSize: '1vw', marginTop: '2.5vh', marginBottom: '2.5vh'}}
                    />
                    <TextField
                    id={this.state.error && this.state.error_types.email ? "outlined-error" : "outlined-basic"}
                    error={this.state.error && this.state.error_types.email}
                    helperText={this.state.error && this.state.error_types.email ? "Wrong email" : null}
                    variant="outlined"
                    label="Email"
                    value={this.state.email}
                    onChange={this.onChangeEmail}
                    style={{width: '75vw', fontSize: '1vw', marginTop: '2.5vh', marginBottom: '2.5vh'}}
                    />
                    <TextField
                    multiline
                    id={this.state.error && this.state.error_types.message ? "outlined-error" : "outlined-basic"}
                    error={this.state.error && this.state.error_types.message}
                    helperText={this.state.error && this.state.error_types.message ? "This field is required" : null}
                    variant="outlined"
                    rows={10}
                    label="Message"
                    value={this.state.message}
                    onChange={this.onChangeMessage}
                    style={{width: '75vw', fontSize: '1vw', marginTop: '2.5vh', marginBottom: '2.5vh'}}
                    />
                    <b style={{fontWeight: 'normal'}}>{this.state.success_message}</b>
                    <ButtonBase
                    style={{width: '75vw', height: '5vh', backgroundColor: '#F9F9F9', marginTop: '2.5vh', marginBottom: '2.5vh', outline: 'none', fontWeight: '600'}}
                    onClick={this.onSubmit}
                    >
                        Submit
                    </ButtonBase>
                </div>
            </div>
        )
    }
}