import { styled } from "@mui/material";
import { colorNames } from "../Theme/Colors";
const colors = colorNames();

export const HomePageWrapper = styled('div')`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;

    .banner_sec {
        position: relative;
        width: 100%;
        padding: 35px 0;
        display: flex;
        justify-content: center;

        .sec_content {
            position: relative;
            width: 1330px;
            display: flex;

            .banner_box {
                position: relative;
                width: 90px;
                height: 400px;
                padding: 0 10px;
                transition: width 0.8s ease;
                
                .banner_inner {
                    position: relative;
                    width: 100%;
                    height: 100%;
                    overflow: hidden;
                    border-radius: 8px;
                    background-size: auto;
                    box-shadow: 0 10px 30px -5px ${colors.boxShadowColors.shadowColor3};
                    transition: background-size 0.5s ease;

                    .banner_items {
                        position: relative;
                        width: 100%;
                        height: 100%;
                        padding: 40px 60px;

                        &::before {
                            content: '';
                            position: absolute;
                            top: 0;
                            left: 0;
                            width: 100%;
                            height: 100%;
                            background: linear-gradient(to right, ${colors.customColors.blackColor}, transparent);
                            opacity: 0;
                            transition: opacity 0.3s ease;
                        }

                        .items_inner {
                            position: relative;
                            width: 50%;
                            height: 100%;
                            display: flex;
                            flex-direction: column;
                            justify-content: center;

                            h3 {
                                position: relative;
                                font-size: 28px;
                                line-height: 1.2;
                                font-family: "Oleo Script", system-ui;
                                color: ${colors.customColors.whiteColor};
                                filter: blur(5px);
                                opacity: 0;
                                transform: translateX(-50%);
                                transition: all 0.3s ease;
                            }
                            
                            p {
                                position: relative;
                                margin-top: 20px;
                                font-size: 13px;
                                opacity: 0;
                                filter: blur(5px);
                                transform: translateY(50%);
                                color: ${colors.customColors.whiteColor};
                                transition: all 0.3s ease;
                            }

                            button {
                                position: relative;
                                margin-top: 35px;
                                width: 175px;
                                height: 35px;
                                border: none;
                                color: ${colors.customColors.blackColor};
                                font-size: 13px;
                                font-weight: 500;
                                border-radius: 6px;
                                background: ${colors.customColors.whiteColor1};
                                transform: translateY(150px);
                                transition: all 0.5s ease;
                                cursor: pointer;

                                &:hover {
                                    background: ${colors.themeColor};
                                    color: ${colors.customColors.whiteColor};
                                    border-radius: 25px;
                                    transition: background 0.5s ease, color 0.5s ease, border-radius 0.5s ease;
                                }
                            }
                        }
                    }
                }

                &.active {
                    width: calc(100% - 270px);
                    transition: width 0.8s ease;
                    
                    .banner_inner {
                        background-size: cover;
                        transition: background-size 0.6s ease 1s;

                        .banner_items {
                            &::before {
                                opacity: 1;
                                transition: opacity 0.3s ease;
                            }
                            .items_inner {
                                h3 {
                                    filter: blur(0);
                                    opacity: 1;
                                    transform: translateX(0);
                                    transition: transform 0.5s ease 0.6s, opacity 0.3s ease 0.6s, filter 0.5s ease 0.8s;
                                }
                                p {
                                    filter: blur(0);
                                    opacity: 0.8;
                                    transform: translateY(0);
                                    transition: transform 0.5s ease 0.6s, opacity 0.3s ease 0.6s, filter 0.5s ease 0.8s;
                                }
                                button {
                                    transform: translateY(0);
                                    transition: background 0.5s ease, color 0.5s ease, border-radius 0.5s ease, transform 0.5s ease 0.6s;
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    .booked_ticket_sec {
        position: relative;
        margin-top: 5px;
        width: 100%;
        background: ${colors.customColors.lightBackground};
        padding: 25px 0;
        padding-bottom: 35px;
        display: flex;
        justify-content: center;

        .sec_content {
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
                    color: ${colors.themeColor};

                    &::before {
                        content: '';
                        position: absolute;
                        bottom: -3px;
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

            .sec_items {
                position: relative;
                margin-top: 35px;
                width: 100%;

                .swiper {
                    position: relative;
                    width: 100%;

                    .swiper-slide {
                        position: relative;
                        width: 350px;
                        height: 100px;

                        .ticket_box {
                            position: relative;
                            width: 100%;
                            height: 100%;
                            border-radius: 10px;
                            padding: 8px;
                            background: ${colors.customColors.yellowColor};

                            .circle_sec {
                                position: absolute;
                                top: 0;
                                right: 46px;
                                width: 30px;
                                height: 100%;

                                &::before {
                                    content: '';
                                    position: absolute;
                                    top: 0;
                                    left: 50%;
                                    width: 2px;
                                    height: 100%;
                                    background-image: linear-gradient(${colors.customColors.lightBackground} 45%, rgba(255, 255, 255, 0) 0%);
                                    background-position: left;
                                    background-size: 2px 13px;
                                    background-repeat: repeat-y;
                                    transform: translateX(-50%);
                                }

                                span {
                                    position: absolute;
                                    width: 30px;
                                    height: 30px;
                                    background: ${colors.customColors.lightBackground};
                                    border-radius: 50%;
                                    
                                    &:first-of-type {
                                        top: 0;
                                        transform: translateY(-50%);
                                    }
                                    
                                    &:last-of-type {
                                        bottom: 0;
                                        transform: translateY(50%);
                                    }
                                }
                            }

                            .box_inner {
                                position: relative;
                                width: 100%;
                                height: 100%;
                                display: flex;

                                .poster_image {
                                    position: relative;
                                    width: 60px;
                                    height: 100%;
                                    display: flex;
                                    border-radius: 6px;
                                    overflow: hidden;

                                    img {
                                        position: relative;
                                        width: 100%;
                                        height: 100%;
                                        object-fit: cover;
                                    }
                                }

                                .details_sec {
                                    position: relative;
                                    width: calc(100% - 130px);
                                    padding-left: 7px;
                                    padding-right: 5px;

                                    .details_inner {
                                        position: relative;
                                        width: 100%;
                                        height: 100%;
                                        border-radius: 3px;
                                        padding: 5px 8px;
                                        display: flex;
                                        flex-direction: column;
                                        color: ${colors.customColors.blackColor};
                                        border: 1px solid ${colors.customColors.blackColor2};

                                        h5 {
                                            position: relative;
                                            width: 100%;
                                            font-size: 12px;
                                            font-weight: 600;
                                            overflow: hidden;
                                            white-space: nowrap;
                                            text-overflow: ellipsis;
                                        }

                                        ul {
                                            position: relative;
                                            margin-top: 4px;
                                            width: 100%;
                                            display: flex;
                                            align-items: center;
                                            justify-content: space-between;

                                            p {
                                                position: relative;
                                                font-size: 11px;
                                            }
                                            
                                            i {
                                                font-size: 5px;
                                            }
                                        }

                                        .section {
                                            position: relative;
                                            margin-top: 2px;
                                            width: 100%;
                                            display: flex;
                                            align-items: center;
                                            
                                            span {
                                                font-size: 12px;
                                                font-weight: 500;
                                            }

                                            p {
                                                position: relative;
                                                width: 134px;
                                                padding-left: 6px;
                                                font-size: 12px;
                                                white-space: nowrap;
                                                overflow: hidden;
                                                text-overflow: ellipsis;
                                            }
                                        }

                                        .seats {
                                            position: relative;
                                            margin-top: 2px;
                                            width: 100%;
                                            display: flex;
                                            align-items: center;

                                            span {
                                                font-size: 12px;
                                                font-weight: 500;
                                            }

                                            p {
                                                width: 134px;
                                                padding-left: 6px;
                                                font-size: 12px;
                                                white-space: nowrap;
                                                overflow: hidden;
                                                text-overflow: ellipsis;
                                            }
                                        }
                                    }
                                }

                                .id_sec {
                                    position: relative;
                                    margin-left: auto;
                                    width: 32px;
                                    height: 100%;
                                    display: flex;
                                    align-items: center;
                                    justify-content: center;
                                    color: ${colors.customColors.blackColor};

                                    p {
                                        position: relative;
                                        font-family: 'Oswald', sans-serif; 
                                        font-size: 16px;
                                        font-weight: 500;
                                        transform: rotate(-90deg);
                                        letter-spacing: 1.2px;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    .movie_sec {
        position: relative;
        width: 100%;
        padding: 35px 0;
        display: flex;
        justify-content: center;

        &.upcoming_movies::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 1px;
            background: linear-gradient(to right, ${colors.customColors.whiteColor}, ${colors.customColors.borderColor}, ${colors.customColors.whiteColor});
        }

        .sec_content {
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
                    color: ${colors.themeColor};

                    &::before {
                        content: '';
                        position: absolute;
                        bottom: -3px;
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

            .sec_items {
                position: relative;
                margin-top: 35px;
                width: 100%;

                .swiper {
                    position: relative;
                    width: 100%;

                    .swiper-slide {
                        position: relative;
                        width: 140px;

                        .movie_box {
                            position: relative;
                            width: 100%;
                            display: flex;
                            flex-direction: column;

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
        }
    }
`;