import React from "react";

const ProviderItem = () => {
    return (
        <>
            <div className="bg-[#263240] rounded-md	py-3 px-4 flex justify-between text-white items-center mt-3">
                <div className="flex items-center gap-2">
                    <img src="/img/OMrkHMb3.png" alt="" className="h-10" />
                    <p>Midas.Investments</p>
                </div>
                <p>custodial</p>
                <div className="flex gap-3">
                    <p className="font-bold">18%</p>
                    <p className="font-thin">Earn</p>
                </div>
            </div>
        </>
    )
}

export default ProviderItem;