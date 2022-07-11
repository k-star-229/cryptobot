import React, { useState } from "react";

import Table from './../common/table/Table';

const StakeableAssets = () => {

    const [currentNav, setCurrentNav] = useState("Providers");

    const nav = [
        {type: "Providers"},
        {type: "DeFi"},
        {type: "Exchanges"},
        {type: "Wallets"},
        {type: "Verified Providers"},
    ]
    
    return (
        <>
            <div className="cryptoAsset">
                <div className="py-10">
                    
                    <div className="text-sm font-medium text-center text-white border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
                        <ul className="flex flex-wrap mb-5 justify-center">
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