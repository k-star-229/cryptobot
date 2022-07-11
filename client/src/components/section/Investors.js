import React from "react";

import Slider from "react-slick";


const Investors = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1
    };

    const investors = [
        { name: 'Galaxy Digital' },
        { name: 'Coinshares' },
        { name: 'Digital Currency Group' },
        { name: 'A&T Capital' },
        { name: 'Swiss Founders Fund' },
        { name: '1kx Capital' },
        { name: 'Galaxy Digital' },
        { name: 'Coinshares' },
        { name: 'Digital Currency Group' },
        { name: 'A&T Capital' },
        { name: 'Swiss Founders Fund' },
        { name: '1kx Capital' },
    ]
    
    return (
        <>
            <div>
                <p className="text-3xl text-white font-medium mt-10">Our Investors</p>

                <div className="mt-6">
                    <Slider {...settings}>
                        {investors.map((row) => {
                            return (
                                <div className="text-center w-full" >
                                    <img className="m-auto" src={`/img/investors/${row.name}.png`} alt=""  />
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

export default Investors;