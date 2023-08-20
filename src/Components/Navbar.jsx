import logo from "../img/logo.jpg"
import { useState } from 'react';
import { Link } from "react-scroll"

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className={`bg-white py-4 px-8 fixed top-0 left-0 w-full z-50 ${menuOpen ? 'shadow-md' : 'md:shadow-none'}`}>
            <div className="flex items-center justify-between">
                <div className="flex items-center">
                    <img src={logo} alt="Logo" className="h-10 w-10 mr-2 rounded-full" />
                    <span className="text-black font-semibold">Granja el Sol</span>
                </div>
                <div className="md:hidden"> {/* Mostrar solo en dispositivos móviles */}
                    <button className="text-gray-600 hover:text-red-600 focus:outline-none" onClick={toggleMenu}>
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            {menuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                            )}
                        </svg>
                    </button>
                </div>
                <ul className={`md:flex ${menuOpen ? 'flex' : 'hidden'} md:space-x-6 mt-4 md:mt-0`}>
                    <li>
                        <Link to="carrousel" spy={true} smooth={true} offset={50} duration={500} className="text-black hover:text-red-600">Inicio</Link>
                    </li>
                    <li>
                        <Link to="about" spy={true} smooth={true} offset={50} duration={500} className="text-black hover:text-red-600" >Quienes Somos</Link>
                    </li>
                    <li>
                        <Link to="productos" spy={true} smooth={true} offset={50} duration={500} className="text-black hover:text-red-600">Productos</Link>
                    </li>
                    <li>
                        <Link to="contactos" spy={true} smooth={true} offset={50} duration={500} className="text-black hover:text-red-600">Contáctanos</Link>
                    </li>
                </ul>
                <div className="flex space-x-4 hidden md:block"> {/* Contenedor de los iconos */}
                    <a href="https://www.facebook.com/Granjaelsolarman" target="_blank" rel="noopener noreferrer">

                    </a>
                    <a href="https://www.instagram.com/granja_el_sol1/" target="_blank" rel="noopener noreferrer">

                    </a>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;





