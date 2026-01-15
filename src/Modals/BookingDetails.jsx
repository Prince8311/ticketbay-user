import { BookingDetailsWrapper } from "../Styles/ModalStyle";
import { QRCodeCanvas } from "qrcode.react";

const BookingDetailsModal = ({ showBookingDetails, setShowBookingDetails }) => {
    function closeModal() {
        setShowBookingDetails(false);
    }
    return (
        <>
            <BookingDetailsWrapper className={showBookingDetails ? 'active' : ''}>
                <div className={`modal_box ${showBookingDetails ? 'active' : ''}`}>
                    <div className="modal_head">
                        <h4>Booking Details<span className="upcoming">( FHERD500 )</span></h4>
                        <div className="close_sec">
                            <a onClick={closeModal}><i className="fa-solid fa-xmark"></i></a>
                        </div>
                    </div>
                    <div className="modal_body">
                        <div className="details_box">
                            <div className="dot_line_1"></div>
                            <div className="dot_line_2"></div>
                            <div className="details_inner">
                                <div className="top_part">
                                    <div className="poster_sec">
                                        <img src="/images/Movie-1.jpg" alt="" />
                                    </div>
                                    <div className="movie_seat_details">
                                        <div className="id_sec">
                                            <span>Booking ID :</span>
                                            <p>TKB123456</p>
                                        </div>
                                        <h4>Kantara: A Legend - Chapter 1</h4>
                                        <div className="show_time">
                                            <span>Show Time :</span>
                                            <p>Fri</p>
                                            <p>26 Jun, 2026</p>
                                            <p>02:20PM</p>
                                        </div>
                                        <div className="seats_sec">
                                            <p><span>Balcony :</span> A-1, A-2, A-3, A-4, A-5</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="bottom_part">
                                    <div className="amount_details">
                                        <li>
                                            <span>Ticket(s) Price</span>
                                            <p><b>₹</b>1000.00</p>
                                        </li>
                                        <li>
                                            <span>Convenience fees</span>
                                            <p><b>₹</b>155.56</p>
                                        </li>
                                        <li className="order_total">
                                            <span>Total Amount</span>
                                            <p><b>₹</b>1155.56</p>
                                        </li>
                                    </div>
                                    <div className="qr_code_sec">
                                        <QRCodeCanvas
                                            value="https://yourwebsite.com"
                                            size={65}
                                            bgColor="transparent"
                                            fgColor="#000000"
                                            level="H"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </BookingDetailsWrapper>
        </>
    );
}

export default BookingDetailsModal;