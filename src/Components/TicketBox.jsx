import { TicketBoxWrapper } from "../Styles/BookingStyle";

const TicketBox = ({ type }) => {
    return (
        <>
            <TicketBoxWrapper>
                <div className={`ticket_box ${type}`}>
                    <div className="box_inner">
                        <div className="poster_image">
                            <img src="/images/Movie-1.jpg" alt="" />
                        </div>
                        <div className="details_sec">
                            <div className="details_inner">
                                <h5>Avatar: The Way of Water</h5>
                                <ul>
                                    <p>25 Oct, 2025</p>
                                    <i className="fa-solid fa-circle"></i>
                                    <p>8:30 PM</p>
                                </ul>
                                <div className="section">
                                    <span>Class :</span>
                                    <p>Premium</p>
                                </div>
                                <div className="seats">
                                    <span>Seats :</span>
                                    <p>A-1, A-2, A-3</p>
                                </div>
                            </div>
                            {
                                type === 'cancelled' &&
                                <div className="cancelled_tag">
                                    <img src="/images/cancel-tag.png" alt="" />
                                </div>
                            }
                        </div>
                        <div className="id_sec">
                            <p>TKB894571</p>
                        </div>
                    </div>
                    <div className="circle_sec">
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </TicketBoxWrapper>
        </>
    );
}

export default TicketBox;