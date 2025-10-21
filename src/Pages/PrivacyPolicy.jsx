import { PrivacyPolicyPageWrapper } from "../Styles/ConditionsPolicyStyle";

const PrivacyPolicyPage = () => {
    return (
        <>
            <PrivacyPolicyPageWrapper>
                <div className="page_content">
                    <div className="page_head">
                        <h3>Privacy <span><b>P</b>olicy</span></h3>
                    </div>
                    <div className="page_items">
                        <li>
                            <h5>1. Information We Collect</h5>
                            <p>
                                <i className="fa-solid fa-minus"></i>Personal Information: We collect personal details such as your name, email address, shipping address, phone number, and payment information when you make a purchase, create an account, or contact us.
                            </p>
                            <p>
                               <i className="fa-solid fa-minus"></i>Personal Information: We collect personal details such as your name, email address, shipping address, phone number, and payment information when you make a purchase, create an account, or contact us. 
                            </p>
                        </li>
                        <li>
                            <h5>2. How We Use Your Information</h5>
                            <p>
                                <i className="fa-solid fa-minus"></i>To Process Orders: We use your personal information to process and fulfill your orders.
                            </p>
                            <p>
                                <i className="fa-solid fa-minus"></i>To Communicate: We use your contact information to send you updates about your tickets, respond to inquiries, and send promotional materials if you have opted in.
                            </p>
                            <p>
                               <i className="fa-solid fa-minus"></i>To Improve Our Services: We analyze non-personal information to understand user behavior and enhance our website’s performance. 
                            </p>
                        </li>
                        <li>
                            <h5>3. Information Sharing</h5>
                            <p>
                                <i className="fa-solid fa-minus"></i>Third-Party Service Providers: We may share your information with third-party service provides who assist us in operating our website, processing payments, and delivering tickets.
                            </p>
                            <p>
                               <i className="fa-solid fa-minus"></i>Legal Requirements: We may disclose your information if required by law or to protect our rights. 
                            </p>
                        </li>
                        <li>
                            <h5>4. Data Security</h5>
                            <p>
                                <i className="fa-solid fa-minus"></i>We implement appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction.
                            </p>
                        </li>
                        <li>
                            <h5>5. Your Rights</h5>
                            <p>
                                <i className="fa-solid fa-minus"></i>Access and Correction: You have the right to access and correct your personal information. You can update your account details through our website.
                            </p>
                            <p>
                               <i className="fa-solid fa-minus"></i>Opt-Out: You can opt-out of receiving promotional emails by following the unsubscribe instructions in the emails.
                            </p>
                        </li>
                        <li>
                            <h5>6. Changes to This Policy</h5>
                            <p>
                                <i className="fa-solid fa-minus"></i>We may update this Privacy Policy from time to time. Any changes will be posted on this page, and the revised date will be indicated at the top of the policy.
                            </p>
                        </li>
                    </div>
                </div>
            </PrivacyPolicyPageWrapper>
        </>
    );
}

export default PrivacyPolicyPage;