import React, { useState } from "react";
import { useParams } from "react-router-dom";

import Navbar from "../../Navbar/Navbar";

import BismitImage from "../../../images/project-bismit.svg";
import iMabaImage from "../../../images/project-iMaba.svg";
import eLearningImage from "../../../images/project-eLearning.svg";
import techStack from "../../../images/techStack.svg";

const dataProject = {
    "project-bismit": {
        title: "Website Bismit",
        desc: "Project website ini ditunjukkan untuk organisasi bernama Bismit. Project website ini ditunjukan untuk website organisasi yang berisi tentang penjelasan organsasi, display project, dan penjualan merchandise organisasi.",
        waktuTepat: "1 Bulan 10 Hari",
        waktuPeriode: "01/01/2022 - 10/02/2022",
        image: "BismitImage",
    },
    "project-e-learning": {
        title: "Website E-Learning",
        desc: "Project website ini dibuat untuk menunjang pembelajaran secara daring untuk organisasai X. Website E-Learning ini berisi dari pengumpulan tugas, vidio pembelajaran, hingga sumber-sumber pembelajaran.",
        waktuTepat: "2 Bulan 25 Hari",
        waktuPeriode: "01/05/2022 - 15/08/2022",
        image: "eLearningImage",
    },
    "project-iMaba": {
        title: "iMaba",
        desc: "Website ini bertujuan untuk memberi informasi-informasi penting dan menarik seputar akademik, kampus UI, Fasilkom, serta kanal informasi yang dapat mahasiswa baru hubungi.",
        waktuTepat: "1 Bulan 15 Hari",
        waktuPeriode: "01/09/2022 - 15/10/2022",
        image: "iMabaImage",
    },
};

const ProjectInfo = () => {
    const params = useParams();

    const [data, setData] = useState(dataProject[params.id]);

    return (
        <div>
            <Navbar />
            <div className="relative h-[100vh] overflow-hidden">
                <div className="grid grid-cols-2 w-[80%] mx-auto mt-[2rem]">
                    <img
                        src={
                            data.image === "BismitImage"
                                ? BismitImage
                                : data.image === "eLearningImage"
                                ? eLearningImage
                                : iMabaImage
                        }
                        alt={data.title}
                    />
                    <div className="my-auto">
                        <h1 className="text-[2.25rem] font-semibold text-center mb-[3.063rem]">
                            {data.title}
                        </h1>
                        <p className="text-[1.188rem] font-medium leading-[2.313rem]">
                            {data.desc}
                        </p>
                        <h5 className="text-[1.125rem] font-semibold mt-[2rem]">
                            Stack:
                        </h5>
                        <img
                            className="mt-[1rem] mx-auto"
                            src={techStack}
                            alt="Tech Stack"
                        />
                        <h5 className="text-[1.125rem] font-semibold mt-[2rem]">
                            Waktu Pengerjaan:
                        </h5>
                        <p className="text-[1.188rem] text-center font-medium mt-[1rem]">
                            {data.waktuTepat}
                        </p>
                        <p className="text-[1.188rem] text-center font-medium">
                            {data.waktuPeriode}
                        </p>
                    </div>
                </div>
                <div className="absolute top-[-22rem] right-[-13rem] w-[46.813rem] h-[46.813rem] bg-[#F7ECDE] z-[-1] rounded-full"></div>
                <div className="absolute bottom-[-15rem] left-[-19rem] w-[49rem] h-[49rem] bg-[#E9DAC1] z-[-1] rounded-full"></div>
            </div>
        </div>
    );
};

export default ProjectInfo;
