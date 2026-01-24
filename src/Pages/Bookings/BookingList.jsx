import { useEffect, useState } from "react";
import { BookingListPageWrapper } from "../../Styles/BookingStyle";
import TicketBox from "../../Components/TicketBox";
import BookingDetailsModal from "../../Modals/BookingDetails";
import { toast } from "react-toastify";
import { getApiEndpoints } from "../../Services/Api/ApiConfig";
import axiosInstance from "../../Services/Middleware/AxiosInstance";
import { UserData } from "../../Context/PageContext";
import SkeletonLoader from "../../Components/Loader/SkeletonLoader";
import BookingCancelConfirmModal from "../../Modals/BookingCancelConfirm";

const BookingListPage = () => {
    const api = getApiEndpoints();
    const { userDetails } = UserData();
    const [isDataLoading, setIsDataLoading] = useState(false);
    const [currentType, setCurrentType] = useState('upcoming');
    const [showBookingDetails, setShowBookingDetails] = useState(false);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(false);
    const [isFetchingMore, setIsFetchingMore] = useState(false);
    const [tickets, setTickets] = useState([]);
    const [listReload, setListReload] = useState(false);
    const [selectedBookingId, setSelectedBookingId] = useState('');
    const [refundAmount, setRefundAmount] = useState(0);
    const [showConfirmCancel, setShowConfirmCancel] = useState(false);

    const fetchBookingList = async () => {
        page === 1 ? setIsDataLoading(true) : setIsFetchingMore(true);
        try {
            const response = await axiosInstance.get(api.bookingList, {
                params: {
                    name: userDetails.name,
                    type: currentType,
                    page: page,
                    limit: 12
                },
            });
            if (response?.data?.status === 200) {
                const newList = response.data.list || [];
                const totalCount = response.data.totalCount || 0;
                setTickets(prev => {
                    const updatedList = page === 1 ? newList : [...prev, ...newList];
                    if (updatedList.length === totalCount) {
                        setHasMore(false);
                    } else {
                        setHasMore(true); 
                    }
                    return updatedList;
                });
            }
        } catch (error) {
            setTickets([]);
            toast.error(error.response?.data.message || error.message);
        } finally {
            setListReload(false);
            setIsDataLoading(false);
            setIsFetchingMore(false);
        }
    }

    useEffect(() => {
        if (currentType && userDetails && Object.keys(userDetails).length > 0) {
            fetchBookingList();
        }
    }, [page, userDetails, currentType, listReload]);

    const changeBookingTab = (type) => {
        setCurrentType(type);
        setPage(1);
        setTickets([]);
    }

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
                                <a className={currentType === 'upcoming' ? 'active' : ''} onClick={() => changeBookingTab('upcoming')}>Upcoming</a>
                            </li>
                            <li>
                                <a className={currentType === 'previous' ? 'active' : ''} onClick={() => changeBookingTab('previous')}>Previous</a>
                            </li>
                            <li>
                                <a className={currentType === 'cancelled' ? 'active' : ''} onClick={() => changeBookingTab('cancelled')}>Cancelled</a>
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
                            {
                                isFetchingMore &&
                                Array.from({ length: 4 }).map((_, i) => (
                                    <SkeletonLoader width="315px" height="93px" margin="10px" />
                                ))
                            }
                        </div>
                        {
                            hasMore &&
                            <div className="load_more">
                                <a onClick={() => setPage(page + 1)}>Load More<i className="fa-solid fa-angles-down"></i></a>
                            </div>
                        }
                    </div>
                </div>
                <BookingDetailsModal
                    showBookingDetails={showBookingDetails}
                    setShowBookingDetails={setShowBookingDetails}
                    type={currentType}
                    selectedBookingId={selectedBookingId}
                    setSelectedBookingId={setSelectedBookingId}
                    setRefundAmount={setRefundAmount}
                    setShowConfirmCancel={setShowConfirmCancel}
                />
                <BookingCancelConfirmModal
                    showConfirmCancel={showConfirmCancel}
                    setShowConfirmCancel={setShowConfirmCancel}
                    selectedBookingId={selectedBookingId}
                    setSelectedBookingId={setSelectedBookingId}
                    refundAmount={refundAmount}
                    setRefundAmount={setRefundAmount}
                    setListReload={setListReload}
                />
            </BookingListPageWrapper>
        </>
    );
}

export default BookingListPage;