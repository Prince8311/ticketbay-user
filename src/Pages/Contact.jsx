import { ContactUsPageWrapper } from "../Styles/ContactStyle";

const ContactUsPage = () => {
    return (
        <>
            <ContactUsPageWrapper>
                <div className="page_content">
                    <div className="page_items">
                        <div className="left_part">
                            <h3>Shetty Ticket Counter Pvt. Ltd.</h3>
                            <ul>
                                <li>
                                    <i className="fa-solid fa-phone"></i>
                                    <span>Mobile No.:</span>
                                    <p>9449618559</p>
                                </li>
                                <li>
                                    <i className="fa-solid fa-envelope"></i>
                                    <span>Email:</span>
                                    <p>ticketbayind@gmail.com</p>
                                </li>
                            </ul>
                            <div className="address_sec">
                                <div className="address_box">
                                    <h5>Registered Address :</h5>
                                    <p>THE MERIDIAN Luxury Hotel, District Stadium Main Road Kurvangi main road, Dhantaramakki, Chikkamagaluru, Karnataka, PIN: 577101</p>
                                </div>
                                <div className="address_box">
                                    <h5>Operational Address :</h5>
                                    <p>THE MERIDIAN Luxury Hotel, District Stadium Main Road Kurvangi main road, Dhantaramakki, Chikkamagaluru, Karnataka, PIN: 577101</p>
                                </div>
                            </div>
                        </div>
                        <div className="right_part">
                            <div className="sec_head">
                                <h4><span><b>S</b>end</span> <span><b>M</b>essages</span> <span><b></b>To</span> <span><b>U</b>s</span></h4>
                            </div>
                            <div className="sec_form">
                                <div className="input_box type2">
                                    <input type="text" required />
                                    <span>Name</span>
                                </div>
                                <div className="input_box type2">
                                    <input type="text" required />
                                    <span>Contact No.</span>
                                </div>
                                <div className="input_box type2">
                                    <input type="text" required />
                                    <span>Email</span>
                                </div>
                                <div className="input_box type2">
                                    <input type="text" required />
                                    <span>Subject</span>
                                </div>
                                <div className="input_box type1">
                                    <textarea required></textarea>
                                    <span>Message</span>
                                </div>
                                <div className="form_btn">
                                    <button>Send <i className="fa-solid fa-paper-plane"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </ContactUsPageWrapper>
        </>
    );
}

export default ContactUsPage;