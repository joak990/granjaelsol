import { useState } from "react";
import { Search, X } from "lucide-react";
// Usaremos 'react-scroll' para el botón de 'Hacer un Pedido' si tu componente lo usa.
import { Link, animateScroll as scroll } from "react-scroll"; 

// ⭐️ Importación de tus datos locales desde el archivo separado
import { carne, cerdo, pollos } from "./Productosdata"; 

// 1. Definición de la función de desplazamiento (simula una función faltante en el segundo código)
const scrollToSection = (id) => {
    scroll.scrollTo(id, {
        duration: 500,
        delay: 0,
        smooth: 'easeInOutQuart',
        offset: -100 // Ajusta si es necesario
    });
};

// 2. Definición del objeto de datos mapeado a categorías
// Esto es crucial para usar la lógica de pestañas (activeCategory)
const allProducts = {
    'Vacunos': carne,
    'Cerdo': cerdo,
    'Pollos': pollos
};

const CATEGORIES = ['Vacunos', 'Cerdo', 'Pollos']; 

// 3. Componente CardProducts (Movido al archivo Productos.jsx para simplificar el ejemplo, 
//    aunque idealmente debe estar en CardProducts.jsx como lo tenías originalmente)

const CardProducts = ({ products }) => {
    const getPlaceholderImage = (index, name) => {
        // Colores placeholder. Reemplaza con tus clases de Tailwind reales si son diferentes.
        const colors = ['bg-primary', 'bg-secondary', 'bg-accent-positive', 'bg-text-dark']; 
        const color = colors[index % colors.length];
        return (
            <div className={`mt-1 h-32 w-32 md:h-44 md:w-44 rounded-2xl flex items-center justify-center text-3xl font-extrabold text-text-light ${color} shadow-inner`}>
                {name ? name.substring(0, 2) : 'PZ'} 
            </div>
        );
    };

    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 md:gap-8 max-w-7xl mx-auto">
            {products &&
                products.map((elem, index) => (
                    <div
                        key={elem.id || index} 
                        // Clases de diseño de las tarjetas
                        className="bg-text-light flex flex-col items-center justify-center w-full p-4 md:p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:scale-105 duration-300 border border-primary/20 hover:border-primary/50"
                    >
                        {elem.image ? (
                            <img
                                className="mt-1 object-cover h-32 w-32 md:h-44 md:w-44 rounded-2xl shadow-md"
                                src={elem.image}
                                alt={elem.name}
                            />
                        ) : (
                            getPlaceholderImage(index, elem.name)
                        )}
                        
                        <div className="flex flex-col gap-1 items-center justify-start w-full mt-4">
                            <h6 className="text-text-dark text-lg md:text-xl font-heading font-bold text-center leading-tight">{elem.name}</h6>
                            <span className="text-center text-primary w-full font-bold text-lg md:text-2xl mt-1">
                                {elem.description}
                            </span>
                            {/* Botón de "Ver Detalles" del diseño nuevo */}
                        </div>
                    </div>
                ))}
        </div>
    );
};


// 4. Componente Principal Productos

function Productos() {
    // Estado para manejar la pestaña activa (Vacunos, Cerdo, Pollos)
    const [activeCategory, setActiveCategory] = useState(CATEGORIES[0]);
    const [searchTerm, setSearchTerm] = useState("");
    
    // Obtiene los productos del array local según la pestaña activa
    let productsToShow = allProducts[activeCategory] || [];
    
    // Filtrar por búsqueda
    if (searchTerm.trim()) {
        productsToShow = productsToShow.filter(product =>
            product.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }

    return (
        <div data-aos="zoom-in-right" data-aos-duration="1500" className="md:mt-28 bg-gradient-to-b from-white to-gray-50 px-4 md:px-8 py-16" id="productos">
            <div className="text-center mb-12">
                <h1 className="text-center text-4xl md:text-5xl font-heading font-extrabold mb-4 text-text-dark">
                    Nuestros Productos
                </h1>
                <p className="text-lg text-text-dark/70 font-body max-w-2xl mx-auto">
                    Selecciona entre nuestras categorías premium de carnes frescas
                </p>
            </div>

            {/* Barra de búsqueda */}
            <div className="flex justify-center mb-8 px-2">
                <div className="relative w-full md:w-96">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                        type="text"
                        placeholder="Buscar producto..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-10 pr-10 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition"
                    />
                    {searchTerm && (
                        <button
                            onClick={() => setSearchTerm("")}
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                        >
                            <X className="w-5 h-5" />
                        </button>
                    )}
                </div>
            </div>

            {/* Selector de Categorías (Pestañas) */}
            <div className="flex justify-center mb-12 px-2">
                <div className="flex flex-wrap gap-2 md:gap-3 p-2 md:p-3 rounded-xl bg-gray-100 shadow-md border border-gray-200 justify-center w-full md:w-auto">
                    {CATEGORIES.map((category) => (
                        <button
                            key={category}
                            onClick={() => {
                                setActiveCategory(category);
                                setSearchTerm("");
                            }}
                            className={`
                                py-2 md:py-3 px-5 md:px-8 rounded-lg text-base md:text-lg font-heading font-semibold transition duration-300 whitespace-nowrap transform hover:scale-105
                                ${activeCategory === category
                                    ? 'bg-primary text-white shadow-lg' 
                                    : 'text-text-dark hover:bg-gray-200 bg-white'
                                }
                            `}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </div>
            
            {/* Visualización de Productos */}
            {productsToShow.length > 0 ? (
                <>
                    <div className="text-center mb-4 text-sm text-text-dark/60">
                        Mostrando {productsToShow.length} producto{productsToShow.length !== 1 ? 's' : ''}
                    </div>
                    <CardProducts products={productsToShow} />
                </>
            ) : (
                <div className="text-center py-10 text-xl text-secondary font-heading">
                    {searchTerm 
                        ? `No se encontraron productos con "${searchTerm}" en ${activeCategory}.`
                        : `No hay productos disponibles en la categoría de ${activeCategory}.`
                    }
                </div>
            )}

            {/* Botón de Pedido */}
            <div className="mt-16 flex justify-center">
                <Link to="contactos" spy={true} smooth={true} offset={-100} duration={500}>
                    {/* Botón adaptado al estilo de tu código original (bg-orange-200, hover:bg-red-900) */}
                    <button
                        className="bg-primary w-60 py-3 rounded-xl items-center text-white text-xl font-bold hover:bg-secondary transition duration-300 shadow-lg font-heading"
                    >
                        Hacer un Pedido 📞
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default Productos;
