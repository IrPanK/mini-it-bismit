import React from "react";
import { Link } from "react-router-dom";

import Car from "../../images/car.svg";

const ProjectOdd = () => {
    return (
        <div className="relative flex w-full h-[19.5rem] mb-[3rem] overflow-hidden">
            <div className="w-[90%] mx-auto my-auto">
                <div className="flex w-[65%] p-[2.5rem] my-auto bg-[#F7ECDE] rounded-[12px]">
                    <div className="mr-20">
                        <h3 className="poppins text-[1.938rem] font-medium">
                            Nama
                        </h3>
                        <p className="text-[1.25rem] font-medium mb-[1.2rem]">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Ut et massa mi. Aliquam in hendrerit urna.
                        </p>
                        <Link
                            className="border-2 border-[#E9DAC1] bg-[#FBF8F1] py-[0.375rem] px-[1.125rem]"
                            to={"/"}
                        >
                            View More
                        </Link>
                    </div>
                    <img src={Car} alt="Car" />
                </div>
            </div>
            <div className="absolute top-0 right-[-30rem] w-full h-full bg-[#FBF8F1] z-[-1]"></div>
        </div>
    );
};

export default ProjectOdd;
