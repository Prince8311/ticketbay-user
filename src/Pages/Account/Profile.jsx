import { useEffect, useState } from "react";
import EditProfileModal from "../../Modals/EditProfile";
import { ProfilePageWrapper } from "../../Styles/ProfileStyle";
import { UserData } from "../../Context/PageContext";
import axios from "axios";
import { toast } from "react-toastify";
import { getApiEndpoints, profileImageURL } from "../../Services/Api/ApiConfig";
import SkeletonLoader from "../../Components/Loader/SkeletonLoader";

const ProfilePage = () => {
    const { userDetails, isDetailsLoading } = UserData();
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
                        {
                            isDetailsLoading ? (
                                <SkeletonLoader width="100px" height="100px" />
                            ) : (
                                <div className="image_box">
                                    <div className="box_inner">
                                        <img src={userDetails.image ? `${profileImageURL}/${userDetails.image}` : '/images/profile-image.png'} alt="" />
                                    </div>
                                </div>
                            )
                        }
                        <div className="profile_content">
                            {
                                isDetailsLoading ? (
                                    <>
                                        <SkeletonLoader width="300px" height="22px" />
                                        <SkeletonLoader width="100px" height="16px" margin="7px 0 0 0" />
                                        <SkeletonLoader width="200px" height="16px" margin="5px 0 0 0" />
                                    </>
                                ) : (
                                    <>
                                        <h6>{userDetails.name}</h6>
                                        <p>{userDetails.phone}</p>
                                        <span>{userDetails.email}</span>
                                    </>
                                )
                            }
                        </div>
                        <div className="edit_btn_sec">
                            <a onClick={handleOpenEditProfileModal}><i className="fa-solid fa-pen-to-square"></i></a>
                        </div>
                    </div>
                    <div className="ticket_details_sec">
                        <div className="ticket_box">
                            <div className="ticket_inner">
                                <div className="icon">
                                    <i className="fa-solid fa-ticket"></i>
                                </div>
                                <h4>Ticket Booked</h4>
                                <p className="book">1000</p>
                            </div>
                        </div>
                        <div className="ticket_box">
                            <div className="ticket_inner">
                                <div className="icon">
                                    <i className="fa-solid fa-ban"></i>
                                </div>
                                <h4>Ticket Cancelled</h4>
                                <p className="cancell">1000</p>
                            </div>
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
                            <div className="btn_sec">
                                <button>
                                    <i className="fa-solid fa-trash"></i>
                                    <p>Delete My Account</p>
                                    <i className="fa-solid fa-angle-right"></i>
                                </button>
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