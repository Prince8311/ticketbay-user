import { useEffect, useState } from "react";
import { CheckoutWrapper } from "../Styles/ModalStyle";
import { UserData } from "../Context/PageContext";
import { getApiEndpoints } from "../Services/Api/ApiConfig";
import { toast } from "react-toastify";
import axiosInstance from "../Services/Middleware/AxiosInstance";

const CheckoutModal = ({ showCheckoutModal, setShowCheckoutModal, movieName, theaterName, movieData, bookingDetails, setShowReturnPolicyModal }) => {
    const api = getApiEndpoints();
    const { userDetails } = UserData();
    const [seats, setSeats] = useState('');
    const [showConvenienceFeeDetails, setShowConvenienceFeeDetails] = useState(false);
    const [isPayButtonLoading, setIsPayButtonLoading] = useState(false);

    function closeModal() {
        setShowCheckoutModal(false);
    }

    useEffect(() => {
        if (showCheckoutModal) {
            setSeats(bookingDetails?.seats?.map(seat => seat.seatNumber).join(', '));
        }
    }, [showCheckoutModal]);

    function toggleDisplayConvenienceFeeDetails() {
        setShowConvenienceFeeDetails(!showConvenienceFeeDetails);
    }

    const calculateCheckoutAmounts = (seatCount, price, adminCommission) => {
        const ticketPrice = Number(price);
        const commission = Number(adminCommission);

        const ticketTotal = seatCount * ticketPrice;
        const baseConvenience = seatCount * commission;
        const gst = baseConvenience * 0.18;
        const totalConvenience = baseConvenience + gst;
        const orderTotal = ticketTotal + baseConvenience + gst;

        return {
            ticketTotal: ticketTotal.toFixed(2),
            baseConvenience: baseConvenience.toFixed(2),
            gst: gst.toFixed(2),
            totalConvenience: totalConvenience.toFixed(2),
            orderTotal: orderTotal.toFixed(2),
        };
    }

    const amount = calculateCheckoutAmounts(bookingDetails?.seats?.length, bookingDetails?.price, bookingDetails?.adminCommission);

    const handleBookTickets = async () => {
        setIsPayButtonLoading(true);
        const payload = {
            bookingId: bookingDetails.bookingId,
            userName: userDetails.name,
            userEmail: userDetails.email,
            userPhone: userDetails.phone,
            theaterName: theaterName,
            movieName: movieName,
            ticketPrice: amount.ticketTotal,
            baseConvenience: amount.baseConvenience,
            gst: amount.gst,
            theaterCommission: bookingDetails.theaterCommission
        };
        try {
            const response = await axiosInstance.post(api.bookingPayment, payload);
            if (response?.data?.status === 200) { 
                window.location.href = response?.data?.payURL
            }
        } catch (error) {
            toast.error(error.response?.data.message || error.message);
        } finally {
            setIsPayButtonLoading(false);
        }
    }

    return (
        <>
            <CheckoutWrapper className={showCheckoutModal ? 'active' : ''}>
                <div className={`modal_inner ${showCheckoutModal ? 'active' : ''}`}>
                    <div className="modal_head">
                        <h4>Checkout</h4>
                        <a onClick={closeModal}><i className="fa-solid fa-arrow-right-long"></i></a>
                    </div>
                    <div className="modal_body">
                        <div className="body_inner">
                            <div className="checkout_items">
                                <div className="movie_details_box">
                                    <h5>{movieName}</h5>
                                    <li>
                                        <p>{movieData.language}</p>
                                        <p>{movieData.format}</p>
                                    </li>
                                    <li>
                                        <p>{movieData.day}</p>
                                        <p>{movieData.date}</p>
                                        <p>{movieData.time}</p>
                                    </li>
                                    <span>{theaterName} <b>({movieData.screen})</b></span>
                                </div>
                                <div className="ticket_details_box">
                                    <div className="ticket_seats">
                                        <li>
                                            <span>{bookingDetails.section}:</span>
                                            {seats}
                                        </li>
                                    </div>
                                    <div className="ticket_details">
                                        <li className="amounts">
                                            <span>Ticket(s) Price</span>
                                            <p><b>₹</b>{amount.ticketTotal}</p>
                                        </li>
                                        <li className="amounts">
                                            <span>Convenience fees</span>
                                            <a onClick={toggleDisplayConvenienceFeeDetails}><i className={`fa-solid fa-angle-down ${showConvenienceFeeDetails ? 'rotate' : ''}`}></i></a>
                                            <p><b>₹</b>{amount.totalConvenience}</p>
                                        </li>
                                        <div className={`convenience_details ${showConvenienceFeeDetails ? 'active' : ''}`}>
                                            <li className="convenience">
                                                <span>Base amount</span>
                                                <p><b>₹</b>{amount.baseConvenience}</p>
                                            </li>
                                            <li className="convenience">
                                                <span>Integrated GST (@ 18%)</span>
                                                <p><b>₹</b>{amount.gst}</p>
                                            </li>
                                        </div>
                                        <li className="total">
                                            <span>Order Total</span>
                                            <p><b>₹</b>{amount.orderTotal}</p>
                                        </li>
                                    </div>
                                </div>
                                <div className="account_box">
                                    <li>
                                        <span>For sending details</span>
                                        <p>{userDetails.email}</p>
                                    </li>
                                    <li>
                                        <span>Cancellation Available</span>
                                        <p>To know more <a onClick={() => setShowReturnPolicyModal(true)}>view cancellation / refund policy</a></p>
                                    </li>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal_btn">
                        <button onClick={handleBookTickets}>
                            <p>Pay</p>
                            <span>₹{amount.orderTotal}</span>
                        </button>
                    </div>
                </div>
            </CheckoutWrapper>
        </>
    );
}

export default CheckoutModal;