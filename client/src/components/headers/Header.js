import React, {useState, useContext} from "react";
import {GlobalState} from '../../GlobalState'
import Cart from './icon/cart.png'
import {Link} from 'react-router-dom'



function Header() {
    const value = useContext(GlobalState)
    return (
       <header>
            {/* Topbar Start */}
            <div className="container-fluid top-bar text-light px-1 wow fadeIn" data-wow-delay="0.1s" style={{backgroundColor: "#111111"}}>
                <div className="row gx-0 align-items-center d-none d-lg-flex">
                    <div className="col-lg-8 px-5 text-start">
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="d-none d-lg-flex">
                                    <div className="flex-shrink-0 btn-sm-square border border-light rounded-circle my-1">
                                        <i className="fa fa-phone text-primary"></i>
                                    </div>
                                    <div className="ps-3">
                                        <small className="text-primary mb-0" style={{fontSize:  "10px" }}>Call Us</small>
                                        <p className="text-light mb-0" style={{fontSize:  "12px",  marginTop: "-5px"}}>+94 764507238</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="d-none d-lg-flex">
                                    <div className="flex-shrink-0 btn-sm-square border border-light rounded-circle my-1">
                                        <i className="fa fa-envelope text-primary"></i>
                                    </div>
                                    <div className="ps-3">
                                        <small className="text-primary mb-0" style={{fontSize:  "10px" }}>Send Mail</small>
                                        <p className="text-light mb-0" style={{fontSize:  "12px",  marginTop: "-5px"}}>info@thengu.com</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="d-none d-lg-flex">
                                    <div className="flex-shrink-0 btn-sm-square border border-light rounded-circle my-1">
                                        <i className="fa fa-search-location text-primary"></i>
                                    </div>
                                    <div className="ps-3">
                                        <small className="text-primary mb-0" style={{fontSize:  "10px" }}>Find Location</small>
                                        <p className="text-light mb-0" style={{fontSize:  "12px",  marginTop: "-5px"}}>Kanakapuram, Kilinochchi</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 px-5 text-end">
                        <small style={{fontSize:  "12px" }}>Follow us:</small>
                        <div className="h-100 d-inline-flex align-items-center">
                            <a className="btn-sm-square text-primary border-end rounded-0" href=""><i className="fab fa-facebook-f"></i></a>
                            <a className="btn-sm-square text-primary border-end rounded-0" href=""><i className="fab fa-twitter"></i></a>
                            <a className="btn-sm-square text-primary border-end rounded-0" href=""><i className="fab fa-linkedin-in"></i></a>
                            <a className="btn-sm-square text-primary pe-0" href=""><i className="fab fa-instagram"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            {/* Topbar End */}


            {/* Navbar Start */}
            <nav className="navbar navbar-expand-lg navbar-dark fixed-top py-lg-0 px-lg-5 wow fadeIn" data-wow-delay="0.1s">
                <a href="/" className="navbar-brand ms-4 ms-lg-0">
                    <h1 className="text-primary m-0">THENGU</h1>
                </a>
                <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav mx-auto p-4 p-lg-0">
                        <a href="/" className="nav-item nav-link">Home</a>
                        <a href="/about" className="nav-item nav-link">About</a>
                        <a href="/service" className="nav-item nav-link">Services</a>
                        <a href="/product" className="nav-item nav-link">Products</a>
                        <a href="/supplier" className="nav-item nav-link">Suppliers</a>
                        <a href="/contact" className="nav-item nav-link">Contact Us</a>
                        <a href="/login" className="nav-item nav-link">LOGIN</a>
                    </div>
                    
                    <div className="h-100 d-inline-flex align-items-center" style={{marginLeft: "20px"}}>
                        <div className="cart-icon">
                            <span>0</span>
                            <Link to="/cart">
                                <img src={Cart} alt="" width="30" style={{width: "40px", marginBottom: "-10px"}}/>
                            </Link>
                        </div>
                    </div>
                    
                </div>
            </nav>
            {/* Navbar End */}
       </header>
    )
    
}

export default Header