import TicketBox from "../../../Components/TicketBox";
import { BookedTicketListWrapper } from "../../../Styles/BookingStyle";

const PreviousBookings = () => {
    return (
        <>
            <BookedTicketListWrapper>
                <BookedTicketListWrapper>
                    <TicketBox type="previous" />
                    <TicketBox type="previous" />
                    <TicketBox type="previous" />
                </BookedTicketListWrapper>
            </BookedTicketListWrapper>
        </>
    );
}

export default PreviousBookings;