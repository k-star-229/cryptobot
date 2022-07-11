import React, { Component  } from "react";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// import { setAlert } from '../../actions/alert';
import Title from '../common/title/Title';
import { registerUser } from '../../actions/authActions';
import { Link } from "react-router-dom";
 

class SignUp extends Component {
    
    constructor() { 
        super();
        this.state = {
            name: '',
            email: '',
            password: '',
            password2: '',
            errors: {}
        };

    this.myRef = React.createRef(null);
    }
    
    
    componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

    onChange = (e) => { 
        this.setState({
            [e.target.name] : e.target.value
        });
    }

    onSubmit = (e) => { 
        e.preventDefault();
        

        //set User
        const newUser = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            password2: this.state.password2
        };

        this.props.registerUser(newUser).then(res=>{if(res){this.myRef.current.click()}}) 
    }

    render() { 

        const errors = this.state.errors;
        // console.log(errors);

    return (
        <>
            <Title 
                    title={"Create New Account"}
            />
            
            <form className="form relative" onSubmit={this.onSubmit}>
                <div className="bg-third mt-20 mb-20 w-3/4 m-auto py-10" style={{
                    borderBottomLeftRadius:  '40%',
                    borderBottomRightRadius: '40%',
                    borderTopLeftRadius : '90%',
                    borderTopRightRadius: '90%',
                }}>
                    <div className="n-container">
                        <div className="max-w-[400px] w-11/12 m-auto text-white">
                            
                            <div>
                                <p>Nickname</p>
                                <input 
                                    type={"text"}
                                    placeholder="Enter nickname"
                                    className="py-2 px-4 w-full bg-[#24303E] mt-2 rounded"
                                    name={"name"}
                                    error={ errors.name }
                                    onChange={this.onChange}
                                    value = {this.state.names}
                                />    
                            <span className="text-red-500">{ errors.name }</span>
                                
                            </div>
                            
                            <div className="mt-5">
                                <p>Email</p>
                                <input 
                                    type={"email"} 
                                    placeholder="Enter email" 
                                    className="py-2 px-4 w-full bg-[#24303E] mt-2 rounded" 
                                    error={ errors.email }
                                    name={"email"}
                                    onChange={this.onChange}
                                    value = {this.state.email}
                                />  
                            <span className="text-red-500">{ errors.email }</span>
                            </div>
                            
                            <div className="mt-5">
                                <p>Password</p>
                                <input 
                                    type={"password"} 
                                    placeholder="Enter password" 
                                    className="py-2 px-4 w-full bg-[#24303E] mt-2 rounded" 
                                    name={"password"}
                                    error={ errors.password }
                                    onChange={this.onChange}
                                    value = {this.state.password}
                                />
                                <span className="text-red-500">{ errors.password }</span>
                            </div>

                            <div className="mt-5">
                                <p>Confirm password</p>
                                <input 
                                    type={"password"} 
                                    placeholder="Enter password" 
                                    className="py-2 px-4 w-full bg-[#24303E] mt-2 rounded" 
                                    name={"password2"}
                                    error = {errors.password2}
                                    onChange={this.onChange}
                                    value = {this.state.password2}
                                />
                                <span className="text-red-500" >{ errors.password2 }</span>
                            </div>

                            <p className="mt-2 text-sm items-center flex gap-1">
                                <input type={"checkbox"} /> 
                                I agree to the Rewards <span className="text-[#F4BC1D]">Terms of Service</span> & <span className="text-[#F4BC1D]">Privacy Policy</span>
                            </p>
                            <input type={'submit'}  className ="w-full bg-[#2751c4] hover:bg-[#2341ad]  text-white mt-5 h-10 rounded" value={"Sign Up"} />
                        </div>
                    </div>
                </div>
                <Link to="/login" style={{display: "none"}} ref={this.myRef} />
            </form>
        </>
    )
    }
}

SignUp.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
    auth: state.auth,
    errors : state.errors
});

export default connect(mapStateToProps, {  registerUser  })(SignUp);