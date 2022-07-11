import React from "react";

import "./LendingProviders.scss";

import ProviderItem from './../../common/ProviderItem';

const LendingProviders = () => {

    return (
        <>
            <div className="LendingProviders">
                <div className="flex justify-between items-center">
                    <h1 className="text-white text-2xl font-medium"><span>Top 10</span> Lending Providers For</h1>
                    <div className="flex items-center text-white gap-2 item-center bg-[#263240] px-3 rounded py-2">
                        <img src="/img/tokens/usdt.png" alt="usdt" />
                        <p>USDT</p>
                        &nbsp;&nbsp;&nbsp;
                        <img src="/img/down_arrow.png" alt="" width={"12"} />
                    </div>
                </div>

                <div className="mt-5">
                    <ProviderItem />
                    <ProviderItem />
                    <ProviderItem />
                    <ProviderItem />
                    <ProviderItem />
                    <ProviderItem />
                </div>
            </div>
        </>
    )

}

export default LendingProviders;