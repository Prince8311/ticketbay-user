import { useEffect, useState } from "react";
import { SeatLayoutWrapper } from "../../Styles/BookingStyle";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import SeatCapacityModal from "../../Modals/SeatCapacity";
import { toast } from "react-toastify";
import axios from "axios";
import { getApiEndpoints } from "../../Services/Api/ApiConfig";
import SkeletonLoader from "../../Components/Loader/SkeletonLoader";

const SeatLayoutScreen = () => {
    const api = getApiEndpoints();
    const [showSeatCapacityModal, setShowSeatCapacityModal] = useState(true);
    const movieName = localStorage.getItem("Current Movie");
    const theaterName = localStorage.getItem("Current Theater");
    const movieData = JSON.parse(localStorage.getItem("Movie Data"));
    const [selectedSeatNo, setSelectedSeatNo] = useState(1);
    const [selectedSection, setSelectedSection] = useState('');

    const openSeatCapacityModal = () => {
        setShowSeatCapacityModal(!showSeatCapacityModal);
    }

    const fetchScreenLayout = async () => {
        try {
            const response = await axios.get(api.fecthScreenLayout, {
                params: {
                    screenId: movieData.screenId,
                    sectionName: selectedSection,
                    theaterName: theaterName
                },
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                withCredentials: true
            });
            if (response) {
                console.log("layoutttttttttt", response);
            }
        } catch (error) {
            toast.error(error.response?.data.message || error.message);
        }
    }

    useEffect(() => {
        if (selectedSection) { 
            fetchScreenLayout();
        }
    }, [selectedSection]);

    return (
        <>
            <SeatLayoutWrapper>
                <div className="top_section">
                    <div className="top_inner">
                        <div className="back_btn">
                            <i className="fa-solid fa-angle-left"></i>
                        </div>
                        <div className="top_info_sec">
                            <div className="movie_info_sec">
                                <h6>{movieName}</h6>
                                <p> - {movieData.language} {movieData.format}</p>
                            </div>
                            <div className="theater_info_sec">
                                <h6>{theaterName}</h6>
                                <p>{movieData.day} - {movieData.date}</p>
                                <p>{movieData.time}</p>
                            </div>
                        </div>
                        <div className="seat_btn">
                            <a onClick={openSeatCapacityModal}>

                                <i className="fa-solid fa-pen-to-square"></i>
                                <p>{selectedSeatNo} Seats</p>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="middle_section">
                    <div className="middle_inner">
                        <div className="inner_content">
                            <Swiper
                                freeMode={true}
                                slidesPerView={'auto'}
                                modules={[FreeMode]}
                                className="mySwiper"
                                style={{ overflow: 'visible' }}
                            >
                                <SwiperSlide>
                                    <div className="screen_box">
                                        <div className="display_image">
                                            <img src="/images/Screen-Display.svg" alt="Display" />
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide></SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>
                <div className="bottom_section">
                    <div className="bottom_inner">
                        <div className="seat_information_sec">
                            <div className="information_item">
                                <div className="box available"></div>
                                <p>Available</p>
                            </div>
                            <div className="information_item">
                                <div className="box selected"></div>
                                <p>Selected</p>
                            </div>
                            <div className="information_item">
                                <div className="box sold"></div>
                                <p>Sold</p>
                            </div>
                        </div>
                        <div className="btn_sec">
                            <button>Pay ₹700</button>
                        </div>
                    </div>
                </div>
                <SeatCapacityModal
                    showSeatCapacityModal={showSeatCapacityModal}
                    setShowSeatCapacityModal={setShowSeatCapacityModal}
                    selectedSeatNo={selectedSeatNo}
                    setSelectedSeatNo={setSelectedSeatNo}
                    theaterName={theaterName}
                    movieData={movieData}
                    setSelectedSection={setSelectedSection}
                />
            </SeatLayoutWrapper>
        </>
    );
}

export default SeatLayoutScreen;