import React, { Component } from "react";
import './App.css';

class Login extends Component {

    loggedIn = (event) => {
        event.preventDefault();
      
        this.props.history.push("/home");

    }

    render() {
        return (
            <form onSubmit={this.loggedIn} style={{margin: '0 auto', width: '40%'}}>
                <h3>Sign In</h3>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary btn-block">Submit</button>
            </form>
        );
    }
}

export default Login;