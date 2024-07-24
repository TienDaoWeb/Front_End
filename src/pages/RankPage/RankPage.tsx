// import { useState } from 'react';
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
import './RankPage.css'
import TrendingList from '~/components/TrendingList';
import { useState } from 'react';
import LotRead from '~/components/LotRead';
import LikeList from '~/components/LikeList';
import NominationList from '~/components/NominationList';

SwiperCore.use([EffectCards]);

function RankPage() {

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

  // const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  // const handleSlideChange = (swiper: any) => {
  //   setActiveSlideIndex(swiper.realIndex);
  // };

  // const [tagActive, setTagActive] = useState('Thịnh hành');

  // const handleActive = (name:string) =>{
  //   setTagActive(name);
  // }

  const [activeTag, setActiveTag] = useState('trending')
  return (
    <div className="Trending_page__wrapper">
      <Header />
      <div className="Trending_page__slide">
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
      <div className="Trending_page">        
        <div className="Trending_page__container">
        <div className="Trending_page__content">
            <ul className="Trending_page__sidebar">
              <li className={activeTag === 'trending' ? 'Trending_page__sidebar--tag tag_active' : 'Trending_page__sidebar--tag' } >
                <button onClick={()=> setActiveTag('trending')}>Thịnh hành</button>
                </li>
              <li className={activeTag === 'lot of read' ? 'Trending_page__sidebar--tag tag_active' : 'Trending_page__sidebar--tag' } >
                <button onClick={()=> setActiveTag('lot of read')}>Đọc nhiều</button>
                </li>
              <li className={activeTag === 'nomination' ? 'Trending_page__sidebar--tag tag_active' : 'Trending_page__sidebar--tag' } >
                <button onClick={()=> setActiveTag('nomination')}>Đề cử</button>
                </li>
              <li className={activeTag === 'like' ? 'Trending_page__sidebar--tag tag_active' : 'Trending_page__sidebar--tag' } >
                <button onClick={()=> setActiveTag('like')}>Yêu thích</button>
                </li>
            </ul>
            {activeTag === 'trending' && <TrendingList/>}
            {activeTag === 'lot of read' && <LotRead/>}
            {activeTag === 'nomination' && <NominationList/>}
            {activeTag === 'like' && <LikeList/>}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default RankPage;