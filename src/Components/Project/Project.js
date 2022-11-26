import React from "react";
import ProjectEven from "./ProjectEven";
import ProjectOdd from "./ProjectOdd";

const Project = () => {
    return (
        <div className="w-full mt-[3.75rem]" id="project">
            <div className="w-[90%] mx-auto">
                <h1 className="inline-block text-[#409A95] text-[1.688rem] font-medium border-b-[5px] border-[#f05f3b]">
                    PROJECT
                </h1>
            </div>
            <ProjectOdd />
            <ProjectEven />
            <ProjectOdd />
        </div>
    );
};

export default Project;
