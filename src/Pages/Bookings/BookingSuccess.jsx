import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BookingResponseWrapper } from "../../Styles/BookingStyle";

const BookingSuccessPage = () => {
    const [countdown, setCountdown] = useState(3);
    const navigate = useNavigate();

    useEffect(() => {
        const interval = setInterval(() => {
            setCountdown(prevCountdown => prevCountdown - 1);
        }, 1000);
        if (countdown === 0) {
            navigate('/');
        }
        return () => clearInterval(interval);
    }, [countdown, navigate])

    return (
        <>
            <BookingResponseWrapper>
                <div className="wrapper_inner">
                    <div className="status_box">
                        <img src="/images/success.gif" alt="" />
                        <h4 className="success">!! Thank You !!</h4>
                        <h6>Your booking is comfirmed.</h6>
                        <p>Redirecting to home page in <span>{countdown}s</span></p>
                    </div>
                </div>
            </BookingResponseWrapper>
        </>
    );
}

export default BookingSuccessPage;