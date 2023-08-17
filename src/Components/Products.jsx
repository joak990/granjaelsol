
import product1 from "../img/fotoo1.jpg"
import product2 from "../img/foto2.jpg"
import product3 from "../img/foto3.jpg"
import product4 from "../img/foto4.jpg"

const productos = [
    {
        id: 1,
        image: `${product1}`,
        name: "pollo",
        desciption: "el mejor pollo",
    },
    {
        id: 2,
        image: `${product2}`,
        name: "carne",
        desciption: "la mejor carne",
    },
    {
        id: 3,
        image: `${product3}`,
        name: "pollo",
        desciption: "el mejor pollo entero",
    },
    {
        id: 4,
        image: `${product4}`,
        name: "pollo",
        desciption: "la mejor carne x2",
    },

]


const Products = () => {
    return (
        <div>
            {/* <img src = {productos[0].image} alt="product"></img> */}
            {
                productos && productos.map((elem,index) => {
                    return (<>
                        <div key={index} className="bg-white flex flex-col items-center justify-center rounded-3xl w-80  p-8 shadow-md">
                            <img
                                className="mt-1 object-cover h-64 w-64 rounded-full"
                                src={elem.image}
                                alt="producto"
                            />
                            <div className="flex flex-col items-center justify-end mb-1 mt-3">
                                <div className="flex flex-col gap-3 items-center justify-start w-full">
                                    <h6 className="text-gray-900 text-2xl font-semibold text-center">{elem.name}</h6>
                                    <span className="text-center text-gray-800 w-full font-normal text-sm">
                                        {elem.desciption}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </>)
                })
            }
        </div>
    )
}

export default Products;