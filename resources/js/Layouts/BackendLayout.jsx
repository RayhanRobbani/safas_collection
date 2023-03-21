import '../../../public/backend/assets/vendors/mdi/css/materialdesignicons.min.css';
import '../../../public/backend/assets/vendors/css/vendor.bundle.base.css';
import '../../../public/backend/assets/vendors/jvectormap/jquery-jvectormap.css';
import '../../../public/backend/assets/vendors/flag-icon-css/css/flag-icon.min.css';
import '../../../public/backend/assets/vendors/owl-carousel-2/owl.carousel.min.css';
import '../../../public/backend/assets/vendors/owl-carousel-2/owl.theme.default.min.css';
import '../../../public/backend/assets/css/style.css';

import Sidebar from '@/Components/Backend/Sidebar';
import Navbar from '@/Components/Backend/Navbar';
import Footer from '@/Components/Backend/Footer';

export default function BackendLayout({ children }) {
    return (
        <div className="container-scroller">
            <Sidebar />
            <div className="container-fluid page-body-wrapper">
                <Navbar />
                <div className="main-panel">
                    {children}
                    <Footer />
                </div>
            </div>
        </div>
    );
}
