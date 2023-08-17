import {BsFacebook} from 'react-icons/Bs'
import {BsInstagram} from 'react-icons/Bs'

import { useRef } from 'react'; // Importa useRef desde 'react'

function Navbar() {
    const quienesSomosRef = useRef(null); // Crea una referencia al elemento de "Quienes Somos"

    const scrollToQuienesSomos = () => {
        if (quienesSomosRef.current) {

            quienesSomosRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };
   
    return (
        <nav className="bg-white py-4 px-8">
            <div className="flex items-center justify-between">
                <div className="flex items-center">
                    <img src="./logo.jpg" alt="Logo" className="h-10 w-10 mr-2 rounded-full" />
                    <span className="text-black font-extralight">Granja el Sol</span>
                </div>
                <ul className="flex space-x-6">
                    <li>
                        <a href="#home" className="text-black hover:text-gray-300">Inicio</a>
                    </li>
                    <li>
                        <a href="#quienes-somos" className="text-black hover:text-gray-300" onClick={scrollToQuienesSomos}>Quienes Somos</a>
                    </li>
                    <li>
                        <a href="#productos" className="text-black hover:text-gray-300">Productos</a>
                    </li>
                    <li>
                        <a href="#quienes-somos"className="text-black hover:text-gray-300">Contáctanos</a>
                    </li>
                </ul>
            <a href="https://www.facebook.com/Granjaelsolarman">
            <BsFacebook />
            </a>
            <a href="https://www.instagram.com/granja_el_sol1/">
            <BsInstagram />
            </a>
            </div>
        </nav>
    );
}

export default Navbar;




