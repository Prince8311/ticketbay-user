import { useEffect, useState } from "react";
import { HomePageWrapper } from "../Styles/HomePageStyle";
import { NavLink } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import axios from "axios";
import { getApiEndpoints, moviePosterURL } from "../Services/Api/ApiConfig";
import { toast } from "react-toastify";
import { UserData } from "../Context/PageContext";
import SkeletonLoader from "../Components/Loader/SkeletonLoader";
import axiosInstance from "../Services/Middleware/AxiosInstance";
import TicketBox from "../Components/TicketBox";
import BookingDetailsModal from "../Modals/BookingDetails";

const banners = [
    { id: 1, image: "/images/add1.jpeg" },
    { id: 2, image: "/images/add2.jpeg" },
    { id: 3, image: "/images/add3.jpeg" },
    { id: 4, image: "/images/add1.jpeg" },
];

const HomePage = () => {
    const api = getApiEndpoints();
    const { selectedLocation, userDetails } = UserData();
    const [activeIndex, setActiveIndex] = useState(0);
    const [isRecommendedMoviesLoading, setIsRecommendedMoviesLoading] = useState(false);
    const [upcomingBookings, setUpcomingBookings] = useState([]);
    const [recommendedMovies, setRecommendedMovies] = useState([]);
    const [isComingSoonMoviesLoading, setIsComingSoonMoviesLoading] = useState(false);
    const [comingSoonMovies, setComingSoonMovies] = useState([]);
    const [selectedBookingId, setSelectedBookingId] = useState('');
    const [showBookingDetails, setShowBookingDetails] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % banners.length);
        }, 10000);
        return () => clearInterval(interval);
    }, []);

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

    const fetchComingSoonMovies = async () => {
        setIsComingSoonMoviesLoading(true);
        try {
            const response = await axios.get(api.comingSoonMovies, {
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
                setComingSoonMovies(response?.data.movies || []);
            }
        } catch (error) {
            console.log(error.response?.data.message || error.message);
        } finally {
            setIsComingSoonMoviesLoading(false);
        }
    }

    useEffect(() => {
        fetchRecommendedMovies();
        fetchComingSoonMovies();
    }, [selectedLocation]);

    const upcomingBookingList = async () => {
        try {
            const response = await axiosInstance.get(api.bookingList, {
                params: {
                    name: userDetails.name,
                    type: 'upcoming',
                    page: 1,
                    limit: 4
                },
            });
            if (response?.data?.status === 200) {
                setUpcomingBookings(response?.data?.list);
            }
        } catch (error) {
            setUpcomingBookings([]);
            toast.error(error.response?.data.message || error.message);
        }
    }

    useEffect(() => {
        console.log("uegbhkuyfkjbiusrrihiuhl", userDetails);
        if (userDetails && Object.keys(userDetails).length > 0) {
            upcomingBookingList();
        } else {
            setUpcomingBookings([]);
        }
    }, [userDetails]);

    return (
        <HomePageWrapper className={!selectedLocation ? 'no_scroll' : ''}>
            <div className="banner_sec">
                <div className="sec_content">
                    {banners.map((banner, index) => (
                        <div
                            key={banner.id}
                            className={`banner_box ${banners.length === 4 ? "fourGrid" : banners.length === 3 ? "threeGrid" : banners.length === 2 ? "twoGrid" : "singleGrid"} ${(index === activeIndex && banners.length > 1) ? "active" : ""}`} onClick={() => setActiveIndex(index)}
                        >
                            <div
                                className="banner_inner"
                                style={{
                                    backgroundImage: `url(${banner.image})`,
                                }}
                            >
                                <div className="banner_items">
                                    <div className="items_inner">
                                        <h3>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</h3>
                                        <p>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem beatae
                                            illo ad, at incidunt, sint ipsam quaerat possimus saepe dolorem nam.
                                        </p>
                                        <button>Book Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {
                upcomingBookings.length > 0 && (
                    <div className="booked_ticket_sec">
                        <div className="sec_content">
                            <div className="sec_head">
                                <h4>Upcoming <span><b>B</b>ookings</span></h4>
                                <a><span>View All <i className="fa-solid fa-angles-right"></i></span></a>
                            </div>
                            <div className="sec_items">
                                <Swiper
                                    slidesPerView={'auto'}
                                    spaceBetween={15}
                                    className="mySwiper"
                                >
                                    {
                                        upcomingBookings.map((booking, i) =>
                                            <SwiperSlide>
                                                <TicketBox
                                                    key={i}
                                                    type="upcoming"
                                                    ticket={booking}
                                                />
                                            </SwiperSlide>
                                        )
                                    }
                                </Swiper>
                            </div>
                        </div>
                    </div>
                )
            }
            <div className="movie_sec">
                <div className="sec_content">
                    <div className="sec_head">
                        <h4>Recommended <span><b>M</b>ovies</span></h4>
                        {
                            isRecommendedMoviesLoading ? (
                                <SkeletonLoader width="150px" height="35px" />
                            ) : recommendedMovies.length > 0 && (
                                <NavLink to="/recommended-movies"><span>View All <i className="fa-solid fa-angles-right"></i></span></NavLink>
                            )
                        }
                    </div>
                    <div className="sec_items">
                        <Swiper
                            slidesPerView={'auto'}
                            spaceBetween={30}
                            className="mySwiper"
                        >
                            {
                                isRecommendedMoviesLoading ? (
                                    Array.from({ length: 7 }).map((_, i) => (
                                        <SwiperSlide key={i}>
                                            <div className="movie_box">
                                                <div className="image_box">
                                                    <SkeletonLoader width="100%" height="100%" />
                                                </div>
                                                <div className="movie_brief">
                                                    <li>
                                                        <div style={{ display: "flex" }}>
                                                            <SkeletonLoader width="14px" height="14px" margin="0 5px 0 0" />
                                                            <SkeletonLoader width="30px" height="14px" />
                                                        </div>
                                                        <div style={{ display: "flex" }}>
                                                            <SkeletonLoader width="60px" height="14px" margin="5px 8px 0 0" />
                                                            <SkeletonLoader width="60px" height="14px" margin="5px 0 0 0" />
                                                        </div>
                                                    </li>
                                                    <SkeletonLoader width="100%" height="14px" margin="8px 0 0 0" />
                                                    <SkeletonLoader width="100%" height="14px" margin="5px 0 0 0" />
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    ))
                                ) : recommendedMovies.length > 0 ? (
                                    recommendedMovies.slice(0, 8).map((movie, i) =>
                                        <SwiperSlide key={i}>
                                            <div className="movie_box">
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
                                        </SwiperSlide>
                                    )
                                ) : (
                                    <div className="empty_box">
                                        <p>No shows available</p>
                                    </div>
                                )
                            }
                        </Swiper>
                    </div>
                </div>
            </div>
            {
                comingSoonMovies.length > 0 && (
                    <div className="movie_sec upcoming_movies">
                        <div className="sec_content">
                            <div className="sec_head">
                                <h4>Coming <span><b>S</b>oon</span></h4>
                                {
                                    isComingSoonMoviesLoading ? (
                                        <SkeletonLoader width="150px" height="35px" />
                                    ) : comingSoonMovies.length > 0 && (
                                        <a><span>View All <i className="fa-solid fa-angles-right"></i></span></a>
                                    )
                                }
                            </div>
                            <div className="sec_items">
                                <Swiper
                                    slidesPerView={'auto'}
                                    spaceBetween={30}
                                    className="mySwiper"
                                >
                                    {
                                        isComingSoonMoviesLoading ? (
                                            Array.from({ length: 7 }).map((_, i) => (
                                                <SwiperSlide key={i}>
                                                    <div className="movie_box">
                                                        <div className="image_box">
                                                            <SkeletonLoader width="100%" height="100%" />
                                                        </div>
                                                        <div className="movie_brief">
                                                            <li>
                                                                <div style={{ display: "flex" }}>
                                                                    <SkeletonLoader width="14px" height="14px" margin="0 5px 0 0" />
                                                                    <SkeletonLoader width="30px" height="14px" />
                                                                </div>
                                                                <div style={{ display: "flex" }}>
                                                                    <SkeletonLoader width="60px" height="14px" margin="5px 8px 0 0" />
                                                                    <SkeletonLoader width="60px" height="14px" margin="5px 0 0 0" />
                                                                </div>
                                                            </li>
                                                            <SkeletonLoader width="100%" height="14px" margin="8px 0 0 0" />
                                                            <SkeletonLoader width="100%" height="14px" margin="5px 0 0 0" />
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                            ))
                                        ) : comingSoonMovies.length > 0 ? (
                                            comingSoonMovies.slice(0, 8).map((movie, i) =>
                                                <SwiperSlide key={i}>
                                                    <div className="movie_box">
                                                        <div className="image_box">
                                                            <img src="/images/Movie-1.jpg" alt="" />
                                                        </div>
                                                        <div className="movie_brief">
                                                            <li>
                                                                <span><i className="fa-solid fa-star"></i>4.2</span>
                                                                <p>[ 5k ratings | 1.5k reviews ]</p>
                                                            </li>
                                                            <h5>Avatar: The Way of Water</h5>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                            )
                                        ) : (
                                            <div className="empty_box">
                                                <p>No shows available</p>
                                            </div>
                                        )
                                    }
                                </Swiper>
                            </div>
                        </div>
                    </div>
                )
            }
        </HomePageWrapper>
    );
};

export default HomePage;
