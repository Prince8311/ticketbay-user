import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import PageLayout from "../Layouts/PageLayout";
import AuthenticationPage from "../Auth/Authentication";
import HomePage from "../Pages/Home";
import RecommendedMoviesPage from "../Pages/Movies/Recommended";
import UpcomingMoviesPage from "../Pages/Movies/Upcoming";
import TheaterListPage from "../Pages/Theaters";
import ContactUsPage from "../Pages/Contact";
import TermsConditionsPage from "../Pages/TermsConditions";
import PrivacyPolicyPage from "../Pages/PrivacyPolicy";
import RefundPolicyPage from "../Pages/RefundPolicy";
import ProfilePage from "../Pages/Profile";
import BookingListPage from "../Pages/BookingList";
import UpcomingBookings from "../Pages/Bookings/Upcoming";
import PreviousBookings from "../Pages/Bookings/Previous";
import CancelledBookings from "../Pages/Bookings/Cancelled";

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
                        <Route path="terms-and-conditions" element={<TermsConditionsPage />} />
                        <Route path="privacy-policy" element={<PrivacyPolicyPage />} />
                        <Route path="refund-policy" element={<RefundPolicyPage />} />
                        <Route path="profile" element={<ProfilePage />} />
                        <Route path="bookings" element={<BookingListPage />} >
                            <Route path="" element={<Navigate to="upcoming" />} />
                            <Route path="upcoming" element={<UpcomingBookings />} />
                            <Route path="previous" element={<PreviousBookings />} />
                            <Route path="cancelled" element={<CancelledBookings />} />
                        </Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default Routers;