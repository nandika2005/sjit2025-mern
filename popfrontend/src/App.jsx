import Home from './components/functionalcompo/Home.jsx';
import About from './components/functionalcompo/About.jsx';
import Gallery from './components/functionalcompo/Gallery.jsx';
import Contact from './components/functionalcompo/Contact.jsx';
import Signup from './components/functionalcompo/Signup.jsx';
import Navbar from './components/functionalcompo/Navbar.jsx';
import Login from './components/functionalcompo/Login.jsx';
import{BrowserRouter,Routes,Route} from 'react-router-dom';
import UseEffect from './components/functionalcompo/Hooks/UseEffect.jsx';
import UseEffectApi from './components/functionalcompo/Hooks/UseEffectApi.jsx';
import UseRef from './components/functionalcompo/Hooks/UseRef.jsx';
import UseMemo from './components/functionalcompo/Hooks/UseMemo.jsx';
import UseCallBack from './components/functionalcompo/Hooks/UseCallBack.jsx';
import UseMemoize from './components/functionalcompo/Hooks/UseMemoize.jsx';
import Hoc from './components/functionalcompo/HoC/Hoc.jsx';
import Memo from './components/functionalcompo/Memoization/Memo.jsx';
import LazyLoadingAndSuspense from './components/functionalcompo/Memoization/LazyLoadingAndSuspense.jsx';
import Exam from './components/functionalcompo/ContextAPI/Exam.jsx';

function App() {
  return (
    <main>
       <BrowserRouter>
       <Navbar />
       <Routes>
        <Route path='/' element={ <Home sjit="Hello"/>} />
        <Route path='/About' element={<About />}/>
        <Route path='/Gallery' element={<Gallery/>}/>
        <Route path='/UseEffect' element={<UseEffect/>}/>
        <Route path='/UseEffectApi' element={<UseEffectApi/>}/>
        <Route path='/UseRef' element={<UseRef/>}/>
        <Route path='/UseMemo' element={<UseMemo/>}/>
        <Route path='/UseCallBack' element={<UseCallBack/>}/>
        <Route path='/Usememoize' element={<UseMemoize/>}/>
        <Route path='/Hoc' element={<Hoc/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/Signup' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/Memo' element={<Memo/>}/>
        <Route path='/Lazy' element={<LazyLoadingAndSuspense/>}/>
        <Route path='/Student' element={<Exam/>}/>
        </Routes>
        </BrowserRouter>
  </main>
  );
}

export default App;