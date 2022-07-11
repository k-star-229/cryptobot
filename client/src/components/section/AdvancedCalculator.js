import React from "react";


const AdvancedCalculator = () => {

    return (
        <>
            <div>
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

                <p className="text-white text-3xl font-medium mt-10 border-b border-gray-700">Advanced Options</p>
                
                <div className="flex gap-4 text-white mt-5">
                    <div className="w-full">
                        <p>Staking TIme</p>
                        <div className="flex justify-between border-b-2 border-[#F4BC1D] w-full mt-2 pb-1">
                            <p className="text-2xl font-bold">Days</p>
                            <input type={"number"} className="bg-transparent text-white text-right outline-0 appearance-none" value={"9"} />
                        </div>
                    </div>
                    <div className="w-full">
                        <p>Fees</p>
                        <div className="flex justify-between border-b-2 border-[#F4BC1D] w-full mt-2 pb-1">
                            <p className="text-2xl font-bold">Provider Fee</p>
                            <input type={"text"} className="bg-transparent text-white text-right outline-0 appearance-none" value={"10.89"} />
                        </div>
                    </div>
                </div>
                <div className="flex gap-4 text-white mt-5">
                    <div className="w-full">
                        <p>Sell/Reinvest?</p>
                        <div className="flex justify-between border-b-2 border-[#F4BC1D] w-full mt-2 pb-1">
                            <p className="text-2xl font-bold">Compound Rewards</p>
                            <div className="flex items-center gap-4">
                                <p>Compound</p>
                                <label for="compound-reward" className="inline-flex relative items-center cursor-pointer">
                                    <input type="checkbox" value="" id="compound-reward" className="sr-only peer" />
                                    <div className="w-11 h-6 bg-[#27303C] peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#27303C]"></div>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="w-full">
                        <p>ETH Price</p>
                        <div className="flex justify-between border-b-2 border-[#F4BC1D] w-full mt-2 pb-1">
                            <p className="text-2xl font-bold">USD</p>
                            <input type={"text"} className="bg-transparent text-white text-right outline-0 appearance-none" value={"$ 1089"} />
                        </div>
                    </div>
                </div>
                <div className="mt-10">
                    <div className="block mb-2 font-medium text-white flex justify-between">
                        <label for="default-range">Default range</label>
                        <label className="text-[#F4BC1D]">12,662,658 ETH</label>
                    </div>
                    <input id="default-range" type="range" value="50" className="w-full h-1 bg-gray-600 rounded-lg appearance-none cursor-pointer " />
                </div>
                
                <p className="text-3xl text-white font-bold mt-5">Returns</p>
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

export default AdvancedCalculator;