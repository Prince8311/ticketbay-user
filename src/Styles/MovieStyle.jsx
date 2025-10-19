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