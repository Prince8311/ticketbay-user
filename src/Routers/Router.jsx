import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import PageLayout from "../Layouts/PageLayout";
import HomePage from "../Pages/Home";

const Routers = () => {
    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<PageLayout/>}>
                        <Route path="" element={<Navigate to="home" />} />
                        <Route path="home" element={<HomePage/>} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default Routers;