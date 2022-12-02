import React from "react";
import { Link } from "react-router-dom";
import MerchProduct from "./MerchProduct";

import Human from "../../images/human.svg";

const dataMerch = [
    {
        name: "CS HOODIE - GREY",
        price: "RP 200.000,-",
        image: "hoodie",
    },
    {
        name: "CS SWEATER - GREY",
        price: "RP 150.000,-",
        image: "sweater-grey",
    },
    {
        name: "CS SWEATER - WHITE",
        price: "RP 150.000,-",
        image: "sweater-white",
    },
    {
        name: "CS HOODIE - BLACK",
        price: "RP 200.000,-",
        image: "hoodie-black",
    },
];

const Merch = () => {
    return (
        <div className="w-[90%] mx-auto mt-[3.75rem]" id="merch">
            <h1 className="inline text-[#409A95] text-[1.688rem] font-medium border-b-[5px] border-[#f05f3b]">
                MERCH
            </h1>
            <div className="relative w-full overflow-hidden h-[27.375rem] bg-[#FBF8F1] mt-[3.5rem] z-10 drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
                <div className="absolute top-[3rem] left-[-24.563rem] w-[48.563rem] h-[48.563rem] bg-[#A5C5C3] z-[-1] rounded-full"></div>
                <div className="flex w-[80%] mx-auto items-center justify-evenly">
                    <img
                        className="translate-y-[0.7rem]"
                        src={Human}
                        alt="human"
                    />
                    <div>
                        <h3 className="text-[2.188rem] font-medium">
                            Sweater{" "}
                            <span className="font-extrabold tracking-[0.5rem]">
                                LIMITED
                            </span>{" "}
                            Computer Science!
                        </h3>
                        <p className="text-[1.25rem] mb-[1.875rem]">
                            Miliki segera! Stok dan produksi terbatas!
                        </p>
                        <Link
                            className="border-2 border-[#A5C5C3] py-[0.375rem] px-[1.125rem]"
                            to={"/"}
                        >
                            View More
                        </Link>
                    </div>
                </div>
            </div>
            <div className="flex justify-between items-end mt-[2.688rem] mb-20">
                {dataMerch.map((val) => (
                    <MerchProduct
                        name={val.name}
                        price={val.price}
                        image={val.image}
                    />
                ))}
            </div>
        </div>
    );
};

export default Merch;
