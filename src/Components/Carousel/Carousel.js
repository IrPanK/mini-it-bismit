import React, { useEffect, useRef, useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import Glossy from "../../images/Glossy.png";
import Winkler from "../../images/winkler.svg";
import PileClothes from "../../images/pileClothes.svg";

import "./Carousel.css";

const components = {
    1: `<section className="relative">
                <div className="flex w-4/5 mx-auto pt-[8rem] pl-[3rem]">
                    <div className="w-3/5 pt-[3rem]">
                        <h1 className="mb-8 text-[3.875rem] font-semibold tracking-[0.5rem]">
                            ABOUT US
                        </h1>
                        <p className="text-[1.5rem] font-normal tracking-[0.185rem] pr-[4.6rem]">
                            Lorem ipsum dolor sit amet consectetur adipiscing
                            elit Ut et massa mi. Aliquam in hendrerit urna.
                            Pellentesque sit amet sapien fringilla, mattis
                            ligula consectetur, ultrices mauris. Maecenas vitae
                            mattis tellus. Nullam quis
                        </p>
                    </div>
                    <img src={Glossy} alt="glossy" />
                </div>
                <div className="absolute top-[-2px] right-0 3xl:w-[40rem] 2xl:w-[30rem] h-[59.25rem] bg-[#E9DAC1] z-[-1]"></div>
            </section>`,
    2: `<section className="relative">
                <div className="absolute left-0 top-0 h-0 w-0 border-solid 2xl:border-b-[58.875rem] 2xl:border-r-[70rem] border-b-[53rem] border-r-[60rem] border-r-transparent border-b-[#E9DAC1] z-[-2]"></div>
                <div className="absolute right-0 top-0 h-0 w-0 border-solid 2xl:border-t-[58.875rem] 2xl:border-r-[50rem] border-t-[53rem] border-r-[40rem] border-r-[#F7ECDE] border-t-transparent z-[-1]"></div>
                <div className="flex justify-between w-4/5 mx-auto pt-[4rem]">
                    <div className="pt-[3rem] text-right 2xl:mr-20 mr-18">
                        <h1 className="mb-8 text-[3.875rem] font-semibold tracking-[0.5rem]">
                            PROJECT
                        </h1>
                        <p className="text-[1.5rem] font-normal tracking-[0.185rem] mb-12">
                            Lorem ipsum dolor sit amet consectetur adipiscing
                            elit Ut et massa mi. Aliquam in hendrerit urna.
                            Pellentesque sit amet sapien fringilla, mattis
                            ligula consectetur, ultrices mauris. Maecenas vitae
                            mattis tellus. Nullam quis
                        </p>
                        <Link
                            to={"#project"}
                            className="text-[1.25rem] font-normal tracking-[0.185rem] bg-[#FBF8F1] py-2.5 px-5 border-solid border-[3px] border-[#E9DAC1]"
                        >
                            View More
                        </Link>
                    </div>
                    <img
                        src={Winkler}
                        alt="winkler"
                        className="scale-[0.8] 2xl:scale-[1] translate-y-[-3rem] translate-x-[1rem] 2xl:translate-y-0 2xl:translate-x-0"
                    />
                </div>
            </section>`,
    3: `<section className="relative bg-[#F7ECDE]">
                <div className="absolute right-0 top-0 h-0 w-0 border-solid border-t-[50.438rem] border-r-[50rem] border-r-[#ffffff] border-t-transparent"></div>
                <div className="flex justify-between w-4/5 mx-auto pt-[4rem]">
                    <div className="pt-[5rem] text-center">
                        <h1 className="mb-8 text-[3.875rem] font-semibold tracking-[0.5rem]">
                            Get Out Merch!
                        </h1>
                        <p className="text-[1.5rem] font-normal tracking-[0.185rem] mb-12">
                            Lorem ipsum dolor sit amet consectetur adipiscing
                            elit Ut et massa mi. Aliquam in hendrerit urna.
                            Pellentesque sit amet sapien fringilla, mattis
                            ligula consectetur, ultrices mauris. Maecenas vitae
                            mattis tellus. Nullam quis
                        </p>
                        <Link
                            to={"#merch"}
                            className="text-[1.25rem] font-normal tracking-[0.185rem] bg-[#FBF8F1] py-2.5 px-5 border-solid border-[3px] border-[#E9DAC1]"
                        >
                            View More
                        </Link>
                    </div>
                    <img
                        src={PileClothes}
                        alt="pile of clothes"
                        className="scale-[0.8] 2xl:scale-[1] translate-y-[-3rem] translate-x-[1rem] 2xl:translate-y-[-3rem] 2xl:translate-x-0"
                    />
                </div>
            </section>`,
};

const Carousel = () => {
    const [slider, setSlider] = useState(0);

    const handleNext = () => {
        if (slider === 2) {
            setSlider(0);
        } else {
            setSlider((prev) => prev + 1);
        }
    };

    const handlePrev = () => {
        if (slider === 0) {
            setSlider(2);
        } else {
            setSlider((prev) => prev - 1);
        }
    };

    useEffect(() => {
        const sliderInterval = setInterval(() => {
            handleNext();
        }, 5000);

        return () => {
            clearInterval(sliderInterval);
        };
    }, [slider]);

    return (
        <div className="relative overflow-hidden">
            <IoIosArrowBack
                onClick={handlePrev}
                className="absolute top-0 left-0 z-10 h-full w-[2.5rem] fill-[#A5C5C3] hover:fill-[#007872] hover:cursor-pointer transition-all"
            />
            <IoIosArrowForward
                onClick={handleNext}
                className="absolute top-0 right-0 z-10 h-full w-[2.5rem] fill-[#A5C5C3] hover:fill-[#007872] hover:cursor-pointer transition-all"
            />
            <div className="flex absolute left-[47.5%] bottom-16 z-20">
                <div
                    onClick={() => setSlider(0)}
                    className={`w-[0.625rem] h-[0.625rem] ${
                        slider === 0 ? "bg-[#007872]" : "bg-[#A5C5C3]"
                    } rounded-full hover:cursor-pointer transition-all`}
                ></div>
                <div
                    onClick={() => setSlider(1)}
                    className={`w-[0.625rem] h-[0.625rem] ${
                        slider === 1 ? "bg-[#007872]" : "bg-[#A5C5C3]"
                    } rounded-full mx-[1.625rem] hover:cursor-pointer transition-all`}
                ></div>
                <div
                    onClick={() => setSlider(2)}
                    className={`w-[0.625rem] h-[0.625rem] ${
                        slider === 2 ? "bg-[#007872]" : "bg-[#A5C5C3]"
                    } rounded-full hover:cursor-pointer transition-all`}
                ></div>
            </div>
            <div
                className={`flex  max-h-[50.438rem] translate-x-[-${
                    slider * 100
                }%] transition-all duration-500`}
            >
                <section className={`relative min-w-full h-[50.438rem]`}>
                    <div className="flex w-4/5 mx-auto pt-[8rem] pl-[3rem]">
                        <div className="w-3/5 pt-[3rem]">
                            <h1 className="mb-8 text-[3.875rem] font-semibold tracking-[0.5rem]">
                                ABOUT US
                            </h1>
                            <p className="text-[1.5rem] font-normal tracking-[0.185rem] pr-[4.6rem]">
                                Lorem ipsum dolor sit amet consectetur
                                adipiscing elit Ut et massa mi. Aliquam in
                                hendrerit urna. Pellentesque sit amet sapien
                                fringilla, mattis ligula consectetur, ultrices
                                mauris. Maecenas vitae mattis tellus. Nullam
                                quis
                            </p>
                        </div>
                        <img src={Glossy} alt="glossy" />
                    </div>
                    <div className="absolute top-[-2px] right-0 3xl:w-[40rem] w-[30rem] h-[50.438rem] bg-[#E9DAC1] z-[-1]"></div>
                </section>

                <section className={`relative min-w-full h-[50.438rem]`}>
                    <div className="absolute left-0 top-0 h-0 w-0 border-solid 2xl:border-r-[70rem] border-b-[50.438rem] border-r-[60rem] border-r-transparent border-b-[#E9DAC1] z-[-2]"></div>
                    <div className="absolute right-0 top-0 h-0 w-0 border-solid 2xl:border-r-[50rem] border-t-[50.438rem] border-r-[40rem] border-r-[#F7ECDE] border-t-transparent z-[-1]"></div>
                    <div className="flex justify-between w-4/5 mx-auto pt-[4rem]">
                        <div className="pt-[3rem] text-right 2xl:mr-20 mr-18">
                            <h1 className="mb-8 text-[3.875rem] font-semibold tracking-[0.5rem]">
                                PROJECT
                            </h1>
                            <p className="text-[1.5rem] font-normal tracking-[0.185rem] mb-12">
                                Lorem ipsum dolor sit amet consectetur
                                adipiscing elit Ut et massa mi. Aliquam in
                                hendrerit urna. Pellentesque sit amet sapien
                                fringilla, mattis ligula consectetur, ultrices
                                mauris. Maecenas vitae mattis tellus. Nullam
                                quis
                            </p>
                            <Link
                                to={"#project"}
                                className="text-[1.25rem] font-normal tracking-[0.185rem] bg-[#FBF8F1] py-2.5 px-5 border-solid border-[3px] border-[#E9DAC1]"
                            >
                                View More
                            </Link>
                        </div>
                        <img
                            src={Winkler}
                            alt="winkler"
                            className="scale-[0.8] 2xl:scale-[1] translate-y-[-3rem] translate-x-[1rem] 2xl:translate-y-0 2xl:translate-x-0"
                        />
                    </div>
                </section>

                <section
                    className={`relative bg-[#F7ECDE] min-w-full h-[50.438rem]`}
                >
                    <div className="absolute right-0 top-0 h-0 w-0 border-solid border-t-[50.438rem] border-r-[50rem] border-r-[#ffffff] border-t-transparent"></div>
                    <div className="flex justify-between w-4/5 mx-auto pt-[4rem]">
                        <div className="pt-[5rem] text-center">
                            <h1 className="mb-8 text-[3.875rem] font-semibold tracking-[0.5rem]">
                                Get Out Merch!
                            </h1>
                            <p className="text-[1.5rem] font-normal tracking-[0.185rem] mb-12">
                                Lorem ipsum dolor sit amet consectetur
                                adipiscing elit Ut et massa mi. Aliquam in
                                hendrerit urna. Pellentesque sit amet sapien
                                fringilla, mattis ligula consectetur, ultrices
                                mauris. Maecenas vitae mattis tellus. Nullam
                                quis
                            </p>
                            <Link
                                to={"#merch"}
                                className="text-[1.25rem] font-normal tracking-[0.185rem] bg-[#FBF8F1] py-2.5 px-5 border-solid border-[3px] border-[#E9DAC1]"
                            >
                                View More
                            </Link>
                        </div>
                        <img
                            src={PileClothes}
                            alt="pile of clothes"
                            className="scale-[0.8] 2xl:scale-[1] translate-y-[-3rem] translate-x-[1rem] 2xl:translate-y-[-3rem] 2xl:translate-x-0"
                        />
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Carousel;
