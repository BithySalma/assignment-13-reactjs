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
    const myHeadline = useRef();
    const change = () => {
        myHeadline.current.innerText = 'Hello React!'
    }

    const [number,setNumber] = useState(0);

    useEffect(()=>{
        console.log('Changed!');
    },[3]);

    return (
        <div >  
            
            <h1 ref={myHeadline}></h1>
            <button className="btn btn-primary" onClick={change}>Click Me check Use Ref</button> 


            <h1>Number : {number}</h1>
            <button className="btn btn-danger" onClick={()=>setNumber(number+1)}>Increment++</button>

                    { <BrowserRouter>
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