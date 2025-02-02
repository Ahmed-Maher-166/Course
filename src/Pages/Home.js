import React, { useEffect, useState } from 'react';
import Navbar from '../Components/Navbar';
import Childernphoto from '../assets/Childern.webp';
import mapphoto from '../assets/ROAD2.webp';
import Coursephot from '../assets/photocourses.webp';
import data from '../Data/Opinion'
import Footer from '../Components/Footer';
function Home() {
  return (
    <>
      <div className='HomeSec ' style={{ backgroundColor: '#094546' }}>
        <Navbar />
        <div className="container text-white HomeSecchild">
          <div className='row'>
            <div className='col-md-6 pt-5 col-12' >
              <div className='d-block d-md-none' >
                <h1 className='fs-md-1 fs-2 p-md-0 p-4 col-md-12 col-12 mx-auto'>
                  Elevate Your Skills,<br />&emsp;&emsp;Empower Your Future
                </h1>
              </div>
              <div className='d-none d-md-block' >
                <h1 className='fs-md-1 fs-2 p-md-0 p-4 col-md-12 col-12 mx-auto' >
                  Elevate Your Skills,<br />Empower Your Future
                </h1>
              </div>
              <p className='d-md-none d-block col-11 mx-auto'>
                &emsp;&emsp;Master programming, discover your strengths, and gain real-world experience through internships. <br />
                The best performers will be selected to join our team and elevate their careers.
              </p>
              <p className='d-md-block d-none col-md-12 col-11 mx-auto'>
                Master programming, discover your strengths, and gain real-world experience through internships. <br />
                The best performers will be selected to join our team and elevate their careers.
              </p>
              <a href="/AboutUs" role="button" style={{ backgroundColor: '#ff914c' }} className="btn buttonform1 btn btn-primary btn-lg">Learn More</a>
            </div>
            <div className='col-md-6 col-12 mt-2 mx-auto'>
              <img draggable='false' className='mt-5 img-fluid' src={Childernphoto} alt="Home" />
            </div>
          </div>
        </div>
      </div>

      <div className='container-fluid  RoadSec' style={{ backgroundColor: '#14142b0f' }}>
        <div className='container'>
          <div className='row p-0 p-md-5' style={{ position: 'relative' }}>
            <div className='col-md-6 p-0 p-md-5 RoadSecINFO mt-5 col-12'>
              <h2 style={{ color: '#094546', fontSize: '40px', lineHeight: '1.25' }} className="fw-bold">
                Experience the Life<br />Changing Process
              </h2>
              <p style={{ color: '#008080', lineHeight: '2' }} className='d-md-flex d-none'>
                Excellence isn’t just a goal; it’s a way of life. Gammal Tech’s unique curriculum is designed to develop your skills, uncover your strengths, and foster teamwork. We equip you to achieve real success in the competitive job market.
              </p>
              <p style={{ color: '#008080' }} className='d-md-none d-flex'>
                The world’s only platform offering hands-on training with real-world projects.
              </p>
              <button type="button" className="d-md-none d-flex btn btn-primary">Discover roadmap</button>
            </div>
            <div className='col-md-6 p-0 p-md-3 col-12 mt-2 mx-auto'>
              <img draggable='false' className='mt-5 img-fluid' src={mapphoto} alt="Roadmap" />
            </div>
          </div>
        </div>
      </div>

  
      <div className='container-fluid brix d-flex justify-content-center align-items-center' style={{ height:'100vh', backgroundColor: '#094546' }}>
          <div className='container'>
            <div className='row p-0 p-md-5 flex-md-row flex-row-reverse'>
              <img className='col-12 col-md-6' style={{ overflow:'hidden' }} draggable='false' src={Coursephot} alt='Coursephot' />
              <div className='col-md-6 col-11 mx-auto  p-0 p-md-5 text-white'>
                <h2 className='px-4 px-md-5' style={{ fontSize: '35px' }}>Unlock Your Potential Here</h2>
                <p className='px-md-5 px-0' style={{  fontSize: '17px' }}>Discover excellence with Gammal Tech's unparalleled courses, meticulously designed to propel you towards success. Our approach ensures you master skills that matter.</p>
                <a   href="/course"   role="button" className="btn buttonform1 ms-4 ms-md-5 mx-auto ">Explore courses</a>
              </div>
            </div>
          </div>
      </div>
      <div id="carouselExampleControls" style={{ backgroundColor: '#094546' }} className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner pt-3 pt-md-0" style={{ height: '75vh', position: 'relative' }}>
    <h2 className="text-white col-md-4 col-10 py-5 mx-auto">What our students say</h2>

    {data.map((item, index) => (
      <div key={item.id} className={`text-center carousel-item ${index === 0 ? 'active' : ''}`}>
        <div className="col-md-4 col-10 mx-auto" style={{ backgroundColor: '#ffffff' }}>
          <img draggable="false" width={100} height={100} className="mt-5 mb-3 rounded-circle" src={item.imageUrl} alt="photo" />
          <h3>{item.name}</h3>
          <p className="px-5 pb-3">{item.description}</p>
        </div>
      </div>
    ))}
  </div>

  <button
    className="carousel-control-prev mt-2 mt-md-0"
    type="button"
    data-bs-target="#carouselExampleControls"
    data-bs-slide="prev"
    style={{
      position: 'absolute',
      top: '60%',
      left: '10%',
      transform: 'translateY(-50%)',
      width: '60px',
      height: '60px',
      borderRadius: '50%',
      padding: '5px',
      backgroundColor: '#ffffff',
    }}
  >
    <span className="carousel-control-prev-icon" aria-hidden="true">
      <i className="fa fa-arrow-left" style={{ fontSize: '32px', color: '#094546' }}></i>
    </span>
    <span className="visually-hidden">Previous</span>
  </button>

  <button
    className="carousel-control-next mt-2 mt-md-0"
    type="button"
    data-bs-target="#carouselExampleControls"
    data-bs-slide="next"
    style={{
      position: 'absolute',
      top: '60%',
      right: '10%',
      transform: 'translateY(-50%)',
      width: '60px',
      height: '60px',
      borderRadius: '50%',
      padding: '5px',
      backgroundColor: '#ffffff',
    }}
  >
    <span className="carousel-control-next-icon" aria-hidden="true">
      <i className="fa fa-arrow-right" style={{ fontSize: '32px', color: '#094546' }}></i>
    </span>
    <span className="visually-hidden">Next</span>
  </button>
      </div>
 


    

       <Footer/>

    
    
      
    </>
  );
}

export default Home;