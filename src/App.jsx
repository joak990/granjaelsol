import Navbar from './Components/Navbar';
import './App.css';

function App() {
    return (
        <>
            <Navbar />
            <div className='bg-white'>
                <div className="flex justify-end mt-8">
                    <a href="https://api.whatsapp.com/send?phone=541131666991" target="_blank" rel="noopener noreferrer">
                        <img src="./wplogo.png" alt="WhatsApp" className="h-12 w-12 fixed bottom-4 right-10" />
                    </a>
                </div>
                <div className='bg-white'>
                    <img className='h-96 w-full' src="./foto1.jpg" alt="Foto de portada" />
                </div>
                <div className='bg-white px-8 py-16'>
                    <h1 className='text-3xl  font-extralight mb-4 font-serif' >¿Quienes Somos?</h1>
                    <div className='flex'>
                        <div className='w-1/2 pr-4 '>
                            <img className=' h-auto w-auto rounded-full' src="./foto2.jpg" alt="Quienes Somos" />
                        </div>
                        <div className='w-1/2 mt-9 text-2xl'>
                            <p className='bg-slate-200 rounded-full' id='quienes-somos'>
                                Somos un negocio dedicado a brindar la mejor atencion a nuestros clienes. En Granja el sol, 
                                nos enorgullecemos de ofrecer los cortes de la mas alta calidad y al mejor precio.
                            </p>
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
