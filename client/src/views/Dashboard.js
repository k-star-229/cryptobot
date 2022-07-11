import React from 'react';

import Title from '../components/common/title/Title';


function Dashboard(props) {
    return (
        <>
            
            <div className="">
                <Title 
                    title={"Dashboard"}
                />
            </div>

            {/* My portfolio */}
            <div class=" grid grid-cols-2 gap-4 text-center p-10 relative">
                <div>
                    <div class="">
                        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                    <tr>
                                        <th scope="col" class="px-6 py-3">
                                            Token
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                             Share %
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            Amount
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            24h change
                                        </th>

                                        <th scope="col" class="px-6 py-3">
                                            Price
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            Total
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                            Binance Coin BNB
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
                                            $2999
                                        </td>
                                        <td class="px-6 py-4">
                                            $2999
                                        </td>
                                    </tr>
                                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                            Bitcoin (BTC)
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
                                            $2999
                                        </td>
                                        <td class="px-6 py-4">
                                            $2999
                                        </td>
                                    </tr>
                                    <tr class="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                            Ethereum (ETH)
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
                                            $2999
                                        </td>
                                        <td class="px-6 py-4">
                                            $2999
                                        </td>
                                    </tr>

                                    <tr class="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                            Tether(TEH)
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
                                            $2999
                                        </td>
                                        <td class="px-6 py-4">
                                            $2999
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            {/* DCA Bots */}
                <div class="flex align-items justify-center text-center row-span-2 text-center">
                    <div class="grid grid-rows-3 gap-5">
                        {/* First Part */}
                        <div class="...">
                            <div class="p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                                <a href="#">
                                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">My DCA Bots</h5>
                                </a>
                                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">A bot hasn't been created yet. Choose a strategy or copy another bot, use signals and get a profit.</p>
                                {/* <a href="#" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    Launch Bot
                                    <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                </a> */}
                                 <div className="pt-5"> 
                                    <button type="button" class="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-48 text-center">Launch Bot</button>
                                </div>
                            </div>
                        </div>
                        {/* Second part */}
                        <div class="...">
                            <div class="p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                                <a href="#">
                                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">My Smart Trades</h5>
                                </a>
                                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">A SmartTrade hasn't been created yet. Set Take-profit & Stop-loss to start your first trade. Use the trailing take-profit and stop-loss feature to maximize profits</p>
                                {/* <a href="#" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    Read more
                                    <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                </a> */}
                                <div> 
                                    <button type="button" class="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-48 text-center">Launch Bot</button>
                                </div>
                            </div>  
                        </div>
                        {/* Third part */}
                        <div class="...">
                            <div class="p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                                <a href="#">
                                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Marketplace</h5>
                                </a>
                                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Create your own bots based on signals and configurations from market professionals</p>
                                {/* <a href="#" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    Read more
                                    <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                </a> */}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Popular DCA Bot */}
                <div class="">
                    <div class="grid grid-cols-3 gap-2 p-2">
                        <div class="">
                            <div class="p-4 max-w-sm bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                                <h5 class="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">USDT/ALGO</h5>
                                {/* <div class="flex items-baseline text-gray-900 dark:text-white">
                                    <span class="text-3xl font-semibold">$</span>
                                    <span class="text-5xl font-extrabold tracking-tight">49</span>
                                    <span class="ml-1 text-xl font-normal text-gray-500 dark:text-gray-400">/month</span>
                                </div> */}
                                <ul role="list" class="my-7 space-y-5">
                                    <li class="flex space-x-3">
                                        <svg class="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                        <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Daily profit</span>
                                        <p class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400" >+1.45%</p>
                                    </li>

                                    <li class="flex space-x-3">
                                        <svg class="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                        <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Days Running</span>
                                        <p class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400" >4</p>

                                    </li>

                                    <li class="flex space-x-3">
                                        <svg class="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                        <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Trades</span>
                                        <p class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400" >20</p>
                                    </li>

                                    <li class="flex space-x-3">
                                        <svg class="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                        <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Stop Loss</span>
                                        <p class="text-base font-normal leading-tight text-red-500 dark:text-red-400" >No</p>
                                    </li>

                                    <li class="flex space-x-3">
                                        <svg class="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                        <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Last Edited</span>
                                        <p class="text-base font-normal leading-tight text-red-50 dark:text-red-50" >26/6/2022</p>
                                    </li>
                                   
                                </ul>
                                <button type="button" class="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center">Start now</button>
                            </div>
                        </div>

                        {/* Second part */}
                        <div class="">
                        <div class="p-4 max-w-sm bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                                <h5 class="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">USDT/BTC</h5>
                                {/* <div class="flex items-baseline text-gray-900 dark:text-white">
                                    <span class="text-3xl font-semibold">$</span>
                                    <span class="text-5xl font-extrabold tracking-tight">49</span>
                                    <span class="ml-1 text-xl font-normal text-gray-500 dark:text-gray-400">/month</span>
                                </div> */}
                                <ul role="list" class="my-7 space-y-5">
                                    <li class="flex space-x-3">
                                        <svg class="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                        <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Daily profit</span>
                                        <p class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400" >+1.45%</p>
                                    </li>

                                    <li class="flex space-x-3">
                                        <svg class="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                        <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Days Running</span>
                                        <p class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400" >4</p>
                                    </li>

                                    <li class="flex space-x-3">
                                        <svg class="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                        <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Trades</span>
                                        <p class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400" >20</p>
                                    </li>

                                    <li class="flex space-x-3">
                                        <svg class="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                        <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Stop Loss</span>
                                        <p class="text-base font-normal leading-tight text-red-500 dark:text-red-400" >No</p>
                                    </li>

                                    <li class="flex space-x-3">
                                        <svg class="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                        <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Last Edited</span>
                                        <p class="text-base font-normal leading-tight text-red-50 dark:text-red-50" >26/6/2022</p>
                                    </li>
                                   
                                </ul>
                                <button type="button" class="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center">Start now</button>
                            </div>
                        </div>
                        {/* Third part */}
                        <div class="">  
                            <div class="p-4 max-w-sm bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                                    <h5 class="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">USDT/ETH</h5>
                                    {/* <div class="flex items-baseline text-gray-900 dark:text-white">
                                        <span class="text-3xl font-semibold">$</span>
                                        <span class="text-5xl font-extrabold tracking-tight">49</span>
                                        <span class="ml-1 text-xl font-normal text-gray-500 dark:text-gray-400">/month</span>
                                    </div> */}
                                    <ul role="list" class="my-7 space-y-5">
                                        <li class="flex space-x-3">
                                            <svg class="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                            <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Daily profit</span>
                                            <p class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400" >+1.45%</p>
                                        </li>
    
                                        <li class="flex space-x-3">
                                            <svg class="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                        <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Days Running</span>
                                        <p class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400" >4</p>
                                        </li>
    
                                        <li class="flex space-x-3">
                                            <svg class="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                            <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Trades</span>
                                            <p class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400" >20</p>
                                        </li>
    
                                        <li class="flex space-x-3">
                                            <svg class="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                            <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Stop Loss</span>
                                            <p class="text-base font-normal leading-tight text-red-500 dark:text-red-400" >No</p>
                                        </li>
    
                                        <li class="flex space-x-3">
                                            <svg class="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                            <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Last Edited</span>
                                            <p class="text-base font-normal leading-tight text-red-50 dark:text-red-50" >26/6/2022</p>
                                        </li>
                                       
                                    </ul>
                                    <button type="button" class="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center">Start now</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-span-2 ">
                    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                        <table class="w-full text-sm text-center text-gray-500 dark:text-gray-400">
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
            </div>
        </>
    );
}

export default Dashboard;