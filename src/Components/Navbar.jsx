




function Navbar() {
    return (
        <nav className="bg-white py-4 px-8">
            <div className="flex items-center justify-between">
                <div className="flex items-center">
                    <img src="./logo.jpg" alt="Logo" className="h-8 w-8 mr-2" />
                    <span className="text-black font-extralight">Granja el Sol</span>
                </div>
                <ul className="flex space-x-6">
                    <li>
                        <a href="#home" className="text-black hover:text-gray-300">Inicio</a>
                    </li>
                    <li>
                        <a href="#quienes-somos" className="text-black hover:text-gray-300">Quienes Somos</a>
                    </li>
                    <li>
                        <a href="#productos" className="text-black hover:text-gray-300">Productos</a>
                    </li>
                    <li>
                        <a href="#contactanos" className="text-black hover:text-gray-300">Contáctanos</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
