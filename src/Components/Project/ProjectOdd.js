import React from "react";
import { Link } from "react-router-dom";

import bismit from "../../images/bismit.svg";
import iMaba from "../../images/iMaba.svg";

const ProjectOdd = ({ title, desc, redirect }) => {
    return (
        <div className="relative flex w-full h-[19.5rem] mb-[3rem] overflow-hidden">
            <div className="w-[90%] mx-auto my-auto">
                <div className="flex w-[65%] p-[2.5rem] my-auto bg-[#F7ECDE] rounded-[12px]">
                    <div className="mr-20">
                        <h3 className="poppins text-[1.938rem] font-medium">
                            {title}
                        </h3>
                        <p className="text-[1.25rem] font-medium mb-[1.2rem]">
                            {desc}
                        </p>
                        <Link
                            className="border-2 border-[#E9DAC1] bg-[#FBF8F1] py-[0.375rem] px-[1.125rem]"
                            to={`/${redirect}`}
                        >
                            View More
                        </Link>
                    </div>
                    <img src={title === "iMaba" ? iMaba : bismit} alt="Car" />
                </div>
            </div>
            <div className="absolute top-0 right-[-30rem] w-full h-full bg-[#FBF8F1] z-[-1]"></div>
        </div>
    );
};

export default ProjectOdd;
