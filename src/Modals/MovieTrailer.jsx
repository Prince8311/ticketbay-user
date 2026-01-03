import { MovieTrailerWrapper } from "../Styles/ModalStyle";

const MovieTrailerPage = ({showMovieTrailer, setShowMovieTrailer}) => {

    function closeModal() {
        setShowMovieTrailer(false);
    }

    return (
        <>
            <MovieTrailerWrapper className={showMovieTrailer ? 'active' : ''}>
                <div className={`modal_box ${showMovieTrailer ? 'active' : ''}`}>
                    <div className="modal_head">
                        <h4>Kantara: A Legend Chapter-1</h4>
                        <div className="close_sec">
                            <a onClick={closeModal}><i className="fa-solid fa-xmark"></i></a>
                        </div>
                    </div>
                    <div className="modal_video">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/M2OnifMgvps?si=SOnjMtKVC2Qu_yFF" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                </div>
            </MovieTrailerWrapper>
        </>
    );
}

export default MovieTrailerPage;