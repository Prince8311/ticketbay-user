import { styled } from "@mui/material";
import { colorNames } from "../Theme/Colors";
const colors = colorNames();

export const ProfilePageWrapper = styled('div')`
    position: relative;
    width: 100%;
    padding: 50px 0;
    padding-bottom: 70px;
    display: flex;
    justify-content: center;

    .page_content {
        position: relative;
        width: 900px;
        display: flex;
        flex-direction: column;

        .user_details_sec {
            position: relative;
            width: 100%;
            display: flex;
            align-items: center;
            background: ${colors.customColors.whiteColor};
            border: 1px solid ${colors.customColors.borderColor1};
            padding: 12px 15px;
            border-radius: 10px;
            box-shadow: 5px 8px 10px ${colors.boxShadowColors.shadowColor2};
            margin-bottom: 10px;

            .image_box {
                position: relative;
                width: 100px;
                height: 100px;
                border: 2px solid ${colors.customColors.borderColor};
                border-radius: 50%;
                padding: 4px;

                .box_inner {
                    position: relative;
                    width: 100%;
                    height: 100%;
                    border-radius: 50%;
                    display: flex;
                    overflow: hidden;

                    img {
                        position: relative;
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                    }

                }
            }

            .profile_content {
                position: relative;
                width: calc(100% - 100px);
                padding-left: 20px;
                display: flex;
                flex-direction: column;

                h6 {
                    position: relative;
                    font-size: 16px;
                    font-weight: 500;
                    color: ${colors.customColors.blackColor};
                }

                p {
                    position: relative;
                    font-size: 12px;
                    color: ${colors.customColors.blackColor2};
                    margin-top: 7px;
                }

                span {
                    position: relative;
                    font-size: 12px;
                    color: ${colors.customColors.blackColor2};
                }
            }

            .edit_btn_sec {
                position: absolute;
                top: 5px;
                right: 10px;
                width: 35px;
                height: 35px;
                display: flex;

                a {
                    position: relative;
                    width: 100%;
                    height: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 14px;
                    color: ${colors.customColors.blueColor};
                    text-decoration: none;
                    cursor: pointer;
                }
            }
        }

        .ticket_details_sec {
            position: relative;
            width: 100%;
            display: flex;
            margin-top: 25px;
            justify-content: space-between;

            .ticket_box {
                position: relative;
                width: 48%;
                display: flex;
                align-items: center;
                border: 1px solid ${colors.customColors.borderColor1};
                border-radius: 6px;
                overflow: hidden;
                padding: 12px 15px;
                background: ${colors.customColors.whiteColor};

                .ticket_inner {
                    position: relative;
                    width: 100%;
                    display: flex;
                    align-items: center;

                    .icon {
                        position: relative;
                        width: 35px;
                        display: flex;
                        justify-content: flex-start;

                        i {
                            position: relative;
                            font-size: 19px;
                            color: ${colors.customColors.blackColor};
                        }
                    }

                    h4 {
                        position: relative;
                        font-size: 13px;
                        font-weight: 500;
                        color: ${colors.customColors.blackColor};
                        margin-right: 20px;
                    }

                    p {
                        position: relative;
                        font-size: 14px;
                        font-weight: 500;
                        font-style: italic;
                        margin-left: auto;
                        
                        &.book {
                            color: ${colors.customColors.greenColor};
                        }

                        &.cancell {
                            color: ${colors.customColors.redColor};
                        }
                    }
                }
            }
        }

        .profile_item_sec {
            position: relative;
            width: 100%;
            display: flex;
            flex-direction: column;

            .item_box {
                position: relative;
                width: 100%;
                display: flex;
                flex-direction: column;
                margin-top: 25px;

                .item_head {
                    position: relative;
                    width: 100%;
                    display: flex;
                    padding-bottom: 7px;
                    padding-left: 7px;

                    h4 {
                        position: relative;
                        font-size: 16px;
                        color: ${colors.customColors.orangeColor};
                        font-weight: 600;
                        font-style: italic;
                    }
                }

                .item_content_sec {
                    position: relative;
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    border: 1px solid ${colors.customColors.borderColor1};
                    border-radius: 6px;
                    overflow: hidden;

                    .content_box {
                        position: relative;
                        width: 100%;
                        display: flex;
                        align-items: center;
                        padding: 12px 15px;
                        background: ${colors.customColors.whiteColor};
                        cursor: pointer;
                        border-bottom: 1px solid ${colors.customColors.borderColor1};

                        &:last-of-type {
                            border-bottom: none;
                        }

                        i {
                            position: relative;
                            font-size: 14px;
                            color: ${colors.customColors.blackColor1};
                            text-decoration: none;
                            
                            &:first-of-type {
                                width: 25px;
                            }
                            &:last-of-type {
                                margin-left: auto;
                            }
                        }

                        p {
                            position: relative;
                            font-size: 13px;
                            font-weight: 500;
                            color: ${colors.customColors.blackColor1};
                            margin-right: 8px;
                        }
                    }
                }

                .btn_sec {
                    position: relative;
                    width: 100%;

                    button {
                        position: relative;
                        width: 100%;
                        display: flex;
                        align-items: center;
                        padding: 12px 15px;
                        border: none;
                        border-radius: 6px;
                        background: ${colors.customColors.redColor};
                        color: ${colors.customColors.whiteColor};
                        cursor: pointer;

                        i {
                            position: relative;
                            font-size: 14px;
                            display: flex;

                            &:first-of-type {
                                width: 25px;
                            }
                            &:last-of-type {
                                margin-left: auto;
                            }
                        }

                        p {
                            position: relative;
                            font-size: 13px;
                            font-weight: 500;
                            margin-right: 8px;
                        }

                    }
                }
            }
        }
    }
`;