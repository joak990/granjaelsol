import { FaCheckCircle } from "react-icons/fa"; // Asegúrate de tener react-icons instalado

import logo from "../img/LOGO.jpg";

function About() {
    return (
        <div data-aos="fade-in" data-aos-duration="1500" className="bg-white px-4 md:px-16 py-16" id="about">
            <h1 className="text-center text-3xl md:text-5xl font-extralight mb-4 font-serif">¿Quiénes Somos?</h1>

            <div className="flex flex-col md:flex-row md:mt-24 justify-center items-center">
                
                {/* Imagen del logo */}
                <div className="md:w-1/2 pr-0 md:pr-4 mt-20 flex justify-center">
                    <img 
                        data-aos="zoom-in-down" 
                        data-aos-duration="1500" 
                        className="w-80 h-80 md:h-96 md:w-96 border-4 rounded-3xl object-cover" 
                        src={logo} 
                        alt="Quienes Somos" 
                    />
                </div>

                {/* Texto descriptivo */}
                <div data-aos="zoom-in" data-aos-duration="1500" className="w-full md:w-1/2 mt-10 md:mt-0 md:mr-20 text-xl md:text-2xl">
                    
                    {/* Párrafo central */}
                    <div className="font-medium rounded-lg p-6 md:p-8 leading-relaxed text-gray-800" id="quienes-somos">
                        En <span className="text-[#f59e0b] font-bold">Granja El Sol</span>, creemos que la calidad y el buen trato hacen la diferencia. Nos dedicamos a ofrecer cortes de carne de excelencia, seleccionados cuidadosamente para llevar a tu mesa sabor, frescura y confianza. Nuestro compromiso es con vos  y tu familia, brindándote atención cercana y productos que reflejan el cariño con el que trabajamos cada día.
                    </div>

                    {/* Lista de valores */}
                    <div data-aos="fade-right" data-aos-duration="1500" className="mt-12 md:mt-8 flex flex-col gap-4 text-xl md:text-2xl text-gray-900 font-semibold">
                        <div className="flex items-center gap-3">
                            <FaCheckCircle className="text-green-500" />
                            <span>Carne de calidad</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <FaCheckCircle className="text-green-500" />
                            <span>Selección Premium</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <FaCheckCircle className="text-green-500" />
                            <span>Excelente Atención</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;

