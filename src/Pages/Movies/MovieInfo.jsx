import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MovieInfoPageWrapper } from "../../Styles/MovieStyle";
import { getApiEndpoints } from "../../Services/Api/ApiConfig";
import axios from "axios";
import SkeletonLoader from "../../Components/Loader/SkeletonLoader";
import { toast } from "react-toastify";

const MovieInfoPage = () => {
    const api = getApiEndpoints();
    const navigate = useNavigate();
    const movieName = localStorage.getItem("Current Movie") || '';
    const [releaseDate, setReleaseDate] = useState('');
    const [dates, setDates] = useState([]);
    const [availableDates, setAvailableDates] = useState([]);
    const [isDatesLoading, setIsDatesLoading] = useState(false);
    const [selectedDateIndex, setSelectedDateIndex] = useState(0);
    const [isInfoLoading, setIsInfoLoading] = useState(false);
    const [movieInfo, setMovieInfo] = useState([]);

    const getNext10Dates = () => {
        const dates = [];
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        for (let i = 0; i < 10; i++) {
            const date = new Date(today);
            date.setDate(today.getDate() + i);

            dates.push({
                day: date.toLocaleDateString("en-US", { weekday: "short" }),
                date: date.getDate().toString().padStart(2, "0"),
                month: date.toLocaleDateString("en-US", { month: "short" }),
                iso: date.toISOString().split("T")[0],
            });
        }

        return dates;
    };

    const fetchMovieAvailableDates = async () => {
        setIsDatesLoading(true);
        try {
            const response = await axios.get(api.movieDates, {
                params: {
                    name: movieName
                },
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                withCredentials: true
            });
            if (response) {
                const movieDates = response?.data?.dates || [];
                const formattedDates = movieDates.map(item => {
                    const d = new Date(item.start_date);
                    d.setHours(0, 0, 0, 0);
                    return d.toISOString().split("T")[0];
                });
                console.log(formattedDates);
                setAvailableDates(formattedDates);
            }
        } catch (error) {
            toast.error(error.response?.data.message || error.message);
        } finally {
            setIsDatesLoading(false);
        }
    }

    useEffect(() => {
        if (movieName) {
            setDates(getNext10Dates());
            fetchMovieAvailableDates();
        }
    }, [movieName]);

    useEffect(() => {
        if (!dates.length) return;
        if (!availableDates.length) return;

        const firstAvailableIndex = dates.findIndex(
            d => availableDates.includes(d.iso)
        );

        if (firstAvailableIndex !== -1) {
            setSelectedDateIndex(firstAvailableIndex);
        }
    }, [dates, availableDates]);

    const fetchMovieInfo = async () => {
        setIsInfoLoading(true);
        const d = dates[selectedDateIndex];
        const selectedDate = `${d.date} ${d.month}, ${d.iso.split("-")[0]}`;
        try {
            const response = await axios.get(api.movieInfo, {
                params: {
                    name: movieName,
                    date: selectedDate
                },
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                withCredentials: true
            });
            if (response) {
                setReleaseDate(response?.data.releaseDate);
                setMovieInfo(response?.data.theaters || []);
            }
        } catch (error) {
            toast.error(error.response?.data.message || error.message);
        } finally {
            setIsInfoLoading(false);
        }
    }

    useEffect(() => {
        if (!movieName) return;
        if (!dates.length) return;

        fetchMovieInfo();
    }, [movieName, selectedDateIndex, dates]);

    const handleSeatLayoutRedirection = () => {
        navigate('/seat-layout');
    }

    return (
        <>
            <MovieInfoPageWrapper>
                <div className="info_section">
                    <div className="section_inner">
                        <div className="page_head">
                            <h4>{movieName}</h4>
                            {
                                isInfoLoading ? (
                                    <SkeletonLoader width="190px" height="18px" margin="5px 0 0 0" />
                                ) : (
                                    <li>
                                        <b>Release Date:</b>
                                        <p>{releaseDate}</p>
                                    </li>
                                )
                            }
                        </div>
                        <div className="date_sec">
                            {
                                isDatesLoading ? (
                                    Array.from({ length: 10 }).map((_, i) => (
                                        <SkeletonLoader key={i} width="90px" height="78px" margin="0 3px" />
                                    ))
                                ) : (
                                    dates.map((item, index) => {
                                        const isAvailable = availableDates.includes(item.iso);
                                        return (
                                            <div key={index} className={`date_box ${selectedDateIndex === index ? "active" : ""} ${isAvailable ? "available" : ""}`} onClick={() => setSelectedDateIndex(index)}>
                                                <p>{item.day}</p>
                                                <h6>{item.date}</h6>
                                                <span>{item.month}</span>
                                            </div>
                                        );
                                    })
                                )
                            }
                        </div>
                        <div className="move_info_sec">
                            {
                                isInfoLoading ? (
                                    <div className="movie_info_box">
                                        <div className="left_info">
                                            <div className="img_sec">
                                                <SkeletonLoader width="100%" height="100%" />
                                            </div>
                                            <div className="left_item">
                                                <SkeletonLoader width="100%" height="18px" />
                                                <SkeletonLoader width="60%" height="16px" margin="8px 0 0 0" />
                                            </div>
                                        </div>
                                        <div className="right_info">
                                            <div className="right_info_inner">
                                                {
                                                    Array.from({ length: 4 }).map((_, i) => (
                                                        <div className="inner_box">
                                                            <SkeletonLoader width="80px" height="28px" />
                                                        </div>
                                                    ))
                                                }
                                            </div>
                                        </div>
                                    </div>
                                ) : movieInfo.length > 0 ? (
                                    movieInfo.map((item, index) =>
                                        <div className="movie_info_box" key={index}>
                                            <div className="left_info">
                                                <div className="img_sec">
                                                    <img src="images/theater.png" alt="" />
                                                </div>
                                                <div className="left_item">
                                                    <h5>{item.theater_name}</h5>
                                                    <p>{item.location}</p>
                                                </div>
                                            </div>
                                            <div className="right_info">
                                                <div className="right_info_inner">
                                                    {
                                                        item.timings.length > 0 ? (
                                                            item.timings.map((slot, i) =>
                                                                <div className="inner_box" key={i}>
                                                                    <a onClick={handleSeatLayoutRedirection}>{slot.start_time}</a>
                                                                    <div className="info_desc">
                                                                        <ul>
                                                                            <li>
                                                                                <span>Screen :</span>
                                                                                <p>{slot.screen.replace(/^Screen\s*/i, '')}</p>
                                                                            </li>
                                                                            <li>
                                                                                <span>Language :</span>
                                                                                <p>{slot.language}</p>
                                                                            </li>
                                                                            <li>
                                                                                <span>Format :</span>
                                                                                <p>{slot.format}</p>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            )
                                                        ) : (
                                                            <div className="empty_box">
                                                                <p>No time slot available</p>
                                                            </div>
                                                        )
                                                    }
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
            </MovieInfoPageWrapper>
        </>
    );
}

export default MovieInfoPage;