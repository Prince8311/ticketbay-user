import { useEffect, useState } from "react";
import axios from "axios";
import { SeatCapacityWrapper } from "../Styles/ModalStyle";
import SkeletonLoader from "../Components/Loader/SkeletonLoader";
import { getApiEndpoints } from "../Services/Api/ApiConfig";
import { toast } from "react-toastify";

const SeatCapacityModal = ({ showSeatCapacityModal, setShowSeatCapacityModal, selectedSeatNo, setSelectedSeatNo, theaterName, movieData, setSelectedSection }) => {
    const api = getApiEndpoints();
    const [isSectionsLoading, setIsSectionsLoading] = useState(false);
    const [sections, setSections] = useState([]);
    const [selectedSectionIndex, setSelectedSectionIndex] = useState(null);
    const seatCountIcons = {
        1: "/images/cycle-icon.jpg",
        2: "/images/bike-icon.jpg",
        3: "/images/auto-icon.jpg",
        4: "/images/small-car-icon.png",
        5: "/images/large-car-icon.png",
        6: "/images/large-car-icon.png",
        7: "/images/large-car-icon.png",
        8: "/images/bus-icon.jpg",
        9: "/images/bus-icon.jpg",
        10: "/images/bus-icon.jpg",
    }

    function closeModal() {
        setShowSeatCapacityModal(false);
    };

    const fetchScreenSections = async () => {
        setIsSectionsLoading(true);
        try {
            const response = await axios.get(api.fecthScreenSections, {
                params: {
                    screen: movieData.screen,
                    screenId: movieData.screenId,
                    theaterName: theaterName
                },
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                withCredentials: true
            });
            if (response) {
                const fetchedSections = response?.data.sections || [];
                setSections(fetchedSections);
                if (fetchedSections.length > 0) {
                    setSelectedSectionIndex(0);
                    setSelectedSection(fetchedSections[0].section_name);
                }
            }
        } catch (error) {
            toast.error(error.response?.data.message || error.message);
        } finally {
            setIsSectionsLoading(false);
        }
    }

    useEffect(() => {
        if (showSeatCapacityModal) {
            fetchScreenSections();
        }
    }, [showSeatCapacityModal]);

    const handleSelectSeatCount = (count) => {
        setSelectedSeatNo(count);
    };

    return (
        <>
            <SeatCapacityWrapper className={showSeatCapacityModal ? 'active' : ''} onClick={closeModal} >
                <div className={`modal_box ${showSeatCapacityModal ? 'active' : ''}`} onClick={(e) => e.stopPropagation()}>
                    <div className="modal_inner">
                        <div className="modal_head">
                            <h4>How many seats you want to book ?</h4>
                        </div>
                        <div className="modal_items">
                            <div className="middle_part">
                                <div className="icon_box">
                                    <img src={selectedSeatNo ? seatCountIcons[selectedSeatNo] : '/images/cycle-icon.jpg'} alt="Selected Seat" />
                                </div>
                                <div className="selection_btn_sec">
                                    {
                                        [...Array(10).keys()].map((i) => (
                                            <a key={i + 1} className={selectedSeatNo === i + 1 ? 'selected' : ''} onClick={() => handleSelectSeatCount(i + 1)}>{i + 1}</a>
                                        ))
                                    }
                                </div>
                            </div>
                            <div className="section_part">
                                <div className="part_inner">
                                    {
                                        isSectionsLoading ? (
                                            Array.from({ length: 3 }).map((_, i) => (
                                                <div className="section_btn">
                                                    <SkeletonLoader key={i} width="115px" height="64px" />
                                                </div>
                                            ))
                                        ) : sections.length > 0 ? (
                                            sections.map((section, i) =>
                                                <div className={`section_btn ${selectedSectionIndex === i ? 'selected' : ''}`} key={i} onClick={() => {
                                                    setSelectedSectionIndex(i);
                                                    setSelectedSection(section.section_name);
                                                }}>
                                                    <div className="btn_inner">
                                                        <h5>{section.section_name}</h5>
                                                        <b>-</b>
                                                        <span><a>₹</a>{section.price}</span>
                                                        <p>{section.seats} Seats available</p>
                                                    </div>
                                                </div>
                                            )
                                        ) : (
                                            <div className="empty_box"></div>
                                        )
                                    }
                                </div>
                            </div>
                            <div className="bottom_part">
                                <button>Select Seats</button>
                            </div>
                        </div>
                    </div>
                </div>
            </SeatCapacityWrapper>
        </>
    );
}

export default SeatCapacityModal;