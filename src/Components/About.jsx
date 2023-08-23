import logo from "../img/logoposta1.png"

function About() {
    return (
        <div data-aos="fade-in" data-aos-duration="1500" className='bg-white px-4 md:px-16 py-16' id="about">
        <h1  className=' md:mt-34 text-center text-3xl md:text-5xl font-extralight mb-4 font-serif'>¿Quiénes Somos?</h1>
        <div className='flex flex-col md:flex-row md:mt-24 justify-center items-center'>
            <div  className='w-full md:w-1/2 pr-0 md:pr-4 md:ml-55 mt-20  sm:flex justify-center'>
                <img data-aos="zoom-in-down"  data-aos-duration="1500" className='md:h-96 md:w-96    border-4 rounded-full object-cover' src={logo} alt="Quienes Somos" />
            </div>
            <div data-aos="zoom-in"  data-aos-duration="1500" className='w-full md:w-1/2 mt-6 md:mt-0  md:mr-44 text-xl md:text-3xl'>
                <div  className=' font-semibold rounded-lg p-6 md:p-8' id='quienes-somos'>
                    Somos un negocio dedicado a brindar la mejor atención a nuestros clientes. En Granja el sol, nos enorgullecemos de ofrecer los cortes de la más alta calidad y al mejor precio.
                </div>
                <div data-aos="fade-right" data-aos-duration="1500"  className='mt-16 mr-8 justify-center flex md:mt-8 '>
                    <div  className='flex  md:ml-6 flex-col gap-2 items-start md:mt-24 '>
                        <p className='text-center text-xl  font-semibold md:text-3xl'>
                            <span>✅</span> Carne de calidad.
                        </p>
                        <p className='text-center text-xl font-semibold  md:text-3xl'>
                            <span>✅</span> Selección Premium.
                        </p>
                        <p className='text-center text-xl  font-semibold md:text-3xl'>
                            <span>✅</span> Excelente Atención.
                        </p>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
    )
}

export default About
