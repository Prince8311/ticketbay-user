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
    const [selectedSectionIndex, setSelectedSectionIndex] = useState(() => {
        return localStorage.getItem("Selected Section") || null;
    });
    const seatCountIcons = {
        1: "/images/1-seat.png",
        2: "/images/2-seats.png",
        3: "/images/3-seats.png",
        4: "/images/4-seats.png",
        5: "/images/5-7-seats.png",
        6: "/images/5-7-seats.png",
        7: "/images/5-7-seats.png",
        8: "/images/8-10-seats.png",
        9: "/images/8-10-seats.png",
        10: "/images/8-10-seats.png",
    };

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
                    const storedIndex = localStorage.getItem("Selected Section");
                    const selectedIndex = storedIndex !== null && Number(storedIndex) < fetchedSections.length ? Number(storedIndex) : 0;
                    setSelectedSectionIndex(selectedIndex);
                    setSelectedSection(fetchedSections[selectedIndex].section_name);
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

    const handleSelectSection = (index, section) => {
        setSelectedSectionIndex(index);
        setSelectedSection(section);
        localStorage.setItem("Selected Section", index);
    }

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
                                                <div className={`section_btn ${selectedSectionIndex === i ? 'selected' : ''}`} key={i} onClick={() => handleSelectSection(i, section.section_name)}>
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
                                <button onClick={closeModal}>Select Seats</button>
                            </div>
                        </div>
                    </div>
                </div>
            </SeatCapacityWrapper>
        </>
    );
}

export default SeatCapacityModal;