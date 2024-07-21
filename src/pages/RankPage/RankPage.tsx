import React, { useRef, useState, useEffect } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import SwiperCore from 'swiper';
// import required modules
import { Autoplay, Pagination, Navigation, EffectCards } from 'swiper/modules';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFeatherPointed } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons/faBars";
import { faGlasses } from "@fortawesome/free-solid-svg-icons/faGlasses";

import Footer from "~/components/Footer";
import Header from "~/components/Header";
import './RankPage.css'

SwiperCore.use([EffectCards]);

function RankPage() {

  const slides_top = [
    {
      src: "./public/assets/images/slide1.jpg"
    },
    {
      src: "./public/assets/images/slide3.jpg"
    },
    {
      src: "./public/assets/images/slide4.jpg"
    },
    {
      src: "./public/assets/images/slide5.jpg"
    },
    {
      src: "./public/assets/images/slide6.jpg"
    },
    {
      src: "./public/assets/images/slide7.jpg"
    },
    {
      src: "./public/assets/images/slide8.jpg"
    },
    {
      src: "./public/assets/images/slide9.jpg"
    },
  ]

  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  const handleSlideChange = (swiper: any) => {
    setActiveSlideIndex(swiper.realIndex);
  };

  const [tagActive, setTagActive] = useState('Thịnh hành');

  const handleActive = (name:string) =>{
    setTagActive(name);
  }

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
            <div className="Trending_page__sidebar">
              <a href="" className='Trending_page__sidebar--tag active' >Thịnh hành</a>
              <a href="" className='Trending_page__sidebar--tag' >Đọc nhiều</a>
              <a href="" className='Trending_page__sidebar--tag' >Tặng thưởng</a>
              <a href="" className='Trending_page__sidebar--tag' >Đề cử</a>
              <a href="" className='Trending_page__sidebar--tag' >Yêu thích</a>
              <a href="" className='Trending_page__sidebar--tag' >Thảo luận</a>
            </div>
            <div className="Trending_page__comic_list">
              <h1 className="Trending_page__nomination--title">Danh sách đề cử</h1>
              <div className="line"></div>
              <div className="Trending_page__nomination--comic_list">
                <div className="Trending_page__nomination--comic">
                  <img src="./public/assets/images/linh_canh_hanh_gia.jpg" alt="comic img" className="Trending_page__nomination--comic__img" />
                  <div className="Trending_page__nomination--comic__info">
                    <div className="Comic__title_type">
                      <h2 className="Trending_page__nomination--comic__title">Linh cảnh hành giả</h2>
                      <button className="Trending_page__nomination--comic__type">Khoa huyễn</button>
                    </div>
                    <span className="Trending_page__nomination--comic__intro"> Tuyên cổ thông kim, nghe đồn thế có Linh cảnh.Liên quan tới Linh cảnh thuyết pháp, các triều đại danh nhân nhã sĩ chúng thuyết phân đàn, trong thơ ghi chép:"Từ Tề đến Đường, tư sơn thâm hoang, Linh cảnh tịch liêu, hiếm người du lịch.""Linh cảnh không thể trạng, quỷ công lượng khó cầu."Thân Thành đại học năm nhất tân sinh Trương Nguyên Thanh, tại dưới một lần cơ duyên xảo hợp, đạt được một tấm hội sở thẻ VIP Chí Tôn, a không, là thẻ thông hành Linh cảnh. </span>
                    <div className="Trending_page__nomination--comic__author">
                      <FontAwesomeIcon icon={faFeatherPointed} />
                      Mại Báo Tiểu Lang Quân </div>
                  </div>
                </div>
                <div className="Trending_page__nomination--comic">
                  <img src="./public/assets/images/linh_canh_hanh_gia.jpg" alt="comic img" className="Trending_page__nomination--comic__img" />
                  <div className="Trending_page__nomination--comic__info">
                    <div className="Comic__title_type">
                      <h2 className="Trending_page__nomination--comic__title">Linh cảnh hành giả</h2>
                      <button className="Trending_page__nomination--comic__type">Khoa huyễn</button>
                    </div>
                    <span className="Trending_page__nomination--comic__intro"> Tuyên cổ thông kim, nghe đồn thế có Linh cảnh.Liên quan tới Linh cảnh thuyết pháp, các triều đại danh nhân nhã sĩ chúng thuyết phân đàn, trong thơ ghi chép:"Từ Tề đến Đường, tư sơn thâm hoang, Linh cảnh tịch liêu, hiếm người du lịch.""Linh cảnh không thể trạng, quỷ công lượng khó cầu."Thân Thành đại học năm nhất tân sinh Trương Nguyên Thanh, tại dưới một lần cơ duyên xảo hợp, đạt được một tấm hội sở thẻ VIP Chí Tôn, a không, là thẻ thông hành Linh cảnh. </span>
                    <div className="Trending_page__nomination--comic__author">
                      <FontAwesomeIcon icon={faFeatherPointed} />
                      Mại Báo Tiểu Lang Quân </div>
                  </div>
                </div>
                <div className="Trending_page__nomination--comic">
                  <img src="./public/assets/images/linh_canh_hanh_gia.jpg" alt="comic img" className="Trending_page__nomination--comic__img" />
                  <div className="Trending_page__nomination--comic__info">
                    <div className="Comic__title_type">
                      <h2 className="Trending_page__nomination--comic__title">Linh cảnh hành giả</h2>
                      <button className="Trending_page__nomination--comic__type">Khoa huyễn</button>
                    </div>
                    <span className="Trending_page__nomination--comic__intro"> Tuyên cổ thông kim, nghe đồn thế có Linh cảnh.Liên quan tới Linh cảnh thuyết pháp, các triều đại danh nhân nhã sĩ chúng thuyết phân đàn, trong thơ ghi chép:"Từ Tề đến Đường, tư sơn thâm hoang, Linh cảnh tịch liêu, hiếm người du lịch.""Linh cảnh không thể trạng, quỷ công lượng khó cầu."Thân Thành đại học năm nhất tân sinh Trương Nguyên Thanh, tại dưới một lần cơ duyên xảo hợp, đạt được một tấm hội sở thẻ VIP Chí Tôn, a không, là thẻ thông hành Linh cảnh. </span>
                    <div className="Trending_page__nomination--comic__author">
                      <FontAwesomeIcon icon={faFeatherPointed} />
                      Mại Báo Tiểu Lang Quân </div>
                  </div>
                </div>
                <div className="Trending_page__nomination--comic">
                  <img src="./public/assets/images/linh_canh_hanh_gia.jpg" alt="comic img" className="Trending_page__nomination--comic__img" />
                  <div className="Trending_page__nomination--comic__info">
                    <div className="Comic__title_type">
                      <h2 className="Trending_page__nomination--comic__title">Linh cảnh hành giả</h2>
                      <button className="Trending_page__nomination--comic__type">Khoa huyễn</button>
                    </div>
                    <span className="Trending_page__nomination--comic__intro"> Tuyên cổ thông kim, nghe đồn thế có Linh cảnh.Liên quan tới Linh cảnh thuyết pháp, các triều đại danh nhân nhã sĩ chúng thuyết phân đàn, trong thơ ghi chép:"Từ Tề đến Đường, tư sơn thâm hoang, Linh cảnh tịch liêu, hiếm người du lịch.""Linh cảnh không thể trạng, quỷ công lượng khó cầu."Thân Thành đại học năm nhất tân sinh Trương Nguyên Thanh, tại dưới một lần cơ duyên xảo hợp, đạt được một tấm hội sở thẻ VIP Chí Tôn, a không, là thẻ thông hành Linh cảnh. </span>
                    <div className="Trending_page__nomination--comic__author">
                      <FontAwesomeIcon icon={faFeatherPointed} />
                      Mại Báo Tiểu Lang Quân </div>
                  </div>
                </div>
                <div className="Trending_page__nomination--comic">
                  <img src="./public/assets/images/linh_canh_hanh_gia.jpg" alt="comic img" className="Trending_page__nomination--comic__img" />
                  <div className="Trending_page__nomination--comic__info">
                    <div className="Comic__title_type">
                      <h2 className="Trending_page__nomination--comic__title">Linh cảnh hành giả</h2>
                      <button className="Trending_page__nomination--comic__type">Khoa huyễn</button>
                    </div>
                    <span className="Trending_page__nomination--comic__intro"> Tuyên cổ thông kim, nghe đồn thế có Linh cảnh.Liên quan tới Linh cảnh thuyết pháp, các triều đại danh nhân nhã sĩ chúng thuyết phân đàn, trong thơ ghi chép:"Từ Tề đến Đường, tư sơn thâm hoang, Linh cảnh tịch liêu, hiếm người du lịch.""Linh cảnh không thể trạng, quỷ công lượng khó cầu."Thân Thành đại học năm nhất tân sinh Trương Nguyên Thanh, tại dưới một lần cơ duyên xảo hợp, đạt được một tấm hội sở thẻ VIP Chí Tôn, a không, là thẻ thông hành Linh cảnh. </span>
                    <div className="Trending_page__nomination--comic__author">
                      <FontAwesomeIcon icon={faFeatherPointed} />
                      Mại Báo Tiểu Lang Quân </div>
                  </div>
                </div>
                <div className="Trending_page__nomination--comic">
                  <img src="./public/assets/images/linh_canh_hanh_gia.jpg" alt="comic img" className="Trending_page__nomination--comic__img" />
                  <div className="Trending_page__nomination--comic__info">
                    <div className="Comic__title_type">
                      <h2 className="Trending_page__nomination--comic__title">Linh cảnh hành giả</h2>
                      <button className="Trending_page__nomination--comic__type">Khoa huyễn</button>
                    </div>
                    <span className="Trending_page__nomination--comic__intro"> Tuyên cổ thông kim, nghe đồn thế có Linh cảnh.Liên quan tới Linh cảnh thuyết pháp, các triều đại danh nhân nhã sĩ chúng thuyết phân đàn, trong thơ ghi chép:"Từ Tề đến Đường, tư sơn thâm hoang, Linh cảnh tịch liêu, hiếm người du lịch.""Linh cảnh không thể trạng, quỷ công lượng khó cầu."Thân Thành đại học năm nhất tân sinh Trương Nguyên Thanh, tại dưới một lần cơ duyên xảo hợp, đạt được một tấm hội sở thẻ VIP Chí Tôn, a không, là thẻ thông hành Linh cảnh. </span>
                    <div className="Trending_page__nomination--comic__author">
                      <FontAwesomeIcon icon={faFeatherPointed} />
                      Mại Báo Tiểu Lang Quân </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="Trending_page__nomination_reading">
            <div className="Trending_page__nomination">
              <h1 className="Trending_page__nomination--title">Danh sách đề cử</h1>
              <div className="line"></div>
              <div className="Trending_page__nomination--comic_list">
                <div className="Trending_page__nomination--comic">
                  <img src="./public/assets/images/linh_canh_hanh_gia.jpg" alt="comic img" className="Trending_page__nomination--comic__img" />
                  <div className="Trending_page__nomination--comic__info">
                    <div className="Comic__title_type">
                      <h2 className="Trending_page__nomination--comic__title">Linh cảnh hành giả</h2>
                      <button className="Trending_page__nomination--comic__type">Khoa huyễn</button>
                    </div>
                    <span className="Trending_page__nomination--comic__intro"> Tuyên cổ thông kim, nghe đồn thế có Linh cảnh.Liên quan tới Linh cảnh thuyết pháp, các triều đại danh nhân nhã sĩ chúng thuyết phân đàn, trong thơ ghi chép:"Từ Tề đến Đường, tư sơn thâm hoang, Linh cảnh tịch liêu, hiếm người du lịch.""Linh cảnh không thể trạng, quỷ công lượng khó cầu."Thân Thành đại học năm nhất tân sinh Trương Nguyên Thanh, tại dưới một lần cơ duyên xảo hợp, đạt được một tấm hội sở thẻ VIP Chí Tôn, a không, là thẻ thông hành Linh cảnh. </span>
                    <div className="Homepage__nomination--comic__author">
                      <FontAwesomeIcon icon={faFeatherPointed} />
                      Mại Báo Tiểu Lang Quân </div>
                  </div>
                </div>
                <div className="Homepage__nomination--comic">
                  <img src="./public/assets/images/linh_canh_hanh_gia.jpg" alt="comic img" className="Homepage__nomination--comic__img" />
                  <div className="Homepage__nomination--comic__info">
                    <div className="Comic__title_type">
                      <h2 className="Homepage__nomination--comic__title">Linh cảnh hành giả</h2>
                      <button className="Homepage__nomination--comic__type">Khoa huyễn</button>
                    </div>
                    <span className="Homepage__nomination--comic__intro"> Tuyên cổ thông kim, nghe đồn thế có Linh cảnh.Liên quan tới Linh cảnh thuyết pháp, các triều đại danh nhân nhã sĩ chúng thuyết phân đàn, trong thơ ghi chép:"Từ Tề đến Đường, tư sơn thâm hoang, Linh cảnh tịch liêu, hiếm người du lịch.""Linh cảnh không thể trạng, quỷ công lượng khó cầu."Thân Thành đại học năm nhất tân sinh Trương Nguyên Thanh, tại dưới một lần cơ duyên xảo hợp, đạt được một tấm hội sở thẻ VIP Chí Tôn, a không, là thẻ thông hành Linh cảnh. </span>
                    <div className="Homepage__nomination--comic__author">
                      <FontAwesomeIcon icon={faFeatherPointed} />
                      Mại Báo Tiểu Lang Quân </div>
                  </div>
                </div>
                <div className="Homepage__nomination--comic">
                  <img src="./public/assets/images/linh_canh_hanh_gia.jpg" alt="comic img" className="Homepage__nomination--comic__img" />
                  <div className="Homepage__nomination--comic__info">
                    <div className="Comic__title_type">
                      <h2 className="Homepage__nomination--comic__title">Linh cảnh hành giả</h2>
                      <button className="Homepage__nomination--comic__type">Khoa huyễn</button>
                    </div>
                    <span className="Homepage__nomination--comic__intro"> Tuyên cổ thông kim, nghe đồn thế có Linh cảnh.Liên quan tới Linh cảnh thuyết pháp, các triều đại danh nhân nhã sĩ chúng thuyết phân đàn, trong thơ ghi chép:"Từ Tề đến Đường, tư sơn thâm hoang, Linh cảnh tịch liêu, hiếm người du lịch.""Linh cảnh không thể trạng, quỷ công lượng khó cầu."Thân Thành đại học năm nhất tân sinh Trương Nguyên Thanh, tại dưới một lần cơ duyên xảo hợp, đạt được một tấm hội sở thẻ VIP Chí Tôn, a không, là thẻ thông hành Linh cảnh. </span>
                    <div className="Homepage__nomination--comic__author">
                      <FontAwesomeIcon icon={faFeatherPointed} />
                      Mại Báo Tiểu Lang Quân </div>
                  </div>
                </div>
                <div className="Homepage__nomination--comic">
                  <img src="./public/assets/images/linh_canh_hanh_gia.jpg" alt="comic img" className="Homepage__nomination--comic__img" />
                  <div className="Homepage__nomination--comic__info">
                    <div className="Comic__title_type">
                      <h2 className="Homepage__nomination--comic__title">Linh cảnh hành giả</h2>
                      <button className="Homepage__nomination--comic__type">Khoa huyễn</button>
                    </div>
                    <span className="Homepage__nomination--comic__intro"> Tuyên cổ thông kim, nghe đồn thế có Linh cảnh.Liên quan tới Linh cảnh thuyết pháp, các triều đại danh nhân nhã sĩ chúng thuyết phân đàn, trong thơ ghi chép:"Từ Tề đến Đường, tư sơn thâm hoang, Linh cảnh tịch liêu, hiếm người du lịch.""Linh cảnh không thể trạng, quỷ công lượng khó cầu."Thân Thành đại học năm nhất tân sinh Trương Nguyên Thanh, tại dưới một lần cơ duyên xảo hợp, đạt được một tấm hội sở thẻ VIP Chí Tôn, a không, là thẻ thông hành Linh cảnh. </span>
                    <div className="Homepage__nomination--comic__author">
                      <FontAwesomeIcon icon={faFeatherPointed} />
                      Mại Báo Tiểu Lang Quân </div>
                  </div>
                </div>
                <div className="Homepage__nomination--comic">
                  <img src="./public/assets/images/linh_canh_hanh_gia.jpg" alt="comic img" className="Homepage__nomination--comic__img" />
                  <div className="Homepage__nomination--comic__info">
                    <div className="Comic__title_type">
                      <h2 className="Homepage__nomination--comic__title">Linh cảnh hành giả</h2>
                      <button className="Homepage__nomination--comic__type">Khoa huyễn</button>
                    </div>
                    <span className="Homepage__nomination--comic__intro"> Tuyên cổ thông kim, nghe đồn thế có Linh cảnh.Liên quan tới Linh cảnh thuyết pháp, các triều đại danh nhân nhã sĩ chúng thuyết phân đàn, trong thơ ghi chép:"Từ Tề đến Đường, tư sơn thâm hoang, Linh cảnh tịch liêu, hiếm người du lịch.""Linh cảnh không thể trạng, quỷ công lượng khó cầu."Thân Thành đại học năm nhất tân sinh Trương Nguyên Thanh, tại dưới một lần cơ duyên xảo hợp, đạt được một tấm hội sở thẻ VIP Chí Tôn, a không, là thẻ thông hành Linh cảnh. </span>
                    <div className="Homepage__nomination--comic__author">
                      <FontAwesomeIcon icon={faFeatherPointed} />
                      Mại Báo Tiểu Lang Quân </div>
                  </div>
                </div>
                <div className="Homepage__nomination--comic">
                  <img src="./public/assets/images/linh_canh_hanh_gia.jpg" alt="comic img" className="Homepage__nomination--comic__img" />
                  <div className="Homepage__nomination--comic__info">
                    <div className="Comic__title_type">
                      <h2 className="Homepage__nomination--comic__title">Linh cảnh hành giả</h2>
                      <button className="Homepage__nomination--comic__type">Khoa huyễn</button>
                    </div>
                    <span className="Homepage__nomination--comic__intro"> Tuyên cổ thông kim, nghe đồn thế có Linh cảnh.Liên quan tới Linh cảnh thuyết pháp, các triều đại danh nhân nhã sĩ chúng thuyết phân đàn, trong thơ ghi chép:"Từ Tề đến Đường, tư sơn thâm hoang, Linh cảnh tịch liêu, hiếm người du lịch.""Linh cảnh không thể trạng, quỷ công lượng khó cầu."Thân Thành đại học năm nhất tân sinh Trương Nguyên Thanh, tại dưới một lần cơ duyên xảo hợp, đạt được một tấm hội sở thẻ VIP Chí Tôn, a không, là thẻ thông hành Linh cảnh. </span>
                    <div className="Homepage__nomination--comic__author">
                      <FontAwesomeIcon icon={faFeatherPointed} />
                      Mại Báo Tiểu Lang Quân </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="Homepage__reading">
              <h1 className="Homepage__reading--title">Truyện đã đọc</h1>
              <div className="line"></div>
              <div className="Homepage__reading--comic_list">
                <div className="Homepage__reading--comic">
                  <img src="./public/assets/images/linh_canh_hanh_gia.jpg" alt="comic img" className="Reading__comic--img" />
                  <div className="Reading__comic--info">
                    <h2 className="Reading__comic--title">Linh cảnh hành giả</h2>
                    <div className="flex justify-between items-center w-full">
                      <span className="Reading__comic--status">Đã đọc: 5/101</span>
                      <button className="Reading__comic--continue">Đọc tiếp</button>
                    </div>
                  </div>
                </div>
                <div className="Homepage__reading--comic">
                  <img src="./public/assets/images/linh_canh_hanh_gia.jpg" alt="comic img" className="Reading__comic--img" />
                  <div className="Reading__comic--info">
                    <h2 className="Reading__comic--title">Linh cảnh hành giả</h2>
                    <div className="flex justify-between items-center w-full">
                      <span className="Reading__comic--status">Đã đọc: 5/101</span>
                      <button className="Reading__comic--continue">Đọc tiếp</button>
                    </div>
                  </div>
                </div>
                <div className="Homepage__reading--comic">
                  <img src="./public/assets/images/linh_canh_hanh_gia.jpg" alt="comic img" className="Reading__comic--img" />
                  <div className="Reading__comic--info">
                    <h2 className="Reading__comic--title">Linh cảnh hành giả</h2>
                    <div className="flex justify-between items-center w-full">
                      <span className="Reading__comic--status">Đã đọc: 5/101</span>
                      <button className="Reading__comic--continue">Đọc tiếp</button>
                    </div>
                  </div>
                </div>
                <div className="Homepage__reading--comic">
                  <img src="./public/assets/images/linh_canh_hanh_gia.jpg" alt="comic img" className="Reading__comic--img" />
                  <div className="Reading__comic--info">
                    <h2 className="Reading__comic--title">Linh cảnh hành giả</h2>
                    <div className="flex justify-between items-center w-full">
                      <span className="Reading__comic--status">Đã đọc: 5/101</span>
                      <button className="Reading__comic--continue">Đọc tiếp</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="Homepage__new_update">
            <h1 className="Homepage__new_update--title">Mới cập nhật</h1>
            <div className="line"></div>
            <div className="Homepage__new_update--comic_list">
              <div className="Homepage__new_update--comic">
                <span className="New_update__comic--type">Khoa huyễn</span>
                <h2 className="New_update__comic--title">Linh cảnh hành giả</h2>
                <span className="New_update__comic--chapter">Chương 101: Trong nháy mắt giết địch</span>
                <span className="New_update__comic--author">Mại Báo Tiểu Lang Quân</span>
                <span className="New_update__comic--translator">DarkHero</span>
                <span className="New_update__comic--updating_time">2 phút trước</span>
              </div>
              <div className="Homepage__new_update--comic">
                <span className="New_update__comic--type">Khoa huyễn</span>
                <h2 className="New_update__comic--title">Linh cảnh hành giả</h2>
                <span className="New_update__comic--chapter">Chương 101: Trong nháy mắt giết địch</span>
                <span className="New_update__comic--author">Mại Báo Tiểu Lang Quân</span>
                <span className="New_update__comic--translator">DarkHero</span>
                <span className="New_update__comic--updating_time">2 phút trước</span>
              </div>
              <div className="Homepage__new_update--comic">
                <span className="New_update__comic--type">Khoa huyễn</span>
                <h2 className="New_update__comic--title">Linh cảnh hành giả</h2>
                <span className="New_update__comic--chapter">Chương 101: Trong nháy mắt giết địch</span>
                <span className="New_update__comic--author">Mại Báo Tiểu Lang Quân</span>
                <span className="New_update__comic--translator">DarkHero</span>
                <span className="New_update__comic--updating_time">2 phút trước</span>
              </div>
              <div className="Homepage__new_update--comic">
                <span className="New_update__comic--type">Khoa huyễn</span>
                <h2 className="New_update__comic--title">Linh cảnh hành giả</h2>
                <span className="New_update__comic--chapter">Chương 101: Trong nháy mắt giết địch</span>
                <span className="New_update__comic--author">Mại Báo Tiểu Lang Quân</span>
                <span className="New_update__comic--translator">DarkHero</span>
                <span className="New_update__comic--updating_time">2 phút trước</span>
              </div>
              <div className="Homepage__new_update--comic">
                <span className="New_update__comic--type">Khoa huyễn</span>
                <h2 className="New_update__comic--title">Linh cảnh hành giả</h2>
                <span className="New_update__comic--chapter">Chương 101: Trong nháy mắt giết địch</span>
                <span className="New_update__comic--author">Mại Báo Tiểu Lang Quân</span>
                <span className="New_update__comic--translator">DarkHero</span>
                <span className="New_update__comic--updating_time">2 phút trước</span>
              </div>
              <div className="Homepage__new_update--comic">
                <span className="New_update__comic--type">Khoa huyễn</span>
                <h2 className="New_update__comic--title">Linh cảnh hành giả</h2>
                <span className="New_update__comic--chapter">Chương 101: Trong nháy mắt giết địch</span>
                <span className="New_update__comic--author">Mại Báo Tiểu Lang Quân</span>
                <span className="New_update__comic--translator">DarkHero</span>
                <span className="New_update__comic--updating_time">2 phút trước</span>
              </div>
            </div>
          </div>
          <div className="Homepage__rank">
            <div className="Homepage__rank--reading_week">
              <h1 className="Reading_week__title">Đọc nhiều trong tuần</h1>
              <div className="Reading_week__comic_list">
                <div className="comic__top_1">
                  <img src="./public/assets/images/medal_1.png" alt="comic medal 1" className="comic__medal" />
                  <div className="comic__top_1--info">
                    <h2 className="comic__title">Linh cảnh hành giả</h2>
                    <span className="comic__top_1--view">
                      <FontAwesomeIcon icon={faGlasses} />
                      100,000
                    </span>
                    <span className="comic__top_1__author">
                      <FontAwesomeIcon icon={faFeatherPointed} />
                      Mại Báo Tiểu Lang Quân
                    </span>
                    <span className="comic__top_1__type">
                      <FontAwesomeIcon icon={faBars} />
                      Khoa huyễn
                    </span>
                  </div>
                  <div className="book-cover">
                    <a href="https://metruyencv.com/truyen/tan-the-ta-co-the-trong-thay-thanh-mau-giet-quai-roi-bao" title="Tận Thế: Ta Có Thể Trông Thấy Thanh Máu, Giết Quái Rơi Bảo" className="book-cover-link" >
                      <img src="https://static.cdnno.com/poster/tan-the-ta-co-the-trong-thay-thanh-mau-giet-quai-roi-bao/150.jpg?1706957067" alt="Tận Thế: Ta Có Thể Trông Thấy Thanh Máu, Giết Quái Rơi Bảo" />
                      <span className="book-cover-shadow"></span>
                    </a>
                  </div>
                </div>
                <div className="comic__top_2">
                  <img src="./public/assets/images/medal_2.png" alt="comic medal 1" className="comic__medal" />
                  <h2 className="comic__title">Tiên Nghịch</h2>
                  <span className="comic__view">90,000</span>
                </div>
                <div className="comic__top_3">
                  <img src="./public/assets/images/medal_3.png" alt="comic medal 1" className="comic__medal" />
                  <h2 className="comic__title">Thế giới hoàn mỹ</h2>
                  <span className="comic__view">80,000</span>
                </div>
                <div className="comic__top_4">
                  <span className="comic__medal" >4</span>
                  <h2 className="comic__title">Tru tiên</h2>
                  <span className="comic__view">70,000</span>
                </div>
                <div className="comic__top_5">
                  <span className="comic__medal" >5</span>
                  <h2 className="comic__title">Vạn giới đế tôn</h2>
                  <span className="comic__view">60,000</span>
                </div>
                <div className="comic__top_6">
                  <span className="comic__medal" >6</span>
                  <h2 className="comic__title">Đại đạo kiếm tôn</h2>
                  <span className="comic__view">50,000</span>
                </div>
                <div className="comic__top_7">
                  <span className="comic__medal" >7</span>
                  <h2 className="comic__title">Phàm nhân tu tiên</h2>
                  <span className="comic__view">40,000</span>
                </div>
                <div className="comic__top_8">
                  <span className="comic__medal" >8</span>
                  <h2 className="comic__title">Nghịch thiên tà thần</h2>
                  <span className="comic__view">30,000</span>
                </div>
                <div className="comic__top_9">
                  <span className="comic__medal" >9</span>
                  <h2 className="comic__title">Cửu chuyển bá thể</h2>
                  <span className="comic__view">20,000</span>
                </div>
                <div className="comic__top_10">
                  <span className="comic__medal" >10</span>
                  <h2 className="comic__title">Xích tâm tuần thiên</h2>
                  <span className="comic__view">10,000</span>
                </div>
              </div>
            </div>
            <div className="Homepage__rank--trending_week">
              <h1 className="Trending_week__title">Thịnh hành trong tuần</h1>
              <div className="Trending_week__comic_list">
                <div className="comic__top_1">
                  <img src="./public/assets/images/medal_1.png" alt="comic medal 1" className="comic__medal" />
                  <div className="comic__top_1--info">
                    <h2 className="comic__title">Linh cảnh hành giả</h2>
                    <span className="comic__top_1--view">
                      <FontAwesomeIcon icon={faGlasses} />
                      100,000
                    </span>
                    <span className="comic__top_1__author">
                      <FontAwesomeIcon icon={faFeatherPointed} />
                      Mại Báo Tiểu Lang Quân
                    </span>
                    <span className="comic__top_1__type">
                      <FontAwesomeIcon icon={faBars} />
                      Khoa huyễn
                    </span>
                  </div>
                  <div className="book-cover">
                    <a href="https://metruyencv.com/truyen/tan-the-ta-co-the-trong-thay-thanh-mau-giet-quai-roi-bao" title="Tận Thế: Ta Có Thể Trông Thấy Thanh Máu, Giết Quái Rơi Bảo" className="book-cover-link" >
                      <img src="https://static.cdnno.com/poster/tan-the-ta-co-the-trong-thay-thanh-mau-giet-quai-roi-bao/150.jpg?1706957067" alt="Tận Thế: Ta Có Thể Trông Thấy Thanh Máu, Giết Quái Rơi Bảo" />
                      <span className="book-cover-shadow"></span>
                    </a>
                  </div>
                </div>
                <div className="comic__top_2">
                  <img src="./public/assets/images/medal_2.png" alt="comic medal 1" className="comic__medal" />
                  <h2 className="comic__title">Tiên Nghịch</h2>
                  <span className="comic__view">90,000</span>
                </div>
                <div className="comic__top_3">
                  <img src="./public/assets/images/medal_3.png" alt="comic medal 1" className="comic__medal" />
                  <h2 className="comic__title">Thế giới hoàn mỹ</h2>
                  <span className="comic__view">80,000</span>
                </div>
                <div className="comic__top_4">
                  <span className="comic__medal" >4</span>
                  <h2 className="comic__title">Tru tiên</h2>
                  <span className="comic__view">70,000</span>
                </div>
                <div className="comic__top_5">
                  <span className="comic__medal" >5</span>
                  <h2 className="comic__title">Vạn giới đế tôn</h2>
                  <span className="comic__view">60,000</span>
                </div>
                <div className="comic__top_6">
                  <span className="comic__medal" >6</span>
                  <h2 className="comic__title">Đại đạo kiếm tôn</h2>
                  <span className="comic__view">50,000</span>
                </div>
                <div className="comic__top_7">
                  <span className="comic__medal" >7</span>
                  <h2 className="comic__title">Phàm nhân tu tiên</h2>
                  <span className="comic__view">40,000</span>
                </div>
                <div className="comic__top_8">
                  <span className="comic__medal" >8</span>
                  <h2 className="comic__title">Nghịch thiên tà thần</h2>
                  <span className="comic__view">30,000</span>
                </div>
                <div className="comic__top_9">
                  <span className="comic__medal" >9</span>
                  <h2 className="comic__title">Cửu chuyển bá thể</h2>
                  <span className="comic__view">20,000</span>
                </div>
                <div className="comic__top_10">
                  <span className="comic__medal" >10</span>
                  <h2 className="comic__title">Xích tâm tuần thiên</h2>
                  <span className="comic__view">10,000</span>
                </div>
              </div>
            </div>
            <div className="Homepage__rank--nominating_week">
              <h1 className="Nominating_week__title">Đề cử trong tuần</h1>
              <div className="Nominating_week__comic_list">
                <div className="comic__top_1">
                  <img src="./public/assets/images/medal_1.png" alt="comic medal 1" className="comic__medal" />
                  <div className="comic__top_1--info">
                    <h2 className="comic__title">Linh cảnh hành giả</h2>
                    <span className="comic__top_1--view">
                      <FontAwesomeIcon icon={faGlasses} />
                      100,000
                    </span>
                    <span className="comic__top_1__author">
                      <FontAwesomeIcon icon={faFeatherPointed} />
                      Mại Báo Tiểu Lang Quân
                    </span>
                    <span className="comic__top_1__type">
                      <FontAwesomeIcon icon={faBars} />
                      Khoa huyễn
                    </span>
                  </div>
                  <div className="book-cover">
                    <a href="https://metruyencv.com/truyen/tan-the-ta-co-the-trong-thay-thanh-mau-giet-quai-roi-bao" title="Tận Thế: Ta Có Thể Trông Thấy Thanh Máu, Giết Quái Rơi Bảo" className="book-cover-link" >
                      <img src="https://static.cdnno.com/poster/tan-the-ta-co-the-trong-thay-thanh-mau-giet-quai-roi-bao/150.jpg?1706957067" alt="Tận Thế: Ta Có Thể Trông Thấy Thanh Máu, Giết Quái Rơi Bảo" />
                      <span className="book-cover-shadow"></span>
                    </a>
                  </div>
                </div>
                <div className="comic__top_2">
                  <img src="./public/assets/images/medal_2.png" alt="comic medal 1" className="comic__medal" />
                  <h2 className="comic__title">Tiên Nghịch</h2>
                  <span className="comic__view">90,000</span>
                </div>
                <div className="comic__top_3">
                  <img src="./public/assets/images/medal_3.png" alt="comic medal 1" className="comic__medal" />
                  <h2 className="comic__title">Thế giới hoàn mỹ</h2>
                  <span className="comic__view">80,000</span>
                </div>
                <div className="comic__top_4">
                  <span className="comic__medal" >4</span>
                  <h2 className="comic__title">Tru tiên</h2>
                  <span className="comic__view">70,000</span>
                </div>
                <div className="comic__top_5">
                  <span className="comic__medal" >5</span>
                  <h2 className="comic__title">Vạn giới đế tôn</h2>
                  <span className="comic__view">60,000</span>
                </div>
                <div className="comic__top_6">
                  <span className="comic__medal" >6</span>
                  <h2 className="comic__title">Đại đạo kiếm tôn</h2>
                  <span className="comic__view">50,000</span>
                </div>
                <div className="comic__top_7">
                  <span className="comic__medal" >7</span>
                  <h2 className="comic__title">Phàm nhân tu tiên</h2>
                  <span className="comic__view">40,000</span>
                </div>
                <div className="comic__top_8">
                  <span className="comic__medal" >8</span>
                  <h2 className="comic__title">Nghịch thiên tà thần</h2>
                  <span className="comic__view">30,000</span>
                </div>
                <div className="comic__top_9">
                  <span className="comic__medal" >9</span>
                  <h2 className="comic__title">Cửu chuyển bá thể</h2>
                  <span className="comic__view">20,000</span>
                </div>
                <div className="comic__top_10">
                  <span className="comic__medal" >10</span>
                  <h2 className="comic__title">Xích tâm tuần thiên</h2>
                  <span className="comic__view">10,000</span>
                </div>
              </div>
            </div>
          </div>
          <div className="Homepage__highly_rated_new_rated">
            <div className="Homepage__highly_rated">
              <h1 className="Homepage__highly_rated--title">Danh sách đề cử</h1>
              <div className="line"></div>
              <div className="Homepage__highly_rated--comic_list">
                <div className="Homepage__highly_rated--comic">
                  <img src="./public/assets/images/linh_canh_hanh_gia.jpg" alt="comic img" className="Highly_rated__comic--img" />
                  <div className="Highly_rated__comic--info">
                    <div className="Comic__title_type">
                      <h2 className="Highly_rated__comic--title">Linh cảnh hành giả</h2>
                      <button className="Highly_rated__comic--type">Khoa huyễn</button>
                    </div>
                    <div className="Highly_rated__comic--rate">
                      <span className="Rate__amount">5.00</span>
                      <span className="Rate__reviews">5 lượt đánh giá</span>
                    </div>
                    <span className="Highly_rated__comic--intro"> Tuyên cổ thông kim, nghe đồn thế có Linh cảnh.Liên quan tới Linh cảnh thuyết pháp, các triều đại danh nhân nhã sĩ chúng thuyết phân đàn, trong thơ ghi chép:"Từ Tề đến Đường, tư sơn thâm hoang, Linh cảnh tịch liêu, hiếm người du lịch.""Linh cảnh không thể trạng, quỷ công lượng khó cầu."Thân Thành đại học năm nhất tân sinh Trương Nguyên Thanh, tại dưới một lần cơ duyên xảo hợp, đạt được một tấm hội sở thẻ VIP Chí Tôn, a không, là thẻ thông hành Linh cảnh. </span>
                    <div className="Highly_rated__comic--author">
                      <FontAwesomeIcon icon={faFeatherPointed} />
                      Mại Báo Tiểu Lang Quân </div>
                  </div>
                </div>
                <div className="Homepage__highly_rated--comic">
                  <img src="./public/assets/images/linh_canh_hanh_gia.jpg" alt="comic img" className="Highly_rated__comic--img" />
                  <div className="Highly_rated__comic--info">
                    <div className="Comic__title_type">
                      <h2 className="Highly_rated__comic--title">Linh cảnh hành giả</h2>
                      <button className="Highly_rated__comic--type">Khoa huyễn</button>
                    </div>
                    <div className="Highly_rated__comic--rate">
                      <span className="Rate__amount">5.00</span>
                      <span className="Rate__reviews">5 lượt đánh giá</span>
                    </div>
                    <span className="Highly_rated__comic--intro"> Tuyên cổ thông kim, nghe đồn thế có Linh cảnh.Liên quan tới Linh cảnh thuyết pháp, các triều đại danh nhân nhã sĩ chúng thuyết phân đàn, trong thơ ghi chép:"Từ Tề đến Đường, tư sơn thâm hoang, Linh cảnh tịch liêu, hiếm người du lịch.""Linh cảnh không thể trạng, quỷ công lượng khó cầu."Thân Thành đại học năm nhất tân sinh Trương Nguyên Thanh, tại dưới một lần cơ duyên xảo hợp, đạt được một tấm hội sở thẻ VIP Chí Tôn, a không, là thẻ thông hành Linh cảnh. </span>
                    <div className="Highly_rated__comic--author">
                      <FontAwesomeIcon icon={faFeatherPointed} />
                      Mại Báo Tiểu Lang Quân </div>
                  </div>
                </div>
                <div className="Homepage__highly_rated--comic">
                  <img src="./public/assets/images/linh_canh_hanh_gia.jpg" alt="comic img" className="Highly_rated__comic--img" />
                  <div className="Highly_rated__comic--info">
                    <div className="Comic__title_type">
                      <h2 className="Highly_rated__comic--title">Linh cảnh hành giả</h2>
                      <button className="Highly_rated__comic--type">Khoa huyễn</button>
                    </div>
                    <div className="Highly_rated__comic--rate">
                      <span className="Rate__amount">5.00</span>
                      <span className="Rate__reviews">5 lượt đánh giá</span>
                    </div>
                    <span className="Highly_rated__comic--intro"> Tuyên cổ thông kim, nghe đồn thế có Linh cảnh.Liên quan tới Linh cảnh thuyết pháp, các triều đại danh nhân nhã sĩ chúng thuyết phân đàn, trong thơ ghi chép:"Từ Tề đến Đường, tư sơn thâm hoang, Linh cảnh tịch liêu, hiếm người du lịch.""Linh cảnh không thể trạng, quỷ công lượng khó cầu."Thân Thành đại học năm nhất tân sinh Trương Nguyên Thanh, tại dưới một lần cơ duyên xảo hợp, đạt được một tấm hội sở thẻ VIP Chí Tôn, a không, là thẻ thông hành Linh cảnh. </span>
                    <div className="Highly_rated__comic--author">
                      <FontAwesomeIcon icon={faFeatherPointed} />
                      Mại Báo Tiểu Lang Quân </div>
                  </div>
                </div>
                <div className="Homepage__highly_rated--comic">
                  <img src="./public/assets/images/linh_canh_hanh_gia.jpg" alt="comic img" className="Highly_rated__comic--img" />
                  <div className="Highly_rated__comic--info">
                    <div className="Comic__title_type">
                      <h2 className="Highly_rated__comic--title">Linh cảnh hành giả</h2>
                      <button className="Highly_rated__comic--type">Khoa huyễn</button>
                    </div>
                    <div className="Highly_rated__comic--rate">
                      <span className="Rate__amount">5.00</span>
                      <span className="Rate__reviews">5 lượt đánh giá</span>
                    </div>
                    <span className="Highly_rated__comic--intro"> Tuyên cổ thông kim, nghe đồn thế có Linh cảnh.Liên quan tới Linh cảnh thuyết pháp, các triều đại danh nhân nhã sĩ chúng thuyết phân đàn, trong thơ ghi chép:"Từ Tề đến Đường, tư sơn thâm hoang, Linh cảnh tịch liêu, hiếm người du lịch.""Linh cảnh không thể trạng, quỷ công lượng khó cầu."Thân Thành đại học năm nhất tân sinh Trương Nguyên Thanh, tại dưới một lần cơ duyên xảo hợp, đạt được một tấm hội sở thẻ VIP Chí Tôn, a không, là thẻ thông hành Linh cảnh. </span>
                    <div className="Highly_rated__comic--author">
                      <FontAwesomeIcon icon={faFeatherPointed} />
                      Mại Báo Tiểu Lang Quân </div>
                  </div>
                </div>
                <div className="Homepage__highly_rated--comic">
                  <img src="./public/assets/images/linh_canh_hanh_gia.jpg" alt="comic img" className="Highly_rated__comic--img" />
                  <div className="Highly_rated__comic--info">
                    <div className="Comic__title_type">
                      <h2 className="Highly_rated__comic--title">Linh cảnh hành giả</h2>
                      <button className="Highly_rated__comic--type">Khoa huyễn</button>
                    </div>
                    <div className="Highly_rated__comic--rate">
                      <span className="Rate__amount">5.00</span>
                      <span className="Rate__reviews">5 lượt đánh giá</span>
                    </div>
                    <span className="Highly_rated__comic--intro"> Tuyên cổ thông kim, nghe đồn thế có Linh cảnh.Liên quan tới Linh cảnh thuyết pháp, các triều đại danh nhân nhã sĩ chúng thuyết phân đàn, trong thơ ghi chép:"Từ Tề đến Đường, tư sơn thâm hoang, Linh cảnh tịch liêu, hiếm người du lịch.""Linh cảnh không thể trạng, quỷ công lượng khó cầu."Thân Thành đại học năm nhất tân sinh Trương Nguyên Thanh, tại dưới một lần cơ duyên xảo hợp, đạt được một tấm hội sở thẻ VIP Chí Tôn, a không, là thẻ thông hành Linh cảnh. </span>
                    <div className="Highly_rated__comic--author">
                      <FontAwesomeIcon icon={faFeatherPointed} />
                      Mại Báo Tiểu Lang Quân </div>
                  </div>
                </div>
                <div className="Homepage__highly_rated--comic">
                  <img src="./public/assets/images/linh_canh_hanh_gia.jpg" alt="comic img" className="Highly_rated__comic--img" />
                  <div className="Highly_rated__comic--info">
                    <div className="Comic__title_type">
                      <h2 className="Highly_rated__comic--title">Linh cảnh hành giả</h2>
                      <button className="Highly_rated__comic--type">Khoa huyễn</button>
                    </div>
                    <div className="Highly_rated__comic--rate">
                      <span className="Rate__amount">5.00</span>
                      <span className="Rate__reviews">5 lượt đánh giá</span>
                    </div>
                    <span className="Highly_rated__comic--intro"> Tuyên cổ thông kim, nghe đồn thế có Linh cảnh.Liên quan tới Linh cảnh thuyết pháp, các triều đại danh nhân nhã sĩ chúng thuyết phân đàn, trong thơ ghi chép:"Từ Tề đến Đường, tư sơn thâm hoang, Linh cảnh tịch liêu, hiếm người du lịch.""Linh cảnh không thể trạng, quỷ công lượng khó cầu."Thân Thành đại học năm nhất tân sinh Trương Nguyên Thanh, tại dưới một lần cơ duyên xảo hợp, đạt được một tấm hội sở thẻ VIP Chí Tôn, a không, là thẻ thông hành Linh cảnh. </span>
                    <div className="Highly_rated__comic--author">
                      <FontAwesomeIcon icon={faFeatherPointed} />
                      Mại Báo Tiểu Lang Quân </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="Homepage__new_rated">
              <h1 className="Homepage__new_rated--title">Đánh giá mới nhất</h1>
              <div className="line"></div>
              <div className="Homepage__highly_rated--review_list">
                <div className="Homepage__new_rated--review">
                  <div className="Review__top">
                    <div className="Review__user_story">
                      <h2 className="Review__user_name">sonvopro <span>đánh giá</span></h2>
                      <h2 className="Review__story_name">Tiên Nghịch</h2>
                    </div>
                    <span className="Rate__amount">5.00</span>
                  </div>
                  <span className="Review__content"> Tuyên cổ thông kim, nghe đồn thế có Linh cảnh.Liên quan tới Linh cảnh thuyết pháp, các triều đại danh nhân nhã sĩ chúng thuyết phân đàn, trong thơ ghi chép:"Từ Tề đến Đường, tư sơn thâm hoang, Linh cảnh tịch liêu, hiếm người du lịch.""Linh cảnh không thể trạng, quỷ công lượng khó cầu."Thân Thành đại học năm nhất tân sinh Trương Nguyên Thanh, tại dưới một lần cơ duyên xảo hợp, đạt được một tấm hội sở thẻ VIP Chí Tôn, a không, là thẻ thông hành Linh cảnh. </span>
                </div>
                <div className="Homepage__new_rated--review">
                  <div className="Review__top">
                    <div className="Review__user_story">
                      <h2 className="Review__user_name">sonvopro <span>đánh giá</span></h2>
                      <h2 className="Review__story_name">Tiên Nghịch</h2>
                    </div>
                    <span className="Rate__amount">5.00</span>
                  </div>
                  <span className="Review__content"> Tuyên cổ thông kim, nghe đồn thế có Linh cảnh.Liên quan tới Linh cảnh thuyết pháp, các triều đại danh nhân nhã sĩ chúng thuyết phân đàn, trong thơ ghi chép:"Từ Tề đến Đường, tư sơn thâm hoang, Linh cảnh tịch liêu, hiếm người du lịch.""Linh cảnh không thể trạng, quỷ công lượng khó cầu."Thân Thành đại học năm nhất tân sinh Trương Nguyên Thanh, tại dưới một lần cơ duyên xảo hợp, đạt được một tấm hội sở thẻ VIP Chí Tôn, a không, là thẻ thông hành Linh cảnh. </span>
                </div>
                <div className="Homepage__new_rated--review">
                  <div className="Review__top">
                    <div className="Review__user_story">
                      <h2 className="Review__user_name">sonvopro <span>đánh giá</span></h2>
                      <h2 className="Review__story_name">Tiên Nghịch</h2>
                    </div>
                    <span className="Rate__amount">5.00</span>
                  </div>
                  <span className="Review__content">Truyện rất hay, đáng đọc!</span>
                </div>
              </div>
            </div>
          </div>
          <div className="Homepage__new_release_new_finish">
            <div className='Homepage__new_release'>
              <h1 className="Homepage__new_release--title">Mới đăng</h1>
              <div className="line"></div>
              <div className='slide_wrapper'>
                <Swiper
                  effect={'cards'}
                  spaceBetween={30}
                  centeredSlides={true}
                  grabCursor={true}   
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  pagination={{
                    clickable: true,
                  }}
                  navigation={false}
                  modules={[EffectCards, Autoplay]}
                  className="swiper-bottom"
                  onSlideChange={(swiper) => handleSlideChange(swiper)}
                  initialSlide={activeSlideIndex}
                >
                  {slides.map((slide, index) => (
                    <SwiperSlide className="swiper-slide-bottom" key={index}>
                      <img src={slide.src} alt={`comic img ${index + 1}`} className="slide__img" />
                    </SwiperSlide>
                  ))}
                </Swiper>
                <div className="Slide__info">
                  <div className="Slide__title_type">
                      <h2 className="Slide____title">{slides[activeSlideIndex].title}</h2>
                      <button className="Slide____type">{slides[activeSlideIndex].genre}</button>
                  </div>
                  <span className="Slide____intro">{slides[activeSlideIndex].introduction}</span>
                  <div className="Slide____author">
                    <FontAwesomeIcon icon={faFeatherPointed} />
                    {slides[activeSlideIndex].author}
                  </div>
                </div>
              </div>
            </div>
            <div className="Homepage__new_finish">
              <h1 className="Homepage__new_finish--title">Mới hoàn thành</h1>
              <div className="line"></div>
              <div className="Homepage__new_finish--comic_list">
                <div className="Homepage__new_finish--comic">
                  <img src="./public/assets/images/linh_canh_hanh_gia.jpg" alt="comic img" className="Homepage__new_finish--comic__img" />
                  <div className="Homepage__new_finish--comic__info">
                    <div className="Comic__title_type">
                      <h2 className="Homepage__new_finish--comic__title">Linh cảnh hành giả</h2>
                      <button className="Homepage__new_finish--comic__type">Khoa huyễn</button>
                    </div>
                    <span className="Homepage__new_finish--comic__intro"> Tuyên cổ thông kim, nghe đồn thế có Linh cảnh.Liên quan tới Linh cảnh thuyết pháp, các triều đại danh nhân nhã sĩ chúng thuyết phân đàn, trong thơ ghi chép:"Từ Tề đến Đường, tư sơn thâm hoang, Linh cảnh tịch liêu, hiếm người du lịch.""Linh cảnh không thể trạng, quỷ công lượng khó cầu."Thân Thành đại học năm nhất tân sinh Trương Nguyên Thanh, tại dưới một lần cơ duyên xảo hợp, đạt được một tấm hội sở thẻ VIP Chí Tôn, a không, là thẻ thông hành Linh cảnh. </span>
                    <div className="Homepage__new_finish--comic__author">
                      <FontAwesomeIcon icon={faFeatherPointed} />
                      Mại Báo Tiểu Lang Quân </div>
                  </div>
                </div>
                <div className="Homepage__new_finish--comic">
                  <img src="./public/assets/images/linh_canh_hanh_gia.jpg" alt="comic img" className="Homepage__new_finish--comic__img" />
                  <div className="Homepage__new_finish--comic__info">
                    <div className="Comic__title_type">
                      <h2 className="Homepage__new_finish--comic__title">Linh cảnh hành giả</h2>
                      <button className="Homepage__new_finish--comic__type">Khoa huyễn</button>
                    </div>
                    <span className="Homepage__new_finish--comic__intro"> Tuyên cổ thông kim, nghe đồn thế có Linh cảnh.Liên quan tới Linh cảnh thuyết pháp, các triều đại danh nhân nhã sĩ chúng thuyết phân đàn, trong thơ ghi chép:"Từ Tề đến Đường, tư sơn thâm hoang, Linh cảnh tịch liêu, hiếm người du lịch.""Linh cảnh không thể trạng, quỷ công lượng khó cầu."Thân Thành đại học năm nhất tân sinh Trương Nguyên Thanh, tại dưới một lần cơ duyên xảo hợp, đạt được một tấm hội sở thẻ VIP Chí Tôn, a không, là thẻ thông hành Linh cảnh. </span>
                    <div className="Homepage__new_finish--comic__author">
                      <FontAwesomeIcon icon={faFeatherPointed} />
                      Mại Báo Tiểu Lang Quân </div>
                  </div>
                </div>
                <div className="Homepage__new_finish--comic">
                  <img src="./public/assets/images/linh_canh_hanh_gia.jpg" alt="comic img" className="Homepage__new_finish--comic__img" />
                  <div className="Homepage__new_finish--comic__info">
                    <div className="Comic__title_type">
                      <h2 className="Homepage__new_finish--comic__title">Linh cảnh hành giả</h2>
                      <button className="Homepage__new_finish--comic__type">Khoa huyễn</button>
                    </div>
                    <span className="Homepage__new_finish--comic__intro"> Tuyên cổ thông kim, nghe đồn thế có Linh cảnh.Liên quan tới Linh cảnh thuyết pháp, các triều đại danh nhân nhã sĩ chúng thuyết phân đàn, trong thơ ghi chép:"Từ Tề đến Đường, tư sơn thâm hoang, Linh cảnh tịch liêu, hiếm người du lịch.""Linh cảnh không thể trạng, quỷ công lượng khó cầu."Thân Thành đại học năm nhất tân sinh Trương Nguyên Thanh, tại dưới một lần cơ duyên xảo hợp, đạt được một tấm hội sở thẻ VIP Chí Tôn, a không, là thẻ thông hành Linh cảnh. </span>
                    <div className="Homepage__new_finish--comic__author">
                      <FontAwesomeIcon icon={faFeatherPointed} />
                      Mại Báo Tiểu Lang Quân </div>
                  </div>
                </div>
                <div className="Homepage__new_finish--comic">
                  <img src="./public/assets/images/linh_canh_hanh_gia.jpg" alt="comic img" className="Homepage__new_finish--comic__img" />
                  <div className="Homepage__new_finish--comic__info">
                    <div className="Comic__title_type">
                      <h2 className="Homepage__new_finish--comic__title">Linh cảnh hành giả</h2>
                      <button className="Homepage__new_finish--comic__type">Khoa huyễn</button>
                    </div>
                    <span className="Homepage__new_finish--comic__intro"> Tuyên cổ thông kim, nghe đồn thế có Linh cảnh.Liên quan tới Linh cảnh thuyết pháp, các triều đại danh nhân nhã sĩ chúng thuyết phân đàn, trong thơ ghi chép:"Từ Tề đến Đường, tư sơn thâm hoang, Linh cảnh tịch liêu, hiếm người du lịch.""Linh cảnh không thể trạng, quỷ công lượng khó cầu."Thân Thành đại học năm nhất tân sinh Trương Nguyên Thanh, tại dưới một lần cơ duyên xảo hợp, đạt được một tấm hội sở thẻ VIP Chí Tôn, a không, là thẻ thông hành Linh cảnh. </span>
                    <div className="Homepage__new_finish--comic__author">
                      <FontAwesomeIcon icon={faFeatherPointed} />
                      Mại Báo Tiểu Lang Quân </div>
                  </div>
                </div>
                <div className="Homepage__new_finish--comic">
                  <img src="./public/assets/images/linh_canh_hanh_gia.jpg" alt="comic img" className="Homepage__new_finish--comic__img" />
                  <div className="Homepage__new_finish--comic__info">
                    <div className="Comic__title_type">
                      <h2 className="Homepage__new_finish--comic__title">Linh cảnh hành giả</h2>
                      <button className="Homepage__new_finish--comic__type">Khoa huyễn</button>
                    </div>
                    <span className="Homepage__new_finish--comic__intro"> Tuyên cổ thông kim, nghe đồn thế có Linh cảnh.Liên quan tới Linh cảnh thuyết pháp, các triều đại danh nhân nhã sĩ chúng thuyết phân đàn, trong thơ ghi chép:"Từ Tề đến Đường, tư sơn thâm hoang, Linh cảnh tịch liêu, hiếm người du lịch.""Linh cảnh không thể trạng, quỷ công lượng khó cầu."Thân Thành đại học năm nhất tân sinh Trương Nguyên Thanh, tại dưới một lần cơ duyên xảo hợp, đạt được một tấm hội sở thẻ VIP Chí Tôn, a không, là thẻ thông hành Linh cảnh. </span>
                    <div className="Homepage__new_finish--comic__author">
                      <FontAwesomeIcon icon={faFeatherPointed} />
                      Mại Báo Tiểu Lang Quân </div>
                  </div>
                </div>
                <div className="Homepage__new_finish--comic">
                  <img src="./public/assets/images/linh_canh_hanh_gia.jpg" alt="comic img" className="Homepage__new_finish--comic__img" />
                  <div className="Homepage__new_finish--comic__info">
                    <div className="Comic__title_type">
                      <h2 className="Homepage__new_finish--comic__title">Linh cảnh hành giả</h2>
                      <button className="Homepage__new_finish--comic__type">Khoa huyễn</button>
                    </div>
                    <span className="Homepage__new_finish--comic__intro"> Tuyên cổ thông kim, nghe đồn thế có Linh cảnh.Liên quan tới Linh cảnh thuyết pháp, các triều đại danh nhân nhã sĩ chúng thuyết phân đàn, trong thơ ghi chép:"Từ Tề đến Đường, tư sơn thâm hoang, Linh cảnh tịch liêu, hiếm người du lịch.""Linh cảnh không thể trạng, quỷ công lượng khó cầu."Thân Thành đại học năm nhất tân sinh Trương Nguyên Thanh, tại dưới một lần cơ duyên xảo hợp, đạt được một tấm hội sở thẻ VIP Chí Tôn, a không, là thẻ thông hành Linh cảnh. </span>
                    <div className="Homepage__new_finish--comic__author">
                      <FontAwesomeIcon icon={faFeatherPointed} />
                      Mại Báo Tiểu Lang Quân </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default RankPage;