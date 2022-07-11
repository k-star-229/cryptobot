import React, { useState } from "react";

import Table from './../common/table/Table';

const StakeableAssets = () => {

    const [currentNav, setCurrentNav] = useState("All");

    const nav = [
        {type: "All"},
        {type: "Staking"},
        {type: "DeFi"},
        {type: "Stablecoins"},
        {type: "Lending"},
        {type: "Proof od Stake"},
        {type: "Masternodes"},
        {type: "Launching Soon"},
        {type: "Near Protocol"},
    ]
    
    return (
        <>
            <div className="cryptoAsset">
                <div className="py-10">
                    
                    <div className="text-sm font-medium text-center text-white border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
                        <ul className="flex flex-wrap mb-5 justify-between">
                            {
                                nav.map((row) => {
                                    return (
                                        <li className="mr-2 w-100">
                                            <a 
                                                onClick={() => setCurrentNav(row.type)}
                                                href="#" 
                                                className={`${ currentNav == row.type ? 'border-b-2 border-[#F4BC1D]' : '' } inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:border-[#F4BC1D] dark:hover:text-gray-300`}
                                            >
                                                {row.type}
                                            </a>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>

                    <div className="flex justify-between text-white items-center my-4">
                        <p>Nexo-Grow your passive income with up to‌ ‌17%‌ APR on your</p>
                        <div className="flex items-center gap-3">
                            <p>Compound</p>
                            <label for="default-toggle" className="inline-flex relative items-center cursor-pointer">
                                <input type="checkbox" value="" id="default-toggle" className="sr-only peer" />
                                <div className="w-11 h-6 bg-[#27303C] peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#27303C]"></div>
                            </label>
                        </div>
                    </div>
                
                    <Table
                        tHeadData={
                            <tr className="text-left">
                                <th className="text-center">#</th>
                                <th>Asset</th>
                                <th>Price</th>
                                <th>24h</th>
                                <th>Reward</th>
                                <th>Staked Value</th>
                                <th>Market Cap</th>
                                <th>Total Staked</th>
                                <th>7d Price Change</th>
                                <th className="text-center">Add</th>
                            </tr>
                        }

                        tBodyData={
                            <>
                                <tr>
                                    <td className="text-center">1</td>
                                    <td className="flex items-center gap-2">
                                        <img src="img/eth.png" alt="eth" />
                                        <div>
                                            <p>Ethereum 2.0</p>
                                            <p>ETH</p>
                                        </div>
                                    </td>
                                    <td>$ 26.00</td>
                                    <td><p className="bg-[#F4BC1D]/25 text-center">3%</p></td>
                                    <td>4.25%</td>
                                    <td>$25,224,417</td>
                                    <td>$25,224,417</td>
                                    <td>14.25%</td>
                                    <td>______________</td>
                                    <td className="text-center">
                                        <button className="bg-[#F4BC1D] rounded px-3 py-1 font-bold">+</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="text-center">2</td>
                                    <td className="flex items-center gap-2">
                                        <img src="img/eth.png" alt="eth" />
                                        <div>
                                            <p>Ethereum 2.0</p>
                                            <p>ETH</p>
                                        </div>
                                    </td>
                                    <td>$ 26.00</td>
                                    <td><p className="bg-[#F4BC1D]/25 text-center">3%</p></td>
                                    <td>4.25%</td>
                                    <td>$25,224,417</td>
                                    <td>$25,224,417</td>
                                    <td>14.25%</td>
                                    <td>______________</td>
                                    <td className="text-center">
                                        <button className="bg-[#F4BC1D] rounded px-3 py-1 font-bold">+</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="text-center">3</td>
                                    <td className="flex items-center gap-2">
                                        <img src="img/eth.png" alt="eth" />
                                        <div>
                                            <p>Ethereum 2.0</p>
                                            <p>ETH</p>
                                        </div>
                                    </td>
                                    <td>$ 26.00</td>
                                    <td><p className="bg-[#F4BC1D]/25 text-center">3%</p></td>
                                    <td>4.25%</td>
                                    <td>$25,224,417</td>
                                    <td>$25,224,417</td>
                                    <td>14.25%</td>
                                    <td>______________</td>
                                    <td className="text-center">
                                        <button className="bg-[#F4BC1D] rounded px-3 py-1 font-bold">+</button>
                                    </td>
                                </tr>
                            
                            </>
                        }
                    />

                    <div className="text-center mt-5">
                        <button className="bg-[#263240] rounded text-white text-center py-2 px-4">
                            View More
                        </button>
                    </div>
                </div>
            </div>
        </> 

    )
}

export default StakeableAssets;