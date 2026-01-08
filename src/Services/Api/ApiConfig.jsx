export const baseURL = "https://api.ticketbay.in";
export const apiURL = `${baseURL}/user`;
export const profileImageURL = `${baseURL}/profile-images/users`;
export const moviePosterURL = `${baseURL}/posters/movies`;
export const castCrewImageURL = `${baseURL}/profile-images/casts_crews`;

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

        // State & City 
        fetchCities: `${apiURL}/api/states_cities/list.php`,

        // Movies 
        recommendedMovies: `${apiURL}/api/movies/recommended-movies.php`,
        comingSoonMovies: `${apiURL}/api/movies/coming-soon-movies.php`,
        upcomingMovies: `${apiURL}/api/movies/upcoming-movies.php`,
        movieDetails: `${apiURL}/api/movies/movie-details.php`,
        movieDates: `${apiURL}/api/movies/movie-dates.php`,
        movieInfo: `${apiURL}/api/movies/movie-info.php`,

        // Theaters 
        fetchTheaters: `${apiURL}/api/theaters/theaters.php`,
        theaterMovieDates: `${apiURL}/api/theaters/movie-dates.php`,
        theaterMovieInfo: `${apiURL}/api/theaters/theater-info.php`,

        // Screen Layout 
        fecthScreenSections: `${apiURL}/api/screens/screen-sections.php`,
        fecthScreenLayout: `${apiURL}/api/screens/screen-layout.php`,

        // Commissions 
        fetchCommissions: `${apiURL}/api/booking/commissions.php`,
    };
}