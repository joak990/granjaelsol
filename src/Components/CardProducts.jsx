
import React from 'react';

const CardProducts = ({ products }) => {
  // Función placeholder para la URL de la imagen (ya que no podemos cargar assets)
  const getPlaceholderImage = (index) => {
    const colors = ['bg-primary', 'bg-secondary', 'bg-accent-positive', 'bg-text-dark'];
    const color = colors[index % colors.length];
    return (
      <div className={`mt-1 h-32 w-32 md:h-44 md:w-44 rounded-2xl flex items-center justify-center text-3xl font-extrabold text-text-light ${color} shadow-inner`}>
        {/* Usamos las primeras letras del nombre del producto como placeholder */}
        {products[index]?.name ? products[index].name.substring(0, 2) : 'PZ'} 
      </div>
    );
  };

  return (
    // Rejilla responsiva con buen espacio
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-7 max-w-7xl mx-auto">
      {products &&
        products.map((elem, index) => (
          <div
            key={elem.id || index} // Usar elem.id si existe
            className="bg-base flex flex-col items-center justify-center w-full p-4 md:p-6 rounded-xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-[1.03] duration-300 border border-primary/20"
          >
            {/* Si tienes la URL de la imagen, úsala. Si no, usa el placeholder */}
            {elem.image ? (
                <img
                  className="mt-1 object-cover h-32 w-32 md:h-44 md:w-44 rounded-2xl shadow-md"
                  src={elem.image}
                  alt={elem.name}
                />
            ) : (
                getPlaceholderImage(index)
            )}
            
            <div className="flex flex-col gap-1 items-center justify-start w-full mt-4">
              {/* Título: Usamos font-heading y text-text-dark */}
              <h6 className="text-text-dark text-lg md:text-xl font-heading font-bold text-center leading-tight">{elem.name}</h6>
              
              {/* Precio: Usamos text-primary para el acento Borgoña */}
              <span className="text-center text-primary w-full font-bold text-lg md:text-2xl mt-1">
                {elem.description}
              </span>

              {/* Botón para futuro Carrito/Pedido */}
              <button className="mt-2 w-full py-2 text-sm md:text-base font-bold rounded-lg bg-primary text-text-light hover:bg-secondary transition duration-200 shadow-md">
                Ver Detalles
              </button>
            </div>
          </div>
        ))}
    </div>
  );
};


export default CardProducts;