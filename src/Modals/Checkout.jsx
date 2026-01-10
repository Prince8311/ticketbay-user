import { useState } from "react";
import { CheckoutWrapper } from "../Styles/ModalStyle";

const CheckoutModal = ({ showCheckoutModal, setShowCheckoutModal }) => {
    const [showConvenienceFeeDetails, setShowConvenienceFeeDetails] = useState(false);

    function closeModal() {
        setShowCheckoutModal(false);
    }

    function toggleDisplayConvenienceFeeDetails() {
        setShowConvenienceFeeDetails(!showConvenienceFeeDetails);
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
                                    <h5>Avatar: The Way of Water</h5>
                                    <li>
                                        <p>Hindi</p>
                                        <p>2D</p>
                                    </li>
                                    <li>
                                        <p>Sun</p>
                                        <p>10 Jan, 2026</p>
                                        <p>10:15 PM</p>
                                    </li>
                                    <span>Sreelekha Theater <b>(Screen 1)</b></span>
                                </div>
                                <div className="ticket_details_box">
                                    <div className="ticket_seats">
                                        <li>
                                            <span>Premium Class:</span>
                                            A-1, A-2, A-3, A-4, B-3, B-5
                                        </li>
                                    </div>
                                    <div className="ticket_details">
                                        <li className="amounts">
                                            <span>Ticket(s) Price</span>
                                            <p><b>₹</b>400.00</p>
                                        </li>
                                        <li className="amounts">
                                            <span>Convenience fees</span>
                                            <a onClick={toggleDisplayConvenienceFeeDetails}><i className={`fa-solid fa-angle-down ${showConvenienceFeeDetails ? 'rotate' : ''}`}></i></a>
                                            <p><b>₹</b>46.40</p>
                                        </li>
                                        <div className={`convenience_details ${showConvenienceFeeDetails ? 'active' : ''}`}>
                                            <li className="convenience">
                                                <span>Base amount</span>
                                                <p><b>₹</b>40.00</p>
                                            </li>
                                            <li className="convenience">
                                                <span>Integrated GST (@ 18%)</span>
                                                <p><b>₹</b>6.40</p>
                                            </li>
                                        </div>
                                        <li className="total">
                                            <span>Order Total</span>
                                            <p><b>₹</b>446.40</p>
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
                                        <p>To know more <a>view cancellation / refund policy</a></p>
                                    </li>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal_btn">
                        <button>Pay Now</button>
                    </div>
                </div>
            </CheckoutWrapper>
        </>
    );
}

export default CheckoutModal;