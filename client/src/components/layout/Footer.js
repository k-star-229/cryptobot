import { Link } from 'react-router-dom';
import React, { Component } from "react";
import './Footer.css'

const Footer = () => { 
    return (
        <div className=" mx-auto px-5 md:px-0 relative mb-0">
            <footer className="footer text-gray-100 bg-gray-800">
                <div className="max-w-5xl mx-auto py-5">
                <h1 className="text-center font-semibold text-xl lg:text-4xl">Trading bot platform</h1>
                <p className="text-center px-20 py-1">Sing Up for free and make your bot perfect.</p>
                <div className="flex justify-center mt-6">
                    <div className="flex-row">
                    <div className="bg-white rounded-lg">
                        <div className="flex flex-warp justify-between md:flex-row">
                        <input type="email"
                            className="m-1 p-3 md:w-96 appearance-none border-none text-gray-700 text-sm font-medium focus:outline-none focus:border-white focus:rounded focus:placeholder-transparent"
                            placeholder="Enter your email" aria-label="Enter your email" />
                        <button
                            className="w-full text-sm m-1 p-2 text-sm bg-gray-800 rounded-lg font-semibold lg:w-auto hover:bg-gray-700">Subscribe</button>
                        </div>
                    </div>
                    <p className="text-sm ml-1 mt-2 font-light text-gray-300">We wan't spam. Pinky promise</p>
                    </div>
                </div>
                <hr className="h-px mt-6 bg-gray-500 border-none" />
                <div className="flex flex-col items-center justify-between mt-6 md:flex-row">
                    <div className="flex-row flex-1 text-center md:text-left mx-5">
                    <a href="#" className="text-xl font-bold text-gray-100 hover:text-gray-400">Brand</a>
                    <p className="">Brand - Lorem ipsum dolor sit amet consectetur adipisicing elit, soluta consequuntur architecto obcaecati remdicta repellendus.</p>
                    </div>
                    <div className="flex-1 mt-4 md:m-0">
                    <div className="md:ml-20">
                        <a href="#" className="px-4 md:pl-10 md:pr-4 text-sm text-gray-100 font-medium hover:text-gray-400">About</a>
                        <a href="#" className="px-4 text-sm text-gray-100 font-medium hover:text-gray-400">Blog</a>
                        <a href="#" className="px-4 text-sm text-gray-100 font-medium hover:text-gray-400">Contact</a>
                    </div>
                    </div>
                </div>
                </div>
            </footer>
            </div>
    )
}

export default Footer;