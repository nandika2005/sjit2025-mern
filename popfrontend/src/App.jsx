import Home from './components/functionalcompo/Home.jsx';
import About from './components/functionalcompo/About.jsx';
import Gallery from './components/functionalcompo/Gallery.jsx';
import Contact from './components/functionalcompo/Contact.jsx';
import Signup from './components/functionalcompo/Signup.jsx';
import ClassComponent from './components/classcomponent/ClassComponent.jsx';
import Navbar from './components/functionalcompo/Navbar.jsx'
function App() {
  return (
    <main>
        <Navbar />
        <hr></hr>
        <Home />
        <hr></hr>
        <About />
        <hr></hr>
        <Gallery />
        <hr></hr>
        <Contact />
        <hr></hr>
        <Signup />
  </main>
  );
}

export default App;
