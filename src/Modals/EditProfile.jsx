import { useEffect, useState } from "react";
import { EditProfileWrapper } from "../Styles/ModalStyle";
import { getApiEndpoints, profileImageURL } from "../Services/Api/ApiConfig";
import { toast } from "react-toastify";
import axios from "axios";
import { UserData } from "../Context/PageContext";

const EditProfileModal = ({ showEditProfileModal, setShowEditProfileModal }) => {
    const { userDetails } = UserData();
    const [form, setForm] = useState({
        name: '',
        phone: '',
        email: ''
    });

    useEffect(() => {
        if (!showEditProfileModal || !userDetails) return;

        setForm({
            name: userDetails.name || '',
            phone: userDetails.phone || '',
            email: userDetails.email || ''
        });
    }, [showEditProfileModal, userDetails]);

    function closeModal() {
        setShowEditProfileModal(false);
    }

    return (
        <>
            <EditProfileWrapper className={showEditProfileModal ? 'active' : ''}>
                <div className={`modal_box ${showEditProfileModal ? 'active' : ''}`}>
                    <div className="modal_head">
                        <h4>Update Profile</h4>
                        <a onClick={closeModal}><i className="fa-solid fa-xmark"></i></a>
                    </div>
                    <div className="modal_form">
                        <form>
                            <div className="image_box">
                                <div className="box_inner">
                                    <img src="/images/profile-image.png" alt="" />
                                </div>
                                <a><i className="fa-solid fa-camera"></i></a>
                            </div>
                            <div className="input_box">
                                <input type="text" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} required />
                                <span>Full Name</span>
                            </div>
                            <div className="input_box">
                                <input type="text" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} required />
                                <span>Phone No.</span>
                            </div>
                            <div className="input_box">
                                <input type="text" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} required />
                                <span>Email</span>
                            </div>
                            <div className="form_btn">
                                <button>Update</button>
                            </div>
                        </form>
                    </div>
                </div>
            </EditProfileWrapper>
        </>
    );
}

export default EditProfileModal;