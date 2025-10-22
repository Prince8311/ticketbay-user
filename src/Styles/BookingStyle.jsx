import { styled } from "@mui/material";
import { colorNames } from "../Theme/Colors";
const colors = colorNames();

export const BookingListPageWrapper = styled('div')`
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

        .info_box_sec {
            position: relative;
            width: 100%;
            display: flex;

            .info_box {
                position: relative;
                width: 300px;
                height: 80px;
                padding: 0 15px;

                .box_inner {
                    position: relative;
                    width: 100%;
                    height: 100%;
                    box-shadow: 5px 5px 8px ${colors.boxShadowColors.shadowColor2},
                            -3px -3px 5px ${colors.boxShadowColors.shadowColor2};
                    border-radius: 6px;
                    padding: 15px 25px;

                    .box_items {
                        position: relative;
                        width: 100%;
                        height: 100%;
                        display: flex;
                        align-items: flex-end;

                        .inner_item {
                            position: relative;
                            width: calc(100% - 45px);
                            display: flex;
                            flex-direction: column;

                            h4 {
                                position: relative;
                                font-family: 'Lemonada', cursive;
                                font-size: 13px;
                                font-weight: 600;
                                color: ${colors.customColors.blackColor};
                            }

                            p {
                                position: relative;
                                font-size: 18px;
                                margin-top: 4px;
                                line-height: 1.3;
                                font-weight: 500;
                                font-style: italic;
                                color: ${colors.customColors.blackColor};
                            }
                        }

                        .icon {
                            position: relative;
                            width: 45px;
                            display: flex;
                            justify-content: flex-end;

                            i {
                                position: relative;
                                font-size: 32px;
                                color: ${colors.customColors.blackColor};
                            }
                        }
                    }
                }

                &:nth-of-type(1) {
                    .box_inner {
                        background: linear-gradient(to bottom, ${colors.customColors.whiteColor} 5%, rgba(63, 228, 79, 0.5) 50%, rgba(63, 228, 79, 0.8) 80%, rgb(63, 228, 79) 100%);

                        .box_items .icon i {
                            transform: rotate(-30deg);
                        }
                    }
                }

                &:nth-of-type(2) {
                    .box_inner {
                        background: linear-gradient(to bottom, ${colors.customColors.whiteColor} 5%, rgba(255, 0, 0, 0.5) 50%, rgba(255, 0, 0, 0.8) 80%, rgb(255, 0, 0) 100%);
                    }
                }
            }
        }

        .page_tab_sec {
            position: relative;
            margin-top: 35px;
            width: 100%;
            padding: 0 15px;

            .sec_inner {
                position: relative;
                width: 100%;
                border-bottom: 2px solid ${colors.themeColor};
                display: flex;
                align-items: center;

                li {
                    position: relative;
                    list-style: none;
                    margin-right: 8px;

                    &:last-of-type {
                        margin-right: 0;
                    }

                    a {
                        position: relative;
                        text-decoration: none;
                        font-size: 12px;
                        padding: 5px 20px;
                        background: ${colors.customColors.lightBackground};
                        color: ${colors.customColors.blackColor1};
                        display: flex;
                        cursor: pointer;
                        border-radius: 5px 5px 0 0;
                        transition: all 0.5s ease;

                        &:hover {
                            color: ${colors.customColors.blackColor};
                            background: ${colors.customColors.yellowColorLight};
                            transition: all 0.5s ease;
                        }

                        &.active {
                            background: ${colors.themeColor};
                            color: ${colors.customColors.whiteColor};
                            transition: all 0.5s ease;
                        }
                    }
                }
            }
        }

        .page_inner {
            position: relative;
            width: 100%;
            margin-top: 15px;
        }
    }
`;