// import { FaInstagram, FaFacebook } from "react-icons/Fa";
import insta from "../img/insta.png"
import facebook from "../img/facebook.png"
function Contactos() {
    return (
        <div className='bg-red-700 p-4 md:p-8' id="contactos">
            <div className='max-w-screen-md mx-auto'>
                <h1  data-aos="zoom-in-right" data-aos-duration="1500"    className='text-center text-3xl md:text-6xl font-extralight text-white mt-12 mb-6 font-serif'>Contactanos</h1>
                <div className="flex justify-center">
                    
                    <a  data-aos="zoom-out-left" data-aos-duration="1500" href="https://api.whatsapp.com/send?phone=541131666991 " target="_blank" rel="noopener noreferrer"  className='mt-4 md:mt-16 text-white bg-red-900 hover:bg-red-500 w-full md:w-96 rounded-full items-center flex justify-center text-xl md:text-2xl mb-4 p-4'>
                        ¡Estamos aquí para ayudarte!
                    </a>
                </div>
                <div  className="flex flex-col justify-center mt-4 md:mt-6">
                    <div  className='text-white text-xl md:text-2xl'>
                        <p  data-aos="zoom-in-right" data-aos-duration="1500"  className='mb-2'>
                            Visítanos en: <span className='font-bold text-white'>Isla 299</span>
                        </p>
                        <p data-aos="zoom-in-right" data-aos-duration="1500" className='mb-2'>
                            Llámanos: <span className='font-bold text-white'>(+54) 1131666991</span>
                        </p>
                        <p data-aos="zoom-in-right" data-aos-duration="1500" className='mb-4'>
                            Escríbenos: <span className='font-bold text-white'>armando@granjaelsol.com</span>
                        </p>
                        <div className="flex">
                    <a href="https://www.instagram.com/elgustoenfamilia/" target="_blank" rel="noopener noreferrer">
                        <img  className=" h-4 mb-1  mr-3 md:h-7" src={insta} alt="" />
                    </a>
                    <a href="https://www.instagram.com/elgustoenfamilia/" target="_blank" rel="noopener noreferrer">
                        <img  className=" h-4 mb-1  mr-3 md:h-7" src={facebook} alt="" />
                    </a>
                </div> 
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contactos;