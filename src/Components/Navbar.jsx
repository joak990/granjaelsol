import logo from "../img/logo.jpg"
import { useRef, useState } from 'react';

function Navbar() {
    const quienesSomosRef = useRef(null);
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const scrollToQuienesSomos = () => {
        if (quienesSomosRef.current) {
            quienesSomosRef.current.scrollIntoView({ behavior: 'smooth' });
            toggleMenu(); // Cerrar el menú después de hacer clic en un enlace
        }
    };

    return (
        <nav className="bg-white py-4 px-8">
            <div className="flex items-center justify-between">
                <div className="flex items-center">
                    <img src={logo} alt="Logo" className="h-10 w-10 mr-2 rounded-full" />
                    <span className="text-black font-extralight">Granja el Sol</span>
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
                        <a href="#home" className="text-black hover:text-red-600">Inicio</a>
                    </li>
                    <li>
                        <a href="#quienes-somos" className="text-black hover:text-red-600" onClick={scrollToQuienesSomos}>Quienes Somos</a>
                    </li>
                    <li>
                        <a href="#productos" className="text-black hover:text-red-600">Productos</a>
                    </li>
                    <li>
                        <a href="#quienes-somos" className="text-black hover:text-red-600">Contáctanos</a>
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





