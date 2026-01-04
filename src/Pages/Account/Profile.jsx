import { useEffect, useState } from "react";
import EditProfileModal from "../../Modals/EditProfile";
import { ProfilePageWrapper } from "../../Styles/ProfileStyle";
import { UserData } from "../../Context/PageContext";
import axios from "axios";
import { toast } from "react-toastify";
import { getApiEndpoints, profileImageURL } from "../../Services/Api/ApiConfig";
import SkeletonLoader from "../../Components/Loader/SkeletonLoader";

const ProfilePage = () => {
    const { userDetails } = UserData();
    const [showEditProfileModal, setShowEditProfileModal] = useState(false);

    useEffect(() => {
        console.log(userDetails);
    }, [userDetails]);
    
    const handleOpenEditProfileModal = () => {
        setShowEditProfileModal(true);
    }

    return (
        <>
            <ProfilePageWrapper>
                <div className="page_content">
                    <div className="user_details_sec">
                        <div className="image_box">
                            <div className="box_inner">
                                <img src={userDetails.image ? `${profileImageURL}/${userDetails.image}` : '/images/profile-image.png'} alt="" />
                            </div>
                        </div>
                        <div className="profile_content">
                            <h6>{userDetails.name}</h6>
                            <p>{userDetails.phone}</p>
                            <span>{userDetails.email}</span>
                        </div>
                        <div className="edit_btn_sec">
                            <a onClick={handleOpenEditProfileModal}><i className="fa-solid fa-pen-to-square"></i></a>
                        </div>
                    </div>
                    <div className="profile_item_sec">
                        <div className="item_box">
                            <div className="item_head">
                                <h4>My Profile</h4>
                            </div>
                            <div className="item_content_sec">
                                <div className="content_box">
                                    <i className="fa-solid fa-lock"></i>
                                    <p>Change Password</p>
                                    <i className="fa-solid fa-angle-right"></i>
                                </div>
                                <div className="content_box">
                                    <i className="fa-solid fa-note-sticky"></i>
                                    <p>My Reviews</p>
                                    <i className="fa-solid fa-angle-right"></i>
                                </div>
                                <div className="content_box">
                                    <i className="fa-solid fa-city"></i>
                                    <p>List Theater</p>
                                    <i className="fa-solid fa-angle-right"></i>
                                </div>
                            </div>
                        </div>
                        <div className="item_box">
                            <div className="item_head">
                                <h4>My Booking List</h4>
                            </div>
                            <div className="item_content_sec">
                                <div className="content_box">
                                    <i className="fa-solid fa-ticket"></i>
                                    <p>Upcoming Bookings</p>
                                    <i className="fa-solid fa-angle-right"></i>
                                </div>
                                <div className="content_box">
                                    <i className="fa-solid fa-ticket-simple"></i>
                                    <p>Previous Bookings</p>
                                    <i className="fa-solid fa-angle-right"></i>
                                </div>
                                <div className="content_box">
                                    <i className="fa-solid fa-ban"></i>
                                    <p>Cancelled Bookings</p>
                                    <i className="fa-solid fa-angle-right"></i>
                                </div>
                            </div>
                        </div>
                        <div className="item_box">
                            <div className="item_head">
                                <h4>Help Center</h4>
                            </div>
                            <div className="item_content_sec">
                                <div className="content_box">
                                    <i className="fa-solid fa-circle-question"></i>
                                    <p>FAQ's</p>
                                    <i className="fa-solid fa-angle-right"></i>
                                </div>
                                <div className="content_box">
                                    <i className="fa-solid fa-headphones"></i>
                                    <p>Contact Us</p>
                                    <i className="fa-solid fa-angle-right"></i>
                                </div>
                            </div>
                        </div>
                        <div className="item_box">
                            <div className="item_head">
                                <h4>Rules & Regulations</h4>
                            </div>
                            <div className="item_content_sec">
                                <div className="content_box">
                                    <i className="fa-solid fa-file"></i>
                                    <p>Terms & Conditions</p>
                                    <i className="fa-solid fa-angle-right"></i>
                                </div>
                                <div className="content_box">
                                    <i className="fa-solid fa-shield-halved"></i>
                                    <p>Privacy Policy</p>
                                    <i className="fa-solid fa-angle-right"></i>
                                </div>
                                <div className="content_box">
                                    <i className="fa-solid fa-comment-dollar"></i>
                                    <p>Cancellation & Refund Policy</p>
                                    <i className="fa-solid fa-angle-right"></i>
                                </div>
                            </div>
                        </div>
                        <div className="item_box">
                            <div className="item_head">
                                <h4>Account</h4>
                            </div>
                            <div className="item_content_sec">
                                <div className="content_box">
                                    <i className="fa-solid fa-trash" style={{ color: "#f00" }}></i>
                                    <p>Delete My Account</p>
                                    <i className="fa-solid fa-angle-right"></i>
                                </div>
                                <div className="content_box">
                                    <i className="fa-solid fa-arrow-right-from-bracket" style={{ color: "#f00" }}></i>
                                    <p>Sign Out</p>
                                    <i className="fa-solid fa-angle-right"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <EditProfileModal
                    showEditProfileModal={showEditProfileModal}
                    setShowEditProfileModal={setShowEditProfileModal}
                />
            </ProfilePageWrapper>
        </>
    );
}

export default ProfilePage;