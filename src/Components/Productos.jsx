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
import palomita from "../img/carnes/palomita.jpg";
import roastbeff from "../img/carnes/roastbeef.jpg";
import tapadeasado from "../img/carnes/tapadeasado.jpg";
import tapadenalga from "../img/carnes/tapadenalga.png";
import osobuco from "../img/carnes/osobuco.jpg";
import paleta from "../img/carnes/paleta.jpg";
import peceto from "../img/carnes/peceto.jpg";
import picaña from "../img/carnes/picaña.jpg";
import ojodebife from "../img/carnes/ojodebife.png";
import colitacuadril from "../img/carnes/colitacuadril.jpg";
import cuadrada from "../img/carnes/cuadrada.png";
import cuadril from "../img/carnes/cuadril.png";
import faldaparrillera from "../img/carnes/faldaparrillera.jpg";
import nalga from "../img/carnes/nalga.png";
import boladelomo from "../img/carnes/boladelomo.png";
import bifedechorizo from "../img/carnes/bifedechorizo.jpg";
import espinazo from "../img/carnes/espinazo.jpg";
import tortuguita from "../img/carnes/tortuguita.jpg";
import faldapuchero from "../img/carnes/faldapuchero.jpg";
import hamburguesas from "../img/carnes/hamburguesas.png";
import miladecarne from "../img/carnes/miladecarne.jpg";
import picada from "../img/carnes/picada.jpg";


import bondiola from "../img/cerdo/bondiola.jpg";
import carre from "../img/cerdo/carre.jpg";
import churrasquito from "../img/cerdo/churrasquito.jpg";
import lechon from "../img/cerdo/lechon.jpg";
import matambrito from "../img/cerdo/matambrito.jpg";
import pechito from "../img/cerdo/pechito.png";

//import Alitas from "../img/pollo/Alitas.jpg";
import mila from "../img/pollo/mila.png";
import patamuslo from "../img/pollo/patamuslo.jpg";
//import pechuga from "../img/pollo/pechuga.jpg";
//import pollo from "../img/pollo/pollo.png";
import suprema from "../img/pollo/suprema.jpg";

import {Link} from "react-scroll"
const carne = [
  {
    id: 1,
    image: `${asado}`,
    name: "Asado",
    description: "$13590", // 
  },
  {
    id: 2,
    image: `${americano}`,
    name: "Americano",
    description: "$13890", //
  },
  {
    id: 3,
    image: `${matambre}`,
    name: "Matambre",
    description: "$12500", 
  },
  {
    id: 4,
    image: `${entraña}`,
    name: "Entraña",
    description: "$20500",
  },
  {
    id: 1,
    image: `${vacio}`,
    name: "Vacio",
    description: "$15900", //
  },
  {
    id: 2,
    image: `${lomo}`,
    name: "Lomo",
    description: "$20900",
  },
  {
    id: 3,
    image: `${bifeangosto}`,
    name: "Bife angosto",
    description: "$12130",//
  },
  {
    id: 4,
    image: `${bifeancho}`,
    name: "Bife ancho",
    description: "$11900",//
  },
  {
    id: 5,
    image: `${palomita}`,
    name: "Palomita",
    description: "$11590", //
  },
  {
    id: 6,
    image: `${roastbeff}`,
    name: "Roastbeff",
    description: "$11590", // 
  },
  {
    id: 7,
    image: `${tapadeasado}`,
    name: "Tapa de asado",
    description: "$11900", 
  },
  {
    id: 8,
    image: `${tapadenalga}`,
    name: "Tapa de nalga",
    description: "$12200", //
  },
  {
    id: 9,
    image: `${osobuco}`,
    name: "Osobuco",
    description: "$7790", //
  },
  {
    id: 10,
    image: `${paleta}`,
    name: "Paleta",
    description: "$11590", 
  },
  {
    id: 11,
    image: `${peceto}`,
    name: "Peceto",
    description: "$17200", // 
  },
  {
    id: 12,
    image: `${ojodebife}`,
    name: "Ojo de bife",
    description: "$19900", //
  },
  {
    id: 13,
    image: `${picaña}`,
    name: "Picaña",
    description: "$17900",
  },

  {
    id: 14,
    image: `${colitacuadril}`,
    name: "Colita de cuadril",
    description: "$17900",
  },
  {
    id: 15,
    image: `${cuadrada}`,
    name: "Cuadrada",
    description: "$12500", 
  },
  {
    id: 16,
    image: `${cuadril}`,
    name: "Cuadril",
    description: "$13130", // 
  },
  {
    id: 17,
    image: `${faldaparrillera}`,
    name: "Falda parrillera",
    description: "$9490", //
  },
  {
    id: 18,
    image: `${nalga}`,
    name: "Nalga",
    description: "$15900", 
  },
  {
    id: 19,
    image: `${boladelomo}`,
    name: "Bola de lomo",
    description: "$12500",
  },
  {
    id: 20,
    image: `${bifedechorizo}`,
    name: "Bife de chorizo",
    description: "18900", //
  },
  {
    id: 21,
    image: `${espinazo}`,
    name: "Espinazo",
    description: "$4900", //
  },
  {
    id: 22,
    image: `${tortuguita}`,
    name: "Tortuguita",
    description: "$11.590",//
  },
  {
    id: 23,
    image: `${faldapuchero}`,
    name: "Falda puchero",
    description: "$5590",
  },
  {
    id: 24,
    image: `${hamburguesas}`,
    name: "hamburguesas",
    description: "$6690",
  },
  {
    id: 25,
    image: `${miladecarne}`,
    name: "Milanesa de carne",
    description: "$12500",
  },
  {
    id: 26,
    image: `${picada}`,
    name: "Picada Especial",
    description: "$12100",  //
  }
];

const cerdo = [
  {
    id: 1,
    image: `${bondiola}`,
    name: "Bondiola",
    description: "$10390", //
  },
  {
    id: 2,
    image: `${carre}`,
    name: "Carre s/ hueso",
    description: "$9790", //
  },
  {
    id: 3,
    image: `${churrasquito}`,
    name: "Churrasquito",
    description: "$11900", //
  },
  {
    id: 4,
    image: `${lechon}`,
    name: "Lechon",
    description: "$4000",
  },
  {
    id: 1,
    image: `${matambrito}`,
    name: "Matambrito",
    description: "$14250",
  },
  {
    id: 2,
    image: `${pechito}`,
    name: "Pechito",
    description: "$7490", //
  },
];

const pollos = [
  /*
  {
    id: 1,
    image: `${Alitas}`,
    name: "Alitas",
    description: "$2000",
  },
  */
  {
    id: 2,
    image: `${mila}`,
    name: "Milanesa de pollo",
    description: "$8650",//
  },
  {
    id: 3,
    image: `${patamuslo}`,
    name: "Pata y muslo",
    description: "$4490", //
  },
    /*
  {
    id: 4,
    image: `${pechuga}`,
    name: "Pechuga",
    description: "$5890",
  },
  {
    id: 1,
    image: `${pollo}`,
    name: "Pollo entero",
    description: "$3490",
  },
  */
  {
    id: 2,
    image: `${suprema}`,
    name: "Suprema",
    description: "$9500", //
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
    <div data-aos="zoom-in-right"  data-aos-duration="1500" className=" md:mt-28 bg-white px-4 md:px-8 py-16 " id="productos">
      <h1 className="text-center text-4xl md:text-5xl font-extralight mb-6 font-serif">
        Nuestros Productos
      </h1>
      <div className="mt-24 md:mt-24">
        <div data-aos="fade-down" data-aos-duration="1500" className="text-2xl font-extralight flex justify-center mb-6">
          Vacunos
        </div>
        <CardProducts products={productsToShow} />
      </div>
      <div className="mt-10 flex justify-center">
      {showMore? (
        <Link to="productos"  spy={true} smooth={true} offset={-100} duration={500}>
        <button
          className="bg-orange-200 w-44 rounded-lg items-center text-white text-2xl hover:bg-red-900"
          onClick={toggleShowMore}
          >
          {showMore ? "Ver menos" : "Ver más"}
        </button>
        </Link>
      ) : (<button
        className="bg-orange-200 w-44 rounded-lg items-center text-white text-2xl hover:bg-red-900"
        onClick={toggleShowMore}
        >
        {showMore ? "Ver menos" : "Ver más"}
      </button>)}
      </div>

      <div className="mt-24">
        <div data-aos="zoom-in-right" data-aos-duration="1500" className="text-2xl font-extralight flex justify-center mb-6">
          Cerdo
        </div>
        <CardProducts products={productsToShow3} />
      </div>
      <div className="mt-10 flex justify-center">
        <button
          className="bg-orange-200  rounded-lg w-44 items-center text-white text-2xl hover:bg-red-900"
          onClick={toggleShowMore3}
        >
          {showMore3 ? "Ver menos" : "Ver más"}
        </button>
      </div>

      <div className="mt-24">
        <div data-aos="zoom-in-left" data-aos-duration="1500"  className="text-2xl font-extralight flex justify-center mb-6">
          Pollo
        </div>
        <CardProducts products={productsToShow4} />
      </div>
      <div className="mt-10 flex justify-center">
        <button
          className="bg-orange-200 w-44 rounded-lg items-center text-white text-2xl hover:bg-red-900"
          onClick={toggleShowMore4}
        >
          {showMore4 ? "Ver menos" : "Ver más"}
        </button>
      </div>
      
    </div>
  );
}

export default Productos;
