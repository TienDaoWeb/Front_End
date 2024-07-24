import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons/faBars";
import { faGlasses } from "@fortawesome/free-solid-svg-icons/faGlasses";
import { faFeatherPointed } from "@fortawesome/free-solid-svg-icons";

function HomePageRank() {
  return (
    <div className="Homepage__rank">
      <div className="Homepage__rank--reading_week">
        <h1 className="Reading_week__title">Đọc nhiều trong tuần</h1>
        <div className="Reading_week__comic_list">
          <div className="comic__top_1">
            <img src="/assets/images/medal_1.png" alt="comic medal 1" className="comic__medal" />
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
            <img src="/assets/images/medal_2.png" alt="comic medal 1" className="comic__medal" />
            <h2 className="comic__title">Tiên Nghịch</h2>
            <span className="comic__view">90,000</span>
          </div>
          <div className="comic__top_3">
            <img src="/assets/images/medal_3.png" alt="comic medal 1" className="comic__medal" />
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
            <img src="/assets/images/medal_1.png" alt="comic medal 1" className="comic__medal" />
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
            <img src="/assets/images/medal_2.png" alt="comic medal 1" className="comic__medal" />
            <h2 className="comic__title">Tiên Nghịch</h2>
            <span className="comic__view">90,000</span>
          </div>
          <div className="comic__top_3">
            <img src="/assets/images/medal_3.png" alt="comic medal 1" className="comic__medal" />
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
            <img src="/assets/images/medal_1.png" alt="comic medal 1" className="comic__medal" />
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
            <img src="/assets/images/medal_2.png" alt="comic medal 1" className="comic__medal" />
            <h2 className="comic__title">Tiên Nghịch</h2>
            <span className="comic__view">90,000</span>
          </div>
          <div className="comic__top_3">
            <img src="/assets/images/medal_3.png" alt="comic medal 1" className="comic__medal" />
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
  );
}

export default HomePageRank;