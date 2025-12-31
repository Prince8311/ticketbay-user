import { createContext, useContext, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [showLocaltionModal, setShowLocaltionModal] = useState(false);
    const [selectedLocation, setSelectedLocation] = useState('');

    return (
        <UserContext.Provider value={{ showLocaltionModal, setShowLocaltionModal, selectedLocation, setSelectedLocation }}>
            {children}
        </UserContext.Provider>
    );
}

export const UserData = () => useContext(UserContext);