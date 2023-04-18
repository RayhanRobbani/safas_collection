import '../../../public/frontend/assets/vendor/bootstrap/css/bootstrap.min.css';
import '../../../public/frontend/assets/vendor/bootstrap-icons/bootstrap-icons.css';
import '../../../public/frontend/assets/vendor/swiper/swiper-bundle.min.css';
import '../../../public/frontend/assets/vendor/glightbox/css/glightbox.min.css';
import '../../../public/frontend/assets/vendor/aos/aos.css';
import '../../../public/frontend/assets/css/main.css';

import Navbar from '@/Components/Frontend/Navbar';
import Footer from '@/Components/Frontend/Footer';

export default function FrontendLayout({ children }) {
    const handleKeyDown = event => {
        if (event.key =="`") {
            window.location.replace('http://127.0.0.1:8000/login');
        }
    };

    return (
        <>
            <div tabIndex={0} onKeyDown={handleKeyDown}>
                <Navbar />
                {children}
                <Footer />

                <a href="#" className="scroll-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a>
            </div>
        </>
    );
}
