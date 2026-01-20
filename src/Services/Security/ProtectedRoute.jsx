const ProtectedRoute = ({ children }) => {
    const authToken = localStorage.getItem("authToken");

    return children;
}

export default ProtectedRoute;