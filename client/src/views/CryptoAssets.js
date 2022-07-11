import React from 'react';

import Title from './../components/common/title/Title';

import Calculater from './../components/section/calculater/Calculater';
import NewsLetter from './../components/section/NewsLetter';

import StakeableAssets from './../components/section/StakeableAssets';

function CryptoAssets(props) {
    return (
        <>
            <div className="">

                <Title 
                    title={"Smart Trade"}
                />
                
                <div className="bg-third">
                    <div className="n-container">
                        <StakeableAssets />
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
    );
}

export default CryptoAssets;
