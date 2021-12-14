
import NavBar from './components/Navbar';
import './App.css';
import InterFace from './components/InterFace';
import Testimonial from './components/Testimonial';
import Stream from './components/Stream';
import Service from './components/Service';
import Find from './components/Find';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      {/* <InterFace></InterFace> */}
      <Testimonial></Testimonial>
      {/* <Stream></Stream>
      <Service></Service>
      <Find></Find> */}
    </div>
  );
}

export default App;
