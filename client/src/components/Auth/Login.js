import React , { Component } from "react";
import Title from '../common/title/Title';
import { setAlert } from '../../actions/alert';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
import { Link  } from "react-router-dom";

class Login extends Component {
    
    constructor() { 
        super();
        this.state = {
            email: '',
            password: '',
            errors: {},
            isAuthenticated : false
        };
        this.myRef = React.createRef(null);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.auth.isAuthenticated) {
            
        } else {
            //Something else coming
        }

    if (nextProps.errors) {
        this.setState({
            errors: nextProps.errors,
            isAuthenticated : nextProps.auth.isAuthenticated
        });
        }
    }


    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    onSubmit = e => {
    e.preventDefault();
    const userData = {
      email: this.state.email,
      password: this.state.password
    };
    // console.log(userData);  
    this.props.loginUser(userData).then(res=>{if(res){this.myRef.current.click();}}); // since we handle the redirect within our component, we don't need to pass in this.props.history as a parameter
    };


    render() {

        const { errors } = this.state;
        // if (errors.Emailnotfound) { 
        //     alert("Login Failed!!!");
        // }
        return (
            <>
                <Title
                        title={"Login"}
                />
                <form className="relative" onSubmit={this.onSubmit}  >
                <div className="bg-third py-10 w-2/3 m-auto mt-20 mb-20" style={{
                    borderBottomLeftRadius:  '40%',
                    borderBottomRightRadius: '40%',
                    borderTopLeftRadius : '90%',
                    borderTopRightRadius: '90%',
                }}>
                        <div className="n-container">
                            <div className="max-w-[400px] w-11/12 m-auto text-white">
                                <div>
                                    <p>Email</p>
                                    <input
                                        type={"text"}
                                        placeholder="Enter email"
                                        className="py-2 px-4 w-full bg-[#24303E] mt-2 rounded"
                                        name={"email"}
                                        error={ errors.email}
                                        value={this.state.email}
                                        onChange={this.onChange}
                                    />
                                    <span className="text-red-500">{ errors.email}</span>
                                </div>
                            
                                <div className="mt-5">
                                    <p>Password</p>
                                    <input
                                        type={"password"}
                                        placeholder="Enter password"
                                        className="py-2 px-4 w-full bg-[#24303E] mt-2 rounded"
                                        value={this.state.password}
                                        name={"password"}
                                        error={ errors.password}
                                        onChange={this.onChange}
                                    />
                                    {errors.password ? <span className="text-red-500">{errors.password}</span> : <span className="text-red-500">{ errors.passwordIncorrect}</span> }
                                </div>

                                <div className="flex justify-between mt-5">
                                    <p className="text-sm items-center flex gap-1"><input type={"checkbox"} /> Remember Me</p>
                                    <p className="text-sm text-[#F4BC1D]">Forgot Password?</p>
                                </div>

                                <input type={'submit'} className="w-full bg-[#2751c4] hover:bg-[#2341ad]  text-white mt-5 h-10 rounded" value={"Sign In"} />

                                <div className="mt-5 flex items-center justify-between">
                                    <hr className="w-2/5" />
                                    <p className="font-bold">OR</p>
                                    <hr className="w-2/5" />
                                </div>

                                {/* <button className="w-full bg-white rounded flex h-10 justify-center items-center gap-2 mt-5 text-[#8C8C8C] p-2">
                                    <img src="/img/google.png" alt="" className="h-8" />
                                    Login in with Google
                                </button> */}

                                <p className="text-white text-center mt-5">Don't have a account? <Link to="/register"><span className="text-[#F4BC1D]">Sing Up</span></Link></p>
                            </div>
                        </div>
                    </div>
                    <Link to="/dashboard" style={{display: "none"}} ref={this.myRef} />
                </form>
            </>
        )
    }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});
export default connect( mapStateToProps, { loginUser })(Login);