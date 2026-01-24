import { useEffect, useState } from "react";
import { EditProfileWrapper } from "../Styles/ModalStyle";
import OTPInput from "react-otp-input";
import { getApiEndpoints, profileImageURL } from "../Services/Api/ApiConfig";
import { toast } from "react-toastify";
import axios from "axios";
import { UserData } from "../Context/PageContext";

const EditProfileModal = ({ showEditProfileModal, setShowEditProfileModal }) => {
    const { userDetails } = UserData();
    const [selectedFile, setSelectedFile] = useState(null);
    const [preview, setPreview] = useState(null);
    const [initialForm, setInitialForm] = useState(null);
    const [isDirty, setIsDirty] = useState(false);
    const [form, setForm] = useState({
        name: '',
        phone: '',
        email: ''
    });
    const [showOtpField, setShowOtpField] = useState(false);
    const [otp, setOtp] = useState('');
    const [emailVerified, setEmailVerified] = useState(false);
    const isEmailChanged = initialForm && form.email !== initialForm.email;

    useEffect(() => {
        if (!showEditProfileModal || !userDetails) return;

        const initialData = {
            name: userDetails.name || '',
            phone: userDetails.phone || '',
            email: userDetails.email || ''
        };

        setForm(initialData);
        setInitialForm(initialData);

        if (userDetails.image) {
            setPreview(`${profileImageURL}/${userDetails.image}`);
        }
    }, [showEditProfileModal, userDetails]);

    useEffect(() => {
        if (!initialForm) return;

        const isAnythingChanged =
            form.name !== initialForm.name ||
            form.phone !== initialForm.phone ||
            form.email !== initialForm.email ||
            selectedFile !== null;

        const isEmailBlocking =
            isEmailChanged && !emailVerified;

        setIsDirty(isAnythingChanged && !isEmailBlocking);
    }, [form, selectedFile, initialForm, emailVerified]);

    function closeModal() {
        setShowEditProfileModal(false);
        setSelectedFile(null);
    }

    // --------------------------------------------
    // FILE HANDLERS (PROFILE IMAGE)
    // --------------------------------------------
    function handleFileSelect() {
        document.getElementById('profile_image').click();
    };

    const handleFile = (evt) => {
        const file = evt.target.files[0];
        setSelectedFile(file);

        const reader = new FileReader();
        reader.onloadend = () => {
            setPreview(reader.result);
        }
        reader.readAsDataURL(file);
    };

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
                                    <img src={preview ? preview : '/images/profile-image.png'} alt="" />
                                </div>
                                <input type="file" name="profile_image" id="profile_image" onChange={handleFile} accept="image/jpg, image/jpeg, image/png" required />
                                <a onClick={handleFileSelect}><i className="fa-solid fa-camera"></i></a>
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
                            {
                                isEmailChanged && (
                                    <div className="verify_sec">
                                        <a>Verify Current Email</a>
                                    </div>
                                )
                            }
                            {
                                showOtpField && (
                                    <div className="otp_input_sec">
                                        <p>We have send a 6 digit otp to <span>sourishmondal.vizac@gmail.com</span></p>
                                        <OTPInput
                                            value={otp}
                                            onChange={setOtp}
                                            numInputs={6}
                                            renderInput={(props) => <input {...props} inputMode="numeric" pattern="[0-9]*" required />}
                                        />
                                    </div>
                                )
                            }
                            <div className="form_btn">
                                <button disabled={!isDirty}>Update</button>
                            </div>
                        </form>
                    </div>
                </div>
            </EditProfileWrapper>
        </>
    );
}

export default EditProfileModal;