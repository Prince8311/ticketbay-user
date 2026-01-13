import { BookingResponseWrapper } from "../../Styles/BookingStyle";

const BookingSuccessPage = () => {
    return(
        <>
            <BookingResponseWrapper>
                <div className="wrapper_inner">
                    <div className="status_box">
                        <img src="/images/success.gif" alt="" />
                        <h4 className="success">!! Thank You !!</h4>
                        <h6>Your booking is comfirmed.</h6>
                        <p>Redirecting to home page in <span>5s</span></p>
                    </div>
                </div>
            </BookingResponseWrapper>
        </>
    );
}

export default BookingSuccessPage;