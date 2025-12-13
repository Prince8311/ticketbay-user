import { styled } from "@mui/material";
import { colorNames } from "../Theme/Colors";
const colors = colorNames();

export const MovieListWrapper = styled('div')`
    position: relative;
    width: 100%;
    padding: 40px 0;
    display: flex;
    justify-content: center;

    .page_content {
        position: relative;
        width: 1350px;
        display: flex;
        flex-direction: column;

        .page_head {
            position: relative;
            width: 100%;
            padding: 0 15px;

            h3 {
                position: relative;
                width: max-content;
                display: flex;
                font-family: "Oleo Script",system-ui;
                font-size: 24px;
                color: ${colors.themeColor};

                &::before {
                    content: '';
                    position: absolute;
                    bottom: -2px;
                    right: 0;
                    width: 100%;
                    height: 2px;
                    background: linear-gradient(to right, transparent 15%, ${colors.themeColor} 100%);
                    border-radius: 30px;
                }

                span {
                    position: relative;
                    margin-left: 6px;
                    text-transform: uppercase;
                    font-size: 17px;
                    font-weight: 800;
                    font-style: italic;
                    color: ${colors.customColors.blackColor1};

                    b {
                        font-weight: 600;
                        font-size: 24px;
                    }
                }
            }
        }

        .page_items {
            position: relative;
            margin-top: 35px;
            width: 100%;
            display: flex;
            flex-wrap: wrap;

            .movie_box {
                position: relative;
                width: 12.5%;
                padding: 0 15px;
                margin-bottom: 30px;

                .box_inner {
                    position: relative;
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    cursor: pointer;

                    .image_box {
                        position: relative;
                        width: 100%;
                        height: 200px;
                        display: flex;
                        overflow: hidden;
                        border-radius: 8px;

                        img {
                            position: relative;
                            width: 100%;
                            height: 100%;
                            object-fit: cover;
                        }
                    }

                    .movie_brief {
                        position: relative;
                        width: 100%;
                        margin-top: 10px;
                        display: flex;
                        flex-direction: column;

                        li {
                            position: relative;
                            list-style: none;
                            display: flex;
                            flex-direction: column;

                            span {
                                position: relative;
                                font-size: 13px;
                                font-weight: 500;
                                display: flex;
                                align-items: center;
                                color: ${colors.customColors.blackColor1};

                                i {
                                    position: relative;
                                    margin-right: 2px;
                                    font-size: 11px;
                                    padding-bottom: 3px;
                                    color: ${colors.customColors.yellowColor};
                                }
                            }

                            p {
                                position: relative;
                                margin-top: 1px;
                                width: 100%;
                                font-size: 10px;
                                color: ${colors.customColors.blackColor2};
                            }
                        }

                        h5 {
                            position: relative;
                            margin-top: 5px;
                            width: 100%;
                            font-size: 12px;
                            font-weight: 600;
                            line-height: 1.4;
                            color: ${colors.customColors.blackColor};
                            display: -webkit-box;
                            -webkit-line-clamp: 2;
                            -webkit-box-orient: vertical;
                            text-overflow: ellipsis;
                        }
                    }
                }
            }
        }
    }
`;

export const MovieDetailsPageWrapper = styled('div')`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    .banner_sec {
        position: relative;
        width: 100%;
        padding: 40px 0;
        display: flex;
        justify-content: center;
        background: linear-gradient(to bottom, ${colors.customColors.whiteColor}, ${colors.customColors.lightBackground});

        .sec_content {
            position: relative;
            width: 1320px;
            display: flex;

            .left_sec {
                position: relative;
                width: 200px;
                height: 270px;

                .movie_image {
                    position: relative;
                    width: 100%;
                    height: 100%;
                    display: flex;

                    img {
                        position: relative;
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                        border-radius: 8px;
                        box-shadow: rgba(25, 25, 25, 0.3) 7px 10px 15px, rgba(50, 50, 50, 0.3) -4px -4px 10px;
                    }
                }
            }

            .right_sec {
                position: relative;
                width: calc(100% - 245px);
                padding: 0 40px;

                .right_inner {
                    position: relative;
                    width: 100%;
                    display: flex;
                    flex-direction: column;

                    h2 {
                        position: relative;
                        font-size: 25px;
                        font-style: italic;
                        color: ${colors.authColors.textColor};
                        font-family: "Russo One", sans-serif;
                        letter-spacing: 0.3px;
                    }

                    li {
                        position: relative;
                        display: flex;
                        flex-wrap: wrap;
                        -moz-box-align: center;
                        align-items: center;
                        font-family: "Poppins", sans-serif;
                        margin-top: 4px;

                        &.genres {
                            margin-bottom: 4px;
                        }

                        span {
                            font-size: 12px;
                            font-weight: 500;
                            color: ${colors.customColors.blackColor1};
                        }

                        i {
                            position: relative;
                            font-size: 5px;
                            margin: 0px 10px;
                            color: ${colors.customColors.blackColor1};
                        }

                        a {
                            position: relative;
                            margin-right: 10px;
                            margin-bottom: 10px;
                            padding: 8px 22px;
                            background: ${colors.customColors.borderColor};
                            font-size: 11px;
                            line-height: 1;
                            color: ${colors.customColors.blackColor};
                            border-radius: 4px;
                            text-decoration: none;

                            &:last-of-type {
                                margin-right: 0;
                            }
                        }
                    }

                    .rating_sec {
                        position: relative;
                        margin-top: 10px;
                        display: flex;
                        -moz-box-align: center;
                        align-items: center;
                        flex-wrap: wrap;
                        font-family: "Poppins", sans-serif;

                        h5 {
                            position: relative;
                            font-size: 13px;
                            font-weight: 600;
                            color: ${colors.customColors.blackColor};
                        }

                        .stars {
                            position: relative;
                            margin-left: 10px;
                            display: flex;
                            -moz-box-align: center;
                            align-items: center;

                            i {
                                position: relative;
                                font-size: 11px;
                                color: ${colors.authBackground.gradientMid1};
                                margin-right: 2px;
                            }
                        }

                        span {
                            position: relative;
                            margin-left: 3px;
                            font-size: 12px;
                            color: ${colors.customColors.blackColor1};
                            font-weight: 500;

                            &.dot {
                                font-size: 5px;
                                margin: 0px 8px;
                            }
                        }



                        p {
                            position: relative;
                            font-size: 12px;
                            color: ${colors.customColors.blackColor1};
                        }
                    }

                    ul {
                        position: relative;
                        display: flex;
                        align-items: center;

                        button {
                            position: relative;
                            width: 150px;
                            height: 40px;
                            font-family: "Ubuntu", sans-serif;
                            font-size: 12px;
                            font-weight: 500;
                            cursor: pointer;
                            border-radius: 5px;
                            overflow: hidden;
                            background: none;
                            outline: none;
                            border: none;

                            &.trailer_btn {
                                margin-right: 20px;
                                background: ${colors.customColors.orangeColor};
                            }

                            &.booking_btn {
                                background: ${colors.customColors.blueColor};
                            }


                            span {
                                position: relative;
                                color: ${colors.customColors.whiteColor};
                                display: flex;
                                align-items: center;
                                justify-content: center;

                                i {
                                    font-size: 14px;
                                    margin-right: 8px;
                                }
                            }
                        }
                    }
                }
            }

            .share_sec {
                position: relative;
                width: 45px;
                height: 100%;
                /* padding: 35px 0px; */

                .share_inner {
                    position: relative;
                    width: 100%;
                    height: 100%;

                    .share_btn {
                        position: relative;
                        width: 100%;
                        height: 45px;
                        cursor: pointer;
                        z-index: 10;
                        transition: 0.9s;

                        img {
                            position: relative;
                            width: 100%;
                            height: 100%;
                            border-radius: 50%;
                            display: flex;
                            box-shadow: rgba(0, 0, 0, 0.3) 6px 6px 15px, rgba(25, 25, 25, 0.2) -4px -4px 10px;
                        }
                    }
                }
            }
        }
    }

    .movie_info_section {
        position: relative;
        width: 100%;
        padding: 35px 0;
        display: flex;
        justify-content: center;

        .sec_content {
            position: relative;
            width: 1320px;
            display: flex;
            flex-direction: column;

            .movie_content_box {
                position: relative;
                width: 100%;
                display: flex;
                flex-direction: column;
                margin-top: 35px;

                .box_head {
                    position: relative;
                    width: 100%;
                    display: flex;
                    align-items: center;

                    h4 {
                        position: relative;
                        width: max-content;
                        display: flex;
                        font-family: "Oleo Script",system-ui;
                        font-size: 24px;
                        color: ${colors.customColors.orangeColor};

                        &::before {
                            content: '';
                            position: absolute;
                            bottom: -3px;
                            right: 0;
                            width: 100%;
                            height: 2px;
                            background: linear-gradient(to right, transparent 15%, ${colors.customColors.orangeColor} 100%);
                            border-radius: 30px;
                        }

                        span {
                            position: relative;
                            margin-left: 6px;
                            text-transform: uppercase;
                            font-size: 17px;
                            font-weight: 800;
                            font-style: italic;
                            color: ${colors.customColors.blackColor1};

                            b {
                                font-weight: 600;
                                font-size: 24px;
                            }
                        }
                    }
                }

                .box_items {
                    position: relative;
                    margin-top: 35px;
                    width: 100%;
                    display: flex;
                    flex-wrap: wrap;

                    p {
                        position: relative;
                        font-size: 13px;
                        color: ${colors.customColors.blackColor1};
                    }

                    .item_box {
                        position: relative;
                        width: 100px;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        text-align: center;
                        margin-right: 20px;

                        &:last-of-type {
                            margin-right: 0;
                        }

                        .box_img {
                            position: relative;
                            width: 100%;
                            height: 100px;
                            border: 1px solid ${colors.customColors.borderColor};
                            border-radius: 50%;
                            padding: 3px;
                            box-shadow: ${colors.boxShadowColors.shadowColor1} 6px 7px 15px, ${colors.boxShadowColors.shadowColor3} -3px -3px 7px;

                            img {
                                position: relative;
                                width: 100%;
                                height: 100%;
                                object-fit: cover;
                                border-radius: 50%;
                            }
                        }

                        p {
                            position: relative;
                            font-size: 10px;
                            color: ${colors.customColors.blackColor1};
                            position: relative;
                            margin-top: 10px;
                        }
                    }
                }

                &:first-of-type {
                    margin-top: 0;

                    .box_items {
                        margin-top: 25px;
                    }
                }
            }
        }
    }

    .user_review_section {
        position: relative;
        width: 100%;
        padding: 35px 0;
        display: flex;
        justify-content: center;

        .section_inner {
            position: relative;
            width: 1320px;
            display: flex;
            flex-direction: column;

            .sec_head {
                position: relative;
                width: 100%;
                display: flex;
                align-items: center;

                h4 {
                    position: relative;
                    width: max-content;
                    display: flex;
                    font-family: "Oleo Script",system-ui;
                    font-size: 24px;
                    color: ${colors.customColors.orangeColor};

                    &::before {
                        content: '';
                        position: absolute;
                        bottom: -3px;
                        right: 0;
                        width: 100%;
                        height: 2px;
                        background: linear-gradient(to right, transparent 15%, ${colors.customColors.orangeColor} 100%);
                        border-radius: 30px;
                    }

                    span {
                        position: relative;
                        margin-left: 6px;
                        text-transform: uppercase;
                        font-size: 17px;
                        font-weight: 800;
                        font-style: italic;
                        color: ${colors.customColors.blackColor1};

                        b {
                            font-weight: 600;
                            font-size: 24px;
                        }
                    }
                }

                a {
                    position: relative;
                    margin-left: auto;
                    width: 150px;
                    height: 35px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border: 1px solid ${colors.customColors.blackColor3};
                    color: ${colors.customColors.blackColor2};
                    font-size: 12px;
                    font-weight: 500;
                    border-radius: 25px;
                    cursor: pointer;
                    overflow: hidden;
                    transition: all 0.5s ease;
                    
                    &::before {
                        content: '';
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        transform: scaleX(0);
                        transform-origin: right;
                        background: ${colors.customColors.blackColor};
                        transition: transform 0.5s ease;
                    }

                    i {
                        margin-left: 4px;
                    }

                    span {
                        z-index: 5;
                    }

                    &:hover {
                        color: ${colors.customColors.whiteColor};
                        transition: all 0.5s ease;

                        &::before {
                            transform: scaleX(1);
                            transform-origin: left;
                            width: 100%;
                            transition: transform 0.5s ease;
                        }
                    }
                }
            }

            .review_sec {
                position: relative;
                margin-top: 35px;
                width: 100%;
                display: flex;

                .swiper {
                    position: relative;
                    width: 100%;
                    padding: 20px 0;

                    .swiper-slide {
                        position: relative;
                        width: 27%;
                        height: 200px;
                        padding: 20px;
                        border: 1px solid ${colors.customColors.borderColor};
                        border-radius: 10px;

                        .quote_icon {
                            position: absolute;
                            top: 5px;
                            right: 20px;

                            i {
                                position: relative;
                                font-size: 50px;
                                color: ${colors.customColors.whiteColor2};
                            }
                        }

                        .review_box {
                            position: relative;
                            width: 100%;
                            height: 100%;
                            display: flex;
                            flex-direction: column;

                            .review_top {
                                position: relative;
                                width: 100%;
                                display: flex;
                                align-items: center;

                                .user_img {
                                    position: relative;
                                    width: 30px;
                                    height: 30px;
                                    display: flex;
                                    align-items: center;
                                    justify-content: center;
                                    background: ${colors.customColors.lightBackground};
                                    border-radius: 50%;

                                    img {
                                        position: relative;
                                        width: 100%;
                                        height: 100%;
                                        object-fit: cover;
                                        border-radius: 50%;
                                    }
                                }

                                h3 {
                                    position: relative;
                                    width: calc(100% - 30px);
                                    padding-left: 15px;
                                    font-style: italic;
                                    font-size: 14px;
                                    color: ${colors.customColors.blackColor};
                                    white-space: nowrap;
                                    overflow: hidden;
                                    text-overflow: ellipsis;
                                }
                            }

                            .review_message {
                                position: relative;
                                margin-top: 20px;
                                width: 100%;

                                p {
                                    position: relative;
                                    width: 100%;
                                    /* height: 75px; */
                                    font-size: 13px;
                                    line-height: 1.5;
                                    color: ${colors.customColors.blackColor2};
                                    display: -webkit-box;
                                    overflow: hidden;
                                    -webkit-line-clamp: 3;
                                    -webkit-box-orient: vertical;
                                    text-overflow: ellipsis;
                                }
                            }

                            .review_bottom {
                                position: relative;
                                margin-top: auto;
                                width: 100%;
                                display: flex;
                                align-items: flex-end;
                                justify-content: space-between;

                                .user_review {
                                    position: relative;
                                    display: flex;
                                    align-items: center;

                                    h4 {
                                        position: relative;
                                        font-size: 14px;
                                        font-weight: 600;
                                        color: ${colors.customColors.blackColor};
                                        margin-right: 10px;
                                    }

                                    span {
                                        position: relative;
                                        font-size: 13px;
                                        font-weight: 500;
                                        color: ${colors.customColors.blackColor2};
                                    }

                                    i {
                                        position: relative;
                                        margin-left: 5px;
                                        padding-bottom: 3px;
                                        font-size: 13px;
                                        color: ${colors.authBackground.gradientMid2};
                                    }
                                }

                                .review_date {
                                    position: relative;

                                    p {
                                        position: relative;
                                        font-family: 'Ubuntu', sans-serif;
                                        font-size: 13px;
                                        font-weight: 500;
                                        color: ${colors.customColors.blackColor2};
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`;

export const MovieInfoPageWrapper = styled('div')`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    .info_section {
        position: relative;
        width: 100%;
        /* background: ${colors.customColors.lightBackground}; */
        padding: 25px 0;
        display: flex;
        justify-content: center;

        .section_inner {
            position: relative;
            width: 1320px;
            display: flex;
            flex-direction: column;

            .page_head {
                position: relative;
                width: 100%;
                display: flex;
                flex-direction: column;

                h4 {
                    position: relative;
                    font-size: 17px;
                    font-weight: 600;
                    font-style: italic;
                    color: ${colors.customColors.blackColor};
                }

                li {
                    position: relative;
                    width: 100%;
                    display: flex;
                    flex-wrap: wrap;
                    align-items: center;
                    list-style: none;
                    margin-top: 5px;

                    p {
                        position: relative;
                        font-size: 13px;
                        color: ${colors.customColors.blackColor1};
                        margin-right: 5px;

                        &:last-of-type {
                            margin-right: 0;
                        }
                    }
                }
            }

            .date_sec {
                position: relative;
                width: 100%;
                display: flex;
                padding: 10px 0;
                margin-top: 20px;
                justify-content: center;

                &::before {
                    content: '';
                    position: absolute;
                    left: 0;
                    top: 0;
                    width: 100%;
                    height: 1px;
                    background: linear-gradient(to right, #fff, #b1b1b1, #fff);
                }

                &::after {
                    content: '';
                    position: absolute;
                    left: 0;
                    bottom: 0;
                    width: 100%;
                    height: 1px;
                    background: linear-gradient(to right, #fff, #b1b1b1, #fff);
                }

                .date_box {
                    position: relative;
                    width: 90px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-direction: column;
                    background: ${colors.customColors.lightBackground};
                    padding: 10px;
                    margin-right: 7px;
                    border-radius: 6px;
                    cursor: pointer;

                    &:last-of-type {
                        margin-right: 0;
                    }

                    p {
                        position: relative;
                        font-size: 12px;
                        color: ${colors.customColors.blackColor1};
                        font-weight: 500;
                        text-transform: uppercase;
                    }

                    h6 {
                        position: relative;
                        font-size: 15px;
                        color: ${colors.customColors.blackColor};
                        font-weight: 600;
                        margin: 3px 0;
                    }

                    span {
                        position: relative;
                        font-size: 13px;
                        color: ${colors.customColors.blackColor2};
                        font-weight: 500;
                        text-transform: capitalize;
                    }

                    &.active {
                        background: ${colors.customColors.orangeColor};

                        p {
                            color: ${colors.customColors.whiteColor};
                        }

                        h6 {
                            color: ${colors.customColors.whiteColor};
                        }

                        span {
                            color: ${colors.customColors.whiteColor};
                        }
                    }
                }
            }

            .move_info_sec {
                position: relative;
                width: 100%;
                display: flex;
                flex-direction: column;
                margin-top: 50px;

                .movie_box {
                    position: relative;
                    width: 100%;
                    display: flex;
                    margin-bottom: 25px;

                    &:last-of-type {
                        margin-bottom: 0;
                    }

                    .left_info {
                        position: relative;
                        width: 370px;
                        display: flex;

                        .img_sec {
                            position: relative;
                            width: 40px;
                            height: 45px;
                            display: flex;

                            img {
                                position: relative;
                                width: 100%;
                                height: 100%;
                                object-fit: cover;
                                border-radius: 3px;
                            }
                        }

                        .left_item {
                            position: relative;
                            width: calc(100% - 40px);
                            padding-left: 15px;

                            h5 {
                                position: relative;
                                font-size: 13px;
                                font-weight: 500;
                                color: ${colors.customColors.blackColor};
                            }

                            p {
                                position: relative;
                                font-size: 12px;
                                font-weight: 500;
                                color: ${colors.customColors.blackColor1};

                                b {
                                    font-weight: 500;
                                    color: ${colors.customColors.blackColor1};
                                }
                            }
                        }
                    }

                    .right_info {
                        position: relative;
                        width: calc(100% - 370px);
                        display: flex;
                        padding-left: 70px;

                        .right_info_inner {
                            position: relative;
                            width: 100%;
                            display: flex;
                            flex-wrap: wrap;
                            align-items: center;

                            .inner_box {
                                position: relative;
                                display: flex;
                                margin-right: 10px;
                                margin-bottom: 10px;

                                a {
                                    position: relative;
                                    padding: 5px 15px;
                                    color: ${colors.customColors.blackColor1};
                                    font-weight: 400;
                                    border: 1px solid ${colors.customColors.blueColor};
                                    border-radius: 4px;
                                    font-size: 12px;
                                    cursor: pointer;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`;