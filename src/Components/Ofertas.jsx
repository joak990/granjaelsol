import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import ofertaespinazo from "../img/ofertas/ofertaespinazo.png";
import ofertabifeancho from "../img/ofertas/ofertabifeancho.png";
import ofertabifeangosto from "../img/ofertas/ofertabifeangosto.png";
import ofertacosteletacerdo from "../img/ofertas/ofertacosteletacerdo.png";
import ofertafalda from "../img/ofertas/ofertafalda.png";
import ofertapatycasero from "../img/ofertas/ofertapatycasero.png";
import ofertapicadacomun from "../img/ofertas/ofertapicadacomun.png";
import ofertaasado from "../img/ofertas/ofertaasado.png";
import ofertamatambre from "../img/ofertas/ofertamatambre.png";
import ofertapicadaespecial from "../img/ofertas/ofertapicadaespecial.png";
import ofertatapaasado from "../img/ofertas/ofertatapaasado.png";
import ofertaboladelomo from "../img/ofertas/ofertaboladelomo.png";
import ofertabondiola from "../img/ofertas/ofertabondiola.png";
import ofertacuadrada from "../img/ofertas/ofertacuadrada.png";
import ofertaosobuco from "../img/ofertas/ofertaosobuco.png";
import ofertapaleta from "../img/ofertas/ofertapaleta.png";
import ofertapechitodecerdo from "../img/ofertas/ofertapechitodecerdo.png";
import ofertatapadenalga from "../img/ofertas/ofertatapadenalga.png";
import ofertadescuento from "../img/ofertas/ofertadescuento.png";
import ofertaroastebeef from "../img/ofertas/ofertaroastebeef.png";




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
                        <SwiperSlide><img className='w-100' src={ofertaespinazo} alt="" /></SwiperSlide>
                        <SwiperSlide><img className='w-100' src={ofertabifeangosto} alt="" /></SwiperSlide>
                        <SwiperSlide><img className='w-100' src={ofertacosteletacerdo} alt="" /></SwiperSlide>
                        <SwiperSlide><img className='w-100' src={ofertafalda} alt="" /></SwiperSlide>
                        <SwiperSlide><img className='w-100' src={ofertapatycasero} alt="" /></SwiperSlide>
                        {/* <SwiperSlide><img className='w-100' src={ofertapicadacomun} alt="" /></SwiperSlide> */}
                        {/* <SwiperSlide><img className='w-100' src={ofertaasado} alt="" /></SwiperSlide> */}
                        {/* <SwiperSlide><img className='w-100' src={ofertamatambre} alt="" /></SwiperSlide> */}
                        {/* <SwiperSlide><img className='w-100' src={ofertapicadaespecial} alt="" /></SwiperSlide> */}
                        <SwiperSlide><img className='w-100' src={ofertadescuento} alt="" /></SwiperSlide>
                        <SwiperSlide><img className='w-100' src={ofertatapaasado} alt="" /></SwiperSlide>
                        <SwiperSlide><img className='w-100' src={ofertaboladelomo} alt="" /></SwiperSlide>
                        {/* <SwiperSlide><img className='w-100' src={ofertabondiola} alt="" /></SwiperSlide> */}
                        {/* <SwiperSlide><img className='w-100' src={ofertacuadrada} alt="" /></SwiperSlide> */}
                        {/* <SwiperSlide><img className='w-100' src={ofertaosobuco} alt="" /></SwiperSlide> */}
                        <SwiperSlide><img className='w-100' src={ofertapaleta} alt="" /></SwiperSlide>
                        <SwiperSlide><img className='w-100' src={ofertapechitodecerdo} alt="" /></SwiperSlide>
                        {/* <SwiperSlide><img className='w-100' src={ofertaroastebeef} alt="" /></SwiperSlide> */}
                        <SwiperSlide><img className='w-100' src={ofertatapadenalga} alt="" /></SwiperSlide>
                        
                        {/* ... Agrega más diapositivas según sea necesario */}
                    </Swiper>
                </div>
            </div>
        </div>
    )
}

export default CarrouselSwip;
