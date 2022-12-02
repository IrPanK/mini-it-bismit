import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Index from "./Components/index";
import ProjectInfo from "./Components/Project/ProjectInfo/ProjectInfo";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/:id" element={<ProjectInfo />} />
            </Routes>
        </Router>
    );
};

export default App;
