import { Outlet } from "react-router-dom";
import { PageWrapper } from "../Styles/LayoutStyle";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import LocationModal from "../Modals/Location";

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
                <LocationModal />
            </PageWrapper>
        </>
    );
}

export default PageLayout;