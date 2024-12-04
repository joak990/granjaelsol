import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import ofertaosobuco from "../img/ofertas/ofertaosobuco.png";//
import ofertabifeancho from "../img/ofertas/ofertabifeancho.png";//
import ofertamarucha from "../img/ofertas/ofertamarucha.png";//
import ofertabifeangosto from "../img/ofertas/ofertabifeangosto.png";//
import ofertaasadoorilla from "../img/ofertas/ofertaasadoorilla.png";//
import ofertaroastbeef from "../img/ofertas/ofertaroastbeef.png";//
import ofertapatycasero from "../img/ofertas/ofertapatycasero.png";
import ofertaespinazo from "../img/ofertas/ofertaespinazo.png";//
import ofertapernil from "../img/ofertas/ofertapernil.png";//
import ofertapicadaespecial from "../img/ofertas/ofertapicadaespecial.png";//
import ofertacarredecerdo from "../img/ofertas/ofertacarredecerdo.png";//
import ofertapechitodecerdo from "../img/ofertas/ofertapechitodecerdo.png";//
import ofertapicadacomun from "../img/ofertas/ofertapicadacomun.png";//
import ofertafaldaparrillera from "../img/ofertas/ofertafaldaparrillera.png";//
import ofertabondiola from "../img/ofertas/ofertabondiola.png";//
import ofertatapadenalga from "../img/ofertas/ofertatapadenalga.png";//


import ofertadescuento from "../img/ofertas/ofertadescuento.png";//
import ofertadescuento2 from "../img/ofertas/ofertadescuento2.png";//



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
                        <SwiperSlide><img className='w-100' src={ofertaosobuco} alt="" /></SwiperSlide> 
                        <SwiperSlide><img className='w-100' src={ofertabifeancho} alt="" /></SwiperSlide>
                        <SwiperSlide><img className='w-100' src={ofertamarucha} alt="" /></SwiperSlide>
                        <SwiperSlide><img className='w-100' src={ofertabifeangosto} alt="" /></SwiperSlide>
                        <SwiperSlide><img className='w-100' src={ofertabifeangosto} alt="" /></SwiperSlide>
                        <SwiperSlide><img className='w-100' src={ofertaasadoorilla} alt="" /></SwiperSlide> 
                        <SwiperSlide><img className='w-100' src={ofertaroastbeef} alt="" /></SwiperSlide>
                        <SwiperSlide><img className='w-100' src={ofertapatycasero} alt="" /></SwiperSlide>
                        <SwiperSlide><img className='w-100' src={ofertadescuento} alt="" /></SwiperSlide>
                        <SwiperSlide><img className='w-100' src={ofertaespinazo} alt="" /></SwiperSlide>
                        <SwiperSlide><img className='w-100' src={ofertapicadaespecial} alt="" /></SwiperSlide>
                        <SwiperSlide><img className='w-100' src={ofertacarredecerdo} alt="" /></SwiperSlide>
                        <SwiperSlide><img className='w-100' src={ofertapechitodecerdo} alt="" /></SwiperSlide>
                        <SwiperSlide><img className='w-100' src={ofertapicadacomun} alt="" /></SwiperSlide>
                        <SwiperSlide><img className='w-100' src={ofertafaldaparrillera} alt="" /></SwiperSlide>
                        <SwiperSlide><img className='w-100' src={ofertatapadenalga} alt="" /></SwiperSlide>
                        <SwiperSlide><img className='w-100' src={ofertabondiola} alt="" /></SwiperSlide>
                        <SwiperSlide><img className='w-100' src={ofertapernil} alt="" /></SwiperSlide>
                        {/* ... Agrega más diapositivas según sea necesario */}
                    </Swiper>
                </div>
            </div>
        </div>
    )
}

export default CarrouselSwip;
