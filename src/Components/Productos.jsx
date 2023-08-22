import CardProducts from "./CardProducts";
import { useState } from "react";
import asado from "../img/carnes/asado.jpg";
import americano from "../img/carnes/americano.jpg";
import matambre from "../img/carnes/Matambre.jpg";
import entraña from "../img/carnes/entraña.jpg";
import vacio from "../img/carnes/vacio.jpg";
import lomo from "../img/carnes/lomo.jpg";
import bifeangosto from "../img/carnes/bifeangosto.jpg";
import bifeancho from "../img/carnes/bifeancho.jpg";

import bondiola from "../img/cerdo/bondiola.jpg";
import carre from "../img/cerdo/carre.jpg";
import churrasquito from "../img/cerdo/churrasquito.jpg";
import lechon from "../img/cerdo/lechon.jpg";
import matambrito from "../img/cerdo/matambrito.jpg";
import pechito from "../img/cerdo/pechito.png";

import Alitas from "../img/pollo/Alitas.jpg";
import mila from "../img/pollo/mila.png";
import patamuslo from "../img/pollo/patamuslo.jpg";
import pechuga from "../img/pollo/pechuga.jpg";
import pollo from "../img/pollo/pollo.png";
import suprema from "../img/pollo/suprema.jpg";

import product1 from "../img/foto1.jpg";
import Ofertas from "./Ofertas";
// import { Link } from 'react-router-dom';

const carne = [
  {
    id: 1,
    image: `${asado}`,
    name: "Asado",
    description: "$2300",
  },
  {
    id: 2,
    image: `${americano}`,
    name: "Americano",
    description: "$2300",
  },
  {
    id: 3,
    image: `${matambre}`,
    name: "Matambre",
    description: "$2200",
  },
  {
    id: 4,
    image: `${entraña}`,
    name: "Entraña",
    description: "$2100",
  },
  {
    id: 1,
    image: `${vacio}`,
    name: "Vacio",
    description: "$200",
  },
  {
    id: 2,
    image: `${lomo}`,
    name: "Lomo",
    description: "$2300",
  },
  {
    id: 3,
    image: `${bifeangosto}`,
    name: "Bife angosto",
    description: "$2200",
  },
  {
    id: 4,
    image: `${bifeancho}`,
    name: "Bife ancho",
    description: "$2100",
  },
];

const cerdo = [
  {
    id: 1,
    image: `${bondiola}`,
    name: "bondiola",
    description: "$200",
  },
  {
    id: 2,
    image: `${carre}`,
    name: "carre",
    description: "$2300",
  },
  {
    id: 3,
    image: `${churrasquito}`,
    name: "churrasquito",
    description: "$2200",
  },
  {
    id: 4,
    image: `${lechon}`,
    name: "lechon",
    description: "$2100",
  },
  {
    id: 1,
    image: `${matambrito}`,
    name: "matambrito",
    description: "$200",
  },
  {
    id: 2,
    image: `${pechito}`,
    name: "pechito",
    description: "$2300",
  },
];

const pollos = [
  {
    id: 1,
    image: `${Alitas}`,
    name: "Alitas",
    description: "$200",
  },
  {
    id: 2,
    image: `${mila}`,
    name: "mila",
    description: "$2300",
  },
  {
    id: 3,
    image: `${patamuslo}`,
    name: "patamuslo",
    description: "$2200",
  },
  {
    id: 4,
    image: `${pechuga}`,
    name: "pechuga",
    description: "$2100",
  },
  {
    id: 1,
    image: `${pollo}`,
    name: "pollo",
    description: "$200",
  },
  {
    id: 2,
    image: `${suprema}`,
    name: "carne",
    description: "$2300",
  },
];

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
];

const limitedProducts = carne.slice(0, 4);

const limitedProducts3 = cerdo.slice(0, 4);

const limitedProducts4 = pollos.slice(0, 4);

function Productos() {
  const [showMore, setShowMore] = useState(false);

  const [showMore3, setShowMore3] = useState(false);
  const [showMore4, setShowMore4] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  const toggleShowMore3 = () => {
    setShowMore3(!showMore3);
  };

  const toggleShowMore4 = () => {
    setShowMore4(!showMore4);
  };

  const productsToShow = showMore ? carne : limitedProducts;
  const productsToShow3 = showMore3 ? cerdo : limitedProducts3;
  const productsToShow4 = showMore4 ? pollos : limitedProducts4;

  return (
    <div data-aos-duration="1500" data-aos="zoom-in-right" className=" md:mt-28 bg-white px-4 md:px-8 py-16 " id="productos">
      <h1 className="text-center text-4xl md:text-5xl font-extralight mb-6 font-serif">
        Nuestros Productos
      </h1>
      <div className="mt-24 md:mt-44">
        <div data-aos="zoom-in-right" data-aos-duration="1500" className="text-2xl font-extralight flex justify-center mb-6">
          Carnes
        </div>
        <CardProducts products={productsToShow} />
      </div>
      <div className="mt-10 flex justify-center">
        <button
          className="bg-red-600 w-44 rounded-lg items-center text-white text-2xl hover:bg-red-900"
          onClick={toggleShowMore}
        >
          {showMore ? "Ver Menos" : "Ver Más"}
        </button>
      </div>

      <div className="mt-24">
        <div data-aos="zoom-in-right" data-aos-duration="1500" className="text-2xl font-extralight flex justify-center mb-6">
          Cerdos
        </div>
        <CardProducts products={productsToShow3} />
      </div>
      <div className="mt-10 flex justify-center">
        <button
          className="bg-red-600  rounded-lg w-44 items-center text-white text-2xl hover:bg-red-900"
          onClick={toggleShowMore3}
        >
          {showMore3 ? "Ver Menos" : "Ver Más"}
        </button>
      </div>

      <div className="mt-24">
        <div data-aos="zoom-in-left" data-aos-duration="1500"  className="text-2xl font-extralight flex justify-center mb-6">
          Pollos
        </div>
        <CardProducts products={productsToShow4} />
      </div>
      <div className="mt-10 flex justify-center">
        <button
          className="bg-red-600 w-44 rounded-lg items-center text-white text-2xl hover:bg-red-900"
          onClick={toggleShowMore4}
        >
          {showMore4 ? "Ver Menos" : "Ver Más"}
        </button>
      </div>
      
    </div>
  );
}

export default Productos;
