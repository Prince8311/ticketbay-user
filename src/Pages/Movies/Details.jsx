import { MovieDetailsPageWrapper } from "../../Styles/MovieStyle";

const MovieDetailsPage = () => {
    return(
        <>
            <MovieDetailsPageWrapper>
                <div className="banner_sec">
                    <div className="sec_content">
                        <div className="left_sec">
                            <div className="movie_image">
                                <img src="/images/Movie-1.jpg" alt="" />
                            </div>
                        </div>
                        <div className="right_sec">
                            <div className="right_inner">
                                <h2>Avatar</h2>
                                <li>
                                    <span>25 Oct, 2025</span>
                                    <i className="fa-solid fa-circle"></i>
                                    <span>2hr 20min</span>
                                    <i className="fa-solid fa-circle"></i>
                                    <span>Comedy / Horror</span>
                                </li>
                            </div>
                        </div>
                        <div className="share_sec">
                            <div className="share_inner">
                                <div className="share_btn">
                                    <img src="/images/Movie-1.jpg" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </MovieDetailsPageWrapper>
        </>
    );
}

export default MovieDetailsPage;    