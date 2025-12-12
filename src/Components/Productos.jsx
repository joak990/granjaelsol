import { useState } from "react";
import { Search, X, Heart, ChevronDown, ChevronUp, Zap } from "lucide-react";
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
    const [favorites, setFavorites] = useState(new Set());
    const [expandedProduct, setExpandedProduct] = useState(null);

    const toggleFavorite = (productId) => {
        const newFavorites = new Set(favorites);
        if (newFavorites.has(productId)) {
            newFavorites.delete(productId);
        } else {
            newFavorites.add(productId);
        }
        setFavorites(newFavorites);
    };

    const toggleExpanded = (productId) => {
        setExpandedProduct(expandedProduct === productId ? null : productId);
    };

    const getPlaceholderImage = (index, name) => {
        const colors = ['bg-gradient-to-br from-primary to-secondary', 'bg-gradient-to-br from-secondary to-primary', 'bg-gradient-to-br from-accent-positive to-primary', 'bg-gradient-to-br from-text-dark to-secondary']; 
        const color = colors[index % colors.length];
        return (
            <div className={`w-full h-48 md:h-56 rounded-t-3xl flex items-center justify-center text-5xl md:text-6xl font-extrabold text-text-light ${color}`}>
                {name ? name.substring(0, 1) : 'P'} 
            </div>
        );
    };

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 max-w-7xl mx-auto">
            {products &&
                products.map((elem, index) => (
                    <div
                        key={elem.id || index}
                        className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 h-full flex flex-col"
                    >
                        {/* Imagen Container */}
                        <div className="relative w-full h-48 md:h-56 overflow-hidden bg-gray-200">
                            {elem.image ? (
                                <img
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    src={elem.image}
                                    alt={elem.name}
                                />
                            ) : (
                                getPlaceholderImage(index, elem.name)
                            )}
                            
                            {/* Overlay gradiente en hover */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                            {/* Badge de categoría */}
                            <div className="absolute top-4 left-4 bg-primary text-white px-4 py-1 rounded-full text-xs md:text-sm font-bold shadow-lg">
                                Premium
                            </div>

                            {/* Botón de favorito */}
                            <button
                                onClick={() => toggleFavorite(elem.id)}
                                className="absolute top-4 right-4 bg-white/90 hover:bg-primary text-primary hover:text-white p-2 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 backdrop-blur-sm"
                            >
                                <Heart
                                    size={20}
                                    className={favorites.has(elem.id) ? "fill-current" : ""}
                                />
                            </button>
                        </div>

                        {/* Contenido de la tarjeta */}
                        <div className="flex flex-col flex-grow p-5 md:p-6">
                            {/* Nombre del producto */}
                            <h3 className="text-lg md:text-xl font-heading font-bold text-text-dark mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                                {elem.name}
                            </h3>

                            {/* Descripción/Precio */}
                            <div className="flex items-baseline gap-2 mb-4">
                                <span className="text-2xl md:text-3xl font-bold text-primary">
                                    {elem.description}
                                </span>
                            </div>

                            {/* Línea divisoria */}
                            <div className="w-12 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mb-4"></div>

                            {/* Contenido expandible */}
                            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${expandedProduct === elem.id ? 'max-h-96 opacity-100 mb-4' : 'max-h-0 opacity-0'}`}>
                                <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-4 rounded-2xl border border-gray-200 space-y-3">
                                    {/* Características del producto */}
                                    <div>
                                        <h4 className="text-sm font-bold text-primary mb-2 flex items-center gap-2">
                                            <Zap size={16} />
                                            Características
                                        </h4>
                                        <ul className="text-xs text-gray-700 space-y-1">
                                            <li>✓ Producto 100% fresco</li>
                                            <li>✓ Seleccionado cuidadosamente</li>
                                            <li>✓ Garantía de calidad</li>
                                            <li>✓ Entrega rápida</li>
                                        </ul>
                                    </div>

                                    {/* Descripción detallada */}
                                    <div>
                                        <h4 className="text-sm font-bold text-primary mb-1">Descripción</h4>
                                        <p className="text-xs text-gray-600 leading-relaxed">
                                            Producto premium de Granja El Sol. Seleccionado con los más altos estándares de calidad para garantizar calidad y sabor en cada compra.
                                        </p>
                                    </div>

                                    {/* Información adicional */}
                                    <div className="grid grid-cols-2 gap-2 pt-2 border-t border-gray-300">
                                        <div className="text-center">
                                            <p className="text-xs text-gray-500">Disponibilidad</p>
                                            <p className="text-sm font-bold text-green-600">En Stock</p>
                                        </div>
                                        <div className="text-center">
                                            <p className="text-xs text-gray-500">Categoría</p>
                                            <p className="text-sm font-bold text-primary">Premium</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Descripción breve (cuando no está expandido) */}
                            {expandedProduct !== elem.id && (
                                <p className="text-sm text-gray-600 mb-4 flex-grow">
                                    Producto fresco de la más alta calidad, seleccionado especialmente para vos.
                                </p>
                            )}

                            {/* Botón de Detalles */}
                            <button
                                onClick={() => toggleExpanded(elem.id)}
                                className="w-full bg-gradient-to-r from-primary to-secondary hover:shadow-lg text-white font-bold py-3 px-4 rounded-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 text-sm md:text-base mt-auto"
                            >
                                {expandedProduct === elem.id ? (
                                    <>
                                        <ChevronUp size={18} />
                                        Ver menos
                                    </>
                                ) : (
                                    <>
                                        <ChevronDown size={18} />
                                        Ver detalle
                                    </>
                                )}
                            </button>
                        </div>

                        {/* Indicador de stock */}
                        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
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
        <div className="md:mt-28 bg-gradient-to-b from-white to-gray-50 px-4 md:px-8 py-16" id="productos">
            <div className="text-center mb-12">
                <h1 className="text-center text-4xl md:text-5xl font-heading font-extrabold mb-4 text-text-dark">
                    Nuestros Productos
                </h1>
                <p className="text-lg text-text-dark/70 font-body max-w-2xl mx-auto">
                    Selecciona entre nuestras categorías premium de carnes frescas
                </p>
            </div>

            {/* Barra de búsqueda mejorada */}
            <div className="flex justify-center mb-10 px-2">
                <div className="relative w-full md:w-96">
                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-primary w-5 h-5" />
                    <input
                        type="text"
                        placeholder="Buscar producto..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-12 pr-12 py-3 md:py-4 rounded-2xl border-2 border-gray-200 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition shadow-md hover:shadow-lg font-body"
                    />
                    {searchTerm && (
                        <button
                            onClick={() => setSearchTerm("")}
                            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-primary transition"
                        >
                            <X className="w-5 h-5" />
                        </button>
                    )}
                </div>
            </div>

            {/* Selector de Categorías (Pestañas mejoradas) */}
            <div className="flex justify-center mb-14 px-2">
                <div className="flex flex-wrap gap-3 p-2 md:p-4 rounded-2xl bg-gradient-to-r from-gray-50 to-gray-100 shadow-lg border border-gray-200 justify-center w-full md:w-auto backdrop-blur-sm">
                    {CATEGORIES.map((category) => (
                        <button
                            key={category}
                            onClick={() => {
                                setActiveCategory(category);
                                setSearchTerm("");
                            }}
                            className={`
                                py-2 md:py-3 px-6 md:px-10 rounded-xl text-base md:text-lg font-heading font-bold transition-all duration-300 whitespace-nowrap transform hover:scale-105 relative overflow-hidden
                                ${activeCategory === category
                                    ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg scale-105' 
                                    : 'text-text-dark hover:bg-white bg-white/50 hover:shadow-md'
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
