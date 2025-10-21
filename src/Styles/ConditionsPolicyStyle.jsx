import { styled } from "@mui/material";
import { colorNames } from "../Theme/Colors";
const colors = colorNames();

export const TermsConditionsPageWrapper = styled('div')`
    position: relative;
    width: 100%;
    padding: 40px 0;
    display: flex;
    justify-content: center;

    .page_content {
        position: relative;
        width: 1320px;
        display: flex;
        flex-direction: column;

        .page_head {
            position: relative;
            width: 100%;

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
            flex-direction: column;

            li {
                position: relative;
                width: 100%;
                display: flex;
                list-style: none;
                margin-bottom: 15px;

                i {
                    position: relative;
                    width: 30px;
                    height: 25px;
                    display: flex;
                    -moz-box-align: center;
                    align-items: center;
                    -moz-box-pack: center;
                    justify-content: center;
                    font-size: 11px;
                    color: ${colors.customColors.orangeColor};
                }
                
                p {
                    position: relative;
                    width: calc(100% - 30px);
                    font-size: 13px;
                    line-height: 20px;
                    color: ${colors.customColors.blackColor1};
                    
                    a {
                        font-weight: 500;
                        text-decoration: none;
                        color: ${colors.customColors.blueColor};
                    }
                }
            }
        }
    }
`;

export const PrivacyPolicyPageWrapper = styled('div')`
    position: relative;
    width: 100%;
    padding: 40px 0;
    display: flex;
    justify-content: center;

    .page_content {
        position: relative;
        width: 1320px;
        display: flex;
        flex-direction: column;

        .page_head {
            position: relative;
            width: 100%;

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
            flex-direction: column;

            li {
                position: relative;
                width: 100%;
                list-style: none;
                display: flex;
                flex-direction: column;
                margin-bottom: 25px;

                h5 {
                    position: relative;
                    font-size: 15px;
                    font-weight: 500;
                    color: ${colors.customColors.greenColor};
                    margin-bottom: 15px;
                }

                p {
                    position: relative;
                    width: 100%;
                    margin-bottom: 15px;
                    font-size: 13px;
                    color: ${colors.customColors.blackColor1};
                    line-height: 1.5; 

                    i {
                        position: relative;
                        font-size: 14px;
                        margin-right: 10px;
                        color: ${colors.customColors.orangeColor};
                    }
                }
            }
        }
    }
`;
