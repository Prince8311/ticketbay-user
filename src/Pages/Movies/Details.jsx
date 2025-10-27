import { MovieDetailsPageWrapper } from "../../Styles/MovieStyle";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const MovieDetailsPage = () => {
    return (
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
                                <div className="rating_sec">
                                    <h5>Rating: </h5>
                                    <div className="stars">
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star-half-stroke"></i>
                                    </div>
                                    <span>(4.7)</span>
                                    <span className="dot">
                                        <i className="fa-solid fa-circle"></i>
                                    </span>
                                    <p>[ 12,255 users ]</p>
                                </div>
                                <li>
                                    <p>
                                        <a href="">Kanada</a>
                                        <a href="">English</a>
                                    </p>
                                </li>
                                <ul>
                                    <button className="trailer_btn"><span> <i className="fa-regular fa-circle-play"></i> See Trailer</span></button>
                                    <button className="booking_btn"><span> <i className="fa-solid fa-ticket"></i> Book Ticket</span></button>
                                </ul>
                            </div>
                        </div>
                        <div className="share_sec">
                            <div className="share_inner">
                                <div className="share_btn">
                                    <img src="/images/share.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="movie_info_section">
                    <div className="sec_content">
                        <div className="movie_content_box">
                            <div className="box_head">
                                <h4>About the <span><b>M</b>ovie</span></h4>
                            </div>
                            <div className="box_items">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt enim voluptatibus expedita optio eum. Blanditiis magnam est corporis qui repellendus ea dolor, iure sit dolore deleniti quisquam veritatis odio labore rerum excepturi obcaecati fuga modi inventore facilis in numquam. Expedita est quaerat soluta recusandae ea natus voluptatem rerum delectus repudiandae ipsum distinctio sapiente quam nulla earum dolor officiis ex quae nam sit odit, dicta veniam saepe, commodi unde? Tempora voluptates, nemo rerum qui numquam deleniti, repellat at facere consectetur, nulla voluptatum aliquid assumenda optio vero eum nisi fuga nihil quas placeat iusto modi pariatur accusantium? Vero labore voluptatibus, maxime quod repellendus blanditiis enim accusantium, facilis sed veritatis dolorem vel perferendis sequi odio aut omnis voluptates voluptas culpa necessitatibus ex atque quam consectetur expedita. Iure excepturi voluptatem accusantium laborum doloribus nihil eum minus commodi impedit? Excepturi voluptates, eum pariatur sapiente eos possimus, rem aperiam sed expedita quod asperiores reiciendis doloribus ducimus.</p>
                            </div>
                        </div>
                        <div className="movie_content_box">
                            <div className="box_head">
                                <h4>Movie <span><b>C</b>asts</span></h4>
                            </div>
                            <div className="box_items">
                                <div className="item_box">
                                    <div className="box_img">
                                        <img src="/images/Shaneel Gautham.jpg" alt="" />
                                    </div>
                                    <p>Shaneel Gautham</p>
                                </div>
                                <div className="item_box">
                                    <div className="box_img">
                                        <img src="/images/Shaneel Gautham.jpg" alt="" />
                                    </div>
                                    <p>Shaneel Gautham</p>
                                </div>
                                <div className="item_box">
                                    <div className="box_img">
                                        <img src="/images/Shaneel Gautham.jpg" alt="" />
                                    </div>
                                    <p>Shaneel Gautham</p>
                                </div>
                                <div className="item_box">
                                    <div className="box_img">
                                        <img src="/images/Shaneel Gautham.jpg" alt="" />
                                    </div>
                                    <p>Shaneel Gautham</p>
                                </div>
                                <div className="item_box">
                                    <div className="box_img">
                                        <img src="/images/Shaneel Gautham.jpg" alt="" />
                                    </div>
                                    <p>Shaneel Gautham</p>
                                </div>
                                <div className="item_box">
                                    <div className="box_img">
                                        <img src="/images/Shaneel Gautham.jpg" alt="" />
                                    </div>
                                    <p>Shaneel Gautham</p>
                                </div>
                            </div>
                        </div>
                        <div className="movie_content_box">
                            <div className="box_head">
                                <h4>Movie <span><b>C</b>rew</span></h4>
                            </div>
                            <div className="box_items">
                                <div className="item_box">
                                    <div className="box_img">
                                        <img src="/images/Shaneel Gautham.jpg" alt="" />
                                    </div>
                                    <p>Shaneel Gautham</p>
                                </div>
                                <div className="item_box">
                                    <div className="box_img">
                                        <img src="/images/Shaneel Gautham.jpg" alt="" />
                                    </div>
                                    <p>Shaneel Gautham</p>
                                </div>
                                <div className="item_box">
                                    <div className="box_img">
                                        <img src="/images/Shaneel Gautham.jpg" alt="" />
                                    </div>
                                    <p>Shaneel Gautham</p>
                                </div>
                                <div className="item_box">
                                    <div className="box_img">
                                        <img src="/images/Shaneel Gautham.jpg" alt="" />
                                    </div>
                                    <p>Shaneel Gautham</p>
                                </div>
                                <div className="item_box">
                                    <div className="box_img">
                                        <img src="/images/Shaneel Gautham.jpg" alt="" />
                                    </div>
                                    <p>Shaneel Gautham</p>
                                </div>
                                <div className="item_box">
                                    <div className="box_img">
                                        <img src="/images/Shaneel Gautham.jpg" alt="" />
                                    </div>
                                    <p>Shaneel Gautham</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="user_review_section">
                    <div className="section_inner">
                        <div className="sec_head">
                            <h4>Customer <span><b>R</b>eviews</span></h4>
                            <a><span>View All <i className="fa-solid fa-angles-right"></i></span></a>
                        </div>
                        <div className="review_sec">
                            <Swiper
                                slidesPerView={'auto'}
                                spaceBetween={30}
                                className="mySwiper"
                            >
                                <SwiperSlide>
                                    <div className="quote_icon"><i class="fa-solid fa-quote-right"></i></div>
                                    <div className="review_box">
                                        <div className="review_top">
                                            <div className="user_img">
                                                <img src="/images/profile-image.png" alt="" />
                                            </div>
                                            <h3>Sourish Mondal</h3>
                                        </div>
                                        <div className="review_message">
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores placeat voluptas ad et nesciunt, iusto est maiores delectus repudiandae nihil dolorem omnis obcaecati tempora voluptate sed saepe aliquid dolorum. Quibusdam blanditiis</p>
                                        </div>
                                        <div className="review_bottom">
                                            <div className="user_review">
                                                <h4>Rated:</h4>
                                                <span>4/5</span>
                                                <i class="fa-solid fa-star"></i>
                                            </div>
                                            <div className="review_date">
                                                <p>20 May, 2024</p>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="quote_icon"><i class="fa-solid fa-quote-right"></i></div>
                                    <div className="review_box">
                                        <div className="review_top">
                                            <div className="user_img">
                                                <img src="/images/profile-image.png" alt="" />
                                            </div>
                                            <h3>Sourish Mondal</h3>
                                        </div>
                                        <div className="review_message">
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores placeat voluptas ad et nesciunt, iusto est maiores delectus repudiandae nihil dolorem omnis obcaecati tempora voluptate sed saepe aliquid dolorum. Quibusdam blanditiis</p>
                                        </div>
                                        <div className="review_bottom">
                                            <div className="user_review">
                                                <h4>Rated:</h4>
                                                <span>4/5</span>
                                                <i class="fa-solid fa-star"></i>
                                            </div>
                                            <div className="review_date">
                                                <p>20 May, 2024</p>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="quote_icon"><i class="fa-solid fa-quote-right"></i></div>
                                    <div className="review_box">
                                        <div className="review_top">
                                            <div className="user_img">
                                                <img src="/images/profile-image.png" alt="" />
                                            </div>
                                            <h3>Sourish Mondal</h3>
                                        </div>
                                        <div className="review_message">
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores placeat voluptas ad et nesciunt, iusto est maiores delectus repudiandae nihil dolorem omnis obcaecati tempora voluptate sed saepe aliquid dolorum. Quibusdam blanditiis</p>
                                        </div>
                                        <div className="review_bottom">
                                            <div className="user_review">
                                                <h4>Rated:</h4>
                                                <span>4/5</span>
                                                <i class="fa-solid fa-star"></i>
                                            </div>
                                            <div className="review_date">
                                                <p>20 May, 2024</p>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="quote_icon"><i class="fa-solid fa-quote-right"></i></div>
                                    <div className="review_box">
                                        <div className="review_top">
                                            <div className="user_img">
                                                <img src="/images/profile-image.png" alt="" />
                                            </div>
                                            <h3>Sourish Mondal</h3>
                                        </div>
                                        <div className="review_message">
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores placeat voluptas ad et nesciunt, iusto est maiores delectus repudiandae nihil dolorem omnis obcaecati tempora voluptate sed saepe aliquid dolorum. Quibusdam blanditiis</p>
                                        </div>
                                        <div className="review_bottom">
                                            <div className="user_review">
                                                <h4>Rated:</h4>
                                                <span>4/5</span>
                                                <i class="fa-solid fa-star"></i>
                                            </div>
                                            <div className="review_date">
                                                <p>20 May, 2024</p>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="quote_icon"><i class="fa-solid fa-quote-right"></i></div>
                                    <div className="review_box">
                                        <div className="review_top">
                                            <div className="user_img">
                                                <img src="/images/profile-image.png" alt="" />
                                            </div>
                                            <h3>Sourish Mondal</h3>
                                        </div>
                                        <div className="review_message">
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores placeat voluptas ad et nesciunt, iusto est maiores delectus repudiandae nihil dolorem omnis obcaecati tempora voluptate sed saepe aliquid dolorum. Quibusdam blanditiis</p>
                                        </div>
                                        <div className="review_bottom">
                                            <div className="user_review">
                                                <h4>Rated:</h4>
                                                <span>4/5</span>
                                                <i class="fa-solid fa-star"></i>
                                            </div>
                                            <div className="review_date">
                                                <p>20 May, 2024</p>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="quote_icon"><i class="fa-solid fa-quote-right"></i></div>
                                    <div className="review_box">
                                        <div className="review_top">
                                            <div className="user_img">
                                                <img src="/images/profile-image.png" alt="" />
                                            </div>
                                            <h3>Sourish Mondal</h3>
                                        </div>
                                        <div className="review_message">
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores placeat voluptas ad et nesciunt, iusto est maiores delectus repudiandae nihil dolorem omnis obcaecati tempora voluptate sed saepe aliquid dolorum. Quibusdam blanditiis</p>
                                        </div>
                                        <div className="review_bottom">
                                            <div className="user_review">
                                                <h4>Rated:</h4>
                                                <span>4/5</span>
                                                <i class="fa-solid fa-star"></i>
                                            </div>
                                            <div className="review_date">
                                                <p>20 May, 2024</p>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </MovieDetailsPageWrapper>
        </>
    );
}

export default MovieDetailsPage;    