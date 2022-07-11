import React from 'react';

import Title from '../components/common/title/Title';

function DCABot(props) {
    return (
        <>
            <div className="">
                <Title 
                    title={"DCA BOT"}
                />
            </div>
             
            <div className = "p-20  m-auto bg-third gap-5 mt-20 mb-20 relative "  style={{
                    borderTopRightRadius : '30%',
                    borderBottomRightRadius: '30%',
                    borderTopLeftRadius : '30%',
                    borderBottomLeftRadius:  '30%'
                }}>
                <div className="grid grid-cols-3 gap-4 " >
                    {/* First Part */}
                    <div className="p-5">
                        <div class="mb-6">
                            <label for="username-success" className="block mb-2 text-sm font-medium text-green-50 dark:text-green-50">Bot Name : </label>
                            <input type="text" id="username-success" className="bg-green-50 border w-full text-black-900 placeholder-black-500 text-sm rounded-lg focus:ring-black-50 focus:border-green-500 block w-full p-2.5 dark:bg-green-50 dark:border-green-50" placeholder="BinanceBot 101" />
                            {/* <p className="mt-2 text-sm text-green-600 dark:text-green-500"><span className="font-medium">Alright!</span> Username available!</p> */}
                        </div>

                        <div className="mb-6">
                            <label for="username-success" className="block mb-2 text-sm font-medium text-green-50 dark:text-green-50">Select Exchange : </label>
                            <input type="text" id="username-success" className="bg-green-50 border w-full text-black-900 placeholder-black-500 text-sm rounded-lg focus:ring-black-50 focus:border-green-500 block w-full p-2.5 dark:bg-green-50 dark:border-green-50" placeholder="Binance" />
                            {/* <p className="mt-2 text-sm text-green-600 dark:text-green-500"><span className="font-medium">Alright!</span> Username available!</p> */}
                        </div>

                        <div className="mb-6">
                            <label for="username-success" className="block mb-2 text-sm font-medium text-green-50 dark:text-green-50">Select Pair : </label>
                            <input type="text" id="username-success" className=" bg-green-50 border w-full text-black-900 placeholder-black-500 text-sm rounded-lg focus:ring-black-50 focus:border-green-500 block w-full p-2.5 dark:bg-green-50 dark:border-green-50" placeholder="BTC/USDT" />
                            {/* <p className="mt-2 text-sm text-green-600 dark:text-green-500"><span className="font-medium">Alright!</span> Username available!</p> */}
                        </div>
                        <div className='mb-6'>
                            <label for="username-success" className="block mb-2 text-sm font-medium text-green-50 dark:text-green-50">Order Side : </label>
                            <div className="flex items-center justify-center mb-3">
                                <div className="inline-flex shadow-md hover:shadow-lg w-full focus:shadow-lg p-2" role="group">
                                    <button type="button" className="w-full rounded-l-lg inline-block px-7 py-3 border border-black-900 border-r-4 bg-blue-50 text-black font-medium text-sm leading-snug uppercase hover:bg-blue-700 focus:bg-blue-700 focus:outline-none focus:ring-0 active:bg-blue-800 transition duration-150 ease-in-out">Buy</button>
                                    <button type="button" className="w-full rounded-r-lg inline-block px-7 py-3 border border-black-900 border-l-4 bg-blue-50 text-black font-medium text-sm leading-snug uppercase hover:bg-blue-700 focus:bg-blue-700 focus:outline-none focus:ring-0 active:bg-blue-800 transition duration-150 ease-in-out">Sell</button>
                                </div>
                            </div>
                        </div>


                        <div className='mb-6'>
                            <label for="username-success" className="block mb-2 text-sm font-medium text-green-50 dark:text-green-50">Order Type : </label>
                            <div className="flex items-center justify-center mb-3">
                                <div className="inline-flex shadow-md hover:shadow-lg w-full focus:shadow-lg p-2" role="group">
                                    <button type="button" className="w-full text-sm  rounded-l-lg inline-block px-7 py-3 border border-black-900 border-r-4 bg-blue-50 text-black font-medium text-sm leading-snug uppercase hover:bg-blue-700 focus:bg-blue-700 focus:outline-none focus:ring-0 active:bg-blue-800 transition duration-150 ease-in-out">Market</button>
                                    <button type="button" className="w-full text-sm  rounded-r-lg inline-block px-7 py-3 border border-black-900 border-l-4 bg-blue-50 text-black font-medium text-sm leading-snug uppercase hover:bg-blue-700 focus:bg-blue-700 focus:outline-none focus:ring-0 active:bg-blue-800 transition duration-150 ease-in-out">Limit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Second Part */}
                    <div className="p-5">
                        <div className=" p-5">
                            <div className="mb-6">
                                <label for="username-success" className="block mb-2 text-sm font-medium text-green-50 dark:text-green-50">Order Amount : </label>
                                <input type="text" id="username-success" className="bg-green-50 border w-full text-black-900 placeholder-black-500 text-sm rounded-lg focus:ring-black-50 focus:border-green-500 block w-full p-2.5 dark:bg-green-50 dark:border-green-50" placeholder="374,629,12" />
                                {/* <p className="mt-2 text-sm text-green-600 dark:text-green-500"><span className="font-medium">Alright!</span> Username available!</p> */}
                            </div>

                            <div className="mb-6">
                                <label for="username-success" className="block mb-2 text-sm font-medium text-green-50 dark:text-green-50">Minimum and Maximum value each other : </label>
                                {/* <input type="text" id="username-success" className="bg-green-50 border w-full text-black-900 placeholder-black-500 text-sm rounded-lg focus:ring-black-50 focus:border-green-500 block w-full p-2.5 dark:bg-green-50 dark:border-green-50" placeholder="Binance" /> */}
                                {/* <p className="mt-2 text-sm text-green-600 dark:text-green-500"><span className="font-medium">Alright!</span> Username available!</p> */}
                            </div>

                            <div className="mb-6 flex inline">
                                <div className=''>
                                    <label for="username-success" className="block mb-2 text-sm font-medium text-green-50 dark:text-green-50">Max Price : </label>
                                    <input type="number" id="username-success" className=" bg-green-50 border w-3/4 text-black-900 placeholder-black-500 text-sm rounded-lg focus:ring-black-50 focus:border-green-500 block w-full p-2.5 dark:bg-green-50 dark:border-green-50" placeholder="123.57" />
                                </div>
                                <div className=''>
                                    <label for="username-success" className="block mb-2 text-sm font-medium text-green-50 dark:text-green-50">Min Price : </label>
                                    <input type="number" id="username-success" className=" bg-green-50 border w-3/4 text-black-900 placeholder-black-500 text-sm rounded-lg focus:ring-black-50 focus:border-green-500 block w-full p-2.5 dark:bg-green-50 dark:border-green-50" placeholder="34.31" />
                                </div>
                            </div>
                            <div className='mb-6'>
                                <label for="username-success" className="block mb-2 text-sm font-medium text-green-50 dark:text-green-50">Signal Type : </label>
                                <div className="flex items-center justify-center mb-3">
                                    <div className="inline-flex shadow-md hover:shadow-lg w-full focus:shadow-lg p-2" role="group">
                                        <button type="button" className="w-full rounded-l-lg inline-block px-7 py-3 border border-black-900 border-r-4 bg-blue-50 text-black font-medium text-sm leading-snug uppercase hover:bg-blue-700 focus:bg-blue-700 focus:outline-none focus:ring-0 active:bg-blue-800 transition duration-150 ease-in-out">Manual</button>
                                        <button type="button" className="w-full rounded-r-lg inline-block px-7 py-3 border border-black-900 border-l-4 bg-blue-50 text-black font-medium text-sm leading-snug uppercase hover:bg-blue-700 focus:bg-blue-700 focus:outline-none focus:ring-0 active:bg-blue-800 transition duration-150 ease-in-out">TradingView</button>
                                    </div>
                                </div>
                            </div>

                            <div className="mb-6 flex inline">
                                <div className='mb-6'>
                                    <label for="username-success" className="block mb-2 text-sm font-medium text-green-50 dark:text-green-50">Max Trade Count : </label>
                                    <input type="number" id="username-success" className=" bg-green-50 border w-3/4 text-black-900 placeholder-black-500 text-sm rounded-lg focus:ring-black-50 focus:border-green-500 block w-full p-2.5 dark:bg-green-50 dark:border-green-50" placeholder="235.1242" />
                                </div>
                                <div className='mb-6'>
                                    <label for="username-success" className="block mb-2 text-sm font-medium text-green-50 dark:text-green-50">Trading Interval : </label>
                                    <input type="text" id="username-success" className=" bg-green-50 border w-3/4 text-black-900 placeholder-black-500 text-sm rounded-lg focus:ring-black-50 focus:border-green-500 block w-full p-2.5 dark:bg-green-50 dark:border-green-50" placeholder="24.124" />
                                </div>
                            </div>

                        </div>
                    </div>
                    {/* Third Part */}
                    <div className='p-5'>
                        <div className=" p-5">
                            {/* First Profit Part */}
                            <div className="mb-6 flex justify-content item-center gap-10">
                                <span class="ml-3 text-base font-medium text-gray-900 dark:text-gray-300">Take Profit</span>
                                <label for="blue-toggle" class="inline-flex relative items-center mr-5 cursor-pointer">
                                    <input type="checkbox" value="" id="blue-toggle" class="sr-only peer" />
                                    <div class="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
                                </label>
                            </div>

                            <div className="mb-6">
                                <label for="username-success" className="block mb-2 text-sm font-medium text-green-50 dark:text-green-50">Take Profit Percentage : </label>
                                <div className="flex inline gap-2">
                                    <input type="number" id="username-success" className="bg-green-50 border w-1/2 text-black-900 placeholder-black-500 text-sm rounded-lg focus:ring-black-50 focus:border-green-500 block w-full p-2.5 dark:bg-green-50 dark:border-green-50" placeholder="20" />
                                    <label for="username-success" className="block mb-2 text-2xl font-medium text-green-50 dark:text-green-50">%</label>
                                </div>    
                                {/* <p className="mt-2 text-sm text-green-600 dark:text-green-500"><span className="font-medium">Alright!</span> Username available!</p> */}
                            </div>
                            {/* Second Profit Part */}
                            <div className="mb-6 flex justify-content item-center gap-10">
                                <span class="ml-3 text-base font-medium text-gray-900 dark:text-gray-300">Stop Loss</span>
                                <label for="green-toggle" class="inline-flex relative items-center mr-5 cursor-pointer">
                                    <input type="checkbox" value="" id="green-toggle" class="sr-only peer" />
                                    <div class="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
                                </label>
                            </div>

                            <div className="mb-6">
                                <label for="Stop-Loss-success" className="block mb-2 text-sm font-medium text-green-50 dark:text-green-50">Stop Loss Percentage : </label>
                                <div className="flex inline gap-2">
                                    <input type="number" id="username-success" className="bg-green-50 border w-1/2 text-black-900 placeholder-black-500 text-sm rounded-lg focus:ring-black-50 focus:border-green-500 block w-full p-2.5 dark:bg-green-50 dark:border-green-50" placeholder="20" />
                                    <label for="username-success" className="block mb-2 text-2xl font-medium text-green-50 dark:text-green-50">%</label>
                                </div>    
                                {/* <p className="mt-2 text-sm text-green-600 dark:text-green-500"><span className="font-medium">Alright!</span> Username available!</p> */}
                            </div>

                            <div className="pt-5"> 
                                <button type="button" class="text-white w-64 bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-48 text-center">Start now</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default DCABot;
 