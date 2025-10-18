import { useEffect, useState } from "react";
import { HomePageWrapper } from "../Styles/HomePageStyle";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const banners = [
    { id: 1, image: "/images/add1.jpeg" },
    { id: 2, image: "/images/add2.jpeg" },
    { id: 3, image: "/images/add3.jpeg" },
    { id: 4, image: "/images/add1.jpeg" },
];

const HomePage = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % banners.length);
        }, 10000);
        return () => clearInterval(interval);
    }, []);

    return (
        <HomePageWrapper>
            <div className="banner_sec">
                <div className="sec_content">
                    {banners.map((banner, index) => (
                        <div
                            key={banner.id}
                            className={`banner_box ${index === activeIndex ? "active" : ""}`}
                            onClick={() => setActiveIndex(index)}
                        >
                            <div
                                className="banner_inner"
                                style={{
                                    backgroundImage: `url(${banner.image})`,
                                }}
                            >
                                <div className="banner_items">
                                    <div className="items_inner">
                                        <h3>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</h3>
                                        <p>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem beatae
                                            illo ad, at incidunt, sint ipsam quaerat possimus saepe dolorem nam.
                                        </p>
                                        <button>Book Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="booked_ticket_sec">
                <div className="sec_content">
                    <div className="sec_head">
                        <h4>Upcoming <span><b>B</b>ookings</span></h4>
                        <a><span>View All <i className="fa-solid fa-angles-right"></i></span></a>
                    </div>
                    <div className="sec_items">
                        <Swiper
                            slidesPerView={'auto'}
                            spaceBetween={30}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                                <div className="ticket_box">
                                    <div className="box_inner">
                                        <div className="poster_image">
                                            <img src="/images/Movie-1.jpg" alt="" />
                                        </div>
                                        <div className="details_sec">
                                            <div className="details_inner">
                                                <h5>Avatar: The Way of Water</h5>
                                                <ul>
                                                    <p>25 Oct, 2025</p>
                                                    <i className="fa-solid fa-circle"></i>
                                                    <p>8:30 PM</p>
                                                </ul>
                                                <div className="section">
                                                    <span>Class :</span>
                                                    <p>Premium</p>
                                                </div>
                                                <div className="seats">
                                                    <span>Seats :</span>
                                                    <p>A-1, A-2, A-3</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="id_sec">
                                            <p>TKB894571</p>
                                        </div>
                                    </div>
                                    <div className="circle_sec">
                                        <span></span>
                                        <span></span>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="ticket_box">
                                    <div className="box_inner">
                                        <div className="poster_image">
                                            <img src="/images/Movie-1.jpg" alt="" />
                                        </div>
                                        <div className="details_sec">
                                            <div className="details_inner">
                                                <h5>Avatar: The Way of Water</h5>
                                                <ul>
                                                    <p>25 Oct, 2025</p>
                                                    <i className="fa-solid fa-circle"></i>
                                                    <p>8:30 PM</p>
                                                </ul>
                                                <div className="section">
                                                    <span>Class :</span>
                                                    <p>Premium</p>
                                                </div>
                                                <div className="seats">
                                                    <span>Seats :</span>
                                                    <p>A-1, A-2, A-3</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="id_sec">
                                            <p>TKB894571</p>
                                        </div>
                                    </div>
                                    <div className="circle_sec">
                                        <span></span>
                                        <span></span>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="ticket_box">
                                    <div className="box_inner">
                                        <div className="poster_image">
                                            <img src="/images/Movie-1.jpg" alt="" />
                                        </div>
                                        <div className="details_sec">
                                            <div className="details_inner">
                                                <h5>Avatar: The Way of Water</h5>
                                                <ul>
                                                    <p>25 Oct, 2025</p>
                                                    <i className="fa-solid fa-circle"></i>
                                                    <p>8:30 PM</p>
                                                </ul>
                                                <div className="section">
                                                    <span>Class :</span>
                                                    <p>Premium</p>
                                                </div>
                                                <div className="seats">
                                                    <span>Seats :</span>
                                                    <p>A-1, A-2, A-3, B-12, B-13</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="id_sec">
                                            <p>TKB894571</p>
                                        </div>
                                    </div>
                                    <div className="circle_sec">
                                        <span></span>
                                        <span></span>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="ticket_box">
                                    <div className="box_inner">
                                        <div className="poster_image">
                                            <img src="/images/Movie-1.jpg" alt="" />
                                        </div>
                                        <div className="details_sec">
                                            <div className="details_inner">
                                                <h5>Avatar: The Way of Water</h5>
                                                <ul>
                                                    <p>25 Oct, 2025</p>
                                                    <i className="fa-solid fa-circle"></i>
                                                    <p>8:30 PM</p>
                                                </ul>
                                                <div className="section">
                                                    <span>Class :</span>
                                                    <p>Premium</p>
                                                </div>
                                                <div className="seats">
                                                    <span>Seats :</span>
                                                    <p>A-1, A-2, A-3</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="id_sec">
                                            <p>TKB894571</p>
                                        </div>
                                    </div>
                                    <div className="circle_sec">
                                        <span></span>
                                        <span></span>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
            <div className="movie_sec">
                <div className="sec_content">
                    <div className="sec_head">
                        <h4>Recommended <span><b>M</b>ovies</span></h4>
                        <a><span>View All <i className="fa-solid fa-angles-right"></i></span></a>
                    </div>
                    <div className="sec_items">
                        <Swiper
                            slidesPerView={'auto'}
                            spaceBetween={30}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                                <div className="movie_box">
                                    <div className="image_box">
                                        <img src="/images/Movie-1.jpg" alt="" />
                                    </div>
                                    <div className="movie_brief">
                                        <li>
                                            <span><i className="fa-solid fa-star"></i>4.2</span>
                                            <p>[ 5k ratings | 1.5k reviews ]</p>
                                        </li>
                                        <h5>Avatar: The Way of Water</h5>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="movie_box">
                                    <div className="image_box">
                                        <img src="/images/Movie-1.jpg" alt="" />
                                    </div>
                                    <div className="movie_brief">
                                        <li>
                                            <span><i className="fa-solid fa-star"></i>4.2</span>
                                            <p>[ 5k ratings | 1.5k reviews ]</p>
                                        </li>
                                        <h5>Avatar: The Way of Water</h5>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="movie_box">
                                    <div className="image_box">
                                        <img src="/images/Movie-1.jpg" alt="" />
                                    </div>
                                    <div className="movie_brief">
                                        <li>
                                            <span><i className="fa-solid fa-star"></i>4.2</span>
                                            <p>[ 5k ratings | 1.5k reviews ]</p>
                                        </li>
                                        <h5>Avatar: The Way of Water</h5>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="movie_box">
                                    <div className="image_box">
                                        <img src="/images/Movie-1.jpg" alt="" />
                                    </div>
                                    <div className="movie_brief">
                                        <li>
                                            <span><i className="fa-solid fa-star"></i>4.2</span>
                                            <p>[ 5k ratings | 1.5k reviews ]</p>
                                        </li>
                                        <h5>Avatar: The Way of Water</h5>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="movie_box">
                                    <div className="image_box">
                                        <img src="/images/Movie-1.jpg" alt="" />
                                    </div>
                                    <div className="movie_brief">
                                        <li>
                                            <span><i className="fa-solid fa-star"></i>4.2</span>
                                            <p>[ 5k ratings | 1.5k reviews ]</p>
                                        </li>
                                        <h5>Avatar: The Way of Water</h5>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="movie_box">
                                    <div className="image_box">
                                        <img src="/images/Movie-1.jpg" alt="" />
                                    </div>
                                    <div className="movie_brief">
                                        <li>
                                            <span><i className="fa-solid fa-star"></i>4.2</span>
                                            <p>[ 5k ratings | 1.5k reviews ]</p>
                                        </li>
                                        <h5>Avatar: The Way of Water</h5>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="movie_box">
                                    <div className="image_box">
                                        <img src="/images/Movie-1.jpg" alt="" />
                                    </div>
                                    <div className="movie_brief">
                                        <li>
                                            <span><i className="fa-solid fa-star"></i>4.2</span>
                                            <p>[ 5k ratings | 1.5k reviews ]</p>
                                        </li>
                                        <h5>Avatar: The Way of Water</h5>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="movie_box">
                                    <div className="image_box">
                                        <img src="/images/Movie-1.jpg" alt="" />
                                    </div>
                                    <div className="movie_brief">
                                        <li>
                                            <span><i className="fa-solid fa-star"></i>4.2</span>
                                            <p>[ 5k ratings | 1.5k reviews ]</p>
                                        </li>
                                        <h5>Avatar: The Way of Water</h5>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
            <div className="movie_sec upcoming_movies">
                <div className="sec_content">
                    <div className="sec_head">
                        <h4>Upcoming <span><b>M</b>ovies</span></h4>
                        <a><span>View All <i className="fa-solid fa-angles-right"></i></span></a>
                    </div>
                    <div className="sec_items">
                        <Swiper
                            slidesPerView={'auto'}
                            spaceBetween={30}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                                <div className="movie_box">
                                    <div className="image_box">
                                        <img src="/images/Movie-1.jpg" alt="" />
                                    </div>
                                    <div className="movie_brief">
                                        <li>
                                            <span><i className="fa-solid fa-star"></i>4.2</span>
                                            <p>[ 5k ratings | 1.5k reviews ]</p>
                                        </li>
                                        <h5>Avatar: The Way of Water</h5>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="movie_box">
                                    <div className="image_box">
                                        <img src="/images/Movie-1.jpg" alt="" />
                                    </div>
                                    <div className="movie_brief">
                                        <li>
                                            <span><i className="fa-solid fa-star"></i>4.2</span>
                                            <p>[ 5k ratings | 1.5k reviews ]</p>
                                        </li>
                                        <h5>Avatar: The Way of Water</h5>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="movie_box">
                                    <div className="image_box">
                                        <img src="/images/Movie-1.jpg" alt="" />
                                    </div>
                                    <div className="movie_brief">
                                        <li>
                                            <span><i className="fa-solid fa-star"></i>4.2</span>
                                            <p>[ 5k ratings | 1.5k reviews ]</p>
                                        </li>
                                        <h5>Avatar: The Way of Water</h5>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="movie_box">
                                    <div className="image_box">
                                        <img src="/images/Movie-1.jpg" alt="" />
                                    </div>
                                    <div className="movie_brief">
                                        <li>
                                            <span><i className="fa-solid fa-star"></i>4.2</span>
                                            <p>[ 5k ratings | 1.5k reviews ]</p>
                                        </li>
                                        <h5>Avatar: The Way of Water</h5>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="movie_box">
                                    <div className="image_box">
                                        <img src="/images/Movie-1.jpg" alt="" />
                                    </div>
                                    <div className="movie_brief">
                                        <li>
                                            <span><i className="fa-solid fa-star"></i>4.2</span>
                                            <p>[ 5k ratings | 1.5k reviews ]</p>
                                        </li>
                                        <h5>Avatar: The Way of Water</h5>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="movie_box">
                                    <div className="image_box">
                                        <img src="/images/Movie-1.jpg" alt="" />
                                    </div>
                                    <div className="movie_brief">
                                        <li>
                                            <span><i className="fa-solid fa-star"></i>4.2</span>
                                            <p>[ 5k ratings | 1.5k reviews ]</p>
                                        </li>
                                        <h5>Avatar: The Way of Water</h5>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="movie_box">
                                    <div className="image_box">
                                        <img src="/images/Movie-1.jpg" alt="" />
                                    </div>
                                    <div className="movie_brief">
                                        <li>
                                            <span><i className="fa-solid fa-star"></i>4.2</span>
                                            <p>[ 5k ratings | 1.5k reviews ]</p>
                                        </li>
                                        <h5>Avatar: The Way of Water</h5>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="movie_box">
                                    <div className="image_box">
                                        <img src="/images/Movie-1.jpg" alt="" />
                                    </div>
                                    <div className="movie_brief">
                                        <li>
                                            <span><i className="fa-solid fa-star"></i>4.2</span>
                                            <p>[ 5k ratings | 1.5k reviews ]</p>
                                        </li>
                                        <h5>Avatar: The Way of Water</h5>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </HomePageWrapper>
    );
};

export default HomePage;
