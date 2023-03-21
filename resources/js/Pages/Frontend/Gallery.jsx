import FrontendLayout from "@/Layouts/FrontendLayout";
import Introduction from "@/Components/Frontend/Introduction";
import { Head } from "@inertiajs/react";

export default function Gallery() {
    return (
        <>
            <FrontendLayout>
                <Head title="Gallery" />
                <main id="main" data-aos="fade" data-aos-delay="500">

                    <Introduction
                        title={"Nature (16 images)"}
                        description={"Odio et unde deleniti. Deserunt numquam exercitationem. Officiis quo odio sint voluptas consequatur ut a odio voluptatem. Sit dolorum debitis veritatis natus dolores. Quasi ratione sint. Sit quaerat ipsum dolorem."}
                    />

                    <section id="gallery" className="gallery">
                        <div className="container-fluid">

                            <div className="row gy-4 justify-content-center">
                                <div className="col-xl-3 col-lg-4 col-md-6">
                                    <div className="gallery-item h-100">
                                        <img src="frontend/assets/img/gallery/gallery-1.jpg" className="img-fluid" alt="" />
                                        <div className="gallery-links d-flex align-items-center justify-content-center">
                                            <a href="frontend/assets/img/gallery/gallery-1.jpg" title="Gallery 1" className="glightbox preview-link"><i className="bi bi-arrows-angle-expand"></i></a>
                                            <a href="gallery-single.html" className="details-link"><i className="bi bi-link-45deg"></i></a>
                                        </div>
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
