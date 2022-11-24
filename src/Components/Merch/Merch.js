import React from "react";
import { Link } from "react-router-dom";
import MerchProduct from "./MerchProduct";

import Human from "../../images/human.svg";

const Merch = () => {
    return (
        <div className="w-[90%] mx-auto mt-[3.75rem]">
            <h1
                className="inline text-[#409A95] text-[1.688rem] font-medium border-b-[5px] border-[#f05f3b]"
                id="merch"
            >
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
                            INI BARANG{" "}
                            <span className="font-extrabold tracking-[0.5rem]">
                                LIMITED
                            </span>{" "}
                            PUNYA
                        </h3>
                        <p className="text-[1.25rem] mb-[1.875rem]">
                            Deskripsi barangnya ini tuh kalau mau sama harga
                            bisa
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
            <div className="flex justify-between mt-[2.688rem] mb-20">
                <MerchProduct />
                <MerchProduct />
                <MerchProduct />
                <MerchProduct />
            </div>
        </div>
    );
};

export default Merch;
