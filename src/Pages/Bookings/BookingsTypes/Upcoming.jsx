import { useState } from "react";
import TicketBox from "../../../Components/TicketBox";
import BookingDetailsModal from "../../../Modals/BookingDetails";
import { BookedTicketListWrapper } from "../../../Styles/BookingStyle";

const UpcomingBookings = () => {
    const [showBookingDetails, setShowBookingDetails] = useState(false);

    return (
        <>
            <BookedTicketListWrapper>
                <div className="ticket_list">
                    <TicketBox type="upcoming" setShowBookingDetails={setShowBookingDetails} />
                    <TicketBox type="upcoming" setShowBookingDetails={setShowBookingDetails} />
                    <TicketBox type="upcoming" setShowBookingDetails={setShowBookingDetails} />
                    <TicketBox type="upcoming" setShowBookingDetails={setShowBookingDetails} />
                </div>
                <BookingDetailsModal 
                    showBookingDetails={showBookingDetails}
                    setShowBookingDetails={setShowBookingDetails}
                />
            </BookedTicketListWrapper>
        </>
    );
}

export default UpcomingBookings;