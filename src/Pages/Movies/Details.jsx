import { MovieDetailsPageWrapper } from "../../Styles/MovieStyle";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import axios from "axios";
import SkeletonLoader from "../../Components/Loader/SkeletonLoader";
import { UserData } from "../../Context/PageContext";
import { castCrewImageURL, getApiEndpoints, moviePosterURL } from "../../Services/Api/ApiConfig";
import MovieTrailerPage from "../../Modals/MovieTrailer";

const MovieDetailsPage = () => {
    const api = getApiEndpoints();
    const navigate = useNavigate();
    const { selectedLocation } = UserData();
    const [isDetailsLoading, setIsDetailsLoading] = useState(false);
    const [movieDetails, setMovieDetails] = useState({});
    const [showMovieTrailer, setShowMovieTrailer] = useState(false);
    const [trailer, setTrailer] = useState('');

    const fetchMovieDetails = async () => {
        setIsDetailsLoading(true);
        const movieName = localStorage.getItem("Current Movie");
        try {
            const response = await axios.get(api.movieDetails, {
                params: {
                    name: movieName,
                    location: selectedLocation
                },
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                withCredentials: true
            });
            if (response) {
                console.log(response);
                setMovieDetails(response?.data.movie || {});
            }
        } catch (error) {
            console.log(error.response?.data.message || error.message);
        } finally {
            setIsDetailsLoading(false);
        }
    }

    useEffect(() => {
        fetchMovieDetails();
    }, [selectedLocation]);

    const handleOpenMovieTrailerModal = (trailer) => {
        setTrailer(trailer);
        setShowMovieTrailer(true);
    }

    const handleMovieInfoRedirection = (movie) => {
        navigate(`/movie-info?${encodeURIComponent(movie)}`);
    }

    return (
        <>
            <MovieDetailsPageWrapper>
                <div className="banner_sec">
                    <div className="sec_content">
                        <div className="left_sec">
                            <div className="movie_image">
                                {
                                    isDetailsLoading ? (
                                        <SkeletonLoader width="100%" height="100%" />
                                    ) : <img src={movieDetails.poster_image ? `${moviePosterURL}/${movieDetails.poster_image}` : '/images/blank-poster.jpg'} alt="" />
                                }
                            </div>
                        </div>
                        <div className="right_sec">
                            {
                                isDetailsLoading ? (
                                    <div className="right_inner">
                                        <SkeletonLoader width="100%" height="30px" />
                                        <li>
                                            <SkeletonLoader width="75px" height="16px" margin="5px 8px 0 0" />
                                            <SkeletonLoader width="75px" height="16px" margin="5px 0 0 0" />
                                        </li>
                                        <div className="rating_sec">
                                            <SkeletonLoader width="225px" height="16px" margin="5px 0 0 0" />
                                        </div>
                                        <li className="genres">
                                            <SkeletonLoader width="75px" height="16px" margin="5px 8px 0 0" />
                                            <SkeletonLoader width="75px" height="16px" margin="5px 8px 0 0" />
                                            <SkeletonLoader width="75px" height="16px" margin="5px 0 0 0" />
                                        </li>
                                        <li>
                                            <SkeletonLoader width="55px" height="25px" margin="0 8px 0 0" />
                                            <SkeletonLoader width="55px" height="25px" margin="0 8px 0 0" />
                                            <SkeletonLoader width="55px" height="25px" margin="0 8px 0 0" />
                                            <SkeletonLoader width="55px" height="25px" margin="0 0 0 0" />
                                        </li>
                                        <li>
                                            <SkeletonLoader width="55px" height="25px" margin="5px 8px 0 0" />
                                            <SkeletonLoader width="55px" height="25px" margin="5px 8px 0 0" />
                                            <SkeletonLoader width="55px" height="25px" margin="5px 8px 0 0" />
                                            <SkeletonLoader width="55px" height="25px" margin="5px 0 0 0" />
                                        </li>
                                        <ul>
                                            <SkeletonLoader width="135px" height="35px" margin="10px 20px 0 0" />
                                            <SkeletonLoader width="135px" height="35px" margin="10px 0 0 0" />
                                        </ul>
                                    </div>
                                ) : (
                                    <div className="right_inner">
                                        <h2>{movieDetails.name}</h2>
                                        <li>
                                            <span>{movieDetails.release_date ? `${movieDetails.release_date}` : `${movieDetails.release_year}`}</span>
                                            {
                                                movieDetails.total_time &&
                                                <>
                                                    <i className="fa-solid fa-circle"></i>
                                                    <span>{movieDetails.total_time}</span>
                                                </>
                                            }
                                            {
                                                movieDetails.age_category &&
                                                <>
                                                    <i className="fa-solid fa-circle"></i>
                                                    <span>{movieDetails.age_category}</span>
                                                </>
                                            }
                                        </li>
                                        <div className="rating_sec">
                                            <h5>Rating: </h5>
                                            <div className="stars">
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star-half-stroke"></i>
                                            </div>
                                            <span>(4.7)</span>
                                            <span className="dot">
                                                <i className="fa-solid fa-circle"></i>
                                            </span>
                                            <p>[ 12,255 users ]</p>
                                        </div>
                                        {
                                            movieDetails.genres && (
                                                <li className="genres">
                                                    {movieDetails.genres
                                                        .split(',')
                                                        .map((genre, index, arr) => (
                                                            <span key={index}>
                                                                {genre.trim()}
                                                                {index !== arr.length - 1 && (
                                                                    <i className="fa-solid fa-circle"></i>
                                                                )}
                                                            </span>
                                                        ))}
                                                </li>
                                            )
                                        }
                                        {
                                            movieDetails.available_formats && (
                                                <li>
                                                    {
                                                        movieDetails.available_formats
                                                            .split(',')
                                                            .map((format, index) => (
                                                                <a key={index}>{format.trim()}</a>
                                                            ))
                                                    }
                                                </li>
                                            )
                                        }
                                        {
                                            movieDetails.available_languages && (
                                                <li className="languages">
                                                    {
                                                        movieDetails.available_languages
                                                            .split(',')
                                                            .map((language, index) => (
                                                                <a key={index}>{language.trim()}</a>
                                                            ))
                                                    }
                                                </li>
                                            )
                                        }
                                        <ul>
                                            <button className="trailer_btn" onClick={() => handleOpenMovieTrailerModal(movieDetails.trailer)}><i className="fa-regular fa-circle-play"></i> See Trailer</button>
                                            <button className="booking_btn" onClick={() => handleMovieInfoRedirection(movieDetails.name)}><i className="fa-solid fa-ticket"></i> Book Ticket</button>
                                        </ul>
                                    </div>
                                )
                            }
                        </div>
                        <div className="share_sec">
                            <div className="share_inner">
                                <div className="share_btn">
                                    <img src="/images/share.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="movie_info_section">
                    <div className="sec_content">
                        <div className="movie_content_box">
                            {
                                isDetailsLoading ? (
                                    <>
                                        <div className="box_head">
                                            <SkeletonLoader width="180px" height="33px" />
                                        </div>
                                        <div className="box_items">
                                            <SkeletonLoader width="100%" height="50px" />
                                        </div>
                                    </>
                                ) : movieDetails.description && (
                                    <>
                                        <div className="box_head">
                                            <h4>About the <span><b>M</b>ovie</span></h4>
                                        </div>
                                        <div className="box_items">
                                            <p>{movieDetails.description}</p>
                                        </div>
                                    </>
                                )
                            }
                        </div>
                        <div className="movie_content_box">
                            {
                                isDetailsLoading ? (
                                    <>
                                        <div className="box_head">
                                            <SkeletonLoader width="180px" height="33px" />
                                        </div>
                                        <div className="box_items">
                                            {
                                                Array.from({ length: 6 }).map((_, i) => (
                                                    <div className="item_box">
                                                        <SkeletonLoader width="100px" height="100px" />
                                                        <SkeletonLoader width="100%" height="14px" margin="10px 0 0 0" />
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    </>
                                ) : movieDetails.casts && (
                                    <>
                                        <div className="box_head">
                                            <h4>Movie <span><b>C</b>asts</span></h4>
                                        </div>
                                        <div className="box_items">
                                            {
                                                movieDetails.casts.map((cast, i) => (
                                                    <div className="item_box" key={i}>
                                                        <div className="box_img">
                                                            <img src={cast.profile_image ? `${castCrewImageURL}/${cast.profile_image}` : '/images/profile-image.png'} alt="" />
                                                        </div>
                                                        <p>{cast.name}</p>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    </>
                                )
                            }
                        </div>
                        <div className="movie_content_box">
                            {
                                isDetailsLoading ? (
                                    <>
                                        <div className="box_head">
                                            <SkeletonLoader width="180px" height="33px" />
                                        </div>
                                        <div className="box_items">
                                            {
                                                Array.from({ length: 6 }).map((_, i) => (
                                                    <div className="item_box">
                                                        <SkeletonLoader width="100px" height="100px" />
                                                        <SkeletonLoader width="100%" height="14px" margin="10px 0 0 0" />
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    </>
                                ) : movieDetails.crews && (
                                    <>
                                        <div className="box_head">
                                            <h4>Movie <span><b>C</b>rew</span></h4>
                                        </div>
                                        <div className="box_items">
                                            {
                                                movieDetails.crews.map((crew, i) => (
                                                    <div className="item_box" key={i}>
                                                        <div className="box_img">
                                                            <img src={crew.profile_image ? `${castCrewImageURL}/${crew.profile_image}` : '/images/profile-image.png'} alt="" />
                                                        </div>
                                                        <p>{crew.name}</p>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    </>
                                )
                            }
                        </div>
                    </div>
                </div>
                <div className="user_review_section">
                    <div className="section_inner">
                        <div className="sec_head">
                            <h4>Customer <span><b>R</b>eviews</span></h4>
                            <a><span>View All <i className="fa-solid fa-angles-right"></i></span></a>
                        </div>
                        <div className="review_sec">
                            <Swiper
                                slidesPerView={'auto'}
                                spaceBetween={30}
                                className="mySwiper"
                            >
                                <SwiperSlide>
                                    <div className="quote_icon"><i class="fa-solid fa-quote-right"></i></div>
                                    <div className="review_box">
                                        <div className="review_top">
                                            <div className="user_img">
                                                <img src="/images/profile-image.png" alt="" />
                                            </div>
                                            <h3>Sourish Mondal</h3>
                                        </div>
                                        <div className="review_message">
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores placeat voluptas ad et nesciunt, iusto est maiores delectus repudiandae nihil dolorem omnis obcaecati tempora voluptate sed saepe aliquid dolorum. Quibusdam blanditiis</p>
                                        </div>
                                        <div className="review_bottom">
                                            <div className="user_review">
                                                <h4>Rated:</h4>
                                                <span>4/5</span>
                                                <i class="fa-solid fa-star"></i>
                                            </div>
                                            <div className="review_date">
                                                <p>20 May, 2024</p>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="quote_icon"><i class="fa-solid fa-quote-right"></i></div>
                                    <div className="review_box">
                                        <div className="review_top">
                                            <div className="user_img">
                                                <img src="/images/profile-image.png" alt="" />
                                            </div>
                                            <h3>Sourish Mondal</h3>
                                        </div>
                                        <div className="review_message">
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores placeat voluptas ad et nesciunt, iusto est maiores delectus repudiandae nihil dolorem omnis obcaecati tempora voluptate sed saepe aliquid dolorum. Quibusdam blanditiis</p>
                                        </div>
                                        <div className="review_bottom">
                                            <div className="user_review">
                                                <h4>Rated:</h4>
                                                <span>4/5</span>
                                                <i class="fa-solid fa-star"></i>
                                            </div>
                                            <div className="review_date">
                                                <p>20 May, 2024</p>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="quote_icon"><i class="fa-solid fa-quote-right"></i></div>
                                    <div className="review_box">
                                        <div className="review_top">
                                            <div className="user_img">
                                                <img src="/images/profile-image.png" alt="" />
                                            </div>
                                            <h3>Sourish Mondal</h3>
                                        </div>
                                        <div className="review_message">
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores placeat voluptas ad et nesciunt, iusto est maiores delectus repudiandae nihil dolorem omnis obcaecati tempora voluptate sed saepe aliquid dolorum. Quibusdam blanditiis</p>
                                        </div>
                                        <div className="review_bottom">
                                            <div className="user_review">
                                                <h4>Rated:</h4>
                                                <span>4/5</span>
                                                <i class="fa-solid fa-star"></i>
                                            </div>
                                            <div className="review_date">
                                                <p>20 May, 2024</p>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="quote_icon"><i class="fa-solid fa-quote-right"></i></div>
                                    <div className="review_box">
                                        <div className="review_top">
                                            <div className="user_img">
                                                <img src="/images/profile-image.png" alt="" />
                                            </div>
                                            <h3>Sourish Mondal</h3>
                                        </div>
                                        <div className="review_message">
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores placeat voluptas ad et nesciunt, iusto est maiores delectus repudiandae nihil dolorem omnis obcaecati tempora voluptate sed saepe aliquid dolorum. Quibusdam blanditiis</p>
                                        </div>
                                        <div className="review_bottom">
                                            <div className="user_review">
                                                <h4>Rated:</h4>
                                                <span>4/5</span>
                                                <i class="fa-solid fa-star"></i>
                                            </div>
                                            <div className="review_date">
                                                <p>20 May, 2024</p>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="quote_icon"><i class="fa-solid fa-quote-right"></i></div>
                                    <div className="review_box">
                                        <div className="review_top">
                                            <div className="user_img">
                                                <img src="/images/profile-image.png" alt="" />
                                            </div>
                                            <h3>Sourish Mondal</h3>
                                        </div>
                                        <div className="review_message">
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores placeat voluptas ad et nesciunt, iusto est maiores delectus repudiandae nihil dolorem omnis obcaecati tempora voluptate sed saepe aliquid dolorum. Quibusdam blanditiis</p>
                                        </div>
                                        <div className="review_bottom">
                                            <div className="user_review">
                                                <h4>Rated:</h4>
                                                <span>4/5</span>
                                                <i class="fa-solid fa-star"></i>
                                            </div>
                                            <div className="review_date">
                                                <p>20 May, 2024</p>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="quote_icon"><i class="fa-solid fa-quote-right"></i></div>
                                    <div className="review_box">
                                        <div className="review_top">
                                            <div className="user_img">
                                                <img src="/images/profile-image.png" alt="" />
                                            </div>
                                            <h3>Sourish Mondal</h3>
                                        </div>
                                        <div className="review_message">
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores placeat voluptas ad et nesciunt, iusto est maiores delectus repudiandae nihil dolorem omnis obcaecati tempora voluptate sed saepe aliquid dolorum. Quibusdam blanditiis</p>
                                        </div>
                                        <div className="review_bottom">
                                            <div className="user_review">
                                                <h4>Rated:</h4>
                                                <span>4/5</span>
                                                <i class="fa-solid fa-star"></i>
                                            </div>
                                            <div className="review_date">
                                                <p>20 May, 2024</p>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>
                <MovieTrailerPage
                    showMovieTrailer={showMovieTrailer}
                    setShowMovieTrailer={setShowMovieTrailer}
                    trailer={trailer}
                    setTrailer={setTrailer}
                />
            </MovieDetailsPageWrapper>
        </>
    );
}

export default MovieDetailsPage;    