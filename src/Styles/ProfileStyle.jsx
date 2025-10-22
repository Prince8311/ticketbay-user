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

        .profile_image_sec {
            position: relative;
            width: 100%;
            display: flex;
            justify-content: center;

            .image_box {
                position: relative;
                width: 150px;
                height: 150px;
                border: 1px solid ${colors.customColors.borderColor};
                border-radius: 50%;
                padding: 6px;

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

                a {
                    position: absolute;
                    right: 4px;
                    bottom: 4px;
                    width: 32px;
                    height: 32px;
                    font-size: 13px;
                    background: ${colors.customColors.blueColor};
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                    color: ${colors.customColors.whiteColor};
                    border-radius: 10px;
                }
            }
        }

        .form_sec {
            position: relative;
            margin-top: 35px;
            width: 100%;
            display: flex;
            flex-direction: column;

            .sec_head {
                position: relative;
                width: 100%;
                padding-bottom: 2px;

                &::before {
                    content: '';
                    position: absolute;
                    bottom: -2px;
                    right: 0;
                    width: 100%;
                    height: 1px;
                    background: linear-gradient(to right, ${colors.customColors.blackColor2}, transparent);
                    border-radius: 30px;
                }

                h4 {
                    span {
                        position: relative;
                        margin-right: 6px;
                        text-transform: uppercase;
                        font-size: 14px;
                        font-weight: 800;
                        font-style: italic;
                        color: ${colors.customColors.blackColor1};

                        b {
                            font-weight: 600;
                            font-size: 20px;
                        }
                    }
                }
            }

            .form_inner {
                position: relative;
                width: 100%;
                margin-top: 25px;
                display: flex;
                flex-wrap: wrap;
                justify-content: space-between;

                .input_box {
                    position: relative;
                    width: 49%;
                    margin-bottom: 20px;

                    input {
                        position: relative;
                        width: 100%;
                        height: 40px;
                        border: 1px solid ${colors.customColors.borderColor};
                        font-size: 12px;
                        border-radius: 5px;
                        padding: 5px 20px;
                        padding-right: 60px;
                        outline: none;
                        transition: all 0.5s ease;

                        &:focus,
                        &:valid {
                            border: 1px solid ${colors.customColors.blueColor};
                            transition: all 0.5s ease;
                        }
                    }

                    span {
                        position: absolute;
                        top: 50%;
                        left: 15px;
                        padding: 0 5px;
                        font-size: 12px;
                        background: ${colors.customColors.whiteColor};
                        line-height: 1;
                        color: ${colors.customColors.blackColor2};
                        pointer-events: none;
                        transform: translateY(-50%);
                        transition: all 0.5s ease;
                    }

                    input:focus ~ span,
                    input:valid ~ span {
                        transform: translateY(-25px);
                        font-size: 10px;
                        color: ${colors.themeColor};
                        font-weight: 500;
                        transition: all 0.5s ease;
                    }

                    .not_editable {
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                    }

                    a {
                        position: absolute;
                        right: 20px;
                        top: 50%;
                        transform: translateY(-50%);
                        font-size: 12px;
                        font-weight: 500;
                        color: ${colors.customColors.blueColor};
                        cursor: pointer;
                    }
                }

                .password_input_box {
                    position: relative;
                    width: 49%;
                    margin-bottom: 20px;

                    input {
                        position: relative;
                        width: 100%;
                        height: 40px;
                        border: 1px solid ${colors.customColors.borderColor};
                        font-size: 12px;
                        border-radius: 5px;
                        padding: 5px 20px;
                        padding-right: 60px;
                        outline: none;
                        transition: all 0.5s ease;

                        &:focus,
                        &:valid {
                            border: 1px solid ${colors.customColors.blueColor};
                            transition: all 0.5s ease;
                        }
                    }

                    span {
                        position: absolute;
                        top: 50%;
                        left: 15px;
                        padding: 0 5px;
                        font-size: 12px;
                        background: ${colors.customColors.whiteColor};
                        line-height: 1;
                        color: ${colors.customColors.blackColor2};
                        pointer-events: none;
                        transform: translateY(-50%);
                        transition: all 0.5s ease;
                    }

                    input:focus ~ span,
                    input:valid ~ span {
                        transform: translateY(-25px);
                        font-size: 10px;
                        color: ${colors.themeColor};
                        font-weight: 500;
                        transition: all 0.5s ease;
                    }

                    a {
                        position: absolute;
                        top: 0;
                        right: 0;
                        height: 100%;
                        width: 50px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        text-decoration: none;
                        cursor: pointer;
                        font-size: 14px;
                        color: ${colors.customColors.blackColor2};
                        transition: all 0.5s ease;
                    }

                    input:focus ~ a,
                    input:valid ~ a {
                        color: ${colors.customColors.blueColor};
                        transition: all 0.5s ease;
                    }
                }

                .form_btn {
                    position: relative;
                    margin-top: 5px;
                    width: 100%;
                    display: flex;

                    button {
                        position: relative;
                        width: 150px;
                        height: 40px;
                        background: ${colors.customColors.greenColor};
                        border: none;
                        font-size: 13px;
                        font-weight: 500;
                        color: ${colors.customColors.whiteColor};
                        cursor: pointer;
                        border-radius: 5px;
                        pointer-events: initial;
                        transition: all 0.5s ease;

                        &:hover {
                            border-radius: 30px;
                            letter-spacing: 1px;
                            transition: all 0.5s ease;
                        }

                        &.disabled {
                            opacity: 0.5;
                            cursor: not-allowed;
                            pointer-events: none;
                            transition: all 0.5s ease;
                        }
                    }
                }
            }
        }
    }
`;