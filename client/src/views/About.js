import React from 'react';

import Title from '../components/common/title/Title';

import AdvancedCalculator from '../components/section/AdvancedCalculator';
import NewsLetter from '../components/section/NewsLetter';


function Caculator(props) {
    return (
        <>
            <div className="">

                <Title 
                    title={"About US"}

                    subTitle={
                        <>
                            <p className='text-white text-center'>{" Dollar-Cost-Averaging (DCA) Bots are automated trading Bots that allow users to automatically buy and/or sell crypto at regular intervals over a preset time frame. DCA trading is used by investors who would like to reduce the influence of volatility and accumulate/decumulate positions gradually."}</p>
                        </>
                    }
                />
                <div className='gap-4 p-10 text-lg text-white relative' >
                    <p>
                        <strong className='text-2xl' >Stochastic+Channel</strong><br/>
                            For beginner
                            Also a one-click strategy with the combination of support/resistance lines and Stochastic oscillator for the sideways market. The bot will repeatedly trade by the signal while staying inside the channel and just HODL and use Trailing Stop once the price breaks outside.
                            <br/>
                        <strong className='text-2xl'>Pure DCA</strong>
                        <br />
                            Advanced
                            A quick launcher for the DCA-only strategy that will buy by market, place limit orders to buy cheaper, take profit, and repeat.

                            The lower is the order, the larger is the size, so the break-even price is dragged closer. As long as the crypto market moves in phases, this strategy may work surprisingly well in the long run.

                        <br />
                        <strong className='text-2xl'>Custom DCA</strong>
                        <br />
                            Advanced
                            Create your own trading strategy using all available signal sources, DCA settings, risk management tools and additional bells and whistles. See detailed calculations of everything before starting a bot. Save and load templates and much more.
                            <br />
                        <p>
                            DCA bot is made for trading on technical signals on rising, falling, or sideways markets, with or without the use of DCA orders.

                            A bot is able to ’listen’ to some signal source like an indicator and choose the time for a trade.

                            Then it places the market order and a set number of averaging (DCA) orders and exits the trade when the conditions are right (like a closing signal or Take Profit) or wrong (like a Stop Loss).

                            On top of all the above, there is a set of Risk Management tools that are made for letting your profitable trades grow and unprofitable ones — not to grow.

                            This includes Trailing Stop, Drawdown Limit, and Risk Reduction. The bottom line, our DCA bot is technical trading automation.
                        </p>
                    </p>
                </div>
            </div>
        </>
    );
}

export default Caculator;
