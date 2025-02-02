import './Css/bootstrap.min.css';
import './Css/Style.css';
import { Provider } from 'react-redux';
import store from './Redux/store'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contact from './Pages/Contact';
import Course from './Pages/Course';
import Home from './Pages/Home';
import SingleCourses from './Pages/SingleCourses';
import AboutUs from './Pages/AboutUs';

function App() {
  return (
    <Provider store={store}>
    <Router>
      <div className="App">
       
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/course" element={<Course />} />
          <Route path="/AboutUs" element={<AboutUs />} />

          <Route path="/contact" element={<Contact />} /> 
          <Route path="/course/:id" element={<SingleCourses />} />
        </Routes>
      </div>
    </Router>
    </Provider>
  );
}

export default App;
