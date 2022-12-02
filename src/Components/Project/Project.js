import React from "react";
import ProjectEven from "./ProjectEven";
import ProjectOdd from "./ProjectOdd";

const dataProject = [
    {
        no: 1,
        title: "Website Bismit",
        desc: "Project ini berupa  website untuk organisasi yang memiliki fungsi utama sebagai display project.",
        redirect: "project-bismit",
    },
    {
        no: 2,
        title: "Website E-Learning",
        desc: "Project ini berupa website pembelajaran yang berisi hal-hal yang diperlukan saat proses mengajar.",
        redirect: "project-e-learning",
    },
    {
        no: 3,
        title: "iMaba",
        desc: "Project ini berupa website untuk menampilkan informasi seputar kampus untuk mahasiswa baru",
        redirect: "project-iMaba",
    },
];

const Project = () => {
    return (
        <div className="w-full mt-[3.75rem]" id="project">
            <div className="w-[90%] mx-auto">
                <h1 className="inline-block text-[#409A95] text-[1.688rem] font-medium border-b-[5px] border-[#f05f3b]">
                    PROJECT
                </h1>
            </div>
            {dataProject.map((val) =>
                val.no % 2 === 1 ? (
                    <ProjectOdd
                        title={val.title}
                        desc={val.desc}
                        redirect={val.redirect}
                    />
                ) : (
                    <ProjectEven
                        title={val.title}
                        desc={val.desc}
                        redirect={val.redirect}
                    />
                )
            )}
        </div>
    );
};

export default Project;
