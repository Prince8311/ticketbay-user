import { Outlet } from "react-router-dom";
import { PageWrapper } from "../Styles/LayoutStyle";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const PageLayout = () => {
    return (
        <>
            <PageWrapper>
                <div className="top_section">
                    <Navbar />
                </div>
                <div className="body_section">
                    <Outlet />
                </div>
                <div className="bottom_section">
                    <Footer />
                </div>
            </PageWrapper>
        </>
    );
}

export default PageLayout;