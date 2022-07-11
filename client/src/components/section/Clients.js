import React from "react";

import Slider from "react-slick";


const Clients = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1
    };

    const clients = [
        { name: 'Coinbase' },
        { name: 'Kraken' },
        { name: 'Messari' },
        { name: 'BitcoinSuisse' },
        { name: 'Fountry Digital' },
        { name: 'Blockdaemon' },
        { name: 'Coinbase' },
        { name: 'Kraken' },
        { name: 'Messari' },
        { name: 'BitcoinSuisse' },
        { name: 'Fountry Digital' },
        { name: 'Blockdaemon' },
    ]
    
    return (
        <>
            <div>
                <p className="text-3xl text-white font-medium mt-10">Our Clients</p>

                <div className="mt-6">
                    <Slider {...settings}>
                        {clients.map((row) => {
                            return (
                                <div className="text-center w-full" >
                                    <img className="m-auto" src={`/img/clients/${row.name}.png`} alt=""  />
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

export default Clients;