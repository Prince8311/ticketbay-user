import { ProfilePageWrapper } from "../Styles/ProfileStyle";

const ProfilePage = () => {
    return (
        <>
            <ProfilePageWrapper>
                <div className="page_content">
                    <div className="profile_image_sec">
                        <div className="image_box">
                            <div className="box_inner">
                                <img src="/images/profile-image.png" alt="" />
                            </div>
                            <a><i className="fa-solid fa-camera"></i></a>
                        </div>
                    </div>
                    <div className="form_sec">
                        <div className="sec_head">
                            <h4><span><b>B</b>asic</span> <span><b>D</b>etails</span></h4>
                        </div>
                        <div className="form_inner">
                            <div className="input_box">
                                <input type="text" required />
                                <span>Name</span>
                                <div className="not_editable"></div>
                                <a>Edit</a>
                            </div>
                            <div className="input_box">
                                <input type="text" required />
                                <span>Email</span>
                                <div className="not_editable"></div>
                                <a>Edit</a>
                            </div>
                            <div className="input_box">
                                <input type="text" required />
                                <span>Contact No.</span>
                                <div className="not_editable"></div>
                                <a>Edit</a>
                            </div>
                        </div>
                    </div>
                    <div className="form_sec">
                        <div className="sec_head">
                            <h4><span><b>C</b>hange</span> <span><b>P</b>assword</span></h4>
                        </div>
                        <div className="form_inner">
                            <div className="password_input_box">
                                <input type="text" required />
                                <span>Current Password</span>
                                <a><i className="fa-solid fa-eye-slash"></i></a>
                            </div>
                            <div className="password_input_box">
                                <input type="text" required />
                                <span>New Password</span>
                                <a><i className="fa-solid fa-eye-slash"></i></a>
                            </div>
                            <div className="password_input_box">
                                <input type="text" required />
                                <span>Confirm Password</span>
                                <a><i className="fa-solid fa-eye-slash"></i></a>
                            </div>
                            <div className="form_btn">
                                <button>Update</button>
                            </div>
                        </div>
                    </div>
                </div>
            </ProfilePageWrapper>
        </>
    );
}

export default ProfilePage;