import React from "react";

import Hoodie from "../../images/hoodie.svg";

const MerchProduct = () => {
    return (
        <div>
            <div className="relative w-[16.5rem] mb-[1.25rem]">
                <img className="mx-auto" src={Hoodie} alt="Hoodie" />
                <div className="absolute bottom-0 w-full h-[60%] bg-[#54BAB9] z-[-1]"></div>
            </div>
            <div>
                <h3 className="text-[1.188rem] mb-[0.375rem]">
                    BISMIT HOODIE - GREY
                </h3>
                <p className="text-[1.188rem] font-medium">RP 150.000,-</p>
            </div>
        </div>
    );
};

export default MerchProduct;
