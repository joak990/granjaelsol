

import Products from './Products';
import { Link } from 'react-router-dom';


// const slides = [
//     "https://i.ibb.co/ncrXc2V/1.png",
//     "https://i.ibb.co/ncrXc2V/1.png",
//     "https://i.ibb.co/ncrXc2V/1.png",
//     "https://i.ibb.co/ncrXc2V/1.png"
// ]
function Home() {

    return (
        <>
            <div className='bg-white'>
                <div className="flex justify-end mt-8 ">
                    <a href="https://api.whatsapp.com/send?phone=541131666991" target="_blank" rel="noopener noreferrer">
                        <img src="./wplogo.png" alt="WhatsApp" className=" h-12  md:h-16 md:w-16 fixed bottom-4 right-10" />
                    </a>
                </div>
                <div className='bg-white'>
                    <img className='h-96 w-full object-cover' src="./foto1.jpg" alt="Foto de portada" />
                </div>
                <div className='bg-white px-4 md:px-8 py-16'>
                    <h1 className='text-center text-3xl md:text-4xl font-extralight mb-4 font-serif'>¿Quiénes Somos?</h1>
                    <div className='flex flex-col md:flex-row md:mt-24 justify-center items-center'>
                        <div className='w-full md:w-1/2 pr-0 md:pr-4 md:ml-60'>
                            <img className='h-72 w-72 rounded-full object-cover' src="./logo.jpg" alt="Quienes Somos" />
                        </div>
                        <div className='w-full md:w-1/2 mt-6 md:mt-0  md:mr-44 text-xl md:text-3xl'>
                            <div className='bg-slate-100 shadow-xl  rounded-lg p-6 md:p-8' id='quienes-somos'>
                                Somos un negocio dedicado a brindar la mejor atención a nuestros clientes. En Granja el sol, nos enorgullecemos de ofrecer los cortes de la más alta calidad y al mejor precio.
                            </div>
                            <div className='mt-6 md:mt-8'>
                                <div className='flex flex-col gap-2 items-start md:mt-24 '>
                                    <p className='text-center text-3xl'>
                                        <span>✅</span> Carne de calidad.
                                    </p>
                                    <p className='text-center text-3xl'>
                                        <span>✅</span> Selección Premium.
                                    </p>
                                    <p className='text-center text-3xl'>
                                        <span>✅</span> Excelente Atención.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='bg-white px-4 md:px-8 py-16'>
                    <h1 className='text-center text-4xl md:text-5xl font-extralight mb-6 font-serif'>Nuestros Productos</h1>
                    <div className='mt-24'>
                        <Products />
                    </div>
                    <div className='mt-10 flex justify-center'>
                        <Link to="/menu">
                            <button
                                className='bg-red-600 w-44 items-center text-white text-2xl hover:bg-red-900'
                            >
                                Ver Productos
                            </button>
                        </Link>
                    </div>
                    <h1 className='text-center text-4xl mt-20 md:text-5xl font-extralight mb-4 md:mt-28 font-serif'> Nuevas Ofertas</h1>
                    <div className='mt-24'>
                        <Products />
                    </div>

                    <div className='mt-10 flex justify-center'>
                        <Link to="/ofertas">
                            <button
                                className='bg-red-600 w-44 items-center text-white text-2xl hover:bg-red-900'
                                onClick={() => window.open('https://api.whatsapp.com/send?phone=541131666991&text=Hola%20quiero%20mas%20informaci%C3%B3n%20acerca%20de%20los%20productos', '_blank')}
                            >
                                Ver Ofertas
                            </button>
                        </Link>
                    </div>
                    <div className='mt-24'>
                        <h1 className='text-center text-3xl md:text-4xl font-extralight mb-4 font-serif'>Contactanos</h1>
                    </div>

                </div>
            </div>
        </>
    );
}

export default Home
