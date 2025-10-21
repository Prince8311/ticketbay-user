import { Link } from "react-router-dom";
import { FooterWrapper } from "../Styles/LayoutStyle";

const Footer = () => {
    return (
        <>
            <FooterWrapper>
                <div className="footer_top">
                    <div className="top_inner">
                        <div className="about_box">
                            <p>Ticket Counter is a Fast Growing Platform to make Booking Easy for Moviegoers</p>
                            <span>Download our app:</span>
                            <div className="btn_sec">
                                <a><img src="/images/play_store.png" alt="" /></a>
                            </div>
                        </div>
                        <div className="link_box">
                            <h5>Quick Links</h5>
                            <ul>
                                <li>
                                    <a>
                                        <i className="fa-solid fa-angle-right"></i>
                                        <span>Home</span>
                                    </a>
                                </li>
                                <li>
                                    <a>
                                        <i className="fa-solid fa-angle-right"></i>
                                        <span>Recommended Movies</span>
                                    </a>
                                </li>
                                <li>
                                    <a>
                                        <i className="fa-solid fa-angle-right"></i>
                                        <span>Upcoming Movies</span>
                                    </a>
                                </li>
                                <li>
                                    <a>
                                        <i className="fa-solid fa-angle-right"></i>
                                        <span>Theaters</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="link_box">
                            <h5>Conditions & Policies</h5>
                            <ul>
                                <li>
                                    <a>
                                        <i className="fa-solid fa-angle-right"></i>
                                        <span>Contact Us</span>
                                    </a>
                                </li>
                                <li>
                                    <Link to="terms-and-conditions">
                                        <i className="fa-solid fa-angle-right"></i>
                                        <span>Terms & Conditions</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="privacy-policy">
                                        <i className="fa-solid fa-angle-right"></i>
                                        <span>Privacy Policy</span>
                                    </Link>
                                </li>
                                <li>
                                    <a>
                                        <i className="fa-solid fa-angle-right"></i>
                                        <span>Refund Policy</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="subscribe_box">
                            <h5>Connect with Us</h5>
                            <p>Want to stay updated about our activity?</p>
                            <div className="subscribe_sec">
                                <input type="text" placeholder="Email address" />
                                <button>Subscribe</button>
                            </div>
                            <div className="social_media">
                                <a><i className="fa-brands fa-instagram"></i></a>
                                <a><i class="fa-brands fa-x-twitter"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer_bottom">
                    <p>Copyright © <span>Shetty Ticket Counter Private Limited</span> | All Rights Reserved</p>
                </div>
            </FooterWrapper>
        </>
    );
}

export default Footer;