// import { useState, useEffect } from 'react';
import Courses from "../Data/Course";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Link ,useNavigate } from "react-router-dom";

function Course() {
  const navigate = useNavigate();
  // const [Courses, setCourses] = useState([]);

  // useEffect(() => {
  //   const getCourses = async () => {
  //     const response = await fetch('https://Courses.free.beeceptor.com/todos');
  //     const data = await response.json();
  //     setCourses(data);
  //   };

  //   getCourses();
  // }, []);
  return (
    <>
        <div style={{ backgroundColor: '#094546' }}>
        <Navbar/>
        </div>
        <div className="container my-5">
          <h1 className="text-center mb-4">Available Courses</h1>
          <div className="row justify-content-center gap-4">
            {Courses.map((item) => (
              <div key={item.id}className=" col-md-5 col-sm-12"style={{ backgroundColor: "#094546", color: "white" }}>
                <div className="row g-0 py-3 align-items-center " style={{ padding: "0 !important",   margin: "0 !important"}}>
                  <img  draggable="false"  src={item.img}  className="img-fluid col-md-5 rounded-start"  alt={item.title}  
                    style={{ maxHeight: "150px", objectFit: "cover" }}
                  />
                  <div className="col-md-6 ms-md-4 ms-0 py-md-0 py-4 text-left">
                    <h5 className="card-title">{item.id} - {item.title}</h5>
                    <button className="btn col-md-10 col-12 btn-primary mt-3"   type="button" style={{ backgroundColor: "#008081" }} 
                     onClick={() => navigate(`/course/${item.id}`)}>
                      Enroll
                    </button>
                    <h5 className="mt-3  CoursesPrice">${item.price}</h5>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <Footer/>
    </>
 
  );
}

export default Course;
