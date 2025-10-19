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
                width: 14.28%;
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
                        width: 100px;
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
        }
    }
`;