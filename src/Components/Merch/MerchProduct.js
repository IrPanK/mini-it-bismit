import React from "react";

import Hoodie from "../../images/hoodie.svg";
import HoodieBlack from "../../images/hoodie-black.svg";
import SweaterGrey from "../../images/sweater-grey.svg";
import SweaterWhite from "../../images/sweater-white.svg";

const MerchProduct = ({ name, price, image }) => {
    return (
        <div>
            <div className="relative w-[16.5rem] mb-[1.25rem]">
                <img
                    className="mx-auto"
                    src={
                        image === "hoodie"
                            ? Hoodie
                            : image === "hoodie-black"
                            ? HoodieBlack
                            : image === "sweater-grey"
                            ? SweaterGrey
                            : SweaterWhite
                    }
                    alt="Hoodie"
                />
                <div className="absolute bottom-0 w-full h-[10rem] bg-[#54BAB9] z-[-1]"></div>
            </div>
            <div>
                <h3 className="text-[1.188rem] mb-[0.375rem]">{name}</h3>
                <p className="text-[1.188rem] font-medium">{price}</p>
            </div>
        </div>
    );
};

export default MerchProduct;
