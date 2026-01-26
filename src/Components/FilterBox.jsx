import { useEffect, useState } from "react";
import { MovieFilterWrapper } from "../Styles/ModalStyle";
import axios from "axios";
import { toast } from "react-toastify";
import { getApiEndpoints } from "../Services/Api/ApiConfig";

const MovieFilters = () => {
    const api = getApiEndpoints();
    const [showLanuageDropdown, setShowLanuageDropdown] = useState(true);
    const [showGenresDropdown, setShowGenresDropdown] = useState(false);
    const [showFormatDropdown, setShowFormatDropdown] = useState(false);
    const [lanuages, setLanuages] = useState([]);
    const [genres, setGenres] = useState([]);
    const [formats, setFormats] = useState([]);

    const fetchLanguages = async () => {
        try {
            const response = await axios.get(api.movieLanuages);
            if (response?.data?.status === 200) {
                console.log(response?.data);
                setLanuages(response?.data?.languages);
            }
        } catch (error) {
            setLanuages([]);
            toast.error(error.response?.data.message || error.message);
        }
    }

    const fetchFormats = async () => {
        try {
            const response = await axios.get(api.movieFormats);
            if (response?.data?.status === 200) {
                setFormats(response?.data?.formats);
            }
        } catch (error) {
            setFormats([]);
            toast.error(error.response?.data.message || error.message);
        }
    }

    const fetchGenres = async () => {
        try {
            const response = await axios.get(api.movieGenres);
            if (response?.data?.status === 200) {
                setGenres(response?.data?.genres);
            }
        } catch (error) {
            setGenres([]);
            toast.error(error.response?.data.message || error.message);
        }
    }

    useEffect(() => {
        fetchLanguages();
        fetchGenres();
        fetchFormats();
    }, []);

    function toggleLanguageDropdown() { 
        setShowLanuageDropdown(!showLanuageDropdown);
    }

    function toggleGenresDropdown() { 
        setShowGenresDropdown(!showGenresDropdown);
    }

    function toggleFormatsDropdown() { 
        setShowFormatDropdown(!showFormatDropdown);
    }

    return (
        <>
            <MovieFilterWrapper>
                <div className="sec_head">
                    <h5>Filters</h5>
                </div>
                <div className="filter_items_sec">
                    <div className="filter_item_box">
                        <div className="box_head">
                            <p>Language</p>
                            <a>Reset</a>
                            <i className={`fa-solid fa-angle-right ${showLanuageDropdown ? 'rotate' : ''}`} onClick={toggleLanguageDropdown}></i>
                        </div>
                        <div className={`box_content ${showLanuageDropdown ? 'active' : ''}`}>
                            <div className="content_inner">
                                {
                                    lanuages.length > 0 ? (
                                        lanuages.map((lanuage, i) =>
                                            <li key={i}>
                                                <input type="checkbox" name="filter-languages" id={`lanuage-${i}`} />
                                                <label htmlFor={`lanuage-${i}`}>{lanuage.name}</label>
                                            </li>
                                        )
                                    ) : (
                                        <div className="empty_box">
                                            <p>No lanuage available</p>
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                    <div className="filter_item_box">
                        <div className="box_head">
                            <p>Genres</p>
                            <a>Reset</a>
                            <i className={`fa-solid fa-angle-right ${showGenresDropdown ? 'rotate' : ''}`} onClick={toggleGenresDropdown}></i>
                        </div>
                        <div className={`box_content ${showGenresDropdown ? 'active' : ''}`}>
                            <div className="content_inner">
                                {
                                    genres.length > 0 ? (
                                        genres.map((genre, i) =>
                                            <li key={i}>
                                                <input type="checkbox" name="filter-genres" id={`genre-${i}`} />
                                                <label htmlFor={`genre-${i}`}>{genre.name}</label>
                                            </li>
                                        )
                                    ) : (
                                        <div className="empty_box">
                                            <p>No genres available</p>
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                    <div className="filter_item_box">
                        <div className="box_head">
                            <p>Formats</p>
                            <a>Reset</a>
                            <i className={`fa-solid fa-angle-right ${showFormatDropdown ? 'rotate' : ''}`} onClick={toggleFormatsDropdown}></i>
                        </div>
                        <div className={`box_content ${showFormatDropdown ? 'active' : ''}`}>
                            <div className="content_inner">
                                {
                                    formats.length > 0 ? (
                                        formats.map((format, i) =>
                                            <li key={i}>
                                                <input type="checkbox" name="filter-formats" id={`format-${i}`} />
                                                <label htmlFor={`format-${i}`}>{format.name}</label>
                                            </li>
                                        )
                                    ) : (
                                        <div className="empty_box">
                                            <p>No formats available</p>
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </MovieFilterWrapper>
        </>
    );
}

export default MovieFilters;