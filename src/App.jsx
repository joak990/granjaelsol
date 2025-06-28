import Navbar from './Components/Navbar';
import Carrousel from './Components/Carrousel'
import About from './Components/About'
import Productos from './Components/Productos'
import Footer from './Components/Footer'
import Contactos from './Components/Contactos'
import wplogo from "./img/wplogo.png"
//import Ofertas from './Components/Ofertas';

const App = () => {
    return (
        <div>
            <div className="flex justify-end mt-8 ">
                <a href="https://api.whatsapp.com/send?phone=541131666991" target="_blank" rel="noopener noreferrer">
                    <img src={wplogo} alt="WhatsApp" className="h-12  md:h-16 md:w-16 fixed bottom-4 z-50  right-2"  />
                </a>
            </div>
            <Navbar />
            <Carrousel />
            <About />
            <Productos />
            <Contactos />
            <Footer />
        </div>
    );
}

export default App;

/*

<div data-aos="zoom-in-right" data-aos-duration="1500" className="mt-12 md:mt-44 flex justify-center text-3xl md:text-5xl">
        <h1>Nuestras Ofertas</h1>
    </div>
<Ofertas />

*/