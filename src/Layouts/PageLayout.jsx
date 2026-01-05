import { Outlet } from "react-router-dom";
import { PageWrapper } from "../Styles/LayoutStyle";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import LocationModal from "../Modals/Location";
import { UserData } from "../Context/PageContext";

const PageLayout = () => {
    const { isNavFooterShow, selectedLocation } = UserData();

    return (
        <>
            <PageWrapper className={!selectedLocation ? 'no_scroll' : ''}>
                {
                    isNavFooterShow &&
                    <div className="top_section">
                        <Navbar />
                    </div>
                }
                <div className="body_section">
                    <Outlet />
                </div>
                {
                    isNavFooterShow &&
                    <div className="bottom_section">
                        <Footer />
                    </div>
                }
                <LocationModal />
            </PageWrapper>
        </>
    );
}

export default PageLayout;