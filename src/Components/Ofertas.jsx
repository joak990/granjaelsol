import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Flame } from 'lucide-react';

import ofertaboladelomo from "../img/ofertas/ofertaboladelomo.png";
import ofertacosteletadecerdo from "../img/ofertas/ofertacosteletacerdo.png";
import ofertacuadrada from "../img/ofertas/ofertacuadrada.png";
import ofertabondiola from "../img/ofertas/ofertabondiola.png";


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
                        Descubre nuestras mejores promociones en cortes premium de carne fresca
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
                        <SwiperSlide>
                            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                                <img 
                                    className="w-full h-80 object-cover group-hover:brightness-110 transition-all duration-300" 
                                    src={ofertaboladelomo} 
                                    alt="Oferta Bola de Lomo" 
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                    <span className="text-white font-heading font-bold text-lg">Bola de Lomo Premium</span>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                                <img 
                                    className="w-full h-80 object-cover group-hover:brightness-110 transition-all duration-300" 
                                    src={ofertacosteletadecerdo} 
                                    alt="Oferta Costeletada de Cerdo" 
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                    <span className="text-white font-heading font-bold text-lg">Costeletada de Cerdo</span>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                                <img 
                                    className="w-full h-80 object-cover group-hover:brightness-110 transition-all duration-300" 
                                    src={ofertacuadrada} 
                                    alt="Oferta Cuadrada" 
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                    <span className="text-white font-heading font-bold text-lg">Corte Cuadrada</span>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                                <img 
                                    className="w-full h-80 object-cover group-hover:brightness-110 transition-all duration-300" 
                                    src={ofertabondiola} 
                                    alt="Oferta Bondiola" 
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                    <span className="text-white font-heading font-bold text-lg">Bondiola Especial</span>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>

                    {/* Botones de navegación personalizados */}
                    <button className="swiper-button-prev-ofertas absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-primary hover:text-white text-text-dark w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 -ml-6 md:ml-0">
                        ❮
                    </button>
                    <button className="swiper-button-next-ofertas absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-primary hover:text-white text-text-dark w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 -mr-6 md:mr-0">
                        ❯
                    </button>
                </div>

                {/* Texto descriptivo */}
                <div className="mt-12 text-center">
                    <p className="text-text-dark/60 font-body text-base md:text-lg">
                        Ofertas válidas mientras dure el stock • Consulta disponibilidad
                    </p>
                </div>
            </div>
        </div>
    );
}


export default CarrouselSwip;
