import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight, faFeatherPointed } from "@fortawesome/free-solid-svg-icons";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Autoplay, EffectCards } from 'swiper/modules';
import { useState } from "react";

function NewReleaseFinish() {
  const slides = [
    {
      src: "/assets/images/linh_canh_hanh_gia.jpg",
      title: "Linh hành cảnh giả",
      introduction: " Tuyên cổ thông kim, nghe đồn thế có Linh cảnh.Liên quan tới Linh cảnh thuyết pháp, các triều đại danh nhân nhã sĩ chúng thuyết phân đàn, trong thơ ghi chép:\"Từ Tề đến Đường, tư sơn thâm hoang, Linh cảnh tịch liêu, hiếm người du lịch.Linh cảnh không thể trạng, quỷ công lượng khó cầu.\"Thân Thành đại học năm nhất tân sinh Trương Nguyên Thanh, tại dưới một lần cơ duyên xảo hợp, đạt được một tấm hội sở thẻ VIP Chí Tôn, a không, là thẻ thông hành Linh cảnh. ",
      author: "Mại Báo Tiểu Lang Quân",
      genre: "Khoa huyễn"
    },
    {
      src: "/assets/images/TienNghich.jpg",
      title: "Tiên nghịch",
      introduction: "Tiên Nghịch là câu chuyện Tiên Hiệp kể về Vương Lâm - một thiếu niên bình thường, may mắn được gia nhập vào một môn phái tu tiên xuống dốc của nước Triệu, vì thiếu linh căn, vì một hiểu nhầm tai hại, vì một khối thiết tinh và nhờ có được một \"Thần Bí Hạt Châu\". Vương Lâm đã bước lên con đường tu tiên và trên con đường này, hắn sẽ đối mặt với chuyện gì?",
      author: "Nhĩ Căn",
      genre: "Tiên hiệp"
    },
    {
      src: "/assets/images/thegioihoanmy.jpeg",
      title: "Thế giới hoàn mỹ",
      introduction: "Một hạt bụi có thể lấp biển, một cọng cỏ chém hết mặt trời mặt trăng và ngôi sao, trong nháy mắt ở giữa long trời lỡ đất. Quần hùng cùng nổi lên, vạn tộc mọc lên san sát như rừng, chư thánh tranh bá, loạn khắp đất trời. Hỏi mặt đất bao la, cuộc đời thăng trầm? Một thiếu niên theo trong đất hoang đi ra, tất cả bắt đầu từ nơi này...",
      author: "Thần Đông",
      genre: "Huyền huyễn"
    },
    {
      src: "/assets/images/nghich-thien-chi-ton.jpg",
      title: "Nghịch thiên chí tôn",
      introduction: "Mọi người ở vùng đất dị giới này đang truyền tai nhau về lai lịch của hắn, hắn là ai? Tại sao lại có nhiều huyền năng như vậy, có sức mạnh hủy diệt mọi thứ... Thật ra hắn chính là người hiện đại sống ở thế kỷ 21 có IQ cao ngất ngưỡng có thể nói là thiên tài, trong một lần hắn đi khảo cổ được bí ẩn dị thạch, mang về nhà liền chết do một tai nạn. Hồi sinh tại dị giới, mang theo thần bí dị thạch cộng với khí vận nghịch thiên, buff đến tung trời lở đất. Vừa đến \" nhặt \" được nghịch thiên công pháp, mang sứ mệnh: Đi đâu hiếp đó... í lộn... phải là đi hấp ma vương... nhầm.... đi giết ma vương",
      author: "Tam Thiếu Gia",
      genre: "Huyền huyễn"
    },
    {
      src: "/assets/images/nhatthechiton.jpg",
      title: "Nhất thế chí tôn",
      introduction: "Ta cả đời này, không hỏi trước kia, không cầu kiếp sau, chỉ oanh oanh liệt liệt, khoái ý ân cừu, chỉ bại các tộc anh kiệt, ngạo tiếu lục đạo Thần Ma!",
      author: "Mực Thích Lặn Nước",
      genre: "Tiên hiệp"
    },
    {
      src: "/assets/images/phamnhantutien.jpg",
      title: "Phàm nhân tu tiên",
      introduction: "Phàm Nhân Tu Tiên là một câu chuyện Tiên Hiệp kể về Hàn Lập - Một người bình thường nhưng lại gặp vô vàn cơ duyên để bước đi trên con đường tu tiên, không phải anh hùng - cũng chẳng phải tiểu nhân, Hàn Lập từng bước khẳng định mình... Liệu Hàn Lập và người yêu có thể cùng bước trên con đường tu tiên và có một cái kết hoàn mỹ? Những thử thách nào đang chờ đợi bọn họ?",
      author: "Vong Ngữ",
      genre: "Tiên hiệp"
    },
    {
      src: "/assets/images/tongvo.png",
      title: "Tống võ",
      introduction: "Cửu Châu Đại Lục, vạn quốc san sát. Doanh Vân xuyên việt Đại Tần, trở thành Thủy Hoàng thứ chín, cũng thu được cá mặn hệ thống, chỉ cần cá mặn, liền có thể kéo dài không ngừng thu được tưởng thưởng.",
      author: "Thần Sắc Mộ Nha",
      genre: "Tiên hiệp"
    },
    {
      src: "/assets/images/natra.jpg",
      title: "Na tra",
      introduction: "Câu chuyện kể về quá trình trưởng thành của người anh hùng nhỏ Na Tra. Đại ác quỷ Thạch Cơ đã lẩn trốn hàng nghìn năm, chờ cơ hội để chống lại thế lực công lý, mụ đã giúp vua Chu tàn bạo đàn áp thiên hạ. Lực lượng công lý đang mong chờ sự ra đời của một anh hùng. Vì âm mưu của chính mình, Thạch Cơ đã bắt đầu chỉ thị cho tay sai của mụ là Thân Công Báo để thoát khỏi Na Tra. Na Tra trước khi được sinh ra đã liên tục gặp phải những nguy hiểm, sau khi được sinh ra thì cậu lớn lên một cách thần kỳ trong một môi trường khác thường. Tuy nhiên, Na Tra vẫn luôn vui vẻ với cha mẹ và các anh trai của mình.",
      author: "Hứa Trọng Lâm",
      genre: "Tiên hiệp"
    },
    {
      src: "/assets/images/vudongcankhon.jpg",
      title: "Vũ động càn khôn",
      introduction: "Vũ Động Càn Khôn - Từ xưa đến nay, con người luôn có khát vọng vươn lên đỉnh cao, để đổi lấy sự thành công họ đã hy sinh biết bao nhiêu mồ hôi và nước mắt. Tu Luyện chính là trộm đi âm dương, đoạt lấy tạo hóa, chuyển đổi Niết Bàn, nắm giữ sinh tử, chưởng quản Luân Hồi.",
      author: "Thiên Tàm Thổ Đậu",
      genre: "Huyền Huyễn"
    },
  ]

  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  const handleSlideChange = (swiper: any) => {
    setActiveSlideIndex(swiper.realIndex);
  };

  return (
    <div className="Homepage__new_release_new_finish xs:flex-col xs:gap-[4rem]">
      <div className='Homepage__new_release xs:w-full'>
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
      <div className="Homepage__new_finish  xs:w-full xs:border-none">
        <div className="flex justify-between w-full items-center px-5">
          <h1 className="Homepage__new_finish--title">Mới hoàn thành</h1>
          <button className="flex gap-2.5 items-center xs:px-1 sm:px-5 text-[1.6rem] hover:text-[color:var(--gold)]">
            <span className="xs:hidden">Xem thêm</span>
            <FontAwesomeIcon icon={faCaretRight} />
          </button>
        </div>
        <div className="line"></div>
        <div className="Homepage__new_finish--comic_list xs:p-0">
          <div className="Homepage__new_finish--comic xs:pt-3 xs:px-3 xs:border-none xs:filter-none xs:w-full">
            <img src="/assets/images/linh_canh_hanh_gia.jpg" alt="comic img" className="Homepage__new_finish--comic__img xs:w-[9rem] xs:p-0" />
            <div className="Homepage__new_finish--comic__info">
              <div className="Comic__title_type">
                <h2 className="Homepage__new_finish--comic__title">Linh cảnh hành giả</h2>
                <button className="Homepage__nomination--comic__type xs:hidden">Khoa huyễn</button>
              </div>
              <span className="Homepage__new_finish--comic__intro xs:w-full"> Tuyên cổ thông kim, nghe đồn thế có Linh cảnh.Liên quan tới Linh cảnh thuyết pháp, các triều đại danh nhân nhã sĩ chúng thuyết phân đàn, trong thơ ghi chép:"Từ Tề đến Đường, tư sơn thâm hoang, Linh cảnh tịch liêu, hiếm người du lịch.""Linh cảnh không thể trạng, quỷ công lượng khó cầu."Thân Thành đại học năm nhất tân sinh Trương Nguyên Thanh, tại dưới một lần cơ duyên xảo hợp, đạt được một tấm hội sở thẻ VIP Chí Tôn, a không, là thẻ thông hành Linh cảnh. </span>
              <div className="Homepage__new_finish--comic__author">
                <FontAwesomeIcon icon={faFeatherPointed} />
                <span className="author_name">Mại Báo Tiểu Lang Quân </span>
                </div>
            </div>
          </div>
          <div className="Homepage__new_finish--comic xs:pt-3 xs:px-3 xs:border-none xs:filter-none xs:w-full">
            <img src="/assets/images/linh_canh_hanh_gia.jpg" alt="comic img" className="Homepage__new_finish--comic__img xs:w-[9rem] xs:p-0" />
            <div className="Homepage__new_finish--comic__info">
              <div className="Comic__title_type">
                <h2 className="Homepage__new_finish--comic__title">Linh cảnh hành giả</h2>
                <button className="Homepage__nomination--comic__type xs:hidden">Khoa huyễn</button>
              </div>
              <span className="Homepage__new_finish--comic__intro  xs:w-full"> Tuyên cổ thông kim, nghe đồn thế có Linh cảnh.Liên quan tới Linh cảnh thuyết pháp, các triều đại danh nhân nhã sĩ chúng thuyết phân đàn, trong thơ ghi chép:"Từ Tề đến Đường, tư sơn thâm hoang, Linh cảnh tịch liêu, hiếm người du lịch.""Linh cảnh không thể trạng, quỷ công lượng khó cầu."Thân Thành đại học năm nhất tân sinh Trương Nguyên Thanh, tại dưới một lần cơ duyên xảo hợp, đạt được một tấm hội sở thẻ VIP Chí Tôn, a không, là thẻ thông hành Linh cảnh. </span>
              <div className="Homepage__new_finish--comic__author">
                <FontAwesomeIcon icon={faFeatherPointed} />
                <span className="author_name">Mại Báo Tiểu Lang Quân </span>
                </div>
            </div>
          </div>
          <div className="Homepage__new_finish--comic xs:pt-3 xs:px-3 xs:border-none xs:filter-none xs:w-full">
            <img src="/assets/images/linh_canh_hanh_gia.jpg" alt="comic img" className="Homepage__new_finish--comic__img xs:w-[9rem] xs:p-0" />
            <div className="Homepage__new_finish--comic__info">
              <div className="Comic__title_type">
                <h2 className="Homepage__new_finish--comic__title">Linh cảnh hành giả</h2>
                <button className="Homepage__nomination--comic__type xs:hidden">Khoa huyễn</button>
              </div>
              <span className="Homepage__new_finish--comic__intro  xs:w-full"> Tuyên cổ thông kim, nghe đồn thế có Linh cảnh.Liên quan tới Linh cảnh thuyết pháp, các triều đại danh nhân nhã sĩ chúng thuyết phân đàn, trong thơ ghi chép:"Từ Tề đến Đường, tư sơn thâm hoang, Linh cảnh tịch liêu, hiếm người du lịch.""Linh cảnh không thể trạng, quỷ công lượng khó cầu."Thân Thành đại học năm nhất tân sinh Trương Nguyên Thanh, tại dưới một lần cơ duyên xảo hợp, đạt được một tấm hội sở thẻ VIP Chí Tôn, a không, là thẻ thông hành Linh cảnh. </span>
              <div className="Homepage__new_finish--comic__author">
                <FontAwesomeIcon icon={faFeatherPointed} />
                <span className="author_name">Mại Báo Tiểu Lang Quân </span>
                </div>
            </div>
          </div>
          <div className="Homepage__new_finish--comic xs:pt-3 xs:px-3 xs:border-none xs:filter-none xs:w-full">
            <img src="/assets/images/linh_canh_hanh_gia.jpg" alt="comic img" className="Homepage__new_finish--comic__img xs:w-[9rem] xs:p-0" />
            <div className="Homepage__new_finish--comic__info">
              <div className="Comic__title_type">
                <h2 className="Homepage__new_finish--comic__title">Linh cảnh hành giả</h2>
                <button className="Homepage__nomination--comic__type xs:hidden">Khoa huyễn</button>
              </div>
              <span className="Homepage__new_finish--comic__intro  xs:w-full"> Tuyên cổ thông kim, nghe đồn thế có Linh cảnh.Liên quan tới Linh cảnh thuyết pháp, các triều đại danh nhân nhã sĩ chúng thuyết phân đàn, trong thơ ghi chép:"Từ Tề đến Đường, tư sơn thâm hoang, Linh cảnh tịch liêu, hiếm người du lịch.""Linh cảnh không thể trạng, quỷ công lượng khó cầu."Thân Thành đại học năm nhất tân sinh Trương Nguyên Thanh, tại dưới một lần cơ duyên xảo hợp, đạt được một tấm hội sở thẻ VIP Chí Tôn, a không, là thẻ thông hành Linh cảnh. </span>
              <div className="Homepage__new_finish--comic__author">
                <FontAwesomeIcon icon={faFeatherPointed} />
                <span className="author_name">Mại Báo Tiểu Lang Quân </span>
                </div>
            </div>
          </div>
          <div className="Homepage__new_finish--comic xs:pt-3 xs:px-3 xs:border-none xs:filter-none xs:w-full">
            <img src="/assets/images/linh_canh_hanh_gia.jpg" alt="comic img" className="Homepage__new_finish--comic__img xs:w-[9rem] xs:p-0" />
            <div className="Homepage__new_finish--comic__info">
              <div className="Comic__title_type">
                <h2 className="Homepage__new_finish--comic__title">Linh cảnh hành giả</h2>
                <button className="Homepage__nomination--comic__type xs:hidden">Khoa huyễn</button>
              </div>
              <span className="Homepage__new_finish--comic__intro  xs:w-full"> Tuyên cổ thông kim, nghe đồn thế có Linh cảnh.Liên quan tới Linh cảnh thuyết pháp, các triều đại danh nhân nhã sĩ chúng thuyết phân đàn, trong thơ ghi chép:"Từ Tề đến Đường, tư sơn thâm hoang, Linh cảnh tịch liêu, hiếm người du lịch.""Linh cảnh không thể trạng, quỷ công lượng khó cầu."Thân Thành đại học năm nhất tân sinh Trương Nguyên Thanh, tại dưới một lần cơ duyên xảo hợp, đạt được một tấm hội sở thẻ VIP Chí Tôn, a không, là thẻ thông hành Linh cảnh. </span>
              <div className="Homepage__new_finish--comic__author">
                <FontAwesomeIcon icon={faFeatherPointed} />
                <span className="author_name">Mại Báo Tiểu Lang Quân </span>
                </div>
            </div>
          </div>
          <div className="Homepage__new_finish--comic xs:pt-3 xs:px-3 xs:border-none xs:filter-none xs:w-full">
            <img src="/assets/images/linh_canh_hanh_gia.jpg" alt="comic img" className="Homepage__new_finish--comic__img xs:w-[9rem] xs:p-0" />
            <div className="Homepage__new_finish--comic__info">
              <div className="Comic__title_type">
                <h2 className="Homepage__new_finish--comic__title">Linh cảnh hành giả</h2>
                <button className="Homepage__nomination--comic__type xs:hidden">Khoa huyễn</button>
              </div>
              <span className="Homepage__new_finish--comic__intro  xs:w-full"> Tuyên cổ thông kim, nghe đồn thế có Linh cảnh.Liên quan tới Linh cảnh thuyết pháp, các triều đại danh nhân nhã sĩ chúng thuyết phân đàn, trong thơ ghi chép:"Từ Tề đến Đường, tư sơn thâm hoang, Linh cảnh tịch liêu, hiếm người du lịch.""Linh cảnh không thể trạng, quỷ công lượng khó cầu."Thân Thành đại học năm nhất tân sinh Trương Nguyên Thanh, tại dưới một lần cơ duyên xảo hợp, đạt được một tấm hội sở thẻ VIP Chí Tôn, a không, là thẻ thông hành Linh cảnh. </span>
              <div className="Homepage__new_finish--comic__author">
                <FontAwesomeIcon icon={faFeatherPointed} />
                <span className="author_name">Mại Báo Tiểu Lang Quân </span>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewReleaseFinish;