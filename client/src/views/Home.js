import React from "react";

import Title from './../components/common/title/Title';
import CryptoAsset from './../components/section/cryptoAsset/CryptoAsset';
import LendingProviders from './../components/section/lendingProviders/LendingProviders';
import StakingProviders from './../components/section/stakingProviders/StakingProviders';
import Calculater from './../components/section/calculater/Calculater';
import NewsLetter from './../components/section/NewsLetter';


const Home = () => {
    return (
        <>
            <div className="" style={{position : 'relative'}}>

                <Title 
                    title={"Smart Trading terminal and Auto trading bots"}
                    subTitle={
                        <p className="text-white text-center">
                            Advanced tools for crypto traders to increase profits while reducing risk and minimizing loss.
                        </p>
                    }
                />

                <div className="bg-third">
                    <div className="n-container">
                        <CryptoAsset />

                        <div className="mt-10 pb-10">
                            <div className="grid grid-cols-2 gap-4 ">
                                <LendingProviders />
                                <StakingProviders />
                            </div>
                            <div className="flex justify-between">
                                <p className="text-[#F29D20] mt-3">View More &#8594;</p>
                                <p className="text-[#F29D20] mt-3">Learn about ETH</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-primary py-10">
                    <div className="n-container">
                        <Calculater />
                    </div>
                </div>

                <div className="bg-third py-10">
                    <div className="n-container">
                        <NewsLetter />
                        <div className="mt-10">
                            <img src="/img/banner.png" alt="" className="w-full" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;