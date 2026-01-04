import { styled } from "@mui/material";
import { colorNames } from "../Theme/Colors";
const colors = colorNames();

export const TheaterListWrapper = styled('div')`
    position: relative;
    width: 100%;
    padding: 40px 0;
    display: flex;
    justify-content: center;

    .page_content {
        position: relative;
        width: 1370px;
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
            margin-top: 50px;
            width: 100%;
            display: flex;
            flex-wrap: wrap;

            .theater_box {
                position: relative;
                width: 12.5%;
                padding: 0 25px;
                margin-bottom: 45px;

                .box_inner {
                    position: relative;
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    cursor: pointer;

                    img {
                        position: relative;
                        width: 95px;
                        height: auto;
                    }

                    p {
                        position: relative;
                        margin-top: 10px;
                        font-size: 12px;
                        color: ${colors.customColors.blackColor1};
                    }
                }
            }

            .empty_box {
                position: relative;
                margin-top: 50px;
                width: 100%;
                display: flex;
                justify-content: center;

                p {
                    position: relative;
                    font-family: "Lemonada", cursive;
                    font-size: 15px;
                    font-weight: 500;
                    color: ${colors.customColors.blackColor3};
                    pointer-events: none;
                }
            }
        }
    }
`;

export const TheaterInfoPageWrapper = styled('div')`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    .info_section {
        position: relative;
        width: 100%;
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
                    margin-top: 3px;

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

                &::before {
                    content: '';
                    position: absolute;
                    left: 0;
                    top: 0;
                    width: 100%;
                    height: 1px;
                    background: linear-gradient(to right, ${colors.customColors.borderColor}, ${colors.customColors.whiteColor});
                }

                &::after {
                    content: '';
                    position: absolute;
                    left: 0;
                    bottom: 0;
                    width: 100%;
                    height: 1px;
                    background: linear-gradient(to right, ${colors.customColors.borderColor}, ${colors.customColors.whiteColor});
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
                    opacity: 0.7;
                    cursor: pointer;
                    transition: all 0.5s ease;

                    &:last-of-type {
                        margin-right: 0;
                    }

                    p {
                        position: relative;
                        font-size: 11px;
                        color: ${colors.customColors.blackColor3};
                        text-transform: uppercase;
                    }

                    h6 {
                        position: relative;
                        font-size: 15px;
                        color: ${colors.customColors.blackColor3};
                        font-weight: 500;
                        margin-top: 4px;
                        font-style: italic;
                    }

                    span {
                        position: relative;
                        font-size: 12px;
                        color: ${colors.customColors.blackColor3};
                        text-transform: capitalize;
                    }

                    &.available {
                        opacity: 1;

                        p {
                            color: ${colors.customColors.blackColor1};
                        }

                        h6 {
                            color: ${colors.customColors.blackColor};
                        }

                        span {
                            color: ${colors.customColors.blackColor2};
                        }
                    }

                    &.active {
                        opacity: 1;
                        background: ${colors.customColors.orangeColor};
                        transition: all 0.5s ease;

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
                margin-top: 25px;

                .movie_info_box {
                    position: relative;
                    width: 100%;
                    display: flex;
                    padding: 15px 0;

                    &::before {
                        content: '';
                        position: absolute;
                        bottom: 0;
                        left: 0;
                        width: 100%;
                        height: 1px;
                        background: linear-gradient(to right, ${colors.customColors.borderColor}, transparent);
                    }

                    &:last-of-type {
                        margin-bottom: 0;

                        &::before {
                            display: none;
                        }
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
                                margin-top: 2px;
                                font-size: 11px;
                                font-weight: 500;
                                color: ${colors.customColors.blackColor2};

                                b {
                                    margin-right: 4px;
                                    font-size: 12px;
                                    font-weight: 500;
                                    font-style: italic;
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

                                    &:hover {
                                        background: ${colors.customColors.blueColor};
                                        color: ${colors.customColors.whiteColor};
                                        transition: all 0.5s ease;
                                    }
                                }

                                .info_desc {
                                    position: absolute;
                                    bottom: calc(100% + 10px);
                                    left: 50%;
                                    width: max-content;
                                    background: ${colors.customColors.whiteColor};
                                    border-radius: 6px;
                                    transform: translateX(-50%);
                                    box-shadow: 4px 4px 7px ${colors.boxShadowColors.shadowColor1},
                                                -2px -2px 5px ${colors.boxShadowColors.shadowColor2};
                                    pointer-events: none;
                                    opacity: 0;
                                    visibility: hidden;
                                    transition: all 0.5s ease;

                                    &::before {
                                        content: '';
                                        position: absolute;
                                        left: 50%;
                                        bottom: -5px;
                                        width: 10px;
                                        height: 10px;
                                        background: ${colors.customColors.whiteColor};
                                        transform: translateX(-50%) rotate(45deg);
                                        box-shadow: 2px 2px 5px ${colors.boxShadowColors.shadowColor1};
                                    }

                                    ul {
                                        position: relative;
                                        display: flex;
                                        flex-direction: column;
                                        padding: 10px 15px;
                                        border-radius: 6px;
                                        background: ${colors.customColors.whiteColor};

                                        li {
                                            position: relative;
                                            list-style: none;
                                            display: flex;
                                            align-items: center;
                                            margin-bottom: 4px;

                                            &:last-of-type {
                                                margin-bottom: 0;
                                            }

                                            span {
                                                position: relative;
                                                font-size: 10px;
                                                font-style: italic;
                                                color: ${colors.customColors.blackColor};
                                            }

                                            p {
                                                position: relative;
                                                margin-left: 4px;
                                                font-size: 10px;
                                                color: ${colors.customColors.blackColor2};
                                            }
                                        }
                                    }
                                }

                                &:hover {
                                    .info_desc {
                                        opacity: 1;
                                        visibility: visible;
                                        transition: all 0.5s ease;
                                    }
                                }
                            }

                            .empty_box {
                                position: relative;
                                padding-top: 0;
                                padding-bottom: 0;
                                width: 100%;

                                p {
                                    position: relative;
                                    font-family: 'Poppins', sans-serif;
                                    font-size: 13px;
                                    font-weight: 400;
                                }
                            }
                        }
                    }
                }

                .empty_box {
                    position: relative;
                    padding-top: 25px;
                    padding-bottom: 15px;

                    p {
                        position: relative;
                        font-family: "Lemonada", cursive;
                        font-size: 15px;
                        font-weight: 500;
                        color: ${colors.customColors.blackColor3};
                        pointer-events: none;
                    }
                }
            }
        }
    }
`;