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
    const [seatsData, setSeatsData] = useState([]);
    const [selectedSeats, setSelectedSeats] = useState([]);

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
                setSeatsData(response?.data.seatData || []);
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

    const indexToAlphabet = (index) => {
        let letters = '';
        while (index >= 0) {
            letters = String.fromCharCode((index % 26) + 65) + letters;
            index = Math.floor(index / 26) - 1;
        }
        return letters;
    };

    const parseSeatsString = (seatsString) => {
        return seatsString.split(', ').map(seat => parseInt(seat.trim(), 10));
    };

    const handleSeatSelect = (sectionName, seatNumber, price) => {
        const seatIdentifier = `${sectionName}-${seatNumber}`;
        const isSeatAlreadySelected = selectedSeats.some(seat => seat.identifier === seatIdentifier);
        if (!isSeatAlreadySelected && selectedSeats.length >= selectedSeatNo) {
            toast.warn(`You can select only ${selectedSeatNo} seat${selectedSeatNo > 1 ? 's' : ''}. If you want more then please update your limit.`);
            return;
        }
        setSelectedSeats(prevSelectedSeats => {
            if (isSeatAlreadySelected) {
                return prevSelectedSeats.filter(seat => seat.identifier !== seatIdentifier);
            } else {
                return [...prevSelectedSeats, { sectionName, seatNumber, price: Number(price), identifier: seatIdentifier }];
            }
        });
    };

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
                                    {
                                        seatsData && seatsData.map((seatData, index) => {
                                            return (
                                                <div className="seat_section" key={index}>
                                                    <div className="sec_name">
                                                        <span>{seatData.section_name}</span>
                                                        <p>( <b>₹</b>{seatData.price} )</p>
                                                    </div>
                                                    <div className="sec_seat_rows">
                                                        {
                                                            (seatData.seat_layout).map((seats, idx) => {
                                                                const gapSeats = parseSeatsString(seats.gap_seats || '');
                                                                const gapAmounts = parseSeatsString(seats.gap_amounts || '');
                                                                return (
                                                                    <div className="seat_row" key={idx}>
                                                                        <div className="seats">
                                                                            {
                                                                                Array.from({ length: seats.seats }, (_, i) => {
                                                                                    const isGap = gapSeats.includes(i + 1);
                                                                                    const gapIndex = gapSeats.indexOf(i + 1);
                                                                                    const seatNumber = `${indexToAlphabet(idx)}-${i + 1}`;
                                                                                    return (
                                                                                        <li key={i}
                                                                                            className={` ${selectedSeats.some(seat => seat.identifier === `${seatData.sec_name}-${indexToAlphabet(idx)}-${i + 1}`) ? 'selected' : ''}`}
                                                                                            style={{
                                                                                                '--gap': gapIndex !== -1 ? gapAmounts[gapIndex] : 0,
                                                                                                '--starting': i === 0 ? seats.starting : 0
                                                                                            }}
                                                                                            onClick={() => handleSeatSelect(seatData.sec_name, `${indexToAlphabet(idx)}-${i + 1}`, seatData.price)}
                                                                                        >
                                                                                            <a>
                                                                                                <i className="fa-solid fa-couch"></i>
                                                                                                <span>{i + 1}</span>
                                                                                            </a>
                                                                                        </li>
                                                                                    );
                                                                                })
                                                                            }
                                                                        </div>
                                                                        <div className="index">
                                                                            <p>{indexToAlphabet(idx)}</p>
                                                                        </div>
                                                                    </div>
                                                                );
                                                            })
                                                        }
                                                    </div>
                                                </div>
                                            );
                                        })
                                    }
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