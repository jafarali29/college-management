import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from './UserContext';
import { useContext } from 'react';
function Navbar(){
    const role=localStorage.getItem("role");
     const navigate=useNavigate();
     const context=useContext(UserContext);
    return(
        <nav style={{height:'40px'}} className='container-fluid navbar fixed-top navbar-expand-sm bg-primary'>
            <div className='container-fluid d-flex'>
                    <ul className='navbar-nav'>
                        <li className='nav-item'><Link className='nav-link text-light' to='/home'>Home</Link></li>
                        <li className='nav-item'><Link className='nav-link text-light' to='/results'>Results</Link></li>
                        <li className='nav-item'><Link className='nav-link text-light' to='/about'>About</Link></li>
                        <li className='nav-item'><Link className='nav-link text-light' to='/courses'>Courses</Link></li>
                        {role==="Admin"?(<li className='nav-item'><Link className='nav-link text-light' to="/changes">Changes</Link></li>):""}
                    </ul>
                     <ul className='navbar-nav ms-auto'>
                        <li className='nav-item'><Link className='nav-link text-light' to='/' onClick={()=>{
                            localStorage.removeItem("token");
                            context.setUser("");
                            navigate("/",{replace:true});
                        }}>Log Out</Link></li>

                    </ul>
            </div>
        </nav>
    );
}
export default Navbar;