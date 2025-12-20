import TicketBox from "../../Components/TicketBox";
import { BookedTicketListWrapper, TicketBoxWrapper } from "../../Styles/BookingStyle";

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