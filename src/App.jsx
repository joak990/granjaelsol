import Navbar from './Components/Navbar';
import Carrousel from './Components/Carrousel'
import About from './Components/About'
import Productos from './Components/Productos'
import Footer from './Components/Footer'
import Contactos from './Components/Contactos'
import Ofertas from './Components/Ofertas'
import ChristmasSnow from './Components/ChristmasSnow'
import ChristmasBanner from './Components/ChristmasBanner'
import Testimonios from './Components/Testimonios'
import ProductosAdicionales from './Components/ProductosAdicionales'

const App = () => {
    return (
        <div>
            <ChristmasSnow />
            <Navbar />
            <Carrousel />
            <ChristmasBanner />
            <About />
            <Ofertas />
            <Productos />
            <ProductosAdicionales />
            <Testimonios />
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