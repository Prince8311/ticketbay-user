import { NavLink, Outlet } from "react-router-dom";
import { BookingListPageWrapper } from "../../Styles/BookingStyle";

const BookingListPage = () => {
    return (
        <>
            <BookingListPageWrapper>
                <div className="page_content">
                    <div className="info_box_sec">
                        <div className="info_box">
                            <div className="box_inner">
                                <div className="box_items">
                                    <div className="inner_item">
                                        <h4>Ticket Booked</h4>
                                        <p>1000</p>
                                    </div>
                                    <div className="icon">
                                        <i className="fa-solid fa-ticket"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="info_box">
                            <div className="box_inner">
                                <div className="box_items">
                                    <div className="inner_item">
                                        <h4>Ticket Cancelled</h4>
                                        <p>1000</p>
                                    </div>
                                    <div className="icon">
                                        <i className="fa-solid fa-ban"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="page_tab_sec">
                        <div className="sec_inner">
                            <li><NavLink to="upcoming">Upcoming</NavLink></li>
                            <li><NavLink to="previous">Previous</NavLink></li>
                            <li><NavLink to="cancelled">Cancelled</NavLink></li>
                        </div>
                    </div>
                    <div className="page_inner">
                        <Outlet />
                    </div>
                </div>
            </BookingListPageWrapper>
        </>
    );
}

export default BookingListPage;