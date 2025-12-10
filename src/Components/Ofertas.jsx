import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Flame, Beef, AlertCircle } from 'lucide-react';

const Ofertas = [
    {decripcion:"Pata y muslo", Kilos:"3Kg", Precio:"10500"},
    {decripcion:"Bife ancho", Kilos:"kg", Precio:"14500"},
    {decripcion:"Falda", Kilos:"2kg", Precio:"22000"},
    {decripcion:"Carre de cerdo", Kilos:"2kg", Precio:"15000"},
    {decripcion:"Costillar completo de cerdo", Kilos:"Kg", Precio:"6990"},
    {decripcion:"Alitas", Kilos:"3Kg", Precio:"7000"},
    {decripcion:"Asado de orilla", Kilos:"Kg", Precio:"13900"}
]


import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay'

function CarrouselSwip() {
    return (
        <div data-aos="fade-up" data-aos-duration="1500" className="w-full px-4 lg:px-10 py-16 bg-gradient-to-b from-white to-gray-50" id="ofertas">
            <div className="max-w-7xl mx-auto">
                {/* Título con estilo minimalista y llamativo */}
                <div className="text-center mb-12">
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <Flame className="w-8 h-8 text-primary animate-pulse" />
                        <h2 className="text-sm md:text-base font-heading font-bold text-primary uppercase tracking-widest">
                            Promociones Especiales
                        </h2>
                        <Flame className="w-8 h-8 text-primary animate-pulse" />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-text-dark mb-3">
                        Nuestras Ofertas
                    </h1>
                    <p className="text-lg text-text-dark/70 font-body max-w-2xl mx-auto">
                        Descubrí nuestras mejores promociones en cortes premium de carne
                    </p>
                </div>

                {/* Carrusel mejorado */}
                <div className="relative">
                    <Swiper
                        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                        spaceBetween={20}
                        slidesPerView={1}
                        navigation={{
                            nextEl: '.swiper-button-next-ofertas',
                            prevEl: '.swiper-button-prev-ofertas',
                        }}
                        autoplay={{ delay: 5000, disableOnInteraction: false }}
                        pagination={{ 
                            clickable: true,
                            dynamicBullets: true,
                        }}
                        autoHeight={true}
                        breakpoints={{
                            640: { slidesPerView: 1 },
                            768: { slidesPerView: 2, spaceBetween: 15 },
                            1024: { slidesPerView: 3, spaceBetween: 20 },
                            1280: { slidesPerView: 4, spaceBetween: 20 },
                        }}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                        className="pb-12"
                    >
                        {Ofertas.map((oferta, index) => (
                            <SwiperSlide key={index}>
                                <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 bg-gradient-to-br from-amber-50 to-orange-50 h-80 flex flex-col items-center justify-center p-6">
                                    {/* Icono decorativo */}
                                    <div className="mb-4 p-4 bg-gradient-to-br from-primary to-orange-500 rounded-full group-hover:scale-110 transition-transform duration-300">
                                        <Beef className="w-12 h-12 text-white" />
                                    </div>
                                    
                                    {/* Descripción del producto */}
                                    <h3 className="text-2xl md:text-3xl font-heading font-bold text-text-dark text-center mb-4 group-hover:text-primary transition-colors duration-300">
                                        {oferta.decripcion}
                                    </h3>
                                    
                                    {/* Información de peso */}
                                    <div className="mb-6 text-center">
                                        <p className="text-lg text-text-dark/70 font-body">
                                            Por <span className="font-bold text-primary">{oferta.Kilos}</span>
                                        </p>
                                    </div>
                                    
                                    {/* Precio destacado */}
                                    <div className="bg-gradient-to-r from-primary to-orange-500 text-white px-8 py-3 rounded-full text-center group-hover:shadow-lg transition-shadow duration-300">
                                        <p className="text-sm font-body text-white/90 mb-1">Precio especial</p>
                                        <p className="text-3xl font-heading font-bold">
                                            ${oferta.Precio}
                                        </p>
                                    </div>
                                    
                                    {/* Etiqueta de oferta */}
                                    <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold flex items-center gap-1">
                                        <Flame className="w-4 h-4" />
                                        OFERTA
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Botones de navegación personalizados */}
                    <button className="swiper-button-prev-ofertas absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-primary hover:text-white text-text-dark w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 -ml-6 md:ml-0">
                        ❮
                    </button>
                    <button className="swiper-button-next-ofertas absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-primary hover:text-white text-text-dark w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 -mr-6 md:mr-0">
                        ❯
                    </button>
                </div>

                {/* Aviso destacado */}
                <div className="mt-12 max-w-2xl mx-auto">
                    <div className="bg-gradient-to-r from-amber-100 to-orange-100 border-2 border-orange-400 rounded-xl p-6 shadow-lg">
                        <div className="flex items-start gap-4">
                            <AlertCircle className="w-8 h-8 text-orange-600 flex-shrink-0 mt-1" />
                            <div className="text-center w-full">
                                <p className="text-lg md:text-xl font-heading font-bold text-orange-900 mb-2">
                                    ⚠️ Importante
                                </p>
                                <p className="text-text-dark font-body text-base md:text-lg leading-relaxed">
                                    Las ofertas se abonan <span className="font-bold text-orange-700">únicamente con efectivo o transferencia</span> • Consulta disponibilidad
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
