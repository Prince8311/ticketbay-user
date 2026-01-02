import axios from "axios";
import { UserData } from "../Context/PageContext";
import { LocationWrapper } from "../Styles/ModalStyle";
import { toast } from "react-toastify";
import { getApiEndpoints } from "../Services/Api/ApiConfig";
import { useEffect, useState } from "react";
import SkeletonLoader from "../Components/Loader/SkeletonLoader";

const LocationModal = () => {
    const api = getApiEndpoints();
    const { showLocaltionModal, setShowLocaltionModal, selectedLocation, setSelectedLocation } = UserData();
    const [search, setSearch] = useState("");
    const [cities, setCities] = useState([]);
    const [isCitiesLoading, setIsCitiesLoading] = useState(false);

    useEffect(() => {
        if (!selectedLocation) {
            setShowLocaltionModal(true);
        }
    }, []);

    function closeModal() {
        setShowLocaltionModal(false);
    }

    const fetchCities = async (searchText = "") => {
        setIsCitiesLoading(true);
        try {
            const response = await axios.get(api.fetchCities, {
                params: { search: searchText },
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                withCredentials: true
            });
            if (response) {
                console.log(response);
                setCities(response?.data.cities);
            }
        } catch (error) {
            console.log(error.response?.data.message || error.message);
        } finally {
            setIsCitiesLoading(false);
        }
    }

    useEffect(() => {
        if (!showLocaltionModal) return;
        fetchCities(search);
    }, [search, showLocaltionModal]);

    const handleSearchChange = (e) => {
        const value = e.target.value;
        setSearch(value);
    };

    const handleLocationSelect = (city) => {
        setSelectedLocation(city);
        localStorage.setItem("Location", city);
        setShowLocaltionModal(false);
    }

    return (
        <>
            <LocationWrapper className={`${showLocaltionModal ? 'active' : ''} ${selectedLocation ? '' : 'no_location_selected'}`}>
                <div className={`modal_box ${showLocaltionModal ? 'active' : ''}`}>
                    <div className="modal_head">
                        <h4>Current Location</h4>
                        {
                            selectedLocation &&
                            <a onClick={closeModal}><i className="fa-solid fa-xmark"></i></a>
                        }
                    </div>
                    <div className="modal_form">
                        <div className="search_sec">
                            <div className="search_inner">
                                <i className="fa-solid fa-magnifying-glass"></i>
                                <input
                                    type="text"
                                    placeholder="Search for your city..."
                                    value={search}
                                    onChange={handleSearchChange}
                                />
                            </div>
                        </div>
                        <div className="city_section">
                            {
                                isCitiesLoading ? (
                                    Array.from({ length: 4 }).map((_, i) => (
                                        <div className="city_box" key={i}>
                                            <div className="box_inner" style={{ pointerEvents: "none" }}>
                                                <SkeletonLoader width="27px" height="22px" />
                                                <div style={{ marginTop: "10px" }}></div>
                                                <SkeletonLoader width="35px" height="15px" />
                                            </div>
                                        </div>
                                    ))
                                ) : cities.length > 0 ? (
                                    cities.slice(0, 8).map((city, i) =>
                                        <div className="city_box" key={i} onClick={() => handleLocationSelect(city.city)}>
                                            <div className={`box_inner ${selectedLocation === city.city ? 'selected' : ''}`}>
                                                <i className="fa-solid fa-city"></i>
                                                <p>{city.city}</p>
                                            </div>
                                        </div>
                                    )
                                ) : (
                                    <div className="empty_city">
                                        <p>No cities available</p>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>
            </LocationWrapper>
        </>
    );
}

export default LocationModal;