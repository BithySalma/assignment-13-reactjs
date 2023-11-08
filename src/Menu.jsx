
import { Link, NavLink } from 'react-router-dom';

const Menu = () => {
    return (


<div className="d-flex justify-content-center">
            <div className="row gx-5">
                <div className="col">
                <h4>Link</h4>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/blog">Blog</Link></li>
                <li><Link to="/project">Project</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/service">Service</Link></li>
            </ul>
                </div>
                <div className="col-md-6 d-flex justify-content-center">
  
                <h4>Nav Link</h4>
            <ul>
                <li><NavLink className={({isActive})=>isActive?"active-item":"pending-item"} to="/">Home</NavLink></li>
                <li><NavLink className={({isActive})=>isActive?"active-item":"pending-item"} to="/about">About</NavLink></li>
                <li><NavLink className={({isActive})=>isActive?"active-item":"pending-item"} to="/blog">Blog</NavLink></li>
                <li><NavLink className={({isActive})=>isActive?"active-item":"pending-item"} to="/project">Project</NavLink></li>
                <li><NavLink className={({isActive})=>isActive?"active-item":"pending-item"} to="/contact">Contact</NavLink></li>
                <li><NavLink className={({isActive})=>isActive?"active-item":"pending-item"} to="/service">Service</NavLink></li>
            </ul>
                </div>
            </div>
          
            <hr />
        </div>
        

    );
};

export default Menu;