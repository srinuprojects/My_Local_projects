import React from "react";

class SuccessComponent extends React.Component {
    componentDidMount() {
        alert('Success Component will render');
    }

    componentWillUnmount() {
        alert('Success component will unmount');
    }

    render() {
        return (
            <div>
                <h2>Login Successful...</h2>
            </div>
        );
    }
}

class ErrorComponent extends React.Component {
    componentDidMount() {
        alert('Error Component will render');
    }

    componentWillUnmount() {
        alert('Error component will unmount');
    }

    render() {
        return (
            <div>
                <h2>Login Failed...</h2>
            </div>
        );
    }
}

export default class LifeCycleDemo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userDetails: {
                UserName: 'john_nit',
                Password: 'john@11'
            },
            formDetails: {
                UserName: '',
                Password: ''
            },
            result: null
        };

        this.handleUserName = this.handleUserName.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.handleLoginClick = this.handleLoginClick.bind(this);
    }

    handleUserName(event) {
        this.setState(prevState => ({
            formDetails: {
                ...prevState.formDetails,
                UserName: event.target.value
            }
        }));
    }

    handlePassword(event) {
        this.setState(prevState => ({
            formDetails: {
                ...prevState.formDetails,
                Password: event.target.value
            }
        }));
    }

    handleLoginClick() {
        const { UserName, Password } = this.state.formDetails;
        const { userDetails } = this.state;

        if (UserName === userDetails.UserName && Password === userDetails.Password) {
            this.setState({ result: <SuccessComponent /> });
        } else {
            this.setState({ result: <ErrorComponent /> });
        }
    }

    render() {
        return (
            <div>
                <dl>
                    <dt>UserName</dt>
                    <dd><input type="text" onChange={this.handleUserName} /></dd>
                    <dt>Password</dt>
                    <dd><input type="password" onChange={this.handlePassword} /></dd>
                </dl>
                <button onClick={this.handleLoginClick}>Login</button>

                <div style={{ marginTop: '20px' }}>
                    {this.state.result}
                </div>
            </div>
        );
    }
}
