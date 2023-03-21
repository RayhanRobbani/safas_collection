import FrontendLayout from "@/Layouts/FrontendLayout";
import { Head } from "@inertiajs/react";
import OwlCarousel from 'react-owl-carousel';
import '../../../../public/backend/assets/vendors/owl-carousel-2/owl.carousel.min.css';
import '../../../../public/backend/assets/vendors/owl-carousel-2/owl.theme.default.min.css';

export default function GalleryItem() {
    return (
        <>
            <FrontendLayout>
                <Head title="Gallery Item" />
                <main id="main" data-aos="fade" data-aos-delay="500">

                    <section id="gallery-single" className="gallery-single" style={{ paddingTop: 120 }}>
                        <div className="container">

                            <OwlCarousel className='owl-theme' loop margin={10} items='1' autoplay="true">
                                <div class="item">
                                    <img src="frontend/assets/img/gallery/gallery-8.jpg" alt="" />
                                </div>
                                <div class="item">
                                    <img src="frontend/assets/img/gallery/gallery-9.jpg" alt="" />
                                </div>
                                <div class="item">
                                    <img src="frontend/assets/img/gallery/gallery-10.jpg" alt="" />
                                </div>
                                <div class="item">
                                    <img src="frontend/assets/img/gallery/gallery-11.jpg" alt="" />
                                </div>
                                <div class="item">
                                    <img src="frontend/assets/img/gallery/gallery-12.jpg" alt="" />
                                </div>
                                <div class="item">
                                    <img src="frontend/assets/img/gallery/gallery-13.jpg" alt="" />
                                </div>
                            </OwlCarousel>

                            <div className="row justify-content-between gy-4 mt-4">

                                <div className="col-lg-8">
                                    <div className="portfolio-description">
                                        <h2>This is an example of portfolio detail</h2>
                                        <p>
                                            Autem ipsum nam porro corporis rerum. Quis eos dolorem eos itaque inventore commodi labore quia quia. Exercitationem repudiandae officiis neque suscipit non officia eaque itaque enim. Voluptatem officia accusantium nesciunt est omnis tempora consectetur dignissimos. Sequi nulla at esse enim cum deserunt eius.
                                        </p>
                                        <p>
                                            Amet consequatur qui dolore veniam voluptatem voluptatem sit. Non aspernatur atque natus ut cum nam et. Praesentium error dolores rerum minus sequi quia veritatis eum. Eos et doloribus doloremque nesciunt molestiae laboriosam.
                                        </p>

                                        <div className="testimonial-item">
                                            <p>
                                                <i className="bi bi-quote quote-icon-left"></i>
                                                Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.
                                                <i className="bi bi-quote quote-icon-right"></i>
                                            </p>
                                            <div>
                                                <img src="frontend/assets/img/testimonials/testimonials-2.jpg" className="testimonial-img" alt="" />
                                                <h3>Sara Wilsson</h3>
                                                <h4>Designer</h4>
                                            </div>
                                        </div>

                                        <p>
                                            Impedit ipsum quae et aliquid doloribus et voluptatem quasi. Perspiciatis occaecati earum et magnam animi. Quibusdam non qui ea vitae suscipit vitae sunt. Repudiandae incidunt cumque minus deserunt assumenda tempore. Delectus voluptas necessitatibus est.

                                            <p>
                                                Sunt voluptatum sapiente facilis quo odio aut ipsum repellat debitis. Molestiae et autem libero. Explicabo et quod necessitatibus similique quis dolor eum. Numquam eaque praesentium rem et qui nesciunt.
                                            </p>
                                        </p>

                                    </div>
                                </div>

                                <div className="col-lg-3">
                                    <div className="portfolio-info">
                                        <h3>Project information</h3>
                                        <ul>
                                            <li><strong>Category</strong> <span>Nature Photography</span></li>
                                            <li><strong>Client</strong> <span>ASU Company</span></li>
                                            <li><strong>Project date</strong> <span>01 March, 2022</span></li>
                                            <li><strong>Project URL</strong> <a href="#">www.example.com</a></li>
                                            <li><a href="#" className="btn-visit align-self-start">Visit Website</a></li>
                                        </ul>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </section>

                </main>
            </FrontendLayout>
        </>
    );
}
