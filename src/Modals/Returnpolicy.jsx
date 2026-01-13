import { ReturnPolicyWrapper } from "../Styles/ModalStyle";

const ReturnPolicyModal = ({ showReturnPolicyModal, setShowReturnPolicyModal }) => {
    function closeModal() {
        setShowReturnPolicyModal(false);
    }

    return (
        <>
            <ReturnPolicyWrapper className={showReturnPolicyModal ? 'active' : ''}>
                <div className={`modal_box ${showReturnPolicyModal ? 'active' : ''}`}>
                    <div className="modal_head">
                        <h4>Cancellation & Refund Policy</h4>
                        <div className="close_sec">
                            <a onClick={closeModal}><i className="fa-solid fa-xmark"></i></a>
                        </div>
                    </div>
                    <div className="modal_body">
                        <div className="body_inner">
                            <li>
                                <b>This cancellation and refund policy outlines how you can cancel or seek a refund for a ticket or service  that you have purchased through the Platform. Under this policy:</b>
                            </li>
                            <li>
                                <h5>1. Ticket Cancellations</h5>
                                <span>1.1 Cancellation Requests:</span>
                                <p><i className="fa-solid fa-circle-dot"></i>Cancellations will only be considered if the request is made before 6 Hours of start of the show and no cancellation or refund will be available/given after that. The refund amount will only be base price of the ticket and not the charges, fees, duties, taxes, levies applied to the base ticket price. Further the cancellation depends on the theater which user books from as some theaters have a strict policy of non-cancellation of tickets and it will be clearly mentioned while booking for the user, in that case the above mentioned condition do not apply and cancellation can’t be processed.</p>
                            </li>
                            <li>
                                <h5>2. Refunds</h5>
                                <span>2.1 Refund Approval:</span>
                                <p><i className="fa-solid fa-circle-dot"></i>In case of any refunds approved by our team, the process will be initiated within 15 to 20 days of the approval decision. Refunds will be processed within 15 to 20 days to the original method of payment used during the purchase. Please note that charges, fees, duties, taxes, levies applied to the ticket are non-refundable.</p>
                            </li>
                            <li>
                                <h5>3. Contact Information</h5>
                                <p>If you have any questions about our cancellation and refund policy, please contact us:</p>
                                <p>
                                    <i className="fa-solid fa-circle-dot"></i>
                                    <span>Email :</span>
                                    <a href="mailto: ticketbayind@gmail.com">ticketbayind@gmail.com</a>
                                </p>
                                <p>
                                    <i className="fa-solid fa-circle-dot"></i>
                                    <span>Phone :</span>
                                    <a href="tel: 9449618559">+91-9449618559</a>
                                </p>
                                <p>
                                    <i className="fa-solid fa-circle-dot"></i>
                                    <span><b>Address :</b> THE MERIDIAN Luxury Hotel, District Stadium Main Road(Kurvangi main road), Dhantaramakki, Chikkamagaluru – 577101, Karnataka, India</span>
                                </p>
                            </li>
                        </div>
                    </div>
                    <div className="modal_btn">
                        <button>Accept</button>
                    </div>
                </div>
            </ReturnPolicyWrapper>
        </>
    );
}

export default ReturnPolicyModal;