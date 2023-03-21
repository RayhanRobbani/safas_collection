import { Link } from "@inertiajs/react";

export default function Navbar() {
    return (
        <header id="header" className="header d-flex align-items-center fixed-top">
            <div className="container-fluid d-flex align-items-center justify-content-between">
                <Link href={route('home')} className="logo d-flex align-items-center  me-auto me-lg-0">
                    <i className="bi bi-camera"></i>
                    <h1>PhotoFolio</h1>
                </Link>

                <nav id="navbar" className="navbar">
                    <ul>
                        <li><Link href={route('home')} className={ window.location.href == (route('home') + '/') ? "active" : ""}>Home</Link></li>
                        <li className="dropdown">
                            <a href="#"><span>Collection</span>
                                <i className="bi bi-chevron-down dropdown-indicator"></i>
                            </a>
                            <ul>
                                <li><Link href={route('gallery')}>Gallery</Link></li>
                                <li><a href="gallery.html">Notes</a></li>
                                <li><a href="gallery.html">Antiques</a></li>
                                <li className="dropdown">
                                    <a href="#"><span>Sub Menu</span>
                                        <i className="bi bi-chevron-down dropdown-indicator"></i>
                                    </a>
                                    <ul>
                                        <li><a href="#">Sub Menu 1</a></li>
                                        <li><a href="#">Sub Menu 2</a></li>
                                        <li><a href="#">Sub Menu 3</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li><Link href={route('about')} className={ window.location.href == route('about') ? "active" : ""}>About Me</Link></li>
                        <li><Link href={route('contact')} className={ window.location.href == route('contact') ? "active" : ""}>Contact</Link></li>
                    </ul>
                </nav>

                <div className="header-social-links">
                    <a href="https://www.facebook.com/sk.safa911" className="facebook" target="_blank"><i className="bi bi-facebook"></i></a>
                    <a href="https://www.instagram.com/ahmedsafa33" className="instagram" target="_blank"><i className="bi bi-instagram"></i></a>
                </div>
                <i className="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
                <i className="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>
            </div>
        </header>
    );
}
