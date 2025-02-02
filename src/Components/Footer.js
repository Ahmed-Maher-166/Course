import React from 'react'
import imgbrand from '../assets/GamalTech.webp'

function Footer() {
  return (
    <div className='container-fluid ' style={{ backgroundColor: '#094546' }}>
      <div className='container container-sm-fluid'>
        <div className='row py-5 Foot' >
          <div className='pt-5  col-md-4 col-12'>
                <nav className="navbar navbar-expand-lg navbar-light ">
                    <img draggable='false' src={imgbrand} alt="imgbrand"  className="d-inline-block align-text-top"/>          
                </nav>
                <p className='text-white'>We are an online educational platform that capitalizes on human potential by assisting professionals and aspiring individuals to succeed in their goals.</p>
          </div>
          <div className='pt-5 col-md-5 col-12 row Footcolor' >
            <h3>1. Featured links</h3>
            <div className='col-md-6 col-5'>
                <ul className="nav flex-column">
                    <li className="nav-item">
                        <a className="nav-link" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Courses</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">About us</a>
                    </li>
                </ul>
            </div>
            <div className='col-md-6 col-7'>
                <ul className="nav flex-column">
                    <li className="nav-item">
                        <a className="nav-link" href="#">Contact us</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Terms & Conditions</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Privacy Policy</a>
                    </li>
                </ul>
            </div>

          </div>
          <div className="pt-5 col-md-3 col-12  text-white ">
             <h3>2. Contact Us</h3>
            <div className="d-flex gap-2 gap-md-3 mt-3">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white">
                <i className="fab fa-facebook fa-2x"></i>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white">
                <i className="fab fa-instagram fa-2x"></i>
                </a>
                <a href="https://wa.me" target="_blank" rel="noopener noreferrer" className="text-white">
                <i className="fab fa-whatsapp fa-2x"></i>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white">
                <i className="fab fa-linkedin fa-2x"></i>
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-white">
                <i className="fab fa-youtube fa-2x"></i>
                </a>
                <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="text-white">
                <i className="fab fa-tiktok fa-2x"></i>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white">
                <i className="fab fa-twitter fa-2x"></i>
                </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Footer
