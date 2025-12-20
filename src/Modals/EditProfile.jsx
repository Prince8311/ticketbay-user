import { EditProfileWrapper } from "../Styles/ModalStyle";

const EditProfileModal = ({showEditProfileModal, setShowEditProfileModal}) => {

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
                            <div className="input_box">
                                <input type="text" required />
                                <span>Full Name</span>
                            </div>
                            <div className="input_box">
                                <input type="text" required />
                                <span>Phone No.</span>
                            </div>
                            <div className="input_box">
                                <input type="text" required />
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