import { LanguageFormateSelectionWrapper } from "../Styles/ModalStyle";

const LanguageFormateSelectionPage = () => {
    return (
        <>
            <LanguageFormateSelectionWrapper>
                <div className="modal_box">
                    <div className="modal_head">
                        <h4>Select Languages and Format</h4>
                        <div className="close_sec">
                            <a><i className="fa-solid fa-xmark"></i></a>
                        </div>
                    </div>
                    <div className="modal_content">
                        <div className="modal_inner">
                            <div className="content_box">
                                <div className="language_sec">
                                    <p>Hindi</p>
                                </div>
                                <div className="formats_sec">
                                    <div className="format_box">
                                        <a>2D</a>
                                    </div>
                                    <div className="format_box">
                                        <a>2D</a>
                                    </div>
                                    <div className="format_box">
                                        <a>2D</a>
                                    </div>
                                    <div className="format_box">
                                        <a>2D</a>
                                    </div>
                                </div>
                            </div>
                            <div className="content_box">
                                <div className="language_sec">
                                    <p>Hindi</p>
                                </div>
                                <div className="formats_sec">
                                    <div className="format_box">
                                        <a>2D</a>
                                    </div>
                                    <div className="format_box">
                                        <a>2D</a>
                                    </div>
                                    <div className="format_box">
                                        <a>2D</a>
                                    </div>
                                    <div className="format_box">
                                        <a>2D</a>
                                    </div>
                                </div>
                            </div>
                            <div className="content_box">
                                <div className="language_sec">
                                    <p>Hindi</p>
                                </div>
                                <div className="formats_sec">
                                    <div className="format_box">
                                        <a>2D</a>
                                    </div>
                                    <div className="format_box">
                                        <a>2D</a>
                                    </div>
                                    <div className="format_box">
                                        <a>2D</a>
                                    </div>
                                    <div className="format_box">
                                        <a>2D</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </LanguageFormateSelectionWrapper>
        </>
    );
}

export default LanguageFormateSelectionPage;