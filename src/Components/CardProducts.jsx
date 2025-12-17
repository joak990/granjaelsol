import React from 'react';
import { Heart, ChevronDown, ChevronUp, Zap } from 'lucide-react';
import { useProductCard } from '../hooks/useProductCard';

const CardProducts = ({ products }) => {
  const { favorites, expandedProduct, toggleFavorite, toggleExpanded } = useProductCard();

  const getPlaceholderImage = (index, name) => {
    const colors = ['bg-gradient-to-br from-primary to-secondary', 'bg-gradient-to-br from-secondary to-primary', 'bg-gradient-to-br from-accent-positive to-primary', 'bg-gradient-to-br from-text-dark to-secondary'];
    const color = colors[index % colors.length];
    return (
      <div className={`w-full h-40 sm:h-48 md:h-56 rounded-t-2xl sm:rounded-t-3xl flex items-center justify-center text-4xl sm:text-5xl md:text-6xl font-extrabold text-text-light ${color}`}>
        {name ? name.substring(0, 1) : 'P'}
      </div>
    );
  };

  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-6 md:gap-8 max-w-7xl mx-auto">
      {products &&
        products.map((elem, index) => (
          <div
            key={elem.id || index}
            className="group relative bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 h-full flex flex-col"
          >
            {/* Imagen Container */}
            <div className="relative w-full h-40 sm:h-48 md:h-56 overflow-hidden bg-gray-200">
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
              <div className="absolute top-2 left-2 sm:top-4 sm:left-4 bg-primary text-white px-2 sm:px-4 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs md:text-sm font-bold shadow-lg">
                Premium
              </div>

              {/* Botón de favorito */}
              <button
                onClick={() => toggleFavorite(elem.id)}
                className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-white/90 hover:bg-primary text-primary hover:text-white p-1.5 sm:p-2 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 backdrop-blur-sm"
              >
                <Heart
                  size={16}
                  className={`sm:w-5 sm:h-5 ${favorites.has(elem.id) ? "fill-current" : ""}`}
                />
              </button>
            </div>

            {/* Contenido de la tarjeta */}
            <div className="flex flex-col flex-grow p-3 sm:p-5 md:p-6">
              {/* Nombre del producto */}
              <h3 className="text-sm sm:text-lg md:text-xl font-heading font-bold text-text-dark mb-1 sm:mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                {elem.name}
              </h3>

              {/* Descripción/Precio */}
              <div className="flex items-baseline gap-2 mb-2 sm:mb-4">
                <span className="text-lg sm:text-2xl md:text-3xl font-bold text-primary">
                  {elem.description}
                </span>
              </div>

              {/* Línea divisoria */}
              <div className="w-8 sm:w-12 h-0.5 sm:h-1 bg-gradient-to-r from-primary to-secondary rounded-full mb-2 sm:mb-4"></div>

              {/* Contenido expandible */}
              <div className={`overflow-hidden transition-all duration-500 ease-in-out ${expandedProduct === elem.id ? 'max-h-96 opacity-100 mb-2 sm:mb-4' : 'max-h-0 opacity-0'}`}>
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-2 sm:p-4 rounded-xl sm:rounded-2xl border border-gray-200 space-y-2 sm:space-y-3">
                  {/* Características del producto */}
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-primary mb-1 sm:mb-2 flex items-center gap-1 sm:gap-2">
                      <Zap size={14} className="sm:w-4 sm:h-4" />
                      Características
                    </h4>
                    <ul className="text-[10px] sm:text-xs text-gray-700 space-y-0.5 sm:space-y-1">
                      <li>✓ Producto 100% fresco</li>
                      <li>✓ Seleccionado cuidadosamente</li>
                      <li>✓ Garantía de calidad</li>
                      <li>✓ Entrega rápida</li>
                    </ul>
                  </div>

                  {/* Descripción detallada */}
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-primary mb-1">Descripción</h4>
                    <p className="text-[10px] sm:text-xs text-gray-600 leading-relaxed">
                      Producto premium de Granja El Sol. Seleccionado con los más altos estándares de calidad para garantizar calidad y sabor excepcional en cada compra.
                    </p>
                  </div>

                  {/* Información adicional */}
                  <div className="grid grid-cols-2 gap-1 sm:gap-2 pt-1 sm:pt-2 border-t border-gray-300">
                    <div className="text-center">
                      <p className="text-[10px] sm:text-xs text-gray-500">Disponibilidad</p>
                      <p className="text-xs sm:text-sm font-bold text-green-600">En Stock</p>
                    </div>
                    <div className="text-center">
                      <p className="text-[10px] sm:text-xs text-gray-500">Categoría</p>
                      <p className="text-xs sm:text-sm font-bold text-primary">Premium</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Descripción breve (cuando no está expandido) */}
              {expandedProduct !== elem.id && (
                <p className="text-xs sm:text-sm text-gray-600 mb-2 sm:mb-4 flex-grow">
                  Producto fresco de la más alta calidad, seleccionado especialmente para vos.
                </p>
              )}
             
            </div>

            {/* Indicador de stock */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
          </div>
        ))}
    </div>
  );
};

export default CardProducts;