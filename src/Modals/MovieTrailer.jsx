import { MovieTrailerWrapper } from "../Styles/ModalStyle";

const MovieTrailerPage = ({showMovieTrailer, setShowMovieTrailer, trailer, setTrailer}) => {

    function closeModal() {
        setTrailer('');
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
                    <div className="modal_video" dangerouslySetInnerHTML={{ __html: trailer }}></div>
                </div>
            </MovieTrailerWrapper>
        </>
    );
}

export default MovieTrailerPage;