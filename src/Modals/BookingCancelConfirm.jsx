import { useState } from "react";
import { toast } from "react-toastify";
import { BookingCancelConfirmWrapper } from "../Styles/ModalStyle";
import axiosInstance from "../Services/Middleware/AxiosInstance";
import { getApiEndpoints } from "../Services/Api/ApiConfig";
import { UserData } from "../Context/PageContext";
import ButtonLoader from "../Components/Loader/ButtonLoader";

const BookingCancelConfirmModal = ({ showConfirmCancel, setShowConfirmCancel, selectedBookingId, setSelectedBookingId, refundAmount, setRefundAmount, setListReload }) => {
    const api = getApiEndpoints();
    const { userDetails } = UserData();
    const [isButtonLoading, setIsButtonLoading] = useState(false);

    function closeModal() {
        setShowConfirmCancel(false);
        setSelectedBookingId('');
        setRefundAmount(0);
    }

    const refundProceed = async () => {
        setIsButtonLoading(true);
        const payload = {
            userName: userDetails.name,
            bookingId: selectedBookingId,
            refundAmount: refundAmount
        };

        try {
            const response = await axiosInstance.post(api.refundPayment, payload);
            if (response?.data?.status === 200) {
                toast.success(response?.data?.message);
                setListReload(true);
                setShowConfirmCancel(false);
                setSelectedBookingId('');
                setRefundAmount(0);
            }
        } catch (error) {
            console.log(error.response);
            toast.error(error.response?.data.message || error.message);
        } finally {
            setIsButtonLoading(false);
        }
    }

    return (
        <>
            <BookingCancelConfirmWrapper className={showConfirmCancel ? 'active' : ''}>
                <div className={`modal_box ${showConfirmCancel ? 'active' : ''}`}>
                    <div className="modal_body">
                        <div className="icon_box">
                            <img src="/images/warning.gif" alt="" />
                        </div>
                        <div className="box_items">
                            {
                                Number(refundAmount) > 0 ?
                                    <p>If you cancel this booking, you'll get <span>₹{Number(refundAmount).toFixed(2)}</span> in refund. For further details, please go through our <a>refund policy</a>.</p>
                                    :
                                    <p>You'll not get any refund for this cancel, as you're cancelling less that 3hrs before the show. For further details, please go through our <a>refund policy</a>.</p>
                            }
                        </div>
                    </div>
                    <div className="modal_bottom">
                        <button className="cancel_btn" onClick={closeModal}>Cancel</button>
                        <button className={`proceed_btn ${isButtonLoading ? 'disable' : ''}`} onClick={refundProceed} disabled={isButtonLoading}>
                            {
                                isButtonLoading ?
                                    <ButtonLoader />
                                    :
                                    <>Proceed</>
                            }
                        </button>
                    </div>
                </div>
            </BookingCancelConfirmWrapper>
        </>
    );
}

export default BookingCancelConfirmModal;