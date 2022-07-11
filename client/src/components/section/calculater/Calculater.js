import React from "react";

import "./Calculater.scss";

const StakingProviders = () => {

    return (
        <>
            <div>
                <h1 className="text-4xl font-bold text-center text-white mt-5"><span className="text-[#F4BC1D]">Calculate</span> Your Earning</h1>
                <div className="mt-10 flex justify-between items-center">
                    <p className="text-white text-xl font-semibold"><span className="text-[#F4BC1D]">Sponsored</span>: Nexo - Grow your passive income with up to 17% APR on your assets</p>
                    <button className="bg-[#F4BC1D] py-2 px-4 text-white rounded">Advance Calculator</button>
                </div>

                <div className="grid grid-cols-2 gap-4 mt-5">
                    <div>
                        <p className="text-white text-lg">Choose your wallet</p>
                        <div className="flex justify-between text-white items-center bg-[#303F50] p-2 mt-2">
                            <p>Ethereum 2.0</p>
                            <img src="/img/down_arrow.png" width={"12"} alt="" />
                        </div>
                    </div>
        


                    <div>
                        <div className="flex justify-between">
                            <p className="text-white text-lg">Enter your USD amount</p>

                            <div className="flex items-center text-white gap-2">
                                <label>USD</label>
                                <label for="default-toggle" className="inline-flex relative items-center cursor-pointer">
                                    <input type="checkbox" value="" id="default-toggle" className="sr-only peer" />
                                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                </label>
                                <label>ETH</label>
                            </div>
                        </div>
                        <input type="number" className="text-white items-center bg-[#303F50] p-2 mt-2 w-full text-center" />
                    </div>
                </div>

                <div className="grid grid-cols-4 gap-4 my-5">
                    <div className="bg-[#303F50] p-10 text-center">
                        <p className="text-[#AFBECF] font-bebas text-3xl leading-10 font-medium">$0.11</p>
                        <p className="font-poppins text-white leading-5 text-lg font-bold mt-3">Daily Earning</p>
                        <p className="mt-1 text-[#C6C6C6] ">0.0001 ETH</p>
                    </div>
                    <div className="bg-[#303F50] p-10 text-center">
                        <p className="text-[#AFBECF] font-bebas text-3xl leading-10 font-medium">$0.81</p>
                        <p className="font-poppins text-white leading-5 text-lg font-bold mt-3">Weekly Earning</p>
                        <p className="mt-1 text-[#C6C6C6] ">0.0005 ETH</p>
                    </div>
                    <div className="bg-[#303F50] p-10 text-center">
                        <p className="text-[#AFBECF] font-bebas text-3xl leading-10 font-medium">$3.49</p>
                        <p className="font-poppins text-white leading-5 text-lg font-bold mt-3">Monthly Earning</p>
                        <p className="mt-1 text-[#C6C6C6] ">0.002 ETH</p>
                    </div>
                    <div className="bg-[#303F50] p-10 text-center">
                        <p className="text-[#AFBECF] font-bebas text-3xl leading-10 font-medium">$41.87</p>
                        <p className="font-poppins text-white leading-5 text-lg font-bold mt-3">Yearly Earning</p>
                        <p className="mt-1 text-[#C6C6C6] ">0.238 ETH</p>
                    </div>

                </div>
            </div>
        </>
    )

}

export default StakingProviders;