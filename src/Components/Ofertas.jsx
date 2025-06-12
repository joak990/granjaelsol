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
        <div className="w-full px-4 lg:px-10 mt-8"> {/* Contenedor responsivo con márgenes */}
            <div className="max-w-screen-xl mx-auto"> {/* Centra y limita el ancho máximo */}
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                    spaceBetween={10}
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
                    <SwiperSlide><img className="w-full object-cover" src={ofertadescuento} alt="" /></SwiperSlide>
                    <SwiperSlide><img className="w-full object-cover" src={ofertadescuento2} alt="" /></SwiperSlide>
                    <SwiperSlide><img className="w-full object-cover" src={ofertaosobuco} alt="" /></SwiperSlide>
                    <SwiperSlide><img className="w-full object-cover" src={ofertabifeancho} alt="" /></SwiperSlide>
                    <SwiperSlide><img className="w-full object-cover" src={ofertamarucha} alt="" /></SwiperSlide>
                    <SwiperSlide><img className="w-full object-cover" src={ofertabifeangosto} alt="" /></SwiperSlide>
                    <SwiperSlide><img className="w-full object-cover" src={ofertabifeangosto} alt="" /></SwiperSlide>
                    <SwiperSlide><img className="w-full object-cover" src={ofertaasadoorilla} alt="" /></SwiperSlide>
                    <SwiperSlide><img className="w-full object-cover" src={ofertaroastbeef} alt="" /></SwiperSlide>
                    <SwiperSlide><img className="w-full object-cover" src={ofertapatycasero} alt="" /></SwiperSlide>
                    <SwiperSlide><img className="w-full object-cover" src={ofertadescuento} alt="" /></SwiperSlide>
                    <SwiperSlide><img className="w-full object-cover" src={ofertaespinazo} alt="" /></SwiperSlide>
                    <SwiperSlide><img className="w-full object-cover" src={ofertapicadaespecial} alt="" /></SwiperSlide>
                    <SwiperSlide><img className="w-full object-cover" src={ofertacarredecerdo} alt="" /></SwiperSlide>
                    <SwiperSlide><img className="w-full object-cover" src={ofertapechitodecerdo} alt="" /></SwiperSlide>
                    <SwiperSlide><img className="w-full object-cover" src={ofertapicadacomun} alt="" /></SwiperSlide>
                    <SwiperSlide><img className="w-full object-cover" src={ofertafaldaparrillera} alt="" /></SwiperSlide>
                    <SwiperSlide><img className="w-full object-cover" src={ofertatapadenalga} alt="" /></SwiperSlide>
                    <SwiperSlide><img className="w-full object-cover" src={ofertabondiola} alt="" /></SwiperSlide>
                    <SwiperSlide><img className="w-full object-cover" src={ofertapernil} alt="" /></SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
}


export default CarrouselSwip;
