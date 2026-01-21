import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { BookingDetailsWrapper } from "../Styles/ModalStyle";
import { QRCodeCanvas } from "qrcode.react";
import { getApiEndpoints, moviePosterURL } from "../Services/Api/ApiConfig";
import axiosInstance from "../Services/Middleware/AxiosInstance";
import { UserData } from "../Context/PageContext";
import SkeletonLoader from "../Components/Loader/SkeletonLoader";
import ButtonLoader from "../Components/Loader/ButtonLoader";

const BookingDetailsModal = ({ showBookingDetails, setShowBookingDetails, type, selectedBookingId, setSelectedBookingId, setRefundAmount, setShowConfirmCancel }) => {
    const api = getApiEndpoints();
    const { userDetails } = UserData();
    const [isDetailsLoading, setIsDetailsLoading] = useState(false);
    const [bookingDetails, setBookingDetails] = useState({});
    const [isCancelButtonLoading, setIsCancelButtonLoading] = useState(false);

    function closeModal() {
        setShowBookingDetails(false);
        setSelectedBookingId('');
    }

    const fetchBookingDetails = async () => {
        setIsDetailsLoading(true);
        try {
            const response = await axiosInstance.get(api.bookingDetails, {
                params: {
                    name: userDetails.name,
                    bookingId: selectedBookingId
                },
            });
            if (response?.data?.status === 200) {
                setBookingDetails(response?.data?.details);
            }
        } catch (error) {
            setBookingDetails({});
            toast.error(error.response?.data.message || error.message);
        } finally {
            setIsDetailsLoading(false);
        }
    }

    useEffect(() => {
        if (showBookingDetails && selectedBookingId) {
            fetchBookingDetails();
        }
    }, [showBookingDetails, selectedBookingId]);

    const getSeatCount = (seats) => {
        if (!seats || typeof seats !== 'string') return 0;
        return seats.split(', ').map(seat => seat.trim()).filter(seat => seat.length > 0).length;
    }

    const getQrValues = (id, name) => {
        const values = {
            bookingId: id,
            name: name
        };
        return JSON.stringify(values);
    }

    const handleCancelInitiate = async () => {
        setIsCancelButtonLoading(true);
        const payload = {
            bookingId: bookingDetails.booking_id,
            userName: userDetails.name
        };

        try {
            const response = await axiosInstance.post(api.bookingCancel, payload);
            if (response?.data?.status === 200) {
                console.log(response);
                setRefundAmount(response?.data?.refundAmount);
                setShowBookingDetails(false);
                setShowConfirmCancel(true);
            }
        } catch (error) {
            toast.error(error.response?.data.message || error.message);
        } finally {
            setIsCancelButtonLoading(false);
        }
    }

    return (
        <>
            <BookingDetailsWrapper className={showBookingDetails ? 'active' : ''}>
                <div className={`modal_box ${showBookingDetails ? 'active' : ''}`}>
                    <div className="modal_head">
                        <h4>Booking Details<span className={type}>({selectedBookingId})</span></h4>
                        <div className="close_sec">
                            <a onClick={closeModal}><i className="fa-solid fa-xmark"></i></a>
                        </div>
                    </div>
                    <div className="modal_body">
                        {
                            isDetailsLoading ? (
                                <div className="details_loading">
                                    <SkeletonLoader width="100px" height="120px" />
                                    <SkeletonLoader width="calc(100% - 110px)" height="120px" />
                                    <SkeletonLoader width="calc(100% - 85px)" height="75px" margin="10px 0 0 0" />
                                    <SkeletonLoader width="75px" height="75px" margin="10px 0 0 0" />
                                </div>
                            ) : (
                                <div className="details_box">
                                    <div className="dot_line_1"></div>
                                    <div className="dot_line_2"></div>
                                    <div className="details_inner">
                                        <div className="top_part">
                                            <div className="poster_sec">
                                                <img src={bookingDetails.poster_image ? `${moviePosterURL}/${bookingDetails.poster_image}` : '/images/blank-poster.jpg'} alt="" />
                                            </div>
                                            <div className="movie_seat_details">
                                                <div className="id_sec">
                                                    <span>Booking ID :</span>
                                                    <p>{bookingDetails.booking_id}</p>
                                                    <a>[{getSeatCount(bookingDetails.seats)} seats]</a>
                                                </div>
                                                <h4>{bookingDetails.movie_name}</h4>
                                                <div className="show_info">
                                                    <p>{bookingDetails.total_time}</p>
                                                    <span className="gap">|</span>
                                                    <p>{bookingDetails.language}</p>
                                                    <span className="gap">|</span>
                                                    <p>{bookingDetails.format}</p>
                                                    <span className="gap">|</span>
                                                    <p>{bookingDetails.age_category}</p>
                                                </div>
                                                <div className="show_time">
                                                    <b>Show Time :</b>
                                                    <p>{bookingDetails.day}</p>
                                                    <span className="gap">|</span>
                                                    <p>{bookingDetails.start_date}</p>
                                                    <span className="gap">|</span>
                                                    <p>{bookingDetails.start_time}</p>
                                                </div>
                                                <div className="theater_sec">
                                                    <p>{bookingDetails.theater_name} ({bookingDetails.screen})</p>
                                                </div>
                                                <div className="seats_sec">
                                                    <p><span>{bookingDetails.section} :</span> {bookingDetails.seats}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bottom_part">
                                            <div className="amount_details">
                                                <li>
                                                    <span>Ticket(s) Price</span>
                                                    <p><b>₹</b>{Number(bookingDetails.ticket_price).toFixed(2)}</p>
                                                </li>
                                                <li>
                                                    <span>Convenience fees</span>
                                                    <p><b>₹</b>{(Number(bookingDetails.base_convenience) + Number(bookingDetails.gst)).toFixed(2)}</p>
                                                </li>
                                                <li className="order_total">
                                                    <span>Total Amount</span>
                                                    <p><b>₹</b>{(Number(bookingDetails.ticket_price) + Number(bookingDetails.base_convenience) + Number(bookingDetails.gst)).toFixed(2)}</p>
                                                </li>
                                            </div>
                                            <div className="qr_code_sec">
                                                <QRCodeCanvas
                                                    value={getQrValues(bookingDetails.booking_id, bookingDetails.username)}
                                                    size={65}
                                                    bgColor="transparent"
                                                    fgColor="#000000"
                                                    level="H"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                    {

                        (type === 'upcoming' || type === 'cancelled') &&
                        <div className="modal_bottom">
                            {
                                type === 'upcoming' &&
                                <button className={isCancelButtonLoading ? 'disable' : ''} onClick={handleCancelInitiate} disabled={isCancelButtonLoading}>
                                    {
                                        isCancelButtonLoading ?
                                            <ButtonLoader />
                                            :
                                            <>Cancel Booking</>
                                    }
                                </button>
                            }
                            {
                                type === 'cancelled' &&
                                <>
                                    <p>Refund Status : <span className="success">SUCCESS</span></p>
                                </>
                            }
                        </div>
                    }
                </div>
            </BookingDetailsWrapper>
        </>
    );
}

export default BookingDetailsModal;