import TicketBox from "../../Components/TicketBox";
import { BookedTicketListWrapper } from "../../Styles/BookingStyle";

const UpcomingBookings = () => {
    return(
        <>
            <BookedTicketListWrapper>
                <TicketBox type="upcoming" />
                <TicketBox type="upcoming" />
                <TicketBox type="upcoming" />
                <TicketBox type="upcoming" />
            </BookedTicketListWrapper>
        </>
    );
}

export default UpcomingBookings;