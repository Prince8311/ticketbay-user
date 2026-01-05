import TicketBox from "../../../Components/TicketBox";
import { BookedTicketListWrapper } from "../../../Styles/BookingStyle";

const CancelledBookings = () => {
    return (
        <>
            <BookedTicketListWrapper>
                <TicketBox type="cancelled" />
                <TicketBox type="cancelled" />
                <TicketBox type="cancelled" />
            </BookedTicketListWrapper>
        </>
    );
}

export default CancelledBookings;