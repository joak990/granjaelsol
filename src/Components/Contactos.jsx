import { MapPin, Phone, Mail, Instagram, Facebook, Copy, Check } from "lucide-react"; // Importamos íconos de contacto y redes sociales
import { useState } from "react";

// Datos de contacto centralizados
const CONTACT_INFO = {
    address: "Isla Jorge 299, Buenos Aires, Argentina",
    phone: "(+54) 1131666991",
    phoneRaw: "541131666991",
    email: "granjaelsol1015@gmail.com",
    instagramUrl: "https://www.instagram.com/elgustoenfamilia/",
    facebookUrl: "https://www.facebook.com/Granjaelsolarman"
};

function Contactos() {
    const [copiedPhone, setCopiedPhone] = useState(false);
    const [copiedEmail, setCopiedEmail] = useState(false);

    const copyToClipboard = (text, type) => {
        navigator.clipboard.writeText(text);
        if (type === 'phone') {
            setCopiedPhone(true);
            setTimeout(() => setCopiedPhone(false), 2000);
        } else {
            setCopiedEmail(true);
            setTimeout(() => setCopiedEmail(false), 2000);
        }
    };

    // URL simulada de Google Maps para incrustar la ubicación
    // Nota: Sustituir la URL con el enlace de compartir de Google Maps de la ubicación exacta.
    const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3826.2632205033274!2d-58.9942179993321!3d-34.4373224488841!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bc820c93606e8f%3A0x9f80921bf9c25643!2sIsla%20Jorge%20299%2C%20B1633BRB%20Fatima%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1764788029553!5m2!1ses-419!2sar";

    return (
        // Usamos bg-base o un color contrastante como bg-gray-100/50 si About ya es bg-base
        <div className='bg-base p-4 md:p-12' id="contactos">
            <div className='max-w-screen-xl mx-auto'>
                <h1 data-aos="zoom-in-right" data-aos-duration="1500" 
                    className='text-center text-4xl md:text-5xl font-heading font-extrabold text-text-dark mt-8 mb-12'>
                    Contáctanos
                </h1>

                <div className="flex flex-col md:flex-row gap-8">
                    
                    {/* COLUMNA IZQUIERDA: Mapa de Ubicación */}
                    <div data-aos="fade-right" data-aos-duration="1500" className='w-full md:w-1/2'>
                        <h2 className="text-2xl font-heading font-bold mb-4 text-primary">Nuestra Ubicación</h2>
                        <div className="rounded-xl overflow-hidden shadow-2xl border-4 border-primary">
                            <iframe
                                src={mapEmbedUrl}
                                width="100%"
                                height="400"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Ubicación de Granja el Sol"
                            ></iframe>
                        </div>
                    </div>

                    {/* COLUMNA DERECHA: Información de Contacto */}
                    <div data-aos="zoom-in-up" data-aos-duration="1500" className="w-full md:w-1/2 p-6 md:p-8 rounded-xl bg-text-light shadow-xl border-l-4 border-primary">
                        <h2 className="text-2xl font-heading font-bold mb-6 text-primary">Detalles de Contacto</h2>

                        <div className='text-text-dark text-lg md:text-xl space-y-6 font-body'>
                            
                            {/* Dirección */}
                            <div className='flex items-start gap-4 p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition duration-300'>
                                <MapPin className="text-primary mt-1 w-6 h-6 flex-shrink-0" />
                                <p>
                                    Visítanos en: <br />
                                    <span className='font-extrabold text-text-dark'>{CONTACT_INFO.address}</span>
                                </p>
                            </div>

                            {/* Teléfono */}
                            <div className='flex items-start gap-4 p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition duration-300 group'>
                                <Phone className="text-primary mt-1 w-6 h-6 flex-shrink-0" />
                                <div className="flex-1">
                                    <p className="mb-2">Llámanos:</p>
                                    <div className="flex gap-2 flex-wrap">
                                        <a href="tel:+541131666991" className='font-extrabold text-primary hover:text-secondary transition'>
                                            {CONTACT_INFO.phone}
                                        </a>
                                        <button
                                            onClick={() => copyToClipboard(CONTACT_INFO.phoneRaw, 'phone')}
                                            className="text-primary hover:text-secondary transition p-1 rounded hover:bg-white"
                                            title="Copiar número"
                                        >
                                            {copiedPhone ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Email */}
                            <div className='flex items-start gap-4 p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition duration-300 group'>
                                <Mail className="text-primary mt-1 w-6 h-6 flex-shrink-0" />
                                <div className="flex-1">
                                    <p className="mb-2">Escríbenos:</p>
                                    <div className="flex gap-2 flex-wrap">
                                        <a href="mailto:granjaelsol1015@gmail.com" className='font-extrabold text-primary hover:text-secondary transition break-all'>
                                            {CONTACT_INFO.email}
                                        </a>
                                        <button
                                            onClick={() => copyToClipboard(CONTACT_INFO.email, 'email')}
                                            className="text-primary hover:text-secondary transition p-1 rounded hover:bg-white flex-shrink-0"
                                            title="Copiar email"
                                        >
                                            {copiedEmail ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Redes Sociales */}
                        <div className="mt-10 pt-6 border-t border-gray-200">
                            <h3 className="text-xl font-heading font-bold mb-4 text-secondary">Síguenos</h3>
                            <div className="flex space-x-6">
                                <a href={CONTACT_INFO.instagramUrl} target="_blank" rel="noopener noreferrer" 
                                   className="text-primary hover:text-secondary transition duration-300 transform hover:scale-110">
                                    <Instagram className="h-8 w-8" />
                                </a>
                                <a href={CONTACT_INFO.facebookUrl} target="_blank" rel="noopener noreferrer" 
                                   className="text-primary hover:text-secondary transition duration-300 transform hover:scale-110">
                                    <Facebook className="h-8 w-8" />
                                </a>
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contactos;