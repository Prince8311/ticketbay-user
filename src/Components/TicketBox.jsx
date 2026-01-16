import { moviePosterURL } from "../Services/Api/ApiConfig";
import { TicketBoxWrapper } from "../Styles/BookingStyle";

const TicketBox = ({ type, ticket, setSelectedBookingId, setShowBookingDetails }) => {

    const showBookingDetails = (id) => {
        setSelectedBookingId(id);
        setShowBookingDetails(true);
    }

    return (
        <>
            <TicketBoxWrapper onClick={() => showBookingDetails(ticket.booking_id)}>
                <div className={`ticket_box ${type}`}>
                    <div className="box_inner">
                        <div className="poster_image">
                            <img src={ticket.poster_image ? `${moviePosterURL}/${ticket.poster_image}` : '/images/blank-poster.jpg'} alt="" />
                        </div>
                        <div className="details_sec">
                            <div className="details_inner">
                                <h5>{ticket.movie_name}</h5>
                                <ul>
                                    <p>{ticket.start_date}</p>
                                    <i className="fa-solid fa-circle"></i>
                                    <p>{ticket.start_time}</p>
                                </ul>
                                <div className="section">
                                    <p><span>Class :</span>{ticket.section}</p>
                                </div>
                                <div className="seats">
                                    <p><span>Seats :</span>{ticket.seats}</p>
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
                            <p>{ticket.booking_id}</p>
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