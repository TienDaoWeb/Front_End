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
      src: "/assets/images/slide8.jpg"
    },
    {
      src: "/assets/images/slide2.jpg"
    },
    {
      src: "/assets/images/slide9.jpg"
    },
    // {
    //   src: "/assets/images/slide5.jpg"
    // },
    // {
    //   src: "/assets/images/slide6.jpg"
    // },
    // {
    //   src: "/assets/images/slide7.jpg"
    // },
    // {
    //   src: "/assets/images/slide8.jpg"
    // },
    // {
    //   src: "/assets/images/slide9.jpg"
    // },
  ]

  return (
    <div className="Homepage__wrapper">
      <Header />
      <div className="Homepage__slide">
        <Swiper
          spaceBetween={40}
          centeredSlides={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={false}
          modules={[Autoplay]}
          className="mySwiper-top"
        >
          {slides_top.map((slide_top, index) => (
            <SwiperSlide key={index} className='slide_swipper'>
              <div
                className="slide_top__img xs:h-[200px]"
                style={{ 
                  backgroundImage: `url(${slide_top.src})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'top',
                  width: '100%',
                  backgroundRepeat: 'no-repeat'
                }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="overlay"></div>
      </div>
      <div className="Homepage xs:px-5">        
        <div className="Homepage__container xs:mt-[100px]">
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