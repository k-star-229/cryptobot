import { Link } from 'react-router-dom';
import React, { Component, Fragment  } from "react";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// import { setAlert } from '../../actions/alert';
import Title from '../common/title/Title';
import { logoutUser } from '../../actions/authActions';


class Navbar extends Component {

    constructor(props) { 
        super(props);
        this.myRef = React.createRef(null);
    };
    componentWillReceiveProps(nextProps) {
        if (nextProps) { 
        }
        if (!nextProps.auth.isAuthenticated) {
           this.myRef.current.click(); // push user to dashboard when they login
        }
        if (nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            });
        }
    }

    onLogoutClick = e => {
        e.preventDefault();
        this.props.logoutUser();
        // alert('workd@');
        // console.log(this.state.isAuthenticated);
    }

    guestLink = (
        <>
            <div className="hidden sm:flex text-white gap-5" c>
            <Link to="/blog">
                <div className="flex space-x-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M8 13v-1m4 1v-3m4 3V8M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                    </svg>
                    <p>Blog</p>
                </div>
            </Link>
            <Link to="/about">
                <div className="flex space-x-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                    <p>About Us</p>
                </div>
            </Link>
        </div>

        <div className="hidden sm:flex gap-4">
            <Link to={"login"}><button className="px-4 text-white  border border-white h-10 bg-transparent hover:bg-[#656e8f] rounded ">Sign In</button></Link>
            <Link to={"register"}><button className="border border-white bg-transparent hover:bg-[#656e8f] h-10 px-2 text-white rounded">Sign Up</button></Link>
        </div>
        </>
    );

    authLink = (
        <>
        <div className="flex space-x-4">
            
        </div>
        <div className="hidden sm:flex text-white gap-5">
            <Link to="/dashboard">
                <div className="flex space-x-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                    <p>Dashboard</p>
                </div>
            </Link>
            <Link to="/exchange">
                <div className="flex space-x-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                    </svg>
                    <p>My Exchange</p>
                </div>
            </Link>
                <Link to="/bot">
                <div className="flex space-x-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p>DCA Bot</p>
                    <span class="flex h-3 w-3">
                        <span class="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-sky-400 opacity-75"></span>
                        <span class="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
                    </span>
                </div>
            </Link>
            {/* <Link to="/privacy">
                <div className="flex space-x-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 5c7.18 0 13 5.82 13 13M6 11a7 7 0 017 7m-6 0a1 1 0 11-2 0 1 1 0 012 0z" />
                    </svg>
                    <p>My Portfolio</p>
                </div>
            </Link> */}
            <Link to="/blog">
                <div className="flex space-x-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M8 13v-1m4 1v-3m4 3V8M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                    </svg>
                    <p>Blog</p>
                </div>
            </Link>
            <Link to="/about">
                <div className="flex space-x-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                    <p>About Us</p>
                </div>
            </Link>
            <Link to="#" className='inline-block'>
                <div className="flex space-x-1">
                    <svg className="w-6 h-6 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>
                    <p>Settings</p>
                </div> 
            </Link>
            {/* <p>Journal</p> */}
        </div>

        <div className=" sm:flex gap-4 ">
                <div className="flex space-x-1">
                    <button  onClick={this.onLogoutClick}  className="inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                        
                        <span className="flex inline items-center  px-5 py-2.5 gap-1 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                            </svg>
                            <p className='text-base'>Logout</p>
                        </span>
                    </button>    
                </div> 
            </div>         
    </>
    );

    // const [isShow, toggleModal] = useState(false);
    render() {
        // console.log("Authorization:",this.props.auth.isAuthenticated, this.props.auth.user);
        return (
            <>
                <div className="bg-primary py-3 z-20 border-b" >
                    <div className="n-container">
                        <div className="flex justify-between items-center">
                            <Link to={ this.props.auth.isAuthenticated ? "/dashboard" : "#"}>
                                <div className="flex items-center gap-2">
                                    <img src="/img/logo.png" alt="logo" className="h-12 sm:h-16" />
                                    <div>
                                        <p className="text-white text-2xl tracking-widest font-black">DCA BOT</p>
                                        <p className="text-[#F29D20] tracking-tighter text-xs border-t-2 border-[#F29D20] font-medium">Crypto Trading Platform</p>
                                    </div>
                                </div>
                            </Link>

                            {/* <div className="hidden sm:flex text-white gap-5">
                                <p>DCA</p>
                                <Link to="/stakingReward"><p>My Exchange</p></Link>
                                <Link to="/cryptoassets"><p>Smart Trades</p></Link>
                                <Link to="/providers"><p>Terminal Order</p></Link>
                                <Link to="/dcabot"><p>DCA Bot</p></Link>
                                <Link to="/calculator"><p>Blog</p></Link>
                                <Link to="/privacy"><p>About</p></Link>
                            </div>

                            <div className="hidden sm:flex gap-4">
                                <Link to={"login"}><button className="px-4 text-white h-10 bg-[#F4BC1D] rounded">Sign In</button></Link>
                                <Link to={"register"}><button className="border border-white h-10 px-2 text-white rounded">Sign Up</button></Link>
                            </div> */}
                            <Fragment>{this.props.auth.isAuthenticated ? this.authLink : this.guestLink }</Fragment>
                            <p className="none sm:hidden text-white pointer"  >&#9776;</p>
                        </div>
                    </div>
                    <Link to="/login" style={{display : 'none'}}   ref={this.myRef}/> 
                </div>
            </>
        )
    }
}


Navbar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    auth: state.auth,
});
export default connect( mapStateToProps, { logoutUser })(Navbar);