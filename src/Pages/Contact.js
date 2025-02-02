import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

function Contact() {
  return (
    <>
    <div style={{ backgroundColor: '#094546' }}>
    <Navbar/>
    </div>
    <div className="Contactpages mb-5">
      <div className="container-fluid HeaderImage d-flex justify-content-center align-items-center text-center">
          <div className="container text-white">
            <h2 className="fw-bold fs-1">If you have any question, feel free to ask</h2>
            <p className="mt-3">
              The quickest way to reach us during office hours is by WhatsApp or the Chat on the website. <br />
              Or you can send an email to <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox" className="text-white text-decoration-underline">ahmedre126@gmail.com</a>.
            </p>
          </div>
      </div>
      <div className="container">
          <div className="row">
            <div className="col-md-3 col-10 mx-auto mt-5 mb-4 ContactInfo p-5 text-center" style={{ backgroundColor: '#008081' }}>
              <h2 className="text-white">Information</h2>
              <h4 className="text-white pt-3">Address</h4>
              <h6>18 Abdelkareem Saleh Street, Giza</h6>
              <h4 className="text-white pt-3">Phone</h4>
              <h6>01158238898</h6>
              <h4 className="text-white pt-3">Email</h4>
              <h6>ahmedre126@gmail.com</h6>
            </div>
          </div>
          <div className="row">
  <div
    className="d-flex mt-3 gap-2 gap-md-3 ContactIcon col-md-5 col-sm-6 col-12 mx-auto my-5 my-md-1 justify-content-center"
  style={{flexWrap:'wrap'}}>
    <a
      href="https://facebook.com"
      target="_blank"
      rel="noopener noreferrer"
      className="btn"
    >
      <i className="fab fa-facebook fa-lg fa-md-2x"></i>
    </a>
    <a
      href="https://instagram.com"
      target="_blank"
      rel="noopener noreferrer"
      className="btn"
    >
      <i className="fab fa-instagram fa-lg fa-md-2x"></i>
    </a>
    <a
      href="https://wa.me"
      target="_blank"
      rel="noopener noreferrer"
      className="btn"
    >
      <i className="fab fa-whatsapp fa-lg fa-md-2x"></i>
    </a>
    <a
      href="https://linkedin.com"
      target="_blank"
      rel="noopener noreferrer"
      className="btn"
    >
      <i className="fab fa-linkedin fa-lg fa-md-2x"></i>
    </a>
    <a
      href="https://youtube.com"
      target="_blank"
      rel="noopener noreferrer"
      className="btn"
    >
      <i className="fab fa-youtube fa-lg fa-md-2x"></i>
    </a>
    <a
      href="https://tiktok.com"
      target="_blank"
      rel="noopener noreferrer"
      className="btn"
    >
      <i className="fab fa-tiktok fa-lg fa-md-2x"></i>
    </a>
    <a
      href="https://twitter.com"
      target="_blank"
      rel="noopener noreferrer"
      className="btn"
    >
      <i className="fab fa-twitter fa-lg fa-md-2x"></i>
    </a>
  </div>
          </div>

      </div>

    </div>
    <Footer/>
    </>
   
  );
}

export default Contact;
