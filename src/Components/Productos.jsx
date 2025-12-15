import { useState } from "react";
import { Search, X } from "lucide-react";
import { Link } from "react-scroll";
import { carne, cerdo, pollos } from "./Productosdata";
import CardProducts from "./CardProducts";

// 2. Definición del objeto de datos mapeado a categorías
// Esto es crucial para usar la lógica de pestañas (activeCategory)
const allProducts = {
    'Vacunos': carne,
    'Cerdo': cerdo,
    'Pollos': pollos
};

const CATEGORIES = ['Vacunos', 'Cerdo', 'Pollos']; 

// Componente Principal Productos

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
