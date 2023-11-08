import { useRef,useState,useEffect } from "react";
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from '../src/pages/Home';
import About from '../src/pages/About';
import Blog from '../src/pages/Blog';
import Contact from '../src/pages/Contact';
import Project from '../src/pages/Project';
import Service from '../src/pages/Service';
import Menu from '../src/Menu';

const App = () => {
    const changeText = useRef();
    const change = () => {
        changeText.current.innerText = 'Hello Everybody I am from useRef,useEffect and useState!'
    }

    const [number,setNumber] = useState(0);

    useEffect(()=>{
        console.log('Changed!');
    },[5]);

    return (
        <div >  
            
            <h1 className="d-flex justify-content-center" ref={changeText}></h1>
            <button className="btn btn-dark d-grid gap-2 col-6 mx-auto" onClick={change}>Hello I AM FROM useRef</button> 
            



            <h1 className="d-flex justify-content-center">Number : {number}</h1>
            <button className="btn btn-success d-grid gap-2 col-6 mx-auto" onClick={()=>setNumber(number+1)}>Click me</button>



            {  <BrowserRouter>
                <Menu/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/blog" element={<Blog/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                    <Route path="/project" element={<Project/>}/>
                    <Route path="/service" element={<Service/>}/>
                    
                </Routes>
            </BrowserRouter> }
            

            
        </div>
    );
};

export default App;