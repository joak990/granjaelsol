import { useState } from 'react';
import { Menu, X, Instagram, Facebook, Send } from 'lucide-react'; // Importamos íconos Lucide
import logo from "../img/LOGHO.png"
// Función de scroll simulada (reemplazando react-scroll para evitar errores de dependencia)
const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
};

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    // Componente de enlace de navegación adaptado para el scroll simulado
    const NavLink = ({ to, children }) => (
        <div 
            onClick={() => {
                scrollToSection(to);
                setMenuOpen(false); // Cierra el menú en móvil después de hacer clic
            }} 
            // Clases de estilo del enlace
            className="text-text-dark md:text-lg text-xl hover:text-primary transition duration-300 cursor-pointer block py-2"
        >
            {children}
        </div>
    );

    return (
        // Aplicamos bg-base y font-heading
        <nav className={`bg-base py-4 px-8 fixed top-0 left-0 w-full z-50 font-heading ${menuOpen ? 'shadow-md' : 'md:shadow-none'}`}>
            <div className="flex items-center justify-between max-w-7xl mx-auto">
                <div className="flex items-center">
                    {/* Placeholder para el Logo (simulando el Link y la imagen) */}
                    <div 
                        onClick={() => scrollToSection("carrousel")} 
                        className="cursor-pointer flex items-center"
                        data-aos="fade-right" data-aos-duration="3000"
                    >
                        {/* Sustituimos la imagen por un placeholder visualmente agradable con bg-secondary */}
                        <div className="h-14 w-14 mr-2 rounded-lg  flex items-center justify-center text-text-light text-2xl font-black object-cover">
                            <img data-aos="fade-right" data-aos-duration="3000" src={logo} alt="Logo" className="h-14 w-14 mr-2 rounded-sm" />
                        </div>
                        {/* Color del texto principal actualizado a text-text-dark */}
                        <span data-aos="zoom-im" data-aos-duration="3000" className="text-text-dark font-extrabold text-xl">Granja el Sol</span>
                    </div>
                </div>

                <div className="md:hidden"> {/* Mostrar solo en dispositivos móviles */}
                    {/* Ícono de menú con hover text-primary */}
                    <button className="text-text-dark hover:text-primary focus:outline-none" onClick={toggleMenu}>
                        {menuOpen ? (
                            <X className="h-7 w-7" />
                        ) : (
                            <Menu className="h-7 w-7" />
                        )}
                    </button>
                </div>

                {/* Menú de navegación */}
                <ul className={`md:flex ${menuOpen ? 'flex flex-col absolute top-full left-0 w-full bg-base shadow-lg p-4' : 'hidden'} md:space-x-8 md:mt-0 items-center justify-center`}>
                    <li data-aos="zoom-im" data-aos-duration="3000" >
                        <NavLink to="carrousel">Inicio</NavLink>
                    </li>
                    <li data-aos="zoom-im" data-aos-duration="3000">
                        <NavLink to="about">Quienes Somos</NavLink>
                    </li>
                    <li data-aos="zoom-im" data-aos-duration="3000" >
                        <NavLink to="productos">Productos</NavLink>
                    </li>
                    <li data-aos="zoom-im" data-aos-duration="3000">
                        <NavLink to="contactos">Contáctanos</NavLink>
                    </li>
                </ul>
                
                {/* Íconos de redes sociales */}
                <div className="hidden md:block">
                    <div data-aos="zoom-im" data-aos-duration="3000" className="flex items-center space-x-4">
                        {/* Sustitución de imágenes por íconos Lucide, usando hover:text-primary */}
                        <a href="https://www.instagram.com/elgustoenfamilia/" target="_blank" rel="noopener noreferrer" 
                        className="text-text-dark hover:text-primary transition duration-300">
                            <Instagram className="h-6 w-6" />
                        </a>
                        <a href="https://www.facebook.com/Granjaelsolarman" target="_blank" rel="noopener noreferrer" 
                        className="text-text-dark hover:text-primary transition duration-300">
                            <Facebook className="h-6 w-6" />
                        </a>
                        <a href="https://api.whatsapp.com/send?phone=541131666991" target="_blank" rel="noopener noreferrer" 
                        className="text-text-dark hover:text-primary transition duration-300">
                            <Send className="h-6 w-6" /> 
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;




