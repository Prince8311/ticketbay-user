import { BookingDetailsWrapper } from "../Styles/ModalStyle";

const BookingDetailsModal = () => {
    return (
        <>
            <BookingDetailsWrapper>
                <div className="modal_box">
                    <div className="modal_head">
                        <h4>Booking Details <span>#FHERD500</span></h4>
                        <div className="close_sec">
                            <a><i className="fa-solid fa-xmark"></i></a>
                        </div>
                    </div>
                </div>
            </BookingDetailsWrapper>
        </>
    );
}

export default BookingDetailsModal;