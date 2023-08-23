import { useState, useEffect } from "react";
import {
    BsFillArrowLeftCircleFill,
    BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { RxDot } from "react-icons/rx";

import ofertaespinazo from "../img/ofertas/ofertaespinazo.png";
import ofertabifeancho from "../img/ofertas/ofertabifeancho.png";
import ofertabifeangosto from "../img/ofertas/ofertabifeangosto.png";
import ofertacosteletacerdo from "../img/ofertas/ofertacosteletacerdo.png";
import ofertafalda from "../img/ofertas/ofertafalda.png";
import ofertapatycasero from "../img/ofertas/ofertapatycasero.png";
import ofertapicadacomun from "../img/ofertas/ofertapicadacomun.png";

function Ofertas() {
    const slides = [

        {
            url: `${ofertaespinazo}`,
        },
        {
            url: `${ofertabifeangosto}`,
        },
        {
            url: `${ofertabifeancho}`,
        },
        {
            url: `${ofertacosteletacerdo}`,
        },
        {
            url: `${ofertafalda}`,
        },
        {
            url: `${ofertapatycasero}`,
        },
        {
            url: `${ofertapicadacomun}`,
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

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 5000); // Cambio cada 5 segundos

        return () => clearInterval(interval);
    }, [currentIndex]);

    return (
        <div className="max-w-[600px] w-full m-auto py-8 md:py-16 px-4 relative group" id="carrousel">
            <div className="w-full h-[360px] md:h-[720px] rounded-2xl overflow-hidden relative">
                {slides.map((slide, slideIndex) => (
                    <img
                        key={slideIndex}
                        src={slide.url}
                        alt={`Slide ${slideIndex}`}
                        className={`w-full h-full absolute top-0 left-0 transition-opacity duration-1000 ${slideIndex === currentIndex ? "opacity-100" : "opacity-0"
                            }`}
                    />
                ))}
            </div>
            <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 traslate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white  cursor-pointer">
                <BsFillArrowLeftCircleFill onClick={prevSlide} size={30} />
            </div>
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
