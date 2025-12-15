import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { ShoppingCart } from 'lucide-react';
import { productosAdicionales } from './Productosdata';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function ProductCard({ producto }) {
    const IconComponent = producto.icon;

    return (
        <div className="h-full bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group">
            {/* Encabezado con gradiente */}
            <div className={`bg-gradient-to-r ${producto.color} p-6 text-white relative overflow-hidden`}>
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                <div className="relative z-10">
                    <div className="inline-block p-3 bg-white/20 rounded-lg mb-3 group-hover:bg-white/30 transition-colors">
                        <IconComponent className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-heading font-bold">{producto.nombre}</h3>
                    <p className="text-white/90 text-sm mt-2">{producto.descripcion}</p>
                </div>
            </div>

            {/* Carrusel de imágenes */}
            <div className="flex-grow">
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={10}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 4000, disableOnInteraction: false }}
                    className="w-full h-full"
                >
                    {producto.imagenes.map((imagen, idx) => (
                        <SwiperSlide key={idx}>
                            <div className="relative w-full h-64 bg-gray-100">
                                <img
                                    src={imagen}
                                    alt={`${producto.nombre} ${idx + 1}`}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

        </div>
    );
}

function ProductosAdicionales() {
    return (
        <div className="w-full px-4 lg:px-10 py-20 bg-gradient-to-b from-gray-50 to-base relative overflow-hidden" id="productos-adicionales">
            {/* Elementos decorativos */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Encabezado */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center justify-center gap-3 mb-6 px-6 py-3 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full border border-primary/30">
                        <ShoppingCart className="w-5 h-5 text-primary" />
                        <span className="text-sm md:text-base font-heading font-bold text-primary uppercase tracking-widest">
                            Más Productos
                        </span>
                        <ShoppingCart className="w-5 h-5 text-primary" />
                    </div>

                    <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-text-dark mb-4">
                        Productos Adicionales
                    </h2>

                    <p className="text-lg text-text-dark/70 font-body max-w-3xl mx-auto">
                        Complementa tu compra con nuestra selección de vinos, snacks, salames y apargatas de excelente calidad
                    </p>
                </div>

                {/* Grid de productos */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {productosAdicionales.map((producto) => (
                        <ProductCard key={producto.id} producto={producto} />
                    ))}
                </div>

                {/* Sección informativa */}
                <div className="mt-16 max-w-4xl mx-auto">
                    <div className="bg-white rounded-2xl shadow-lg border-l-4 border-primary p-8">
                        <div className="flex items-start gap-4">
                            <div className="text-4xl flex-shrink-0">🛒</div>
                            <div>
                                <h3 className="text-2xl font-heading font-bold text-text-dark mb-2">
                                    Compra Completa
                                </h3>
                                <p className="text-text-dark/70 font-body">
                                    Aprovecha nuestros productos adicionales para complementar tu compra. Contáctanos para consultar disponibilidad, precios y ofertas especiales en combos. ¡Estamos aquí para servir!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductosAdicionales;
