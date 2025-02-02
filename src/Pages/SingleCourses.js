import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Courses from "../Data/Course";
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

function SingleCourses() {
    const { id } = useParams();
    const [course, setCourse] = useState(null);

    useEffect(() => {
        const filt = Courses.find((item) => item.id == id); 
        setCourse(filt);
    }, [id]);

    const generateLessons = (lessonsPerMonth) => {
        return Array.from({ length: lessonsPerMonth }, (_, index) => `Lesson ${index + 1}`);
    };

    return (
        <>
            <div style={{ backgroundColor: '#094546' }}>
                <Navbar/>
            </div>
            <div className="container">
                {course && (
                    <>
                        <div className="row my-4" >
                            <div className="col-md-6 col-10 mx-auto">
                                <h2>{course.title}</h2>
                            </div>
                                <button className="btn p-3 btn-primary col-md-4 mx-auto  rounded col-11  mt-3" type="button"
                                 style={{ backgroundColor: "#008081",color:'white' }}
                                >
                                    Enroll ${course.price}
                                </button>
                         </div>

                        <div className="my-5 accordion accordion-flush" id="accordionFlushExample">
                            {[...Array(parseInt(course.access))].map((_, monthIndex) => (
                                <div className="accordion-item" key={monthIndex}>
                                    <h2 className="accordion-header" id={`flush-heading${monthIndex}`}>
                                        <button
                                            className="accordion-button collapsed"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target={`#flush-collapse${monthIndex}`}
                                            aria-expanded="false"
                                            aria-controls={`flush-collapse${monthIndex}`}
                                        >
                                            Month {monthIndex + 1}
                                        </button>
                                    </h2>
                                    <div
                                        id={`flush-collapse${monthIndex}`}
                                        className="accordion-collapse collapse"
                                        aria-labelledby={`flush-heading${monthIndex}`}
                                        data-bs-parent="#accordionFlushExample"
                                    >
                                        <div className="accordion-body">
                                            {generateLessons(4).map((lesson, lessonIndex) => (
                                                <p key={lessonIndex}>{lesson}</p>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </>
                )}
            </div>
            <Footer/>    
        </>
    );
}

export default SingleCourses;
