import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import MovieFilters from "../../Components/FilterBox";
import { MovieListWrapper } from "../../Styles/MovieStyle";
import axios from "axios";
import { getApiEndpoints, moviePosterURL } from "../../Services/Api/ApiConfig";
import { UserData } from "../../Context/PageContext";
import SkeletonLoader from "../../Components/Loader/SkeletonLoader";

const RecommendedMoviesPage = () => {
    const api = getApiEndpoints();
    const navigate = useNavigate();
    const { selectedLocation } = UserData();
    const [isRecommendedMoviesLoading, setIsRecommendedMoviesLoading] = useState(false);
    const [recommendedMovies, setRecommendedMovies] = useState([]);

    const fetchRecommendedMovies = async () => {
        setIsRecommendedMoviesLoading(true);
        try {
            const response = await axios.get(api.recommendedMovies, {
                params: {
                    page: 1,
                    location: selectedLocation
                },
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                withCredentials: true
            });
            if (response) {
                setRecommendedMovies(response?.data.movies || []);
            }
        } catch (error) {
            console.log(error.response?.data.message || error.message);
        } finally {
            setIsRecommendedMoviesLoading(false);
        }
    }

    useEffect(() => {
        fetchRecommendedMovies();
    }, [selectedLocation]);

    const handleDetailsNavigation = (movie) => {
        localStorage.setItem("Current Movie", movie);
        navigate(`/movie-details?${encodeURIComponent(movie)}`);
    }

    return (
        <>
            <MovieListWrapper>
                <div className="page_content">
                    <div className="page_items">
                        <div className="filter_sec">
                            <MovieFilters />
                        </div>
                        <div className="movie_box_sec">
                            <div className="upcoming_sec">
                                <button>
                                    <h5>Upcomings...</h5>
                                    <a>Explore all Upcomings Movies<i className="fa-solid fa-angles-right"></i></a>
                                </button>
                            </div>
                            <div className="page_head">
                                <h3>Recommended <span><b>M</b>ovies</span></h3>
                            </div>
                            <div className="sec_items">
                                {
                                    isRecommendedMoviesLoading ? (
                                        Array.from({ length: 6 }).map((_, i) => (
                                            <div className="movie_box">
                                                <div className="box_inner">
                                                    <div className="image_box">
                                                        <SkeletonLoader width="100%" height="100%" />
                                                    </div>
                                                    <div className="movie_brief">
                                                        <li>
                                                            <div style={{display: "flex"}}>
                                                                <SkeletonLoader width="14px" height="14px" margin="0 5px 0 0" />
                                                                <SkeletonLoader width="30px" height="14px" />
                                                            </div>
                                                            <div style={{display: "flex"}}>
                                                                <SkeletonLoader width="60px" height="14px" margin="5px 8px 0 0" />
                                                                <SkeletonLoader width="60px" height="14px" margin="5px 0 0 0" />
                                                            </div>
                                                        </li>
                                                        <SkeletonLoader width="100%" height="14px" margin="8px 0 0 0" />
                                                        <SkeletonLoader width="100%" height="14px" margin="5px 0 0 0" />
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    ) : recommendedMovies.length > 0 ? (
                                        recommendedMovies.slice(0, 8).map((movie, i) =>
                                            <div className="movie_box" key={i} onClick={() => handleDetailsNavigation(movie.movie_name)}>
                                                <div className="box_inner">
                                                    <div className="image_box">
                                                        <img src={movie.poster_image ? `${moviePosterURL}/${movie.poster_image}` : '/images/blank-poster.jpg'} alt="" />
                                                    </div>
                                                    <div className="movie_brief">
                                                        <li>
                                                            <span><i className="fa-solid fa-star"></i>4.2</span>
                                                            <p>[ 5k ratings | 1.5k reviews ]</p>
                                                        </li>
                                                        <h5>{movie.movie_name}</h5>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    ) : (
                                        <div className="empty_box">
                                            <p>No shows available</p>
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </MovieListWrapper>
        </>
    );
}

export default RecommendedMoviesPage;