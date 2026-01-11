import { TermsConditionWrapper } from "../Styles/ModalStyle";

const TermsConditionModal = () => {
    return (
        <>
            <TermsConditionWrapper>
                <div className="modal_box">
                    <div className="modal_head">
                        <h4>Terms & Conditions</h4>
                        <div className="close_sec">
                            <a><i className="fa-solid fa-xmark"></i></a>
                        </div>
                    </div>
                    <div className="modal_body">
                        <div className="body_inner">
                            <li>
                                <span>1.</span>
                                <p>Please pick up your tickets at least 20 mins before showtime to avoid rush at the counter.</p>
                            </li>
                            <li>
                                <span>2.</span>
                                <p>Outside food & beverages are not allowed inside the cinema premises.</p>
                            </li>
                            <li>
                                <span>3.</span>
                                <p>Ticket is compulsory for children of 3 years & above.</p>
                            </li>
                            <li>
                                <span>4.</span>
                                <p>Ticket for <b>'A'</b> rated movie should not be purchased for people under 18 years of age. There won't be a refund for tickets booked in such cases.</p>
                            </li>
                            <li>
                                <span>5.</span>
                                <p>Handbags, Laptops/Tabs, cameras and all other electronic items are not allowed inside cinema premises.</p>
                            </li>
                            <li>
                                <span>6.</span>
                                <p>Smoking is strictly not permitted inside the cinema premises. Cigarettes/lighters/matchsticks/Gutkha/Pan masala etc. will not be allowed.</p>
                            </li>
                            <li>
                                <span>7.</span>
                                <p>Cinema reserves the Right of Admission.</p>
                            </li>
                            <li>
                                <span>8.</span>
                                <p>People under the influence of Alcohol/Drugs will not be allowed inside the cinema premise.</p>
                            </li>
                            <li>
                                <span>9.</span>
                                <p>Tickets once purchased cannot be exchanged or adjusted/transferred for any other shows.</p>
                            </li>
                            <li>
                                <span>10.</span>
                                <p>Screenshots or forwarded messages will not be accepted during the entry at the Cinema.</p>
                            </li>
                        </div>
                    </div>
                    <div className="modal_btn">
                        <button>Accept</button>
                    </div>
                </div>
            </TermsConditionWrapper>
        </>
    );
}

export default TermsConditionModal;