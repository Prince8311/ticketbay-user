import { useState } from "react";
import { PasswordChangeWrapper } from "../Styles/ModalStyle";
import { toast } from "react-toastify";
import { getApiEndpoints } from "../Services/Api/ApiConfig";
import { UserData } from "../Context/PageContext";
import axiosInstance from "../Services/Middleware/AxiosInstance";
import ButtonLoader from "../Components/Loader/ButtonLoader";

const PasswordChangeModal = ({ showChangePasswordModal, setShowChangePasswordModal }) => {
    const api = getApiEndpoints();
    const { userDetails } = UserData();
    const [showCurrentPassword, setShowCurrentPassword] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isFormSubmitting, setIsFormSubmitting] = useState(false);
    const isFormValid = currentPassword.length > 0 && newPassword.length > 0 && confirmPassword.length > 0 && newPassword === confirmPassword;
    const showMismatchWarning = (newPassword.length > 0 && confirmPassword.length > 0 && newPassword !== confirmPassword) || ((newPassword.length > 0 && confirmPassword.length === 0) || (confirmPassword.length > 0 && newPassword.length === 0));

    function closeModal() {
        setShowChangePasswordModal(false);
        setCurrentPassword('');
        setNewPassword('');
        setConfirmPassword('');
        setShowCurrentPassword(false);
        setShowNewPassword(false);
        setShowConfirmPassword(false);
    }

    const handleChangePassword = async (e) => {
        e.preventDefault();
        setIsFormSubmitting(true);
        const payload = {
            userId: userDetails.id,
            currentPassword: currentPassword,
            newPassword: newPassword,
            confirmPassword: confirmPassword
        };
        try {
            const response = await axiosInstance.post(api.changePassword, payload);
            if (response?.data?.status === 200) {
                toast.success(response?.data?.message);
                setCurrentPassword('');
                setNewPassword('');
                setConfirmPassword('');
                setShowChangePasswordModal(false);
            }
        } catch (error) {
            toast.error(error.response?.data.message || error.message);
        } finally {
            setIsFormSubmitting(false);
        }
    }

    return (
        <>
            <PasswordChangeWrapper className={showChangePasswordModal ? 'active' : ''}>
                <div className={`modal_box ${showChangePasswordModal ? 'active' : ''}`}>
                    <div className="modal_head">
                        <h4>Change your Password</h4>
                        <a onClick={closeModal}><i className="fa-solid fa-xmark"></i></a>
                    </div>
                    <div className="modal_form">
                        <form>
                            <div className="input_box">
                                <input type={showCurrentPassword ? 'text' : 'password'} value={currentPassword} onChange={(e) => setCurrentPassword(e.target.value)} required />
                                <span>Current password</span>
                                <a onClick={() => setShowCurrentPassword(!showCurrentPassword)}><i className={`fa-solid ${showCurrentPassword ? 'fa-eye' : 'fa-eye-slash'}`}></i></a>
                            </div>
                            <div className="input_box">
                                <input type={showNewPassword ? 'text' : 'password'} value={newPassword} onChange={(e) => setNewPassword(e.target.value)} required />
                                <span>New Password</span>
                                <a onClick={() => setShowNewPassword(!showNewPassword)}><i className={`fa-solid ${showNewPassword ? 'fa-eye' : 'fa-eye-slash'}`}></i></a>
                            </div>
                            <div className="input_box">
                                <input type={showConfirmPassword ? 'text' : 'password'} value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
                                <span>Confirm Password</span>
                                <a onClick={() => setShowConfirmPassword(!showConfirmPassword)}><i className={`fa-solid ${showConfirmPassword ? 'fa-eye' : 'fa-eye-slash'}`}></i></a>
                            </div>
                            {showMismatchWarning && (
                                <div className="error_message">
                                    <p>Passwords must match</p>
                                </div>
                            )}
                            <div className="form_btn">
                                <button onClick={handleChangePassword} disabled={!isFormValid || isFormSubmitting}>
                                    {
                                        isFormSubmitting ? (
                                            <ButtonLoader />
                                        ) : (
                                            <>Update</>
                                        )
                                    }
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </PasswordChangeWrapper>
        </>
    );
}
export default PasswordChangeModal;