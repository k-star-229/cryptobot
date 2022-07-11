import React from "react";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './Title.css'

const Title = ({ title, subTitle }) => {
    
    return (
        <>
            <div className="">
                <div className="title bg-primary">
                    <div className="n-container">
                        <div className="inline">
                            <h1 className="text-center text-5xl font-bold text-white pt-10 pb-8">{title}</h1>
                        </div>
                        <div className="max-w-[80%] m-auto pb-5 p-2 justify-items-center grid">
                            {subTitle}
                        </div>
                    </ div>
                </div>
            </div>
        </>
    )
}

export default Title;