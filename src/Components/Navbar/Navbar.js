import React from "react";
import { HashLink as Link } from "react-router-hash-link";

import "./Navbar.css";

const Navbar = () => {
    return (
        <nav className="w-6/12 h-24 mx-auto">
            <ul className="flex justify-center items-center h-full">
                <li className="text-[#007872] text-[1.125rem] font-medium border-b-2 border-[#f05f3b]">
                    <Link to={"/#merch"}>MERCH</Link>
                </li>
                <li className="mx-[2.375rem] text-[2.875rem] text-[#ec380b] font-bold">
                    <Link to={"/"}>
                        <div className="nav-tittle-inside">
                            <span className="nav-char-1">B</span>
                            <span className="nav-char-2">I</span>
                            <span className="nav-char-3">S</span>
                            <span className="nav-char-4">M</span>
                            <span className="nav-char-5">I</span>
                            <span className="nav-char-6">T</span>
                        </div>
                    </Link>
                </li>
                <li className="text-[#007872] text-[1.125rem] font-medium border-b-2 border-[#f05f3b]">
                    <Link to={"/#project"}>PROJECT</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
