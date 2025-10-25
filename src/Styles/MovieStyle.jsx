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
                        margin-top: 10px;
                        display: flex;
                        flex-wrap: wrap;
                        -moz-box-align: center;
                        align-items: center;
                        font-family: "Poppins", sans-serif;

                        span {
                            font-size: 14px;
                            font-weight: 500;
                            color: ${colors.customColors.blackColor1};
                        }

                        i {
                            position: relative;
                            font-size: 5px;
                            margin: 0px 10px;
                            color: ${colors.customColors.blackColor1};
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
`;