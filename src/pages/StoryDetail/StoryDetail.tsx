// import { useState} from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark, faBookOpen, faCaretRight, faCommentDots, faListUl, faStar } from "@fortawesome/free-solid-svg-icons";

import Footer from "~/components/Footer";
import Header from "~/components/Header";
import './StoryDetail.css'

function StoryDetail() {

//   const slides_top = [
//     {
//       src: "./public/assets/images/slide1.jpg"
//     },
//     {
//       src: "./public/assets/images/slide3.jpg"
//     },
//     {
//       src: "./public/assets/images/slide4.jpg"
//     },
//     {
//       src: "./public/assets/images/slide5.jpg"
//     },
//     {
//       src: "./public/assets/images/slide6.jpg"
//     },
//     {
//       src: "./public/assets/images/slide7.jpg"
//     },
//     {
//       src: "./public/assets/images/slide8.jpg"
//     },
//     {
//       src: "./public/assets/images/slide9.jpg"
//     },
//   ]

//   const [activeSlideIndex, setActiveSlideIndex] = useState(0);

//   const handleSlideChange = (swiper: any) => {
//     setActiveSlideIndex(swiper.realIndex);
//   };

//   const [tagActive, setTagActive] = useState('Thịnh hành');

//   const handleActive = (name:string) =>{
//     setTagActive(name);
//   }

  return (
    <div className="Story_detail__wrapper">
      <Header />
      <div className="Story_detail">
        <div className="Story_detail__generic">
          <div className="Story_detail__banner--wrapper">
            <img src="/assets/images/phamnhantutien.jpg" alt="story banner" className="Story_detail__banner" />
            </div>
          <div className="Story_detail__generic_information">
            <h2 className="Story__title">Phàm nhân tu tiên</h2>
            <span className="Story__author">Vong Ngữ</span>
            <div className="Story__action">
              <button className="Story__action__button">
                <FontAwesomeIcon icon={faBookOpen} />
                Đọc truyện
              </button>
              <button className="Story__action__button">
                <FontAwesomeIcon icon={faBookmark} />
                Đánh dấu
              </button>
              <button className="Story__action__button">
                <FontAwesomeIcon icon={faListUl} />
                Mục lục
              </button>
              <button className="Story__action__button">
                <FontAwesomeIcon icon={faStar} />
                Đánh giá
              </button>
              <button className="Story__action__button">
                <FontAwesomeIcon icon={faCommentDots} />
                Thảo luận
              </button>
            </div>
            <div className="Story__statement">
              <div className="Chaps_per_week">
                <span>0</span>
                <span>Chs/tuần</span>
              </div>
              <div className="Number_of_reads">
                <span>394114</span>
                <span>Lượt đọc</span>
              </div>
              <div className="Recommend">
                <span>101</span>
                <span>Đề cử</span>
              </div>
              <div className="Store">
                <span>1071</span>
                <span>Lưu trữ</span>
              </div>
            </div>
            <div className="Story__status_type">
              <button className="Story__status_btn">Hoàn thành</button>
              <button className="Story__type_btn">Tiên Hiệp</button>
            </div>
          </div>
        </div>
        <div className="Story_detail__new_chap">
          <div className="title_wrapper">
            <h2 className="title">Chương mới</h2>
            <button className="see_more_btn">
              Xem thêm
              <FontAwesomeIcon icon={faCaretRight}/>
            </button>
          </div>
          <div className="Story_detail__new_chap--info">
            <span className="Story_detail__new_chap--name">Tiên Giới Thiên bản hoàn tất cảm nghĩ</span>
            <span className="Story_detail__new_chap--time">4 năm trước</span>
          </div>
        </div>
        <div className="Story_detail__description">
          <div className="title_wrapper">
            <h2 className="title">Giới thiệu</h2>
          </div>
          <span className="Story_detail__description--content">
          Phàm Nhân Tu Tiên Chi Tiên Giới Thiên hay còn gọi là Phàm Nhân Tu Tiên 2 là phần tiếp theo của tác phẩm nổi tiếng một thời Phàm Nhân Tu Tiên của tác giả Vong Ngữ
          <br></br>
          <br></br>
          Phàm nhân tu tiên, lại nổi sóng gió
          <br></br>
          <br></br>
          Xuyên qua thời không, luân hồi nghịch chuyển
          <br></br>
          <br></br>
          Kim Tiên Thái Ất, Đại La Đạo Tổ 3000 đại đạo, Pháp Tắc Chí Tôn
          <br></br>
          <br></br>
          « Phàm Nhân Tu Tiên Truyện » Tiên Giới Thiên, một cái Hàn Lập quát tháo Tiên giới cố sự, một phàm nhân tiểu tử tu tiên bất diệt truyền thuyết.
          </span>
        </div>
        <div className="Story_detail__relative_stories">
          <div className="title_wrapper">
            <h2 className="title">Cùng tác giả</h2>
            <button className="see_more_btn">
              Xem thêm
              <FontAwesomeIcon icon={faCaretRight}/>
            </button>
          </div>
          <div className="Relative--comic_list">
            <div className="Relative--comic">
              <span className="Relative__comic--type">Khoa huyễn</span>
              <h2 className="Relative__comic--title">Linh cảnh hành giả</h2>
              <span className="Relative__comic--status">Hoàn thành</span>
              <span className="Relative__comic--chapter_amount">150</span>
              <span className="Relative__comic--translator">DarkHero</span>
            </div>
            <div className="Relative--comic">
              <span className="Relative__comic--type">Khoa huyễn</span>
              <h2 className="Relative__comic--title">Linh cảnh hành giả</h2>
              <span className="Relative__comic--status">Hoàn thành</span>
              <span className="Relative__comic--chapter_amount">150</span>
              <span className="Relative__comic--translator">DarkHero</span>
            </div>
            <div className="Relative--comic">
              <span className="Relative__comic--type">Khoa huyễn</span>
              <h2 className="Relative__comic--title">Linh cảnh hành giả</h2>
              <span className="Relative__comic--status">Hoàn thành</span>
              <span className="Relative__comic--chapter_amount">150</span>
              <span className="Relative__comic--translator">DarkHero</span>
            </div>
            <div className="Relative--comic">
              <span className="Relative__comic--type">Khoa huyễn</span>
              <h2 className="Relative__comic--title">Linh cảnh hành giả</h2>
              <span className="Relative__comic--status">Hoàn thành</span>
              <span className="Relative__comic--chapter_amount">150</span>
              <span className="Relative__comic--translator">DarkHero</span>
            </div>
          </div>
        </div>
        <div className="Story_detail__same_posts">
          <div className="title_wrapper">
            <h2 className="title">Cùng đăng bởi DarkHero</h2>
            <button className="see_more_btn">
              Xem thêm
              <FontAwesomeIcon icon={faCaretRight}/>
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default StoryDetail;