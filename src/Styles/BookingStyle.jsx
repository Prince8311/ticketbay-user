import { styled } from "@mui/material";
import { colorNames } from "../Theme/Colors";
const colors = colorNames();

export const BookingListPageWrapper = styled('div')`
    position: relative;
    width: 100%;
    padding: 40px 0;
    padding-top: 25px;
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

            h4 {
                position: relative;
                width: max-content;
                display: flex;

                &::before {
                    content: '';
                    position: absolute;
                    bottom: 0;
                    right: 0;
                    width: 100%;
                    height: 2px;
                    background: linear-gradient(to right, transparent 15%, ${colors.themeColor} 100%);
                    border-radius: 30px;
                }

                span {
                    position: relative;
                    margin-right: 6px;
                    text-transform: uppercase;
                    font-size: 16px;
                    font-weight: 800;
                    font-style: italic;
                    color: ${colors.customColors.blackColor1};

                    b {
                        font-weight: 600;
                        font-size: 22px;
                    }

                    &:last-of-type {
                        margin-right: 0;
                    }
                }
            }
        }

        .page_tab_sec {
            position: relative;
            margin-top: 25px;
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
            display: flex;
            flex-direction: column;

            .ticket_list {
                position: relative;
                width: 100%;
                display: flex;
                flex-wrap: wrap;
                padding: 0 5px;

                .empty_box {
                    position: relative;
                    width: 100%;
                    padding-top: 35px;
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

            .load_more {
                position: relative;
                margin-top: 20px;
                width: 100%;
                display: flex;
                justify-content: center;

                a {
                    position: relative;
                    font-size: 12px;
                    cursor: pointer;
                    background: ${colors.customColors.blueColor};
                    color: ${colors.customColors.whiteColor};
                    padding: 6px 15px;
                    font-weight: 500;
                    border-radius: 5px;

                    i {
                        margin-left: 5px;
                        font-size: 10px;
                    }
                }
            }
        }
    }
`;

export const TicketBoxWrapper = styled('div')`
    position: relative;
    padding: 10px;
    
    .ticket_box {
        position: relative;
        width: 315px;
        height: 93px;
        border-radius: 10px;
        padding: 8px;
        
        &.upcoming {
            background: ${colors.customColors.yellowColor};
        }
        &.previous,
        &.cancelled {
            background: ${colors.customColors.lightBackground2};
        }

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
                background: ${colors.customColors.whiteColor};
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
                        font-size: 11px;
                        font-weight: 600;
                        overflow: hidden;
                        white-space: nowrap;
                        text-overflow: ellipsis;
                    }

                    ul {
                        position: relative;
                        margin-top: 2px;
                        width: 100%;
                        display: flex;
                        align-items: center;

                        p {
                            position: relative;
                            font-size: 10px;
                            color: ${colors.customColors.blackColor1};
                        }
                        
                        i {
                            font-size: 4px;
                            margin: 0 10px;
                        }
                    }

                    .section {
                        position: relative;
                        margin-top: 2px;
                        width: 100%;
                        display: flex;
                        align-items: center;

                        p {
                            position: relative;
                            width: 100%;
                            white-space: nowrap;
                            overflow: hidden;
                            text-overflow: ellipsis;
                            font-size: 11px;
                            color: ${colors.customColors.blackColor1};

                            span {
                                font-size: 11px;
                                font-weight: 500;
                                margin-right: 5px;
                                font-style: italic;
                                color: ${colors.customColors.blackColor};
                            }
                        }
                    }

                    .seats {
                        position: relative;
                        margin-top: 1px;
                        width: 100%;
                        display: flex;
                        align-items: center;

                        p {
                            position: relative;
                            width: 100%;
                            white-space: nowrap;
                            overflow: hidden;
                            text-overflow: ellipsis;
                            font-size: 11px;
                            color: ${colors.customColors.blackColor1};

                            span {
                                font-size: 11px;
                                font-weight: 500;
                                margin-right: 5px;
                                font-style: italic;
                                color: ${colors.customColors.blackColor};
                            }
                        }
                    }
                }

                .cancelled_tag {
                    position: absolute;
                    bottom: 5px;
                    right: 5px;
                    display: flex;

                    img {
                        position: relative;
                        width: 80px;
                        height: auto;
                        transform: rotate(-20deg);
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
                    font-size: 14px;
                    font-weight: 500;
                    transform: rotate(-90deg);
                    letter-spacing: 1.2px;
                }
            }
        }
    }
`;

export const SeatLayoutWrapper = styled('div')`
    position: relative;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;

    .top_section {
        position: relative;
        width: 100%;
        height: 56px;
        padding: 10px 0;
        display: flex;
        justify-content: center;
        border-bottom: 1px solid ${colors.customColors.borderColor1};

        .top_inner {
            position: relative;
            width: 1320px;
            display: flex;

            .back_btn {
                position: relative;
                width: 40px;
                height: 40px;
                display: flex;
                width: 35px;
                height: 35px;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                box-shadow: 0 0 5px ${colors.boxShadowColors.shadowColor1};
                cursor: pointer;

                i {
                    position: relative;
                    font-size: 14px;
                    color: ${colors.customColors.blackColor2};
                }
            }

            .top_info_sec {
                position: relative;
                display: flex;
                flex-direction: column;
                padding: 0 25px;

                .movie_info_sec {
                    position: relative;
                    width: 100%;
                    display: flex;
                    align-items: center;

                    h6 {
                        position: relative;
                        font-size: 13px;
                        color: ${colors.customColors.blackColor};
                        font-weight: 500;
                        line-height: 1;
                    }

                    p {
                        position: relative;
                        font-size: 12px;
                        color: ${colors.customColors.blackColor3};
                        margin-left: 5px;
                    }
                }

                .theater_info_sec {
                    position: relative;
                    width: 100%;
                    display: flex;
                    align-items: center;
                    margin-top: 5px;

                    h6 {
                        position: relative;
                        font-size: 13px;
                        color: ${colors.customColors.blackColor};
                        font-weight: 500;
                        line-height: 1;
                    }

                    p {
                        position: relative;
                        font-size: 12px;
                        line-height: 1;
                        color: ${colors.customColors.blackColor3};
                        margin-left: 12px;
                        padding-left: 12px;
                        border-left: 2px solid ${colors.customColors.borderColor};
                    }
                }
            }

            .seat_btn {
                position: relative;
                margin-left: auto;
                display: flex;
                align-items: flex-end;

                a {
                    position: relative;
                    display: flex;
                    align-items: flex-end;
                    color: ${colors.customColors.blueColor};
                    font-size: 12px;
                    font-weight: 400;
                    cursor: pointer;

                    i {
                        margin-right: 6px;
                        font-size: 13px;
                        padding-bottom: 1px;
                    }

                    p {
                        position: relative;
                        line-height: 1;
                    }
                }
            }
        }
    }

    .middle_section {
        position: relative;
        width: 100%;
        height: calc(100% - 108px);
        padding-top: 10px;
        padding-bottom: 20px;

        .middle_inner {
            position: relative;
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            overflow: hidden;
            overflow-y: auto;
            scrollbar-width: none;
            -ms-overflow-style: none;

            &::-webkit-scrollbar {
                display: none;
            }

            .inner_content {
                position: relative;
                width: 1320px;
                height: 100%;
                display: flex;
                flex-direction: column;

                .swiper {
                    position: relative;
                    width: 100%;

                    .swiper-slide {
                        position: relative;
                        min-width: 100%;
                        width: max-content !important;
                        min-height: 250px;

                        &:last-of-type {
                            width: 0 !important;
                            min-width: 0 !important;
                        }

                        .screen_box {
                            position: relative;
                            width: 100%;
                            display: flex;
                            flex-direction: column;

                            .display_image {
                                position: relative;
                                width: 100%;
                                display: flex;
                                justify-content: center;
                                margin-bottom: 50px;

                                img {
                                    position: relative;
                                    width: 450px;
                                    display: flex;
                                }
                            }
                        }

                        .seat_section {
                            position: relative;
                            margin-top: 10px;
                            width: 100%;
                            display: flex;
                            flex-direction: column;

                            .sec_name {
                                position: relative;
                                width: 100%;
                                padding-bottom: 8px;
                                display: flex;

                                &::before {
                                    content: '';
                                    position: absolute;
                                    left: 0;
                                    bottom: 0;
                                    width: 100%;
                                    height: 1px;
                                    background: linear-gradient(to right, ${colors.customColors.borderColor}, transparent);
                                }

                                span {
                                    position: relative;
                                    font-size: 13px;
                                    font-style: italic;
                                    font-weight: 500;
                                    color: ${colors.customColors.blackColor};
                                }

                                p {
                                    position: relative;
                                    margin-left: 6px;
                                    font-size: 12px;
                                    font-weight: 400;
                                    color: ${colors.customColors.blackColor1};

                                    b {
                                        font-weight: 400;
                                        font-size: 10px;
                                    }
                                }
                            }

                            .sec_seat_rows {
                                position: relative;
                                width: 100%;
                                margin-top: 20px;
                                display: flex;
                                flex-direction: column-reverse;

                                .seat_row {
                                    position: relative;
                                    padding-right: 25px;
                                    margin-top: 12px;

                                    &:last-of-type {
                                        margin-top: 0;
                                    }

                                    .seats {
                                        position: relative;
                                        width: 100%;
                                        display: flex;
                                        align-items: center;
                                        flex-direction: row-reverse;

                                        li {
                                            position: relative;
                                            list-style: none;
                                            width: 27px;
                                            display: flex;
                                            align-items: center;
                                            justify-content: center;
                                            margin-left: calc(var(--gap, 0) * 27px) !important;
                                            margin-right: calc(var(--starting, 0) * 27px) !important;

                                            a {
                                                position: relative;
                                                color: ${colors.customColors.blackColor2};
                                                display: flex;
                                                flex-direction: column;
                                                align-items: center;
                                                justify-content: center;
                                                cursor: pointer;
                                                transition: all 0.5s ease;
                                                
                                                i {
                                                    font-size: 11px;
                                                }

                                                span {
                                                    position: relative;
                                                    margin-top: 1px;
                                                    line-height: 1;
                                                    font-size: 9px;
                                                }
                                            }

                                            &.selected a {
                                                color: ${colors.customColors.greenColor}; 
                                                transition: all 0.5s ease;
                                            }
                                        }
                                    }

                                    .index {
                                        position: absolute;
                                        top: 0;
                                        right: 0;
                                        height: 13px;
                                        display: flex;
                                        align-items: center;

                                        p {
                                            position: relative;
                                            font-size: 12px;
                                            color: ${colors.themeColor};
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    .bottom_section {
        position: relative;
        width: 100%;
        height: 52px;
        padding: 8px 0;
        display: flex;
        justify-content: center;
        border-top: 1px solid ${colors.customColors.borderColor1};

        .bottom_inner {
            position: relative;
            width: 1320px;
            display: flex;

            .seat_information_sec {
                position: relative;
                width: 100%;
                display: flex;
                align-items: center;
                justify-content: center;

                .information_item {
                    position: relative;
                    display: flex;
                    align-items: center;
                    margin-right: 20px;

                    &:last-of-type {
                        margin-right: 0;
                    }

                    .box {
                        position: relative;
                        width: 15px;
                        height: 15px;
                        border: 1px solid ${colors.customColors.yellowColor};
                        border-radius: 3px;

                        &.available {
                            border: 1px solid ${colors.customColors.greenColor};
                        }
                        &.selected {
                            border: 1px solid ${colors.customColors.greenColor};
                            background: ${colors.customColors.greenColor};
                        }
                        &.sold {
                            border: 1px solid ${colors.customColors.borderColor1};
                            background: ${colors.customColors.borderColor1};
                        }
                    }

                    p {
                        position: relative;
                        font-size: 12px;
                        color: ${colors.customColors.blackColor};
                        margin-left: 6px;
                    }
                }
            }

            .btn_sec {
                position: absolute;
                right: 0;
                width: 180px;
                display: flex;

                button {
                    position: relative;
                    width: 100%;
                    height: 35px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: ${colors.customColors.whiteColor};
                    background: ${colors.customColors.redColor};
                    border: none;
                    border-radius: 6px;
                    cursor: pointer;
                    font-size: 13px;
                    font-weight: 500;
                    transition: all 0.5s ease;
                    
                    &:hover {
                        border-radius: 25px;
                        transition: all 0.5s ease;
                    }

                    &.disable {
                        opacity: 0.4;
                        transition: all 0.5s ease;
                    }
                }
            }
        }
    }
`;

export const BookingResponseWrapper = styled('div')`
    position: relative;
    width: 100%;
    height: 100vh;
    padding: 35px;
    background: ${colors.customColors.lightBackground4};

    .wrapper_inner {
        position: relative;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;

        .status_box {
            position: relative;
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;

            img {
                position: relative;
                width: 300px;
            }

            h4 {
                position: relative;
                width: max-content;
                display: flex;
                font-weight: 600;
                font-family: 'Oleo Script', cursive;
                letter-spacing: 0.55px;
                font-size: 25px;
                line-height: 1;

                &.success {
                    color: ${colors.customColors.greenColor};
                }
                
                &.fail {
                    color: ${colors.customColors.redColor};
                }
            }

            h6 {
                position: relative;
                margin-top: 7px;
                font-size: 14px;
                font-weight: 500;
                color: ${colors.customColors.blackColor1};
            }

            p {
                position: relative;
                margin-top: 10px;
                font-size: 12px;
                color: ${colors.customColors.blackColor2};
                
                span {
                    font-weight: 500;
                    color: ${colors.customColors.blueColor};
                }
            }
        }
    }
`;