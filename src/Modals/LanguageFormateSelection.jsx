import axios from "axios";
import SkeletonLoader from "../Components/Loader/SkeletonLoader";
import { LanguageFormateSelectionWrapper } from "../Styles/ModalStyle";
import { getApiEndpoints } from "../Services/Api/ApiConfig";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const LanguageFormateSelectionPage = ({ showLanguageFormateModal, setShowLanguageFormateModal, movieName, selectedLocation }) => {
    const api = getApiEndpoints();
    const navigate = useNavigate();
    const [isLanguageForamtLoading, setIsLanguageForamtLoading] = useState(false);
    const [languageData, setLanguageData] = useState([]);

    const fetchLanguageFormats = async () => {
        setIsLanguageForamtLoading(true);
        try {
            const response = await axios.get(api.movieLanguageFormats, {
                params: {
                    name: movieName,
                    location: selectedLocation
                },
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                withCredentials: true
            });
            if (response) {
                console.log(response);
                setLanguageData(response?.data.data);
            }
        } catch (error) {
            console.log(error.response?.data.message || error.message);
        } finally {
            setIsLanguageForamtLoading(false);
        }
    }

    useEffect(() => {
        if (showLanguageFormateModal) {
            fetchLanguageFormats();
        }
    }, [showLanguageFormateModal]);

    function closeModal() {
        setShowLanguageFormateModal(false);
    }

    const handleMovieInfoRedirection = () => {
        navigate(`/movie-info?${encodeURIComponent(movieName)}`);
    }

    return (
        <>
            <LanguageFormateSelectionWrapper className={showLanguageFormateModal ? 'active' : ''}>
                <div className={`modal_box ${showLanguageFormateModal ? 'active' : ''}`}>
                    <div className="modal_head">
                        <h4>Select Languages and Format</h4>
                        <div className="close_sec">
                            <a onClick={closeModal}><i className="fa-solid fa-xmark"></i></a>
                        </div>
                    </div>
                    <div className="modal_content">
                        <div className="modal_inner">
                            {
                                isLanguageForamtLoading ? (
                                    <div></div>
                                ) : languageData.length > 0 ? (
                                    languageData.map((language, index) =>
                                        <div className="content_box" key={index}>
                                            <div className="language_sec">
                                                <p>{language.language}</p>
                                            </div>
                                            <div className="formats_sec">
                                                {
                                                    language.formats.map((format, i) =>
                                                        <div className="format_box" key={i}>
                                                            <a onClick={handleMovieInfoRedirection}>{format}</a>
                                                        </div>
                                                    )
                                                }
                                            </div>
                                        </div>
                                    )
                                ) : (
                                    <div className="empty_message">
                                        <p>No language & formats available.</p>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>
            </LanguageFormateSelectionWrapper>
        </>
    );
}

export default LanguageFormateSelectionPage;