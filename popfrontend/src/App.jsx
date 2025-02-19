import Home from './components/functionalcompo/Home.jsx';
import About from './components/functionalcompo/About.jsx';
import Gallery from './components/functionalcompo/Gallery.jsx';
import Contact from './components/functionalcompo/Contact.jsx';
import Signup from './components/functionalcompo/Signup.jsx';
import Navbar from './components/functionalcompo/Navbar.jsx';
import{BrowserRouter,Routes,Route} from 'react-router-dom';
function App() {
  return (
    <main>
       <BrowserRouter>
       <Navbar />
       <Routes>
        <Route path='/' element={ <Home sjit="Hello"/>} />
        <Route path='/About' element={<About />}/>
        <Route path='/Gallery' element={<Gallery/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/Signup' element={<Signup/>}/>
        </Routes>
        </BrowserRouter>
  </main>
  );
}

export default App;
