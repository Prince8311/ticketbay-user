import { SeatLayoutWrapper } from "../../Styles/BookingStyle";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import SeatCapacityModal from "../../Modals/SeatCapacity";

const SeatLayoutScreen = () => {
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
                                <h6>Kantara Chapter One - </h6>
                                <p>Hindi, 2D</p>
                            </div>
                            <div className="theater_info_sec">
                                <h6>Sreelekha Theater</h6>
                                <a>Day - <span>06 Jan, 2026</span></a>
                                <p>09:00 AM</p>
                            </div>
                        </div>
                        <div className="seat_btn">
                            <button>
                                <i className="fa-solid fa-pen-to-square"></i>
                                6 Seats
                            </button>
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
                            <button>Pay <span>₹ 700</span></button>
                        </div>
                    </div>
                </div>

                <SeatCapacityModal />
            </SeatLayoutWrapper>
        </>
    );
}

export default SeatLayoutScreen;