import  { useState, useEffect } from "react";
import {
    BsFillArrowLeftCircleFill,
    BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { RxDot } from "react-icons/rx";

import logo1 from "../img/foto1.jpg";
import logo2 from "../img/foto2.jpg";
import logo3 from "../img/foto3.jpg";

function Carrousel() {
    const slides = [
       
        {
            url: `${logo1}`,
        },
        {
            url: `${logo2}`,
        },
        {
            url: `${logo3}`,
        },
        
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

    // Cambio automático de slide cada 5 segundos (ajusta el tiempo según tus necesidades)
    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 5000); // Cambio cada 5 segundos

        return () => clearInterval(interval);
    }, [currentIndex]);

    return (
        <div className="w-full m-auto py-8 md:py-16 px-4 relative group" id="carrousel">
            <div className="w-full h-[360px] md:h-[500px] rounded-2xl overflow-hidden relative">
                {slides.map((slide, slideIndex) => (
                    <img
                        key={slideIndex}
                        src={slide.url}
                        alt={`Slide ${slideIndex}`}
                        className={`w-full h-full absolute top-0 left-0 transition-opacity duration-1000 opacity-0  ${slideIndex === currentIndex ? "opacity-100" : "opacity-0"
                            }`}
                    />
                ))}
            </div>
            {/* left arrow*/}
            <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 traslate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white  cursor-pointer">
                <BsFillArrowLeftCircleFill onClick={prevSlide} size={30} />
            </div>
            {/* right arrow*/}
            <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 traslate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white  cursor-pointer">
                <BsFillArrowRightCircleFill onClick={nextSlide} size={30} />
            </div>
            <div className="flex top-4 justify-center py-2">
                {slides.map((slide, slideIndex) => (
                    <div
                        key={slideIndex}
                        onClick={() => goToSlide(slideIndex)}
                        className={`text-1xl cursor-pointer ${slideIndex === currentIndex ? "text-black" : "text-gray-400"
                            }`}
                    >
                        <RxDot />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Carrousel;
