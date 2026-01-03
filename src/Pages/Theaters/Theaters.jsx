import { useEffect, useState } from "react";
import { TheaterListWrapper } from "../../Styles/TheaterStyle";
import { getApiEndpoints } from "../../Services/Api/ApiConfig";
import axios from "axios";
import SkeletonLoader from "../../Components/Loader/SkeletonLoader";
import { UserData } from "../../Context/PageContext";

const TheaterListPage = () => {
    const api = getApiEndpoints();
    const { selectedLocation } = UserData();
    const [isTheaterLoading, setIsTheaterLoading] = useState(false);
    const [theaters, setTheaters] = useState([]);

    const fetchTheaters = async () => {
        setIsTheaterLoading(true);
        try {
            const response = await axios.get(api.fetchTheaters, {
                params: {
                    page: 1,
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
                setTheaters(response?.data.theaters || []);
            }
        } catch (error) {
            console.log(error.response?.data.message || error.message);
        } finally {
            setIsTheaterLoading(false);
        }
    }

    useEffect(() => {
        fetchTheaters();
    }, [selectedLocation]);

    return (
        <>
            <TheaterListWrapper>
                <div className="page_content">
                    <div className="page_head">
                        <h3>Movie <span><b>T</b>heaters</span></h3>
                    </div>
                    <div className="page_items">
                        {
                            isTheaterLoading ? (
                                Array.from({ length: 8 }).map((_, i) => (
                                    <div className="theater_box">
                                        <div className="box_inner">
                                            <SkeletonLoader width="95px" height="85px" />
                                            <SkeletonLoader width="100%" height="15px" margin="8px 0 0 0" />
                                        </div>
                                    </div>
                                ))
                            ) : theaters.length > 0 ? (
                                theaters.map((theater, i) =>
                                    <div className="theater_box" key={i}>
                                        <div className="box_inner">
                                            <img src="/images/theater.png" alt="" />
                                            <p>{theater.name}</p>
                                        </div>
                                    </div>
                                )
                            ) : (
                                <div className="empty_box">
                                    <p>No theaters available</p>
                                </div>
                            )
                        }
                    </div>
                </div>
            </TheaterListWrapper>
        </>
    );
}

export default TheaterListPage;