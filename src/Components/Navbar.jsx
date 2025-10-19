import { useEffect, useState } from "react";
import { NavbarWrapper } from "../Styles/LayoutStyle";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    const words = ["movie name ...", "theater name ..."];

    const [wordIndex, setWordIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(0);
    const [deleting, setDeleting] = useState(false);

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

                    <div className="location_sec">
                        <i className="fa-solid fa-location-dot"></i>
                        <p>Select your location</p>
                        <i className="fa-solid fa-angle-down"></i>
                    </div>
                    <div className="auth_sec">
                        <div className="auth_btn">
                            <Link to="/auth">Sign In/Up</Link>
                        </div>
                    </div>
                </div>

                <div className="bottom_part">
                    <div className="nav_items">
                        <li><NavLink to="/home">Home</NavLink></li>
                        <li><NavLink to="/recommended-movies">Recommended Movies</NavLink></li>
                        <li><NavLink to="/upcoming-movies">Upcoming Movies</NavLink></li>
                        <li><NavLink to="/theaters">Theaters</NavLink></li>
                        <li><NavLink to="/contact-us">Contact us</NavLink></li>
                    </div>
                </div>
            </div>
        </NavbarWrapper>
    );
};

export default Navbar;
