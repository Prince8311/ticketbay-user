import { useState } from "react";
import { CheckoutWrapper } from "../Styles/ModalStyle";

const CheckoutModal = ({ showCheckoutModal, setShowCheckoutModal, movieName, theaterName, movieData, bookingDetails, setShowReturnPolicyModal }) => {
    const [showConvenienceFeeDetails, setShowConvenienceFeeDetails] = useState(false);

    function closeModal() {
        setShowCheckoutModal(false);
    }

    function toggleDisplayConvenienceFeeDetails() {
        setShowConvenienceFeeDetails(!showConvenienceFeeDetails);
    }

    const totalTicketPrice = (seatCount, price) => {
        return (seatCount * price).toFixed(2);
    }

    const baseConvenienceFee = (seatCount, commission) => {
        return (seatCount * commission).toFixed(2);
    }

    const convenienceGST = (seatCount, commission) => {
        return ((seatCount * commission) * 0.18).toFixed(2);
    }

    const totalConvenienceFee = (seatCount, commission) => {
        return (Number(seatCount * commission) + Number((seatCount * commission) * 0.18)).toFixed(2);
    }

    const orderTotalPrice = (seatCount, price, commission) => {
        return (Number(seatCount * price) + Number(seatCount * commission) + Number((seatCount * commission) * 0.18)).toFixed(2);
    }

    const calculateCheckoutAmounts = (seatCount, price, adminCommission) => {
        const ticketPrice = Number(price);
        const commission = Number(adminCommission);

        const ticketTotal = seatCount * ticketPrice;
        const baseConvenience = seatCount * commission;
        const gst = baseConvenience * 0.18;
        const totalConvenience = baseConvenience + gst;
        const orderTotal = ticketTotal + baseConvenience + gst;

        return{
            ticketTotal: ticketTotal.toFixed(2),
            baseConvenience: baseConvenience.toFixed(2),
            gst: gst.toFixed(2),
            totalConvenience: totalConvenience.toFixed(2),
            orderTotal: orderTotal.toFixed(2),
        };
    }

    const amount = calculateCheckoutAmounts(bookingDetails?.seats?.length, bookingDetails?.price, bookingDetails?.adminCommission);

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
                                            {bookingDetails?.seats?.map(seat => seat.seatNumber).join(', ')}
                                        </li>
                                    </div>
                                    <div className="ticket_details">
                                        <li className="amounts">
                                            <span>Ticket(s) Price</span>
                                            <p><b>₹</b>{totalTicketPrice(bookingDetails?.seats?.length, bookingDetails?.price)}</p>
                                        </li>
                                        <li className="amounts">
                                            <span>Convenience fees</span>
                                            <a onClick={toggleDisplayConvenienceFeeDetails}><i className={`fa-solid fa-angle-down ${showConvenienceFeeDetails ? 'rotate' : ''}`}></i></a>
                                            <p><b>₹</b>{totalConvenienceFee(bookingDetails?.seats?.length, bookingDetails?.adminCommission)}</p>
                                        </li>
                                        <div className={`convenience_details ${showConvenienceFeeDetails ? 'active' : ''}`}>
                                            <li className="convenience">
                                                <span>Base amount</span>
                                                <p><b>₹</b>{baseConvenienceFee(bookingDetails?.seats?.length, bookingDetails?.adminCommission)}</p>
                                            </li>
                                            <li className="convenience">
                                                <span>Integrated GST (@ 18%)</span>
                                                <p><b>₹</b>{convenienceGST(bookingDetails?.seats?.length, bookingDetails?.adminCommission)}</p>
                                            </li>
                                        </div>
                                        <li className="total">
                                            <span>Order Total</span>
                                            <p><b>₹</b>{orderTotalPrice(bookingDetails?.seats?.length, bookingDetails?.price, bookingDetails?.adminCommission)}</p>
                                        </li>
                                    </div>
                                </div>
                                <div className="account_box">
                                    <li>
                                        <span>For sending details</span>
                                        <p>demo12345@gmail.com</p>
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
                        <button>
                            <p>Pay</p>
                            <span>₹{orderTotalPrice(bookingDetails?.seats?.length, bookingDetails?.price, bookingDetails?.adminCommission)}</span>
                        </button>
                    </div>
                </div>
            </CheckoutWrapper>
        </>
    );
}

export default CheckoutModal;