// import { FaInstagram, FaFacebook } from "react-icons/Fa";

function Contactos() {
    return (
        <div className='bg-red-700 p-4 md:p-8' id="contactos">
            <div className='max-w-screen-md mx-auto'>
                <h1 className='text-center text-3xl md:text-6xl font-extralight text-white mt-12 mb-6 font-serif'>Contactanos</h1>
                <div className="flex justify-center">
                    
                    <a href="https://api.whatsapp.com/send?phone=541131666991 " target="_blank" rel="noopener noreferrer"  className='mt-4 md:mt-16 text-white bg-red-900 hover:bg-red-500 w-full md:w-96 rounded-full items-center flex justify-center text-xl md:text-2xl mb-4 p-4'>
                        ¡Estamos aquí para ayudarte!
                    </a>
                </div>
                <div className="flex flex-col justify-center mt-4 md:mt-6">
                    <div className='text-white text-xl md:text-2xl'>
                        <p className='mb-2'>
                            Visítanos en: <span className='font-bold text-white'>Isla 299</span>
                        </p>
                        <p className='mb-2'>
                            Llámanos: <span className='font-bold text-white'>(+54) 1131666991</span>
                        </p>
                        <p className='mb-4'>
                            Escríbenos: <span className='font-bold text-white'>armando@granjaelsol.com</span>
                        </p>
                        {/* <div className="flex gap-4">
                            <a href="https://www.instagram.com/granja_el_sol1/" target="_blank" rel="noopener noreferrer" className="hover:bg-red-500 hover:text-red-700 rounded-full p-2">
                                <FaInstagram className="text-white" />
                            </a>
                            <a href="https://www.facebook.com/Granjaelsolarman" target="_blank" rel="noopener noreferrer" className="hover:bg-red-500 hover:text-red-700 rounded-full p-2">
                                <FaFacebook className="text-white" />
                            </a>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contactos;