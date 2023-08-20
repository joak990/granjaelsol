import  { useState, useEffect } from "react";
import {
    BsFillArrowLeftCircleFill,
    BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { RxDot } from "react-icons/rx";

import oferta1 from "../img/oferta1.jpg";
import oferta2 from "../img/oferta2.jpeg";
import logo3 from "../img/foto3.jpg";

function Ofertas() {
    const slides = [
       
        {
            url: `${oferta1}`,
        },
        {
            url: `${oferta2}`,
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
        <div className="max-w-[1280px] w-full m-auto py-8 md:py-16 px-4 relative group" id="carrousel">
        <div
            style={{
                backgroundImage: `url(${slides[currentIndex].url})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
            className="w-full h-[360px] md:h-[720px] rounded-2xl duration-500"
        ></div>
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

export default Ofertas;
