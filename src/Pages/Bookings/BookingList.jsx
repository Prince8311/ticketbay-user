import { useEffect, useState } from "react";
import { BookingListPageWrapper } from "../../Styles/BookingStyle";
import TicketBox from "../../Components/TicketBox";
import BookingDetailsModal from "../../Modals/BookingDetails";
import { toast } from "react-toastify";
import { getApiEndpoints } from "../../Services/Api/ApiConfig";
import axiosInstance from "../../Services/Middleware/AxiosInstance";
import { UserData } from "../../Context/PageContext";
import SkeletonLoader from "../../Components/Loader/SkeletonLoader";

const BookingListPage = () => {
    const api = getApiEndpoints();
    const { userDetails } = UserData();
    const [isDataLoading, setIsDataLoading] = useState(false);
    const [currentType, setCurrentType] = useState('upcoming');
    const [showBookingDetails, setShowBookingDetails] = useState(false);
    const [tickets, setTickets] = useState([]);
    const [selectedBookingId, setSelectedBookingId] = useState('');

    const fetchBookingList = async () => {
        setIsDataLoading(true);
        try {
            const response = await axiosInstance.get(api.bookingList, {
                params: {
                    name: userDetails.name,
                    type: currentType
                },
            });
            if (response?.data?.status === 200) {
                setTickets(response?.data?.list);
            }
        } catch (error) {
            setTickets([]);
            toast.error(error.response?.data.message || error.message);
        } finally {
            setIsDataLoading(false);
        }
    }

    useEffect(() => {
        if (currentType && userDetails && Object.keys(userDetails).length > 0) {
            fetchBookingList();
        }
    }, [userDetails, currentType]);

    return (
        <>
            <BookingListPageWrapper>
                <div className="page_content">
                    <div className="page_head">
                        <h4><span><b>M</b>y</span> <span><b>B</b>ookings</span></h4>
                    </div>
                    <div className="page_tab_sec">
                        <div className="sec_inner">
                            <li>
                                <a className={currentType === 'upcoming' ? 'active' : ''} onClick={() => setCurrentType('upcoming')}>Upcoming</a>
                            </li>
                            <li>
                                <a className={currentType === 'previous' ? 'active' : ''} onClick={() => setCurrentType('previous')}>Previous</a>
                            </li>
                            <li>
                                <a className={currentType === 'cancelled' ? 'active' : ''} onClick={() => setCurrentType('cancelled')}>Cancelled</a>
                            </li>
                        </div>
                    </div>
                    <div className="page_inner">
                        <div className="ticket_list">
                            {
                                isDataLoading ? (
                                    Array.from({ length: 4 }).map((_, i) => (
                                        <SkeletonLoader width="315px" height="93px" margin="10px" />
                                    ))
                                ) : tickets.length > 0 ? (
                                    tickets.map((ticket, i) =>
                                        <TicketBox
                                            key={i}
                                            type={currentType}
                                            ticket={ticket}
                                            setSelectedBookingId={setSelectedBookingId}
                                            setShowBookingDetails={setShowBookingDetails}
                                        />
                                    )
                                ) : (
                                    <div className="empty_box">
                                        <p>No booking available</p>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>
                <BookingDetailsModal
                    showBookingDetails={showBookingDetails}
                    setShowBookingDetails={setShowBookingDetails}
                    type={currentType}
                    selectedBookingId={selectedBookingId}
                    setSelectedBookingId={setSelectedBookingId}
                />
            </BookingListPageWrapper>
        </>
    );
}

export default BookingListPage;