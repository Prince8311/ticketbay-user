import { BookingResponseWrapper } from "../../Styles/BookingStyle";

const BookingFailPage = () => {
    return (
        <>
            <BookingResponseWrapper>
                <div className="wrapper_inner">
                    <div className="status_box">
                        <img src="/images/error.gif" alt="" />
                        <h4 className="fail">!! Oops !!</h4>
                        <h6>Something went wrong. Please try again after some times.</h6>
                        <p>Redirecting to home page in <span>5s</span></p>
                    </div>
                </div>
            </BookingResponseWrapper>
        </>
    );
}

export default BookingFailPage;