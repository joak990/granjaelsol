import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Menu from './Components/Menu';
import Navbar from './Components/Navbar'

const App = () => {
    return (
        <div>
            <BrowserRouter>
            <Navbar />
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/Menu" element={<Menu />}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
