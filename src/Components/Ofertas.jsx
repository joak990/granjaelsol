import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import ofertaespinazo from "../img/ofertas/ofertaespinazo.png";//
import ofertabifeancho from "../img/ofertas/ofertabifeancho.png";//
import ofertabifeangosto from "../img/ofertas/ofertabifeangosto.png";//
import ofertapatycasero from "../img/ofertas/ofertapatycasero.png";//
import ofertamatambre from "../img/ofertas/ofertamatambre.png";//
import ofertatapaasado from "../img/ofertas/ofertatapaasado.png";//
import ofertadescuento from "../img/ofertas/ofertadescuento.png";
import ofertabondiola from "../img/ofertas/ofertabondiola.png";//
import ofertapechitodecerdo from "../img/ofertas/ofertapechitodecerdo.png";//
import ofertadescuento2 from "../img/ofertas/ofertadescuento2.png";//
import ofertapernil from "../img/ofertas/ofertapernil.png";//
import ofertacarre from "../img/ofertas/ofertacarre.png";//

// import ofertaosobuco from "../img/ofertas/ofertaosobuco.png";
// import ofertapaleta from "../img/ofertas/ofertapaleta.png";//
// import ofertaboladelomo from "../img/ofertas/ofertaboladelomo.png";
// import ofertapicadaespecial from "../img/ofertas/ofertapicadaespecial.png";
// import ofertaroastebeef from "../img/ofertas/ofertaroastbeef.png";



import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay'
function CarrouselSwip() {
    return (
        <div className=" mt-8 w-full md:w-full container"> {/* Agrega una clase contenedora para centrar */}
            <div className=" row">
                <div className=" col-lg-8 md:flex mx-auto"> {/* Utiliza una columna centrada */}
                    <Swiper
                        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                        spaceBetween={2}
                        slidesPerView={1}
                        navigation
                        autoplay={{ delay: 7000, disableOnInteraction: false }}
                        pagination={{ clickable: true }}
                        scrollbar={{ draggable: true }}
                        autoHeight={true}
                        breakpoints={{
                            640: { slidesPerView: 1 },
                            768: { slidesPerView: 3 },
                            1024: { slidesPerView: 4 },
                        }}  
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                    >
                        <SwiperSlide><img className='w-100' src={ofertadescuento} alt="" /></SwiperSlide>
                        <SwiperSlide><img className='w-100' src={ofertadescuento2} alt="" /></SwiperSlide>
                        <SwiperSlide><img className='w-100' src={ofertabondiola} alt="" /></SwiperSlide> 
                        <SwiperSlide><img className='w-100' src={ofertacarre} alt="" /></SwiperSlide>
                        <SwiperSlide><img className='w-100' src={ofertapechitodecerdo} alt="" /></SwiperSlide>
                        <SwiperSlide><img className='w-100' src={ofertaespinazo} alt="" /></SwiperSlide>
                        <SwiperSlide><img className='w-100' src={ofertabifeangosto} alt="" /></SwiperSlide>
                        <SwiperSlide><img className='w-100' src={ofertabifeancho} alt="" /></SwiperSlide> 
                        <SwiperSlide><img className='w-100' src={ofertapatycasero} alt="" /></SwiperSlide>
                        <SwiperSlide><img className='w-100' src={ofertatapaasado} alt="" /></SwiperSlide>
                        <SwiperSlide><img className='w-100' src={ofertadescuento} alt="" /></SwiperSlide>
                        <SwiperSlide><img className='w-100' src={ofertamatambre} alt="" /></SwiperSlide>
                        <SwiperSlide><img className='w-100' src={ofertapernil} alt="" /></SwiperSlide>
                        {/* ... Agrega más diapositivas según sea necesario */}
                    </Swiper>
                </div>
            </div>
        </div>
    )
}

export default CarrouselSwip;
