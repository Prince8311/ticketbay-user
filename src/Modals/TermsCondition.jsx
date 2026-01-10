import { TermsConditionWrapper } from "../Styles/ModalStyle";

const TermsConditionModal = ({ showTermsConditionsModal, setShowTermsConditionsModal, setIsAccepted, setShowCheckoutModal }) => {

    function closeModal() {
        setShowTermsConditionsModal(false);
    }

    const handleAcceptTerms = () => {
        setIsAccepted(true);
        setShowTermsConditionsModal(false);
        setShowCheckoutModal(true);
    }

    return (
        <>
            <TermsConditionWrapper className={showTermsConditionsModal ? 'active' : ''}>
                <div className={`modal_box ${showTermsConditionsModal ? 'active' : ''}`}>
                    <div className="modal_head">
                        <h4>Terms & Conditions</h4>
                        <div className="close_sec">
                            <a onClick={closeModal}><i className="fa-solid fa-xmark"></i></a>
                        </div>
                    </div>
                    <div className="modal_body">
                        <div className="body_inner">
                            <li>
                                <span>1.</span>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure assumenda expedita rerum a, deserunt quam? Veniam eveniet nam voluptatem in corporis commodi odio magnam cum! Recusandae in similique iure cumque.</p>
                            </li>
                            <li>
                                <span>1.</span>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure assumenda expedita rerum a, deserunt quam? Veniam eveniet nam voluptatem in corporis commodi odio magnam cum! Recusandae in similique iure cumque.</p>
                            </li>
                            <li>
                                <span>1.</span>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure assumenda expedita rerum a, deserunt quam? Veniam eveniet nam voluptatem in corporis commodi odio magnam cum! Recusandae in similique iure cumque.</p>
                            </li>
                            <li>
                                <span>1.</span>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure assumenda expedita rerum a, deserunt quam? Veniam eveniet nam voluptatem in corporis commodi odio magnam cum! Recusandae in similique iure cumque.</p>
                            </li>
                            <li>
                                <span>1.</span>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure assumenda expedita rerum a, deserunt quam? Veniam eveniet nam voluptatem in corporis commodi odio magnam cum! Recusandae in similique iure cumque.</p>
                            </li>
                            <li>
                                <span>1.</span>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure assumenda expedita rerum a, deserunt quam? Veniam eveniet nam voluptatem in corporis commodi odio magnam cum! Recusandae in similique iure cumque.</p>
                            </li>
                            <li>
                                <span>1.</span>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure assumenda expedita rerum a, deserunt quam? Veniam eveniet nam voluptatem in corporis commodi odio magnam cum! Recusandae in similique iure cumque.</p>
                            </li>
                            <li>
                                <span>1.</span>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure assumenda expedita rerum a, deserunt quam? Veniam eveniet nam voluptatem in corporis commodi odio magnam cum! Recusandae in similique iure cumque.</p>
                            </li>
                            <li>
                                <span>1.</span>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure assumenda expedita rerum a, deserunt quam? Veniam eveniet nam voluptatem in corporis commodi odio magnam cum! Recusandae in similique iure cumque.</p>
                            </li>
                            <li>
                                <span>1.</span>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure assumenda expedita rerum a, deserunt quam? Veniam eveniet nam voluptatem in corporis commodi odio magnam cum! Recusandae in similique iure cumque.</p>
                            </li>
                        </div>
                    </div>
                    <div className="modal_btn">
                        <button onClick={handleAcceptTerms}>Accept</button>
                    </div>
                </div>
            </TermsConditionWrapper>
        </>
    );
}

export default TermsConditionModal;