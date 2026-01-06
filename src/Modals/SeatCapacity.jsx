import { SeatCapacityWrapper } from "../Styles/ModalStyle";

const SeatCapacityModal = () => {
    return (
        <>
            <SeatCapacityWrapper>
                <div className="modal_box">
                    <div className="modal_head">
                        <h4>How many seats you want to Book ?</h4>
                    </div>
                    <div className="modal_items">
                        <div className="middle_part">
                            <div className="icon_box">
                                <img src="images/cycle-icon.jpg" alt="Selected Seat" />
                            </div>
                            <div className="selection_btn_sec">
                                <a>1</a>
                                <a>2</a>
                                <a>3</a>
                                <a>4</a>
                                <a>5</a>
                                <a>6</a>
                                <a>7</a>
                                <a>8</a>
                                <a>9</a>
                                <a>10</a>
                            </div>
                        </div>
                        <div className="section_part">
                            <div className="part_inner">
                                <div className="section_btn">
                                    <div className="btn_inner">
                                        <h5>Balcony</h5>
                                        <b>-</b>
                                        <span><i className="fa-solid fa-indian-rupee-sign"></i> 200</span>
                                        <p>60 Seats Available</p>
                                    </div>
                                </div>
                                <div className="section_btn">
                                    <div className="btn_inner">
                                        <h5>Balcony</h5>
                                        <b>-</b>
                                        <span><i className="fa-solid fa-indian-rupee-sign"></i> 200</span>
                                        <p>60 Seats Available</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bottom_part">
                            <button>Select Seats</button>
                        </div>
                    </div>
                </div>
            </SeatCapacityWrapper>
        </>
    );
}

export default SeatCapacityModal;