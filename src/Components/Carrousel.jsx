import { useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-scroll";
import logo2 from "../img/foto21.png";
import logo3 from "../img/foto31.png";
import logo4 from "../img/foto4.jpg";
import logo5 from "../img/foto5.jpg";
import logo6 from "../img/foto6.jpg";

function Carrousel() {
    const slides = [
        { 
            url: logo4, 
            title: "Calidad Familiar desde 2015", 
            subtitle: "Lo mejor esta en Granja el sol.",
            icon: "🥩"
        },
        { 
            url: logo2, 
            title: "Precios accesibles", 
            subtitle: "Calidad garantizada, directamente a tu mesa.",
            icon: "💰"
        },
        { 
            url: logo3, 
            title: "¡Visítanos Hoy!", 
            subtitle: "Conoce nuestra amplia variedad de cortes.",
            icon: "🏪"
        },
        { 
            url: logo5, 
            title: "¡Pedi a Domicilio!", 
            subtitle: "Servicio de Delivery disponible.",
            icon: "🛵"
        },
        { 
            url: logo6, 
            title: "Combos y Ofertas", 
            subtitle: "Consulta por nuestros combos especiales.",
            icon: "🎉"
        },
    ];

    const carouselRef = useRef(null);
    const autoPlayRef = useRef(null);

    const scroll = (direction) => {
        if (carouselRef.current) {
            const scrollAmount = carouselRef.current.offsetWidth;
            carouselRef.current.scrollBy({
                left: direction === "next" ? scrollAmount : -scrollAmount,
                behavior: "smooth",
            });
        }
        resetAutoPlay();
    };

    const resetAutoPlay = () => {
        if (autoPlayRef.current) clearInterval(autoPlayRef.current);
        startAutoPlay();
    };

    const startAutoPlay = () => {
        autoPlayRef.current = setInterval(() => {
            if (carouselRef.current) {
                carouselRef.current.scrollBy({
                    left: carouselRef.current.offsetWidth,
                    behavior: "smooth",
                });
            }
        }, 5000);
    };

    useEffect(() => {
        startAutoPlay();
        return () => {
            if (autoPlayRef.current) clearInterval(autoPlayRef.current);
        };
    }, []);

    return (
        <div className="w-full pt-16 md:pt-20 relative overflow-hidden" id="carrousel">
            {/* Contenedor principal del carrusel */}
            <div className="relative group">
                {/* Carrusel con scroll horizontal */}
                <div
                    ref={carouselRef}
                    className="flex overflow-x-hidden scroll-smooth snap-x snap-mandatory"
                    onMouseEnter={() => {
                        if (autoPlayRef.current) clearInterval(autoPlayRef.current);
                    }}
                    onMouseLeave={resetAutoPlay}
                >
                    {slides.map((slide, index) => (
                        <div
                            key={index}
                            className="w-full h-[600px] md:h-[80vh] max-h-[800px] flex-shrink-0 snap-center relative overflow-hidden"
                        >
                            {/* Imagen de fondo con zoom effect */}
                            <div className="absolute inset-0 overflow-hidden">
                                <img
                                    src={slide.url}
                                    alt={slide.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                                />
                            </div>

                            {/* Overlay gradiente mejorado */}
                            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/60"></div>

                            {/* Contenido con animación */}
                            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4 md:p-8">
                                {/* Icono animado */}
                                <div className="text-6xl md:text-8xl mb-6 animate-bounce">
                                    {slide.icon}
                                </div>

                                {/* Título con efecto */}
                                <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-extrabold text-text-light mb-4 drop-shadow-2xl leading-tight max-w-4xl">
                                    {slide.title}
                                </h1>

                                {/* Línea decorativa */}
                                <div className="w-24 h-1 bg-gradient-to-r from-primary via-secondary to-primary rounded-full mb-6"></div>

                                {/* Subtítulo */}
                                <p className="text-lg md:text-2xl lg:text-3xl font-body text-text-light drop-shadow-lg max-w-3xl">
                                    {slide.subtitle}
                                </p>

                                {/* Botón CTA */}
                                <Link to="productos" spy={true} smooth={true} offset={-100} duration={500}>
                                    <button className="mt-8 px-8 md:px-12 py-3 md:py-4 bg-gradient-to-r from-primary to-secondary text-text-light font-bold text-lg md:text-xl rounded-full shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 hover:from-secondary hover:to-primary cursor-pointer">
                                        Explorar Productos
                                    </button>
                                </Link>
                            </div>

                            {/* Indicador de slide */}
                            <div className="absolute bottom-6 right-6 bg-black/50 text-white px-4 py-2 rounded-full text-sm font-semibold backdrop-blur-sm">
                                {index + 1} / {slides.length}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Botón Anterior */}
                <button
                    onClick={() => scroll("prev")}
                    className="absolute left-4 md:left-8 top-1/2 transform -translate-y-1/2 z-20 bg-white/90 hover:bg-primary text-primary hover:text-white p-3 md:p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 backdrop-blur-sm group-hover:opacity-100 opacity-0 md:opacity-100"
                    aria-label="Anterior"
                >
                    <ChevronLeft size={28} />
                </button>

                {/* Botón Siguiente */}
                <button
                    onClick={() => scroll("next")}
                    className="absolute right-4 md:right-8 top-1/2 transform -translate-y-1/2 z-20 bg-white/90 hover:bg-primary text-primary hover:text-white p-3 md:p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 backdrop-blur-sm group-hover:opacity-100 opacity-0 md:opacity-100"
                    aria-label="Siguiente"
                >
                    <ChevronRight size={28} />
                </button>

                {/* Indicadores de progreso */}
                <div className="absolute bottom-6 left-6 flex gap-2 z-20">
                    {slides.map((_, index) => (
                        <div
                            key={index}
                            className="h-1 bg-white/40 rounded-full transition-all duration-300 hover:bg-white/80 cursor-pointer"
                            style={{
                                width: index === 0 ? "24px" : "8px",
                            }}
                        ></div>
                    ))}
                </div>
            </div>

            {/* Decoración inferior */}
            <div className="h-1 bg-gradient-to-r from-primary via-secondary to-primary"></div>
        </div>
    );
}

export default Carrousel;
