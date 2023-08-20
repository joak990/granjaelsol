import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Home from './Components/Home';
import Menu from './Components/Menu';
import Navbar from './Components/Navbar';
import Carrousel from './Components/Carrousel'
import About from './Components/About'
import Productos from './Components/Productos'
import Footer from './Components/Footer'
import Contactos from './Components/Contactos'
import wplogo from "./img/wplogo.png"

const App = () => {
    return (
        <div>
            <div className="flex justify-end mt-8 ">
                <a href="https://api.whatsapp.com/send?phone=541131666991" target="_blank" rel="noopener noreferrer">
                    <img src={wplogo} alt="WhatsApp" className="h-12  md:h-16 md:w-16 fixed bottom-4  right-2" />
                </a>
            </div>
            <Navbar />
            <Carrousel />
            <About />
            <Productos />
            <Contactos />
            <Footer />
            <BrowserRouter>
                <Routes>
                    <Route path="/Menu" element={<Menu />}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
