
const CardProducts = ({products}) => {
    return (
        <div className="flex flex-wrap justify-center gap-4 md:gap-7">
            {products && products.map((elem, index) => (
                <div key={index} className="bg-white flex flex-col items-center justify-center w-full md:w-64 h-60 p-4 md:p-8 shadow-md">
                    <img
                        className="mt-1 object-cover h-32 w-32 md:h-44 md:w-44 rounded-2xl"
                        src={elem.image}
                        alt="producto"
                    />
                    <div className="flex flex-col gap-2 items-center justify-start w-full">
                        <h6 className="text-gray-900 text-lg md:text-2xl font-semibold text-center">{elem.name}</h6>
                        <span className="text-center text-gray-800 w-full font-semibold text-base md:text-lg">
                            {elem.description}
                        </span>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default CardProducts;