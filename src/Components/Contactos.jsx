// import { FaInstagram, FaFacebook } from "react-icons/Fa";
import insta from "../img/insta.png"
import facebook from "../img/facebook.png"
function Contactos() {
    return (
        <div className='bg-orange-200 p-4 md:p-8' id="contactos">
            <div className='max-w-screen-md mx-auto'>
                <h1  data-aos="zoom-in-right" data-aos-duration="1500" className='text-center text-3xl md:text-6xl font-extralight text-black mt-12 mb-6 font-serif'>Contactanos</h1>
                <div   className="flex justify-center">
                </div>
                <div  className="flex flex-col justify-center mt-4 md:mt-6">
                    <div data-aos="zoom-in-up" data-aos-duration="1500"  className='text-black text-xl md:text-2xl'>
                        <p    className='mb-2'>
                            Visítanos en: <span className='font-bold text-black'>Isla Jorge 299</span>
                        </p>
                        <p  className='mb-2'>
                            Llámanos: <span className='font-bold text-black'>(+54) 1131666991</span>
                        </p>
                        <p  className='mb-4'>
                            Escríbenos: <span className='font-bold text-black'>granjaelsol1015@gmail.com</span>
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