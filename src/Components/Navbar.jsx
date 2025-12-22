import { useEffect, useState } from "react";
import { NavbarWrapper } from "../Styles/LayoutStyle";
import { NavLink, useNavigate } from "react-router-dom";
import { UserData } from "../Context/PageContext";

const Navbar = () => {
    const navigate = useNavigate();
    const { setShowLocaltionModal } = UserData();
    const words = ["movie name ...", "theater name ..."];
    const [wordIndex, setWordIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(0);
    const [deleting, setDeleting] = useState(false);
    const [profileDropdown, setProfileDropdown] = useState(false);

    useEffect(() => {
        const typingSpeed = deleting ? 50 : 120;
        const word = words[wordIndex];

        const timeout = setTimeout(() => {
            if (!deleting && subIndex < word.length) {
                setSubIndex(subIndex + 1);
            } else if (deleting && subIndex > 0) {
                setSubIndex(subIndex - 1);
            } else if (!deleting && subIndex === word.length) {
                setTimeout(() => setDeleting(true), 2000);
            } else if (deleting && subIndex === 0) {
                setDeleting(false);
                setWordIndex((wordIndex + 1) % words.length);
            }
        }, typingSpeed);

        return () => clearTimeout(timeout);
    }, [subIndex, deleting, wordIndex]);

    function openProfileDropdown() {
        setProfileDropdown(!profileDropdown);
    }

    const pageRedirection = (link) => {
        navigate(link);
        setProfileDropdown(false);
    }

    function openLocationModal() { 
        setShowLocaltionModal(true);
    }

    return (
        <NavbarWrapper>
            <div className="nav_inner">
                <div className="top_part">
                    <div className="logo">
                        <img src="/images/Logo.png" alt="Logo" />
                    </div>

                    <div className="search_sec">
                        <i className="fa-solid fa-magnifying-glass"></i>
                        <input
                            type="text"
                            placeholder={`Search by ${words[wordIndex].substring(0, subIndex)}`}
                        />
                    </div>

                    <div className="location_sec" onClick={openLocationModal}>
                        <i className="fa-solid fa-location-dot"></i>
                        <p>Select your location</p>
                        <i className="fa-solid fa-angle-down"></i>
                    </div>
                    <div className="auth_sec">
                        {/* <div className="auth_btn">
                            <Link to="/auth">Sign In/Up</Link>
                        </div> */}

                        <div className="profile">
                            <div className="profile_btn" onClick={openProfileDropdown}>
                                <img src="/images/profile-image.png" alt="" />
                                <p>Sourish Mondal</p>
                                <i className={`fa-solid fa-angle-down ${profileDropdown ? 'active' : ''}`}></i>
                            </div>
                            <div className={`profile_dropdown ${profileDropdown ? 'active' : ''}`}>
                                <div className="dropdown_inner">
                                    <ul>
                                        <a onClick={() => pageRedirection("/profile")}>
                                            <i className="fa-solid fa-circle-user"></i>
                                            <span>My Profile</span>
                                        </a>
                                        <a onClick={() => pageRedirection("/bookings")}>
                                            <i className="fa-solid fa-list-ol"></i>
                                            <span>My Booking List</span>
                                        </a>
                                        <a>
                                            <i className="fa-solid fa-right-from-bracket"></i>
                                            <span>Sign Out</span>
                                        </a>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bottom_part">
                    <div className="nav_items">
                        <li><NavLink to="/home">Home</NavLink></li>
                        <li><NavLink to="/recommended-movies">Movies</NavLink></li>
                        <li><NavLink to="/theaters">Theaters</NavLink></li>
                        <li><NavLink to="/contact-us">Contact us</NavLink></li>
                    </div>
                </div>
            </div>
        </NavbarWrapper>
    );
};

export default Navbar;
