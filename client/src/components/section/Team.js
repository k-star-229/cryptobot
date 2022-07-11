import React from "react";
import Accordian from "../common/Accordian";

const Team = () => {
    return (
        <>
            <div>
                <p className="text-4xl text-white font-bold font-poppins"><span className="text-[#F4BC1D]">The</span> Team</p>
                <p className="mt-4 text-white">Founded in 2017 by brothers Mirko and Jannik Schmiedl, Staking Rewards has grown to become a team of over 10 professionals, exceedingly passionate about a decentralized, open, and transparent financial community for all. Our team is truly decentralized with colleagues spanning across 10 different countries, 4 continents and 8 timezones. Learn some more about our team below:</p>

                <div className="mt-5">
                    <Accordian 
                        className="mt-5"
                        header={
                            <>
                                <div className="flex gap-3 items-center">
                                    <img src="/img/question.png" alt="" />
                                    <span>Mirko Schmiedi</span>
                                </div>
                                <p>CEO & Co-Founder</p>
                            </>
                        }
                        body={
                            <>
                                <div className="flex justify-between">
                                    <p className="text-white w-11/12">Mirko is the Co-Founder and CEO at Staking Rewards where he created the company with his brother Jannik. He has been researching Proof of Stake Networks and yield-bearing digital assets since 2013, eventually turning his passion into a career. </p>
                                    <div className="flex items-center gap-4">
                                        <img src="/img/twitter_blue.png" alt="" />
                                        <img src="/img/linkedin_blue.png" alt="" />
                                    </div>
                                </div>
                            
                            </>
                        }
                    />
                </div>
            </div>

        </>
    )
}

export default Team;