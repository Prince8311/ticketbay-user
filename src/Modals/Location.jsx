import { UserData } from "../Context/PageContext";
import { LocationWrapper } from "../Styles/ModalStyle";

const LocationModal = () => {
    const { showLocaltionModal, setShowLocaltionModal } = UserData();

    function closeModal() { 
        setShowLocaltionModal(false);
    }

    return (
        <>
            <LocationWrapper className={showLocaltionModal ? 'active' : ''}>
                <div className={`modal_box ${showLocaltionModal ? 'active' : ''}`}>
                    <div className="modal_head">
                        <h4>Current Location</h4>
                        <a onClick={closeModal}><i className="fa-solid fa-xmark"></i></a>
                    </div>
                    <div className="modal_form">
                        <div className="search_sec">
                            <div className="search_inner">
                                <i className="fa-solid fa-magnifying-glass"></i>
                                <input
                                    type="text"
                                    placeholder="Search for your city..."
                                />
                            </div>
                        </div>
                        <div className="city_section">
                            <div className="city_box">
                                <div className="box_inner">
                                    <i className="fa-solid fa-city"></i>
                                    <p>Kolkata</p>
                                </div>
                            </div>
                            <div className="city_box">
                                <div className="box_inner">
                                    <i className="fa-solid fa-city"></i>
                                    <p>Kolkata</p>
                                </div>
                            </div>
                            <div className="city_box">
                                <div className="box_inner">
                                    <i className="fa-solid fa-city"></i>
                                    <p>Kolkata</p>
                                </div>
                            </div>
                            <div className="city_box">
                                <div className="box_inner">
                                    <i className="fa-solid fa-city"></i>
                                    <p>Kolkata</p>
                                </div>
                            </div>
                            <div className="city_box">
                                <div className="box_inner">
                                    <i className="fa-solid fa-city"></i>
                                    <p>Kolkata</p>
                                </div>
                            </div>
                            <div className="city_box">
                                <div className="box_inner">
                                    <i className="fa-solid fa-city"></i>
                                    <p>Kolkata</p>
                                </div>
                            </div>
                            <div className="city_box">
                                <div className="box_inner">
                                    <i className="fa-solid fa-city"></i>
                                    <p>Kolkata</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </LocationWrapper>
        </>
    );
}

export default LocationModal;