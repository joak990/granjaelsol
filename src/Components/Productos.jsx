import CardProducts from './CardProducts';
import { useState } from 'react';
import product1 from "../img/fotoo1.jpg"
// import { Link } from 'react-router-dom';

const productos = [
    {
        id: 1,
        image: `${product1}`,
        name: "pollo",
        description: "$200",
    },
    {
        id: 2,
        image: `${product1}`,
        name: "carne",
        description: "$2300",
    },
    {
        id: 3,
        image: `${product1}`,
        name: "pollo",
        description: "$2200",
    },
    {
        id: 4,
        image: `${product1}`,
        name: "pollo",
        description: "$2100",
    },
    {
        id: 1,
        image: `${product1}`,
        name: "pollo",
        description: "$200",
    },
    {
        id: 2,
        image: `${product1}`,
        name: "carne",
        description: "$2300",
    },
    {
        id: 3,
        image: `${product1}`,
        name: "pollo",
        description: "$2200",
    },
    {
        id: 4,
        image: `${product1}`,
        name: "pollo",
        description: "$2100",
    },
]

const productos1 = [
    {
        id: 1,
        image: `${product1}`,
        name: "pollo",
        description: "$200",
    },
    {
        id: 2,
        image: `${product1}`,
        name: "carne",
        description: "$2300",
    },
    {
        id: 3,
        image: `${product1}`,
        name: "pollo",
        description: "$2200",
    },
    {
        id: 4,
        image: `${product1}`,
        name: "pollo",
        description: "$2100",
    },
    {
        id: 1,
        image: `${product1}`,
        name: "pollo",
        description: "$200",
    },
    {
        id: 2,
        image: `${product1}`,
        name: "carne",
        description: "$2300",
    },
    {
        id: 3,
        image: `${product1}`,
        name: "pollo",
        description: "$2200",
    },
    {
        id: 4,
        image: `${product1}`,
        name: "pollo",
        description: "$2100",
    },
]

const productos2 = [
    {
        id: 1,
        image: `${product1}`,
        name: "pollo",
        description: "$200",
    },
    {
        id: 2,
        image: `${product1}`,
        name: "carne",
        description: "$2300",
    },
    {
        id: 3,
        image: `${product1}`,
        name: "pollo",
        description: "$2200",
    },
    {
        id: 4,
        image: `${product1}`,
        name: "pollo",
        description: "$2100",
    },
    {
        id: 1,
        image: `${product1}`,
        name: "pollo",
        description: "$200",
    },
    {
        id: 2,
        image: `${product1}`,
        name: "carne",
        description: "$2300",
    },
    {
        id: 3,
        image: `${product1}`,
        name: "pollo",
        description: "$2200",
    },
    {
        id: 4,
        image: `${product1}`,
        name: "pollo",
        description: "$2100",
    },
]

const ofertas = [
    {
        id: 1,
        image: `${product1}`,
        name: "pollo",
        description: "$200",
    },
    {
        id: 2,
        image: `${product1}`,
        name: "carne",
        description: "$2300",
    },
    {
        id: 3,
        image: `${product1}`,
        name: "pollo",
        description: "$2200",
    },
    {
        id: 4,
        image: `${product1}`,
        name: "pollo",
        description: "$2100",
    },
    {
        id: 1,
        image: `${product1}`,
        name: "pollo",
        description: "$200",
    },
    {
        id: 2,
        image: `${product1}`,
        name: "carne",
        description: "$2300",
    },
    {
        id: 3,
        image: `${product1}`,
        name: "pollo",
        description: "$2200",
    },
    {
        id: 4,
        image: `${product1}`,
        name: "pollo",
        description: "$2100",
    },
]

const limitedProducts = productos.slice(0, 4);

const limitedProductsOfer2 = ofertas.slice(0, 4);

const limitedProducts3 = productos1.slice(0, 4);

const limitedProducts4 = productos1.slice(0, 4);


function Productos() {

    const [showMore, setShowMore] = useState(false);
    const [showMore2, setShowMore2] = useState(false);
    const [showMore3, setShowMore3] = useState(false);
    const [showMore4, setShowMore4] = useState(false);

    const toggleShowMore = () => {
        setShowMore(!showMore);
    };

    const toggleShowMore2 = () => {
        setShowMore2(!showMore2);
    };

    const toggleShowMore3 = () => {
        setShowMore3(!showMore3);
    };

    const toggleShowMore4 = () => {
        setShowMore4(!showMore4);
    };

    const productsToShow = showMore ? productos : limitedProducts;
    const productsToShowOfer2 = showMore2 ? ofertas : limitedProductsOfer2;
    const productsToShow3 = showMore3 ? productos1 : limitedProducts3;
    const productsToShow4 = showMore4 ? productos2 : limitedProducts4;


    return (
        <div className='bg-white px-4 md:px-8 py-16 ' id="productos">
            <h1 className='text-center text-4xl md:text-5xl font-extralight mb-6 font-serif'>Nuestros Productos</h1>
            <div className='mt-24'>
                <CardProducts products={productsToShow} />
            </div>
            <div className='mt-10 flex justify-center'>
                <button
                    className='bg-red-600 w-44 items-center text-white text-2xl hover:bg-red-900'
                    onClick={toggleShowMore}>
                    {showMore ? 'Ver Menos' : 'Ver Más'}
                </button>
            </div>

            <div className='mt-24'>
                <CardProducts products={productsToShow3} />
            </div>
            <div className='mt-10 flex justify-center'>
                <button
                    className='bg-red-600 w-44 items-center text-white text-2xl hover:bg-red-900'
                    onClick={toggleShowMore3}>
                    {showMore3 ? 'Ver Menos' : 'Ver Más'}
                </button>
            </div>

            
            <div className='mt-24'>
                <CardProducts products={productsToShow4} />
            </div>
            <div className='mt-10 flex justify-center'>
                <button
                    className='bg-red-600 w-44 items-center text-white text-2xl hover:bg-red-900'
                    onClick={toggleShowMore4}>
                    {showMore4 ? 'Ver Menos' : 'Ver Más'}
                </button>
            </div>

            <h1 className='text-center text-4xl mt-20 md:text-5xl font-extralight mb-4 md:mt-28 font-serif'> Nuevas Ofertas</h1>
            <div className='mt-24'>
                <CardProducts  products={productsToShowOfer2} />
            </div>
            <div className='mt-10 flex justify-center'>
                    <button
                        className='bg-red-600 w-44 items-center text-white text-2xl hover:bg-red-900'
                        onClick={toggleShowMore2}>
                        {showMore2 ? 'Ver Menos' : 'Ver Más'}
                    </button>
            </div>
        </div>
    )
}

export default Productos
