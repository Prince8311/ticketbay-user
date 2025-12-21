import { createContext, useContext, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [showLocaltionModal, setShowLocaltionModal] = useState(false);

    return (
        <UserContext.Provider value={{ showLocaltionModal, setShowLocaltionModal }}>
            {children}
        </UserContext.Provider>
    );
}

export const UserData = () => useContext(UserContext);