export const baseURL = "https://api.ticketbay.in";
export const apiURL = `${baseURL}/user`;

export const getApiEndpoints = () => {
    return {
        // Movies 
        recommendedMovies: `${apiURL}/api/movies/recommended-movies.php`,

        // State & City 
        fetchCities: `${apiURL}/api/states_cities/list.php`,
    };
}