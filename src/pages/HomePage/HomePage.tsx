import { useState } from 'react';
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

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFeatherPointed } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons/faBars";
import { faGlasses } from "@fortawesome/free-solid-svg-icons/faGlasses";

import Footer from "~/components/Footer";
import Header from "~/components/Header";
import './HomePage.css'

SwiperCore.use([EffectCards]);

function HomePage() {

  const slides = [
    {
      src: "./public/assets/images/linh_canh_hanh_gia.jpg",
      title: "Linh hành cảnh giả",
      introduction: " Tuyên cổ thông kim, nghe đồn thế có Linh cảnh.Liên quan tới Linh cảnh thuyết pháp, các triều đại danh nhân nhã sĩ chúng thuyết phân đàn, trong thơ ghi chép:\"Từ Tề đến Đường, tư sơn thâm hoang, Linh cảnh tịch liêu, hiếm người du lịch.Linh cảnh không thể trạng, quỷ công lượng khó cầu.\"Thân Thành đại học năm nhất tân sinh Trương Nguyên Thanh, tại dưới một lần cơ duyên xảo hợp, đạt được một tấm hội sở thẻ VIP Chí Tôn, a không, là thẻ thông hành Linh cảnh. ",
      author: "Mại Báo Tiểu Lang Quân",
      genre: "Khoa huyễn"
    },
    {
      src: "./public/assets/images/TienNghich.jpg",
      title: "Tiên nghịch",
      introduction: "Tiên Nghịch là câu chuyện Tiên Hiệp kể về Vương Lâm - một thiếu niên bình thường, may mắn được gia nhập vào một môn phái tu tiên xuống dốc của nước Triệu, vì thiếu linh căn, vì một hiểu nhầm tai hại, vì một khối thiết tinh và nhờ có được một \"Thần Bí Hạt Châu\". Vương Lâm đã bước lên con đường tu tiên và trên con đường này, hắn sẽ đối mặt với chuyện gì?",
      author: "Nhĩ Căn",
      genre: "Tiên hiệp"
    },
    {
      src: "./public/assets/images/thegioihoanmy.jpeg",
      title: "Thế giới hoàn mỹ",
      introduction: "Một hạt bụi có thể lấp biển, một cọng cỏ chém hết mặt trời mặt trăng và ngôi sao, trong nháy mắt ở giữa long trời lỡ đất. Quần hùng cùng nổi lên, vạn tộc mọc lên san sát như rừng, chư thánh tranh bá, loạn khắp đất trời. Hỏi mặt đất bao la, cuộc đời thăng trầm? Một thiếu niên theo trong đất hoang đi ra, tất cả bắt đầu từ nơi này...",
      author: "Thần Đông",
      genre: "Huyền huyễn"
    },
    {
      src: "./public/assets/images/nghich-thien-chi-ton.jpg",
      title: "Nghịch thiên chí tôn",
      introduction: "Mọi người ở vùng đất dị giới này đang truyền tai nhau về lai lịch của hắn, hắn là ai? Tại sao lại có nhiều huyền năng như vậy, có sức mạnh hủy diệt mọi thứ... Thật ra hắn chính là người hiện đại sống ở thế kỷ 21 có IQ cao ngất ngưỡng có thể nói là thiên tài, trong một lần hắn đi khảo cổ được bí ẩn dị thạch, mang về nhà liền chết do một tai nạn. Hồi sinh tại dị giới, mang theo thần bí dị thạch cộng với khí vận nghịch thiên, buff đến tung trời lở đất. Vừa đến \" nhặt \" được nghịch thiên công pháp, mang sứ mệnh: Đi đâu hiếp đó... í lộn... phải là đi hấp ma vương... nhầm.... đi giết ma vương",
      author: "Tam Thiếu Gia",
      genre: "Huyền huyễn"
    },
    {
      src: "./public/assets/images/nhatthechiton.jpg",
      title: "Nhất thế chí tôn",
      introduction: "Ta cả đời này, không hỏi trước kia, không cầu kiếp sau, chỉ oanh oanh liệt liệt, khoái ý ân cừu, chỉ bại các tộc anh kiệt, ngạo tiếu lục đạo Thần Ma!",
      author: "Mực Thích Lặn Nước",
      genre: "Tiên hiệp"
    },
    {
      src: "./public/assets/images/phamnhantutien.jpg",
      title: "Phàm nhân tu tiên",
      introduction: "Phàm Nhân Tu Tiên là một câu chuyện Tiên Hiệp kể về Hàn Lập - Một người bình thường nhưng lại gặp vô vàn cơ duyên để bước đi trên con đường tu tiên, không phải anh hùng - cũng chẳng phải tiểu nhân, Hàn Lập từng bước khẳng định mình... Liệu Hàn Lập và người yêu có thể cùng bước trên con đường tu tiên và có một cái kết hoàn mỹ? Những thử thách nào đang chờ đợi bọn họ?",
      author: "Vong Ngữ",
      genre: "Tiên hiệp"
    },
    {
      src: "./public/assets/images/tongvo.png",
      title: "Tống võ",
      introduction: "Cửu Châu Đại Lục, vạn quốc san sát. Doanh Vân xuyên việt Đại Tần, trở thành Thủy Hoàng thứ chín, cũng thu được cá mặn hệ thống, chỉ cần cá mặn, liền có thể kéo dài không ngừng thu được tưởng thưởng.",
      author: "Thần Sắc Mộ Nha",
      genre: "Tiên hiệp"
    },
    {
      src: "./public/assets/images/natra.jpg",
      title: "Na tra",
      introduction: "Câu chuyện kể về quá trình trưởng thành của người anh hùng nhỏ Na Tra. Đại ác quỷ Thạch Cơ đã lẩn trốn hàng nghìn năm, chờ cơ hội để chống lại thế lực công lý, mụ đã giúp vua Chu tàn bạo đàn áp thiên hạ. Lực lượng công lý đang mong chờ sự ra đời của một anh hùng. Vì âm mưu của chính mình, Thạch Cơ đã bắt đầu chỉ thị cho tay sai của mụ là Thân Công Báo để thoát khỏi Na Tra. Na Tra trước khi được sinh ra đã liên tục gặp phải những nguy hiểm, sau khi được sinh ra thì cậu lớn lên một cách thần kỳ trong một môi trường khác thường. Tuy nhiên, Na Tra vẫn luôn vui vẻ với cha mẹ và các anh trai của mình.",
      author: "Hứa Trọng Lâm",
      genre: "Tiên hiệp"
    },
    {
      src: "./public/assets/images/vudongcankhon.jpg",
      title: "Vũ động càn khôn",
      introduction: "Vũ Động Càn Khôn - Từ xưa đến nay, con người luôn có khát vọng vươn lên đỉnh cao, để đổi lấy sự thành công họ đã hy sinh biết bao nhiêu mồ hôi và nước mắt. Tu Luyện chính là trộm đi âm dương, đoạt lấy tạo hóa, chuyển đổi Niết Bàn, nắm giữ sinh tử, chưởng quản Luân Hồi.",
      author: "Thiên Tàm Thổ Đậu",
      genre: "Huyền Huyễn"
    },
  ]

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
          <div className="Homepage__nomination_reading">
            <div className="Homepage__nomination">
              <h1 className="Homepage__nomination--title">Danh sách đề cử</h1>
              <div className="line"></div>
              <div className="Homepage__nomination--comic_list">
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
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;