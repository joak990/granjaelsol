import { CheckCircle } from "lucide-react"; // Usamos Lucide para los íconos
import logo from "../img/LOGHO.png"

function About() {
    return (
        <div data-aos="fade-in" data-aos-duration="1500" className="bg-base px-4 md:px-16 py-16" id="about">
            <h1 className="text-center text-3xl md:text-5xl font-heading font-extrabold mb-12 text-text-dark">
                ¿Quiénes Somos?
            </h1>

            <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:mt-16 justify-between items-center">
                
                {/* INYECTAMOS EL TAG <img> CON LOS ESTILOS MODERNOS */}
                <div className="md:w-5/12 pr-0 md:pr-10 mt-10 md:mt-0 flex justify-center">
                    <img 
                        data-aos="zoom-in-down" 
                        data-aos-duration="1500" 
                        // Asegúrate de que esta URL/ruta apunte a tu archivo LOGO.jpg
                        src={logo} 
                        alt="Logo Original Granja El Sol" 
                        // Mantenemos los estilos de tamaño, borde y sombra
                        className="w-80 h-80 md:h-96 md:w-96 border-4 rounded-3xl object-cover shadow-2xl border-primary"
                    />
                </div>

                <div data-aos="zoom-in" data-aos-duration="1500" className="w-full md:w-7/12 mt-10 md:mt-0 text-text-dark">
                    
                    <div className="font-body text-lg md:text-xl rounded-xl p-6 leading-relaxed bg-text-light shadow-lg border-l-4 border-primary" id="quienes-somos">
                        <p className="mb-4">
                            En <span className="text-primary font-extrabold">Granja El Sol</span>, creemos que la calidad y el buen trato hacen la diferencia. Nos dedicamos a ofrecer cortes de carne de excelencia, seleccionados cuidadosamente para llevar a tu mesa sabor, frescura y confianza.
                        </p>
                        <p className="italic font-medium">
                            Nuestro compromiso es con vos y tu familia, brindándote atención cercana y productos que reflejan el cariño con el que trabajamos cada día. Somos una tradición de sabor.
                        </p>
                    </div>

                    <div data-aos="fade-right" data-aos-duration="1500" className="mt-8 flex flex-col gap-4 text-lg md:text-xl font-heading font-semibold">
                        <div className="flex items-center gap-3">
                            <CheckCircle className="text-primary w-6 h-6" /> 
                            <span>Carne de calidad superior</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <CheckCircle className="text-primary w-6 h-6" />
                            <span>Selección Premium de Pollo y Cerdo</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <CheckCircle className="text-primary w-6 h-6" />
                            <span>Excelente Atención Personalizada</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;

