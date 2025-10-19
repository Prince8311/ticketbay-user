import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import PageLayout from "../Layouts/PageLayout";
import AuthenticationPage from "../Auth/Authentication";
import HomePage from "../Pages/Home";
import RecommendedMoviesPage from "../Pages/Movies/Recommended";
import UpcomingMoviesPage from "../Pages/Movies/Upcoming";
import TheaterListPage from "../Pages/Theaters";
import ContactUsPage from "../Pages/Contact";

const Routers = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="auth" element={<AuthenticationPage />} />
                    <Route path="/" element={<PageLayout />}>
                        <Route path="" element={<Navigate to="home" />} />
                        <Route path="home" element={<HomePage />} />
                        <Route path="recommended-movies" element={<RecommendedMoviesPage />} />
                        <Route path="upcoming-movies" element={<UpcomingMoviesPage />} />
                        <Route path="theaters" element={<TheaterListPage />} />
                        <Route path="contact-us" element={<ContactUsPage />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default Routers;