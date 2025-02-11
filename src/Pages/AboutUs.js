import React from 'react'
import Navbar from '../Components/Navbar'

function AboutUs() {
  return (
    <>
       <div style={{ backgroundColor: '#094546' ,overflow:'hidden'}}>
         <Navbar/>
        </div>
        <div style={{ position: 'relative', height: '100vh'}}>
      <div
          style={{ height: '30vh', width: '100%' }} 
          className="learnworlds-divider-wrapper on-top js-learnworlds-divider lw-brand-fill js-learnworlds-divider-top js-learnworlds-divider-curtain"
        >
          <svg  className="learnworlds-divider"  xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 283.5 19.6"  preserveAspectRatio="none">
            <path
              className="learnworlds-divider-fill js-learnworlds-divider-fill"
              d="M0 0L0 18.8 141.8 4.1 283.5 18.8 283.5 0z"
              style={{ opacity: 0.33 }}
            ></path>
            <path
              className="learnworlds-divider-fill js-learnworlds-divider-fill"
              d="M0 0L0 12.6 141.8 4 283.5 12.6 283.5 0z"
              style={{ opacity: 0.33 }}
            ></path>
            <path
              className="learnworlds-divider-fill js-learnworlds-divider-fill"
              d="M0 0L0 6.4 141.8 4 283.5 6.4 283.5 0z"
              style={{ opacity: 0.33 }}
            ></path>
            <path
              className="learnworlds-divider-fill js-learnworlds-divider-fill"
              d="M0 0L0 1.2 141.8 4 283.5 1.2 283.5 0z"
            ></path>
          </svg>
        </div>
        <div className="container detailsWebsite my-5">
          <div className="text-center mt-5">
            <h1 className="fw-bold mb-4">Welcome to Gammal Tech!</h1>
            <div className=" justify-content-center">
              <a
                className="btn btn-success col-8 col-md-4 me-3"
                href="/contact"
                role="button"
              >
                
                Contact us via WhatsApp
              </a>
              <a
                className="btn btn-warning col-6 col-md-4"
               href="/course"
               role="button"
              >
               Explore Courses
              </a>
            </div>
          </div>
        </div>
        <div
          style={{ height: '30vh', width: '100%' }} 
          className="learnworlds-divider-wrapper on-bottom js-learnworlds-divider lw-brand-fill js-learnworlds-divider-bottom js-learnworlds-divider-curtain"
        >
          <svg  className="learnworlds-divider"  xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 283.5 19.6"  preserveAspectRatio="none">
            <path
              className="learnworlds-divider-fill js-learnworlds-divider-fill"
              d="M0 0L0 18.8 141.8 4.1 283.5 18.8 283.5 0z"
              style={{ opacity: 0.33 }}
            ></path>
            <path
              className="learnworlds-divider-fill js-learnworlds-divider-fill"
              d="M0 0L0 12.6 141.8 4 283.5 12.6 283.5 0z"
              style={{ opacity: 0.33 }}
            ></path>
            <path
              className="learnworlds-divider-fill js-learnworlds-divider-fill"
              d="M0 0L0 6.4 141.8 4 283.5 6.4 283.5 0z"
              style={{ opacity: 0.33 }}
            ></path>
            <path
              className="learnworlds-divider-fill js-learnworlds-divider-fill"
              d="M0 0L0 1.2 141.8 4 283.5 1.2 283.5 0z"
            ></path>
          </svg>
        </div>
        </div>
    </>
  )
}

export default AboutUs
