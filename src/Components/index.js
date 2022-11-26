import React from "react";
import Carousel from "./Carousel/Carousel";
import Merch from "./Merch/Merch";
import Navbar from "./Navbar/Navbar";
import Project from "./Project/Project";

const Index = () => {
    return (
        <>
            <Navbar />
            <Carousel />
            <Project />
            <Merch />
        </>
    );
};

export default Index;
