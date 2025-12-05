import { useState } from "react";
// Usaremos 'react-scroll' para el botón de 'Hacer un Pedido' si tu componente lo usa.
import { Link, animateScroll as scroll } from "react-scroll"; 

// ⭐️ Importación de tus datos locales desde el archivo separado
import { carne, cerdo, pollos } from "./productosData"; 

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
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-7 max-w-7xl mx-auto">
            {products &&
                products.map((elem, index) => (
                    <div
                        key={elem.id || index} 
                        // Clases de diseño de las tarjetas
                        className="bg-text-light flex flex-col items-center justify-center w-full p-4 md:p-6 rounded-xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-[1.03] duration-300 border border-primary/20"
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
                            <button className="mt-2 w-full py-2 text-sm md:text-base font-bold rounded-lg bg-primary text-text-light hover:bg-secondary transition duration-200 shadow-md">
                                Ver Detalles
                            </button>
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
    
    // Obtiene los productos del array local según la pestaña activa
    const productsToShow = allProducts[activeCategory] || [];

    return (
        <div data-aos="zoom-in-right" data-aos-duration="1500" className="md:mt-28 bg-white px-4 md:px-8 py-16" id="productos">
            <h1 className="text-center text-4xl md:text-5xl font-extralight mb-12 font-serif text-text-dark">
                Nuestros Productos
            </h1>

            {/* Selector de Categorías (Pestañas) */}
            <div className="flex justify-center mb-10 overflow-x-auto">
                <div className="flex space-x-2 p-1 rounded-xl bg-gray-200 shadow-inner">
                    {CATEGORIES.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`
                                py-2 px-6 rounded-xl text-lg font-heading font-semibold transition duration-300 whitespace-nowrap
                                ${activeCategory === category
                                    // ⭐️ Reemplacé tus clases de color por las del código original para mantener el estilo
                                    ? 'bg-orange-200 text-white shadow-md' // Adaptado del código original (bg-orange-200, text-white)
                                    : 'text-text-dark hover:bg-gray-300 hover:text-red-900' // Adaptado del código original (hover:bg-red-900)
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
                // Usamos el nuevo componente CardProducts para mostrar los datos de la pestaña activa
                <CardProducts products={productsToShow} />
            ) : (
                <div className="text-center py-10 text-xl text-secondary font-heading">
                    {`No hay productos disponibles en la categoría de ${activeCategory}.`}
                </div>
            )}

            {/* Botón de Pedido */}
            <div className="mt-16 flex justify-center">
                <Link to="contactos" spy={true} smooth={true} offset={-100} duration={500}>
                    {/* Botón adaptado al estilo de tu código original (bg-orange-200, hover:bg-red-900) */}
                    <button
                        className="bg-orange-200 w-60 py-3 rounded-xl items-center text-white text-xl font-bold hover:bg-red-900 transition duration-300 shadow-lg font-heading"
                    >
                        Hacer un Pedido 📞
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default Productos;
