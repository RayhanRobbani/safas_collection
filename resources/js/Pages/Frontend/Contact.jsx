import { Head } from "@inertiajs/react";
import FrontendLayout from "@/Layouts/FrontendLayout";
import Introduction from "@/Components/Frontend/Introduction";

export default function Contact() {
    return (
        <>
            <FrontendLayout>
                <Head title="Contact"/>
                <main id="main" data-aos="fade" data-aos-delay="500">

                    <Introduction
                        title={"Contact"}
                        description={"Odio et unde deleniti. Deserunt numquam exercitationem. Officiis quo odio sint voluptas consequatur ut a odio voluptatem. Sit dolorum debitis veritatis natus dolores. Quasi ratione sint. Sit quaerat ipsum dolorem."}
                    />

                    <section id="contact" className="contact">
                        <div className="container">

                            <div className="row gy-4 justify-content-center">

                                <div className="col-lg-3">
                                    <div className="info-item d-flex">
                                        <i className="bi bi-geo-alt flex-shrink-0"></i>
                                        <div>
                                            <h4>Location:</h4>
                                            <p>A108 Adam Street, New York, NY 535022</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-3">
                                    <div className="info-item d-flex">
                                        <i className="bi bi-envelope flex-shrink-0"></i>
                                        <div>
                                            <h4>Email:</h4>
                                            <p>info@example.com</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-3">
                                    <div className="info-item d-flex">
                                        <i className="bi bi-phone flex-shrink-0"></i>
                                        <div>
                                            <h4>Call:</h4>
                                            <p>+1 5589 55488 55</p>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div className="row justify-content-center mt-4">

                                <div className="col-lg-9">
                                    <form action="forms/contact.php" method="post" role="form" className="php-email-form">
                                        <div className="row">
                                            <div className="col-md-6 form-group">
                                                <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required />
                                            </div>
                                            <div className="col-md-6 form-group mt-3 mt-md-0">
                                                <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required />
                                            </div>
                                        </div>
                                        <div className="form-group mt-3">
                                            <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required />
                                        </div>
                                        <div className="form-group mt-3">
                                            <textarea className="form-control" name="message" rows="5" placeholder="Message" required></textarea>
                                        </div>
                                        <div className="my-3">
                                            <div className="loading">Loading</div>
                                            <div className="error-message"></div>
                                            <div className="sent-message">Your message has been sent. Thank you!</div>
                                        </div>
                                        <div className="text-center"><button type="submit">Send Message</button></div>
                                    </form>
                                </div>

                            </div>

                        </div>
                    </section>

                </main>
            </FrontendLayout>
        </>
    );
}
