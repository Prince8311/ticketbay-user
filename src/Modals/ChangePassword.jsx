import { PasswordChangeWrapper } from "../Styles/ModalStyle";

const PasswordChangeModal = () => {
    return (
        <>
            <PasswordChangeWrapper>
                <div className="modal_box">
                    <div className="modal_head">
                        <h4>Password Change</h4>
                        <a><i className="fa-solid fa-xmark"></i></a>
                    </div>
                    <div className="modal_form">
                        <form>
                            <div className="input_box">
                                <input type="text" required />
                                <span>Current password</span>
                            </div>
                            <div className="input_box">
                                <input type="text" required />
                                <span>New Password</span>
                            </div>
                            <div className="input_box">
                                <input type="text" required />
                                <span>Confirm Password</span>
                            </div>
                            <div className="form_btn">
                                <button>Update</button>
                            </div>
                        </form>
                    </div>
                </div>
            </PasswordChangeWrapper>
        </>
    );
}
export default PasswordChangeModal;