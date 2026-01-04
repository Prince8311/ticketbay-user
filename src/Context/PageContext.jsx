import { createContext, useContext, useEffect, useState } from "react";
import axiosInstance from "../Services/Middleware/AxiosInstance";
import { getApiEndpoints } from "../Services/Api/ApiConfig";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const api = getApiEndpoints();
    const [showLocaltionModal, setShowLocaltionModal] = useState(false);
    const [selectedLocation, setSelectedLocation] = useState(() => {
        return localStorage.getItem("Location") || '';
    });
    const [authToken, setAuthToken] = useState(() => {
        return localStorage.getItem("authToken") || '';
    });
    const [userDetails, setUserDetails] = useState({});

    const checkAuth = async () => {
        try {
            const response = await axiosInstance.get(api.checkAuth);
            if (response?.data?.status === 200) {
                console.log("User Details", response);
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

    return (
        <UserContext.Provider value={{ showLocaltionModal, setShowLocaltionModal, selectedLocation, setSelectedLocation, authToken, setAuthToken, userDetails, setUserDetails }}>
            {children}
        </UserContext.Provider>
    );
}

export const UserData = () => useContext(UserContext);