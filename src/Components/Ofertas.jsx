import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Beef, Zap, Star } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';

const Ofertas = [
    {decripcion:"Pata y muslo", Kilos:"3Kg", Precio:"10500", descuento: "25%", original: "14000"},
    {decripcion:"Bife ancho", Kilos:"kg", Precio:"14500", descuento: "30%", original: "20700"},
    {decripcion:"Falda", Kilos:"2kg", Precio:"22000", descuento: "20%", original: "27500"},
    {decripcion:"Carre de cerdo", Kilos:"2kg", Precio:"15000", descuento: "28%", original: "20800"},
    {decripcion:"Costillar de cerdo", Kilos:"Kg", Precio:"6990", descuento: "35%", original: "10750"},
    {decripcion:"Alitas", Kilos:"3Kg", Precio:"7000", descuento: "22%", original: "8970"},
    {decripcion:"Asado de orilla", Kilos:"Kg", Precio:"13900", descuento: "32%", original: "20440"}
]

function CarrouselSwip() {
    return (
        <div className="w-full px-4 lg:px-10 py-20 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden" id="ofertas">
            {/* Elementos decorativos de fondo */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Encabezado espectacular */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center justify-center gap-3 mb-6 px-6 py-3 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full border border-primary/40 backdrop-blur-sm">
                        <Zap className="w-5 h-5 text-primary animate-pulse" />
                        <span className="text-sm md:text-base font-heading font-bold text-primary uppercase tracking-widest">
                            ⚡ Ofertas Limitadas
                        </span>
                        <Zap className="w-5 h-5 text-primary animate-pulse" />
                    </div>
                    
                    <h1 className="text-5xl md:text-7xl font-heading font-black text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary mb-4 drop-shadow-lg">
                        Mega Ofertas
                    </h1>
                    
                    <p className="text-lg md:text-2xl text-gray-300 font-body max-w-3xl mx-auto leading-relaxed">
                        Descubrí nuestras promociones más <span className="text-primary font-bold">espectaculares</span> en cortes premium
                    </p>
                </div>

                {/* Carrusel con diseño moderno */}
                <div className="relative group">
                    <Swiper
                        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                        spaceBetween={24}
                        slidesPerView={1}
                        navigation={{
                            nextEl: '.swiper-button-next-ofertas',
                            prevEl: '.swiper-button-prev-ofertas',
                        }}
                        autoplay={{ delay: 8000, disableOnInteraction: false }}
                        pagination={{ 
                            clickable: true,
                            dynamicBullets: true,
                        }}
                        breakpoints={{
                            640: { slidesPerView: 1 },
                            768: { slidesPerView: 2, spaceBetween: 16 },
                            1024: { slidesPerView: 3, spaceBetween: 20 },
                            1280: { slidesPerView: 4, spaceBetween: 24 },
                        }}
                        className="pb-16"
                    >
                        {Ofertas.map((oferta, index) => (
                            <SwiperSlide key={index}>
                                <div 
                                    className="relative h-96 rounded-3xl overflow-hidden group/card cursor-pointer"
                                >
                                    {/* Fondo gradiente animado */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-primary/40 via-secondary/30 to-primary/40 group-hover/card:from-primary/60 group-hover/card:via-secondary/50 group-hover/card:to-primary/60 transition-all duration-500"></div>
                                    
                                    {/* Efecto de brillo */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 group-hover/card:translate-x-full transition-transform duration-1000"></div>

                                    {/* Contenido de la tarjeta */}
                                    <div className="relative h-full flex flex-col items-center justify-center p-8 text-center">
                                        {/* Icono superior */}
                                        <div className="mb-6 p-5 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 group-hover/card:bg-white/20 group-hover/card:scale-110 transition-all duration-300">
                                            <Beef className="w-12 h-12 text-white" />
                                        </div>

                                        {/* Nombre del producto */}
                                        <h3 className="text-2xl md:text-3xl font-heading font-bold text-white mb-4 group-hover/card:text-primary transition-colors duration-300">
                                            {oferta.decripcion}
                                        </h3>

                                        {/* Peso */}
                                        <div className="mb-6 inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                                            <p className="text-white/90 font-body text-sm">
                                                Cantidad: <span className="font-bold text-primary">{oferta.Kilos}</span>
                                            </p>
                                        </div>

                                        {/* Sección de precios */}
                                        <div className="mb-6 space-y-2">
                                            <div className="flex items-center justify-center gap-3">
                                                <span className="text-white/60 line-through text-lg">
                                                    ${oferta.original}
                                                </span>
                                                <div className="bg-red-500/80 px-3 py-1 rounded-full">
                                                    <span className="text-white font-bold text-sm">
                                                        -{oferta.descuento}
                                                    </span>
                                                </div>
                                            </div>
                                            
                                            <div className="text-5xl font-heading font-black text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                                                ${oferta.Precio}
                                            </div>
                                        </div>

                                        {/* Botón de acción */}
                                        <button className="mt-auto px-8 py-3 bg-gradient-to-r from-primary to-secondary text-white font-bold rounded-xl hover:shadow-2xl hover:shadow-primary/50 transition-all duration-300 transform group-hover/card:scale-110 flex items-center justify-center gap-2">
                                            <Star className="w-5 h-5" />
                                            Consultar
                                        </button>
                                    </div>

                                    {/* Borde brillante */}
                                    <div className="absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-r from-primary/50 to-secondary/50 bg-clip-border opacity-0 group-hover/card:opacity-100 transition-opacity duration-300"></div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Botones de navegación mejorados */}
                    <button className="swiper-button-prev-ofertas absolute -left-6 md:left-2 top-1/2 -translate-y-1/2 z-20 bg-gradient-to-r from-primary to-secondary hover:shadow-2xl hover:shadow-primary/50 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 group-hover:opacity-100 opacity-70">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <button className="swiper-button-next-ofertas absolute -right-6 md:right-2 top-1/2 -translate-y-1/2 z-20 bg-gradient-to-r from-secondary to-primary hover:shadow-2xl hover:shadow-secondary/50 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 group-hover:opacity-100 opacity-70">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>

                {/* Aviso destacado mejorado */}
                <div className="mt-16 max-w-3xl mx-auto">
                    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-amber-500/20 to-orange-500/20 border-2 border-amber-500/50 backdrop-blur-sm p-8 shadow-2xl">
                        {/* Decoración de fondo */}
                        <div className="absolute top-0 right-0 w-40 h-40 bg-amber-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                        
                        <div className="relative flex items-start gap-4">
                            <div className="text-4xl flex-shrink-0">🔥</div>
                            <div className="flex-1">
                                <p className="text-xl md:text-2xl font-heading font-bold text-white mb-3">
                                    ¡Ofertas por Tiempo Limitado!
                                </p>
                                <p className="text-gray-200 font-body text-base md:text-lg leading-relaxed">
                                    Las ofertas se abonan <span className="font-bold text-amber-300">únicamente con efectivo o transferencia</span> • Stock limitado • Consulta disponibilidad llamando al <span className="font-bold text-primary">(+54) 1131666991</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default CarrouselSwip;
