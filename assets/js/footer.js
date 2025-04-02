function createFooter() {
    const footerHTML = `
    <footer class="footer-bg text-light pt-5 footer-animation">
        <div class="container">
            <div class="row">
                <div class="col-lg-4 col-md-6 mb-4 footer-text">
                    <a class="navbar-brand text-uppercase text-light" href="index.html">
                        <span class="h4">IAS</span> <span class="h4 semi-bold-600">ISIMG</span>
                    </a>
                    <p class="mt-3">
                        Empowering students with technical, entrepreneurial, and leadership skills to foster innovation and industry readiness.
                    </p>
                    <ul class="list-inline mt-3">
                        <li class="list-inline-item">
                            <a class="text-light" target="_blank" href="https://www.facebook.com/people/ISIMG-SB-IAS-Chapter/61557478071103/">
                                <i class='bx bxl-facebook-square bx-md'></i>
                            </a>
                        </li>
                        <li class="list-inline-item">
                            <a class="text-light" target="_blank" href="https://www.linkedin.com/company/ieee-ias-chapter-isimg-student-branch/">
                                <i class='bx bxl-linkedin-square bx-md'></i>
                            </a>
                        </li>
                        <li class="list-inline-item">
                            <a class="text-light" target="_blank" href="https://www.instagram.com/ias_chapter_isimg_sb/">
                                <i class='bx bxl-instagram bx-md'></i>
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="col-lg-2 col-md-6 mb-4">
                    <h5 class="pb-3">Quick Links</h5>
                    <ul class="list-unstyled">
                        <li class="pb-2">
                            <a class="text-decoration-none text-light" href="index.html"><i class='bx bx-chevron-right'></i> Home</a>
                        </li>
                        <li class="pb-2">
                            <a class="text-decoration-none text-light" href="about"><i class='bx bx-chevron-right'></i> About Us</a>
                        </li>
                        <li class="pb-2">
                            <a class="text-decoration-none text-light" href="about.html"><i class='bx bx-chevron-right'></i> Team</a>
                        </li>
                        <li class="pb-2">
                            <a class="text-decoration-none text-light" href="index.html#activities"><i class='bx bx-chevron-right'></i> Activities</a>
                        </li>
                        <li class="pb-2">
                            <a class="text-decoration-none text-light" href="contact.html"><i class='bx bx-chevron-right'></i> Contact</a>
                        </li>
                    </ul>
                </div>
                <div class="col-lg-3 col-md-6 mb-4">
                    <h5 class="pb-3">Contact Us</h5>
                    <ul class="list-unstyled">
                        <li class="pb-2">
                            <i class='bx bx-phone'></i> <a class="text-decoration-none text-light" href="#">+216 24 875 631</a>
                        </li>
                        <li class="pb-2">
                            <i class='bx bx-envelope'></i> <a class="text-decoration-none text-light" href="mailto:ieee.isimg.ias.sbc@gmail.com">ieee.isimg.ias.sbc@gmail.com
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="col-lg-3 col-md-6 mb-4">
                    <h5 class="pb-3">Join IEEE </h5>
                    <p>
                        Join IEEE and unlock a world of innovation, networking, and career opportunities! Become a part of the global tech community today!
                    </p>
                </div>
            </div>
        </div>
        <div style="background-color: #3E7B27;" class="py-3">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 col-sm-12">
                        <p class="text-lg-start text-center mb-0">
                            © 2025 IEEE IAS ISIMG. All Rights Reserved.
                        </p>
                    </div>
                    <div class="col-lg-6 col-sm-12">
                        <p class="text-lg-end text-center mb-0">
                            Created by <strong>RAKIA SOUEI</strong>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    `;
    document.body.insertAdjacentHTML('beforeend', footerHTML);
}

// Call the function to create the footer
createFooter();
