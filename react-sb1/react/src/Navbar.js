import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // IMPORTANT for toggler
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from './UserContext';
import { useContext } from 'react';

function Navbar() {

    const role = localStorage.getItem("role");
    const navigate = useNavigate();
    const context = useContext(UserContext);

    return (
        <nav className="navbar navbar-expand-sm m-0 p-0 navbar-dark bg-primary fixed-top">
            <div className="container-fluid m-0 p-0">

                <Link className="navbar-brand d-flex align-items-center border p-0 m-0" to="/home">
                    <img 
                        src="/ANR college.jpg" 
                        alt="logo"
                        style={{ height: "54px", width: "auto", objectFit: "contain" }}
                        className="d-block"
                    />
                </Link>


                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarMenu"
                    aria-controls="navbarMenu"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarMenu">

                    <ul className="navbar-nav me-auto">
                        <li className='nav-item'><Link className='nav-link text-light' to='/home'>Home</Link></li>
                        <li className='nav-item'><Link className='nav-link text-light' to='/getResult'>Results</Link></li>
                        <li className='nav-item'><Link className='nav-link text-light' to='/about'>About</Link></li>
                        <li className='nav-item'><Link className='nav-link text-light' to='/courses'>Courses</Link></li>

                        {role === "Admin" ? (
                            <li className='nav-item'><Link className='nav-link text-light' to="/changes">Changes</Link></li>
                        ) : ""}
                    </ul>

                    <ul className="navbar-nav ms-auto">
                        <li className='nav-item'>
                            <Link
                                className='nav-link text-light'
                                to='/'
                                onClick={() => {
                                    localStorage.removeItem("token");
                                    context.setUser("");
                                    navigate("/", { replace: true });
                                }}
                            >
                                Log Out
                            </Link>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>
    );
}

export default Navbar;
