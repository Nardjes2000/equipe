import React, { Component } from "react"
import './App.css'
import './index.css'
import NavBar from './NavBar'
import axios from 'axios'
import {Link} from 'react-router-dom'

export default class SignUp extends Component {
    constructor(props){
        super(props);
        this.state={
          name:'',
          email:'',
          password:'',
          password_confirmation:''

        }
      }
      onSubmit(e){
        e.preventDefault();
        const {name, email, password, password_confirmation} = this.state ;
        axios.post('api/register', {
            name,
            email,
            password,
            password_confirmation
          })
          .then(response=> {
           this.setState({err: false});
           this.props.history.push("/") ;
          })
          .catch(error=> {
            this.refs.name.value="";
            this.refs.password.value="";
            this.refs.email.value="";
            this.refs.password_confirmation.value="";
            this.setState({err: true});
          });
     }

     onChange(e){
        const {name, value} = e.target ;
        this.setState({[name]: value});
     }

    render() {
      let error = this.state.err ;
      let msg = (!error) ? 'Registered Successfully' : 'Oops! , Something went wrong.' ;
      let name = (!error) ? 'alert alert-success' : 'alert alert-danger' ;
        return (
          <div className="Container">
          <NavBar> </NavBar>
          <div className="auth-wrapper">

           <div className="auth-inner">
            <div className="col-md-offset-2 col-md-8 col-md-offset-2">
                {error != undefined && <div className={name} role="alert">{msg}</div>}
            </div>
            <form  role="form" method="POST" onSubmit= {this.onSubmit.bind(this)}>
                <h3>Sign Up</h3>

                <div className="form-group">
                    <label for="name" >Name</label>
                    <input type="text" className="form-control" placeholder="Name"
             ref="name" name="name" onChange={this.onChange.bind(this)} required autoFocus/>
                </div>-


                <div className="form-group">
                    <label for="email">Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email"
             ref="email" name="email" onChange={this.onChange.bind(this)} required  />
                </div>

                <div className="form-group">
                    <label for='password'>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password"
              ref="password" name="password" onChange={this.onChange.bind(this)} required />
                </div>

                <div className="form-group">
                    <label  for="password-confirm">Password Confirmation</label>
                    <input id="password-confirm" type="password" class="form-control" name="password_confirmation" placeholder="Confirm password"
                    onChange={this.onChange.bind(this)} required />
                </div>

                <button type="submit" className="btn btn-primary btn-block" id="log">Sign Up</button>
                <p className="forgot-password text-right">
                   Already registered <Link className="forgot-password text-right" to="/Login" > Sign in </Link>
               </p>
            </form>
            </div>
            </div>
            </div>
        );
    }
}
