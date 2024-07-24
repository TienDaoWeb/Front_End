// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import SwiperCore from 'swiper';
// import required modules
import { Autoplay, EffectCards } from 'swiper/modules';

import Footer from "~/components/Footer";
import Header from "~/components/Header";
import './HomePage.css'
import NominationReading from '~/components/NominationReading';
import NewUpdate from '~/components/NewUpdate';
import HomePageRank from '~/components/HomePageRank';
import HighlyNewRated from '~/components/HighlyNewRated';
import NewReleaseFinish from '~/components/NewReleaseFinish';

SwiperCore.use([EffectCards]);

function HomePage() {

  const slides_top = [
    {
      src: "/assets/images/slide1.jpg"
    },
    {
      src: "/assets/images/slide3.jpg"
    },
    {
      src: "/assets/images/slide4.jpg"
    },
    {
      src: "/assets/images/slide5.jpg"
    },
    {
      src: "/assets/images/slide6.jpg"
    },
    {
      src: "/assets/images/slide7.jpg"
    },
    {
      src: "/assets/images/slide8.jpg"
    },
    {
      src: "/assets/images/slide9.jpg"
    },
  ]

  return (
    <div className="Homepage__wrapper">
      <Header />
      <div className="Homepage__slide">
        <Swiper
          spaceBetween={40}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={false}
          modules={[Autoplay]}
          className="mySwiper-top"
        >
          {slides_top.map((slide_top, index) => (
            <SwiperSlide key={index}>
              <img src={slide_top.src} alt={`comic img ${index + 1}`} className="slide_top__img" />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="overlay"></div>
      </div>
      <div className="Homepage">        
        <div className="Homepage__container">
          <NominationReading/>
          <NewUpdate/>
          <HomePageRank/>
          <HighlyNewRated/>
          <NewReleaseFinish/>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;