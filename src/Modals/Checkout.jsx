import { CheckoutWrapper } from "../Styles/ModalStyle";

const CheckoutModal = () => {
    return(
        <>
            <CheckoutWrapper>
                <div className="modal_inner">
                    <div className="modal_head">
                        <h3>My Checkout</h3>
                        <a><i className="fa-solid fa-arrow-right-long"></i></a>
                    </div>
                    <div className="modal_body">
                        <div className="body_inner"></div>
                    </div>
                    <div className="modal_btn">
                        <button>Pay Now</button>
                    </div>
                </div>
            </CheckoutWrapper>
        </>
    );
}

export default CheckoutModal;