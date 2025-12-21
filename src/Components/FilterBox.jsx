import { MovieFilterWrapper } from "../Styles/ModalStyle";

const MovieFilters = () => {
    return (
        <>
            <MovieFilterWrapper>
                <div className="sec_head">
                    <h5>Filters</h5>
                </div>
                <div className="filter_items_sec">
                    <div className="filter_item_box">
                        <div className="box_head">
                            <p>Language</p>
                            <a>Reset</a>
                            <i className="fa-solid fa-angle-right"></i>
                        </div>
                        <div className="box_content">
                            <li>
                                <input type="checkbox" name="" id="" />
                                <label htmlFor="">Hindi</label>
                            </li>
                            <li>
                                <input type="checkbox" name="" id="" />
                                <label htmlFor="">Hindi</label>
                            </li>
                            <li>
                                <input type="checkbox" name="" id="" />
                                <label htmlFor="">Hindi</label>
                            </li>
                            <li>
                                <input type="checkbox" name="" id="" />
                                <label htmlFor="">Hindi</label>
                            </li>
                        </div>
                    </div>
                    <div className="filter_item_box">
                        <div className="box_head">
                            <p>Genres</p>
                            <a>Reset</a>
                            <i className="fa-solid fa-angle-right"></i>
                        </div>
                        <div className="box_content">
                            <li>
                                <input type="checkbox" name="" id="" />
                                <label htmlFor="">Hindi</label>
                            </li>
                            <li>
                                <input type="checkbox" name="" id="" />
                                <label htmlFor="">Hindi</label>
                            </li>
                            <li>
                                <input type="checkbox" name="" id="" />
                                <label htmlFor="">Hindi</label>
                            </li>
                            <li>
                                <input type="checkbox" name="" id="" />
                                <label htmlFor="">Hindi</label>
                            </li>
                        </div>
                    </div>
                    <div className="filter_item_box">
                        <div className="box_head">
                            <p>Formats</p>
                            <a>Reset</a>
                            <i className="fa-solid fa-angle-right"></i>
                        </div>
                        <div className="box_content">
                            <li>
                                <input type="checkbox" name="" id="" />
                                <label htmlFor="">Hindi</label>
                            </li>
                            <li>
                                <input type="checkbox" name="" id="" />
                                <label htmlFor="">Hindi</label>
                            </li>
                            <li>
                                <input type="checkbox" name="" id="" />
                                <label htmlFor="">Hindi</label>
                            </li>
                            <li>
                                <input type="checkbox" name="" id="" />
                                <label htmlFor="">Hindi</label>
                            </li>
                        </div>
                    </div>
                </div>
            </MovieFilterWrapper>
        </>
    );
}

export default MovieFilters;