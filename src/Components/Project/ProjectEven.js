import React from "react";
import { Link } from "react-router-dom";

import Vegies from "../../images/vegies.svg";

const ProjectEven = () => {
    return (
        <div className="flex justify-end mb-[3rem] w-[90%] mx-auto">
            <div className="flex w-[65%] p-[2.5rem] my-auto text-right bg-[#F7ECDE] rounded-[12px]">
                <img src={Vegies} alt="vegies" />
                <div className="ml-20">
                    <h3 className="poppins text-[1.938rem] font-medium">
                        Nama
                    </h3>
                    <p className="text-[1.25rem] font-medium mb-[1.2rem]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Ut et massa mi. Aliquam in hendrerit urna.
                    </p>
                    <Link
                        className="border-2 border-[#E9DAC1] bg-[#FBF8F1] py-[0.375rem] px-[1.125rem]"
                        to={"/"}
                    >
                        View More
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ProjectEven;
