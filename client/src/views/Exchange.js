import React from "react";
import Title from '../components/common/title/Title'

const Exchange = () => {
    return (
        <>
            <div className="">

                <Title
                    title={"Connect an exchange using an API key"}
                />
                <div className="bg-third p-20 gap-5 w-1/2 mt-20 relative" style={{
                    borderTopRightRadius : '30%',
                    borderBottomRightRadius: '70%',
                    borderTopLeftRadius : '20%',
                    borderBottomLeftRadius:  '30%'
                }}>
                    <div className="flex inline gap-10">
                        <div class="mb-6">
                            <label for="username-success" class="block mb-2 text-base font-medium text-green-50 dark:text-green-50">Choose Change : </label>
                            <input type="text" id="username-success" class="bg-green-50 border w-48 text-black-900 placeholder-black-500 text-base rounded-lg focus:ring-black-50 focus:border-green-500 block w-full p-2.5 dark:bg-green-50 dark:border-green-50" placeholder="Binance" />
                            {/* <p class="mt-2 text-sm text-green-600 dark:text-green-500"><span class="font-medium">Alright!</span> Username available!</p> */}
                        </div>

                        <div class="mb-6">
                            <label for="username-success" class="block mb-2 text-base font-medium text-green-50 dark:text-green-50">API secret : </label>
                            <input type="text" id="username-success" class="bg-green-50 border w-96 text-black-900 placeholder-black-500 text-base rounded-lg focus:ring-black-50 focus:border-green-500 block w-full p-2.5 dark:bg-green-50 dark:border-green-50" placeholder="Binance" />
                            {/* <p class="mt-2 text-sm text-green-600 dark:text-green-500"><span class="font-medium">Alright!</span> Username available!</p> */}
                        </div>
                        
                    </div>

                    <div className="flex inline gap-10">
                        <div class="mb-6">
                            <label for="username-success" class="block mb-2 text-base font-medium text-green-50 dark:text-green-50">Enter API Key : </label>
                            <input type="text" id="username-success" class="bg-green-50 border w-96 text-black-900 placeholder-black-500 text-base rounded-lg focus:ring-black-50 focus:border-green-500 block w-full p-2.5 dark:bg-green-50 dark:border-green-50" placeholder="Binance" />
                            {/* <p class="mt-2 text-sm text-green-600 dark:text-green-500"><span class="font-medium">Alright!</span> Username available!</p> */}
                        </div>

                        <div class="mb-6">
                            <label for="username-success" class="block mb-2 text-base font-medium text-green-50 dark:text-green-50">Name of your account : </label>
                            <input type="text" id="username-success" class="bg-green-50 border w-48 text-black-900 placeholder-black-500 text-base rounded-lg focus:ring-black-50 focus:border-green-500 block w-full p-2.5 dark:bg-green-50 dark:border-green-50" placeholder="My Binance Account" />
                            {/* <p class="mt-2 text-sm text-green-600 dark:text-green-500"><span class="font-medium">Alright!</span> Username available!</p> */}
                        </div>
                    </div>
                    <div className="pt-5"> 
                        <button type="button" class="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-48 text-center">Start now</button>
                    </div>
                </div>

                {/* Bottom Table */}
                <div class="relative overflow-x-auto sm:rounded-lg p-10 gap-5 mt-20 ">
                    <table class="w-full  text-sm text-center text-gray-500 dark:text-gray-400 ">
                        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" class="px-6 py-3 text-base">
                                    Exchange
                                </th>
                                <th scope="col" class="px-6 py-3 text-base">
                                    Account Name
                                </th>
                                <th scope="col" class="px-6 py-3 text-base">
                                    Smart Trade
                                </th>
                                <th scope="col" class="px-6 py-3 text-base">
                                    DCA Bpt
                                </th>
                                <th scope="col" class="px-6 py-3 text-base">
                                    Grid Bot
                                </th>
                                <th scope="col" class="px-6 py-3 text-base">
                                    Options Bot
                                </th>
                                <th scope="col" class="px-6 py-3 text-base">
                                    Vol(24h)
                                </th>
                                <th scope="col" class="px-6 py-3 text-base">
                                    Trade pairs
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                        Apple MacBook Pro 17"
                                    </th>
                                    <td class="px-6 py-4">
                                        Sliver
                                    </td>
                                    <td class="px-6 py-4">
                                        Laptop
                                    </td>
                                    <td class="px-6 py-4">
                                        $2999
                                    </td>
                                    <td class="px-6 py-4">
                                        $1999
                                    </td>
                                    <td class="px-6 py-4">
                                        $1999
                                    </td>
                                    <td class="px-6 py-4">
                                        $1999
                                    </td>
                                    <td class="px-6 py-4">
                                        $1999
                                    </td>
                                </tr>
                                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                        Microsoft Surface Pro
                                    </th>
                                    <td class="px-6 py-4">
                                        White
                                    </td>
                                    <td class="px-6 py-4">
                                        Laptop PC
                                    </td>
                                    <td class="px-6 py-4">
                                        $1999
                                    </td>
                                    <td class="px-6 py-4">
                                        $1999
                                    </td>
                                    <td class="px-6 py-4">
                                        $1999
                                    </td>
                                    <td class="px-6 py-4">
                                        $1999
                                    </td>
                                    <td class="px-6 py-4">
                                        $1999
                                    </td>
                                </tr>
                                <tr class="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                        Magic Mouse 2
                                    </th>
                                    <td class="px-6 py-4">
                                        Black
                                    </td>
                                    <td class="px-6 py-4">
                                        Accessories
                                    </td>
                                    <td class="px-6 py-4">
                                        $99
                                    </td>
                                    <td class="px-6 py-4">
                                        $1999
                                    </td>
                                    <td class="px-6 py-4">
                                        $1999
                                    </td>
                                    <td class="px-6 py-4">
                                        $1999
                                    </td>
                                    <td class="px-6 py-4">
                                        $1999
                                    </td>
                                </tr>
                            </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default Exchange;