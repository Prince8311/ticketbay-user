export const baseURL = "https://api.ticketbay.in";
export const apiURL = `${baseURL}/user`;

export const getApiEndpoints = () => {
    return {
        // Auth 
        login: `${apiURL}/auth/login.php`,
        register: `${apiURL}/auth/register.php`,
        verifyOtp: `${apiURL}/auth/otp-verify.php`,
        forgotPassword: `${apiURL}/auth/forgot-password.php`,
        resetPassword: `${apiURL}/auth/reset-password.php`,
        refreshToken: `${apiURL}/auth/refresh-token.php`,
        checkAuth: `${apiURL}/auth/check-auth.php`,

        // Movies 
        recommendedMovies: `${apiURL}/api/movies/recommended-movies.php`,
        coomingSoonMovies: `${apiURL}/api/movies/coming-soon-movies.php`,
        upcomingMovies: `${apiURL}/api/movies/upcoming-movies.php`,

        // State & City 
        fetchCities: `${apiURL}/api/states_cities/list.php`,
    };
}