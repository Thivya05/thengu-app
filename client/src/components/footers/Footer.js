import React, {useState, useContext} from "react";
import {GlobalState} from '../../GlobalState'
import img1 from '../../img/footer-img1.png';
import img2 from '../../img/footer-img2.png';
import img3 from '../../img/footer-img3.png';
import img4 from '../../img/footer-img4.png';
import img5 from '../../img/footer-img5.png';
import img6 from '../../img/footer-img6.png';

function Footer() {
    const value = useContext(GlobalState)
    return (
       <footer>
            {/* Footer Start */}
            <div class="container-fluid bg-dark text-light footer my-6 mb-0 py-2 wow fadeIn" data-wow-delay="0.1s">
                <div class="container py-5">
                    <div class="row g-5">
                        <div class="col-lg-3 col-md-6">
                            <h4 class="text-light mb-4">Office Address</h4>
                            <p class="mb-2"><i class="fa fa-map-marker-alt me-3"></i>No-28/788, Kanakapuram, Kilinochchi, Northern</p>
                            <p class="mb-2"><i class="fa fa-phone-alt me-3"></i>+012 345 67890</p>
                            <p class="mb-2"><i class="fa fa-envelope me-3"></i>info@thengu.com</p>
                            <div class="d-flex pt-2">
                                <a class="btn btn-square btn-outline-light rounded-circle me-1" href="javascript:void(0)"><i class="fab fa-twitter"></i></a>
                                <a class="btn btn-square btn-outline-light rounded-circle me-1" href="javascript:void(0)"><i class="fab fa-facebook-f"></i></a>
                                <a class="btn btn-square btn-outline-light rounded-circle me-1" href="javascript:void(0)"><i class="fab fa-youtube"></i></a>
                                <a class="btn btn-square btn-outline-light rounded-circle me-0" href="javascript:void(0)"><i class="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6">
                            <h4 class="text-light mb-4">Quick Links</h4>
                            <a class="btn btn-link" href="javascript:void(0)">About Us</a>
                            <a class="btn btn-link" href="javascript:void(0)">Contact Us</a>
                            <a class="btn btn-link" href="javascript:void(0)">Our Services</a>
                            <a class="btn btn-link" href="javascript:void(0)">Terms & Condition</a>
                            <a class="btn btn-link" href="javascript:void(0)">Support</a>
                        </div>
                        <div class="col-lg-3 col-md-6">
                            <h4 class="text-light mb-4">Quick Links</h4>
                            <a class="btn btn-link" href="javascript:void(0)">About Us</a>
                            <a class="btn btn-link" href="javascript:void(0)">Contact Us</a>
                            <a class="btn btn-link" href="javascript:void(0)">Our Services</a>
                            <a class="btn btn-link" href="javascript:void(0)">Terms & Condition</a>
                            <a class="btn btn-link" href="javascript:void(0)">Support</a>
                        </div>
                        <div class="col-lg-3 col-md-6">
                            <h4 class="text-light mb-4">Photo Gallery</h4>
                            <div class="row g-2">
                                <div class="col-4">
                                    <img class="img-fluid bg-light rounded p-1" src={img1} alt="Image" />
                                </div>
                                <div class="col-4">
                                    <img class="img-fluid bg-light rounded p-1" src={img2} alt="Image" />
                                </div>
                                <div class="col-4">
                                    <img class="img-fluid bg-light rounded p-1" src={img3} alt="Image" />
                                </div>
                                <div class="col-4">
                                    <img class="img-fluid bg-light rounded p-1" src={img4} alt="Image" />
                                </div>
                                <div class="col-4">
                                    <img class="img-fluid bg-light rounded p-1" src={img5} alt="Image" />
                                </div>
                                <div class="col-4">
                                    <img class="img-fluid bg-light rounded p-1" src={img6} alt="Image" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Footer End */}


            {/* Copyright Start */}
            <div class="container-fluid copyright text-light py-4 wow fadeIn" data-wow-delay="0.1s">
                <div class="container">
                    <div class="row">
                        <div class="col-md-6 text-center text-md-start mb-3 mb-md-0">
                            &copy; <a href="javascript:void(0)">Thengu</a>, All Right Reserved.
                        </div>
                        <div class="col-md-6 text-center text-md-end">
                            Designed By <a href="javascript:void(0)">Our team</a>
                        </div>
                    </div>
                </div>
            </div>
            {/* Copyright End */}
       </footer>
    )
    
}

export default Footer