import { createContext, useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axiosInstance from "../Services/Middleware/AxiosInstance";
import { getApiEndpoints } from "../Services/Api/ApiConfig";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const api = getApiEndpoints();
    const location = useLocation();
    const [showLocaltionModal, setShowLocaltionModal] = useState(false);
    const [selectedLocation, setSelectedLocation] = useState(() => {
        return localStorage.getItem("Location") || '';
    });
    const [authToken, setAuthToken] = useState(() => {
        return localStorage.getItem("authToken") || '';
    });
    const [userDetails, setUserDetails] = useState({});
    const [isLocationButtonShow, setIsLocationButtonShow] = useState(false);
    const [isNavFooterShow, setIsNavFooterShow] = useState(true);
    const navFooterHiddenScreen = location.pathname.includes("/seat-layout") || location.pathname.includes("/booking-success") || location.pathname.includes("/booking-fail");
    const isSeatLayoutPage = location.pathname.includes("/seat-layout");
    const isMoviePage = location.pathname.includes("/movie-details") || location.pathname.includes("/movie-info") || location.pathname.includes("/seat-layout");
    const isTheaterInfoPage = location.pathname.includes("/theater-info") || location.pathname.includes("/seat-layout");
    const isLocationAvailablePages = location.pathname.includes("/home") || location.pathname.includes("/recommended-movies") || location.pathname.includes("/upcoming-movies") || location.pathname.includes("/coming-soon-movies") || location.pathname.includes("/theaters");

    const checkAuth = async () => {
        try {
            const response = await axiosInstance.get(api.checkAuth);
            if (response?.data?.status === 200) {
                setUserDetails(response?.data.user);
            } else {
                throw new Error("Invalid auth");
            }
        } catch (error) {
            throw new Error(error.response?.data.message || error.message);
        }
    }

    useEffect(() => {
        if (authToken) {
            checkAuth();
        }
    }, [authToken]);

    useEffect(() => {
        const redirectLink = localStorage.getItem("redirectURL");
        console.log(redirectLink);
        if (!isMoviePage && (!redirectLink || redirectLink !== '/seat-layout')) {
            localStorage.removeItem("Current Movie");
        }
        if (!isTheaterInfoPage && (!redirectLink || redirectLink !== '/seat-layout')) {
            localStorage.removeItem("Current Theater");
        }
        if (isLocationAvailablePages) {
            setIsLocationButtonShow(true);
        } else {
            setIsLocationButtonShow(false);
        }
        if (navFooterHiddenScreen) {
            setIsNavFooterShow(false);
        } else {
            setIsNavFooterShow(true);
        }
        if (!isSeatLayoutPage && (!redirectLink || redirectLink !== '/seat-layout')) { 
            localStorage.removeItem("Selected Section");
            localStorage.removeItem("Movie Data");
            localStorage.removeItem("Booking Data");
        }
    }, [location.pathname]);

    return (
        <UserContext.Provider value={{ isNavFooterShow, isLocationButtonShow, showLocaltionModal, setShowLocaltionModal, selectedLocation, setSelectedLocation, authToken, setAuthToken, userDetails, setUserDetails }}>
            {children}
        </UserContext.Provider>
    );
}

export const UserData = () => useContext(UserContext);