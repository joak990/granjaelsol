import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Circle } from "lucide-react"; // Usamos Lucide para los íconos
import logo1 from "../img/imagenfachada.jpg";
import logo2 from "../img/foto2.jpg";
import logo3 from "../img/foto3.jpg";


function Carrousel() {
    // Definición de las diapositivas (usando un placeholder para la URL)
    const slides = [
        { url: logo1, title: "Calidad Familiar desde 2016", subtitle: "Lo mejor esta en Granja el sol." },
        { url: logo2, title: "Precios accesibles", subtitle: "Calidad garantizada, directamente a tu mesa." },
        { url: logo3, title: "¡Visítanos Hoy!", subtitle: "Conoce nuestra amplia variedad de cortes." },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        const newIndex = (currentIndex - 1 + slides.length) % slides.length;
        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
        const newIndex = (currentIndex + 1) % slides.length;
        setCurrentIndex(newIndex);
    };

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    };

    // Cambio automático de slide
    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 6000); // Cambio cada 6 segundos (ligeramente más lento)

        return () => clearInterval(interval);
    }, [currentIndex]);

    return (
        // Añadimos mt-16 para bajarlo del navbar fijo (que es h-14)
        <div className="w-full pt-16 md:pt-20 relative group overflow-hidden" id="carrousel"> 
            <div className="w-full h-[400px] md:h-[70vh] max-h-[800px] relative rounded-b-xl shadow-2xl mx-auto overflow-hidden">
                
                {slides.map((slide, slideIndex) => (
                    <div
                        key={slideIndex}
                        className={`w-full h-full absolute top-0 left-0 transition-opacity duration-1000 ease-in-out ${slideIndex === currentIndex ? "opacity-100" : "opacity-0"}`}
                    >
                        {/* IMAGEN DE FONDO con overlay oscuro */}
                        <img
                            src={slide.url}
                            alt={slide.title}
                            className="w-full h-full object-cover"
                        />
                        {/* OVERLAY: Gradiente para mejorar el contraste del texto y dar impacto */}
                        <div className="absolute inset-0 bg-black/40 md:bg-black/30"></div>
                        
                        {/* CONTENIDO HERO: Centrado y estilizado */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
                            <h1 className="text-4xl md:text-6xl font-heading font-extrabold text-text-light mb-4 drop-shadow-lg">
                                {slide.title}
                            </h1>
                            <p className="text-xl md:text-3xl font-body text-text-light mb-8 drop-shadow-md">
                                {slide.subtitle}
                            </p>
                        </div>
                    </div>
                ))}

                {/* --- CONTROLES DE NAVEGACIÓN (Flechas) --- */}
                
                {/* Flecha Izquierda */}
                <div className="hidden group-hover:block absolute top-1/2 left-4 transform -translate-y-1/2 text-primary bg-text-light/80 p-3 rounded-full shadow-lg cursor-pointer hover:bg-text-light transition duration-300 z-10">
                    <ChevronLeft onClick={prevSlide} size={30} className="text-primary" />
                </div>
                
                {/* Flecha Derecha */}
                <div className="hidden group-hover:block absolute top-1/2 right-4 transform -translate-y-1/2 text-primary bg-text-light/80 p-3 rounded-full shadow-lg cursor-pointer hover:bg-text-light transition duration-300 z-10">
                    <ChevronRight onClick={nextSlide} size={30} className="text-primary" />
                </div>
            </div>

            {/* --- INDICADORES DE DIAPOSITIVAS (Dots) --- */}
            <div className="flex justify-center py-4">
                {slides.map((slide, slideIndex) => (
                    <div
                        key={slideIndex}
                        onClick={() => goToSlide(slideIndex)}
                        className={`mx-1 cursor-pointer transition-colors duration-300`}
                    >
                        {/* Usamos el componente Circle de Lucide */}
                        <Circle 
                            size={12} 
                            fill={slideIndex === currentIndex ? "#8B0000" : "#A5A5A5"} // Borgoña o Gris
                            className={`
                                ${slideIndex === currentIndex ? "text-primary" : "text-gray-400"}
                            `}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Carrousel;
