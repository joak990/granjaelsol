import Navbar from './Components/Navbar';
import './App.css';

function App() {
    return (
        <>
            <Navbar />
            <div className='bg-white'>
                <div className="flex justify-end">
                    <a href="https://api.whatsapp.com/send?phone=541131666991" target="_blank" rel="noopener noreferrer">
                        <img src="./wplogo.png" alt="WhatsApp" className="h-12 w-12 fixed bottom-4 right-10" />
                    </a>
                </div>
            </div>
            <div className='h-screen bg-gray-100 relative overflow-hidden'>
                <img src="./foto1.jpg" alt="foto" className="animate-slide h-auto w-full absolute left-0 top-0" />
                <h1 className="text-center pt-8">Quienes Somos</h1>
            </div>
        </>
    );
}

export default App;