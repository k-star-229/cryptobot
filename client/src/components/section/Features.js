import React from "react";

import Slider from "react-slick";


const Features = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1
    };

    const features = [
        { name: 'CoinDesk' },
        { name: 'CoinTelegraph' },
        { name: 'Forbes' },
        { name: 'Messari' },
        { name: 'BTCEcho' },
    ]
    
    return (
        <>
            <div>
                <p className="text-3xl text-white font-medium mt-10">Featured In</p>

                <div className="mt-6">
                    <Slider {...settings}>
                        {features.map((row) => {
                            return (
                                <div className="text-center w-full" >
                                    <img className="m-auto" src={`/img/features/${row.name}.png`} alt=""  />
                                    <h1 className="text-white mt-3 text-3xl">{row.name}</h1>
                                </div>
                            );
                        })}
                    </Slider>
                </div>
            </div>
        </>
    )
}

export default Features;