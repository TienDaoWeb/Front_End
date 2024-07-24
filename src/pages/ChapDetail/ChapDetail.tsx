// import { useState} from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark, faCircleChevronLeft, faCircleChevronRight, faFlag, faGears, faGift, faList, faStar, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
// import ReactStarRating from "react-star-ratings-component";

import Footer from "~/components/Footer";
import Header from "~/components/Header";
import './ChapDetail.css'
// import { useState } from "react";
import Discuss from "~/components/Discuss";

function ChapDetail() {

  // const [activeComponent, setActiveComponent] = useState("feedback");
  return (
    <div className="Chap_detail__wrapper">
      <Header />
      <div className="Chap_detail">
        <h2 className="Chap_detail__title">Phàm nhân tu tiên</h2>
        <span className="Chap_detail__author">Vong Ngữ</span>
        <div className="Chap_pagination">
          <button className="pagination__previous">
            <FontAwesomeIcon icon={faCircleChevronLeft} />
            Quay lại
          </button>
          <h3 className="Chap__title">Tiên Giới Thiên bản hoàn tất cảm nghĩ</h3>
          <button className="pagination__previous">
            Tiếp theo
            <FontAwesomeIcon icon={faCircleChevronRight} />
          </button>
        </div>
        <div className="Chap__action_top">
          <button className="Chap__action_top_btn">
            <FontAwesomeIcon icon={faGears} />
            Cấu hình
          </button>
          <button className="Chap__action_top_btn">
            <FontAwesomeIcon icon={faList} />
            Mục lục
          </button>
          <button className="Chap__action_top_btn">
            <FontAwesomeIcon icon={faBookmark} />
            Đánh dấu
          </button>
        </div>
        <span className="Chap__content">
          Tiên Giới Thiên bản hoàn tất cảm nghĩ
          <br></br>
          <br></br>
          Tiên Giới Thiên bản hoàn tất cảm nghĩ ( Tiên Giới Thiên bản hoàn tất, cũng không đại biểu phàm nhân tu tiên chuyện xưa kết thúc ^^ )
          <br></br>
          <br></br>
          Thời gian qua mau, Phàm Nhân Tu Tiên Truyện Tiên Giới Thiên đến bản hoàn tất thời điểm. Phàm Nhân Tu Tiên Truyện Nhân Giới Thiên đến nay đã qua mười ba năm. Vô số một đêm không ngủ về sau, rốt cục đem Hàn Lập cố sự toàn bộ viết xong. Như trút được gánh nặng!
          <br></br>
          <br></br>
          Phàm Nhân Tu Tiên Truyện Linh giới bản hoàn tất thời điểm, ta nhận được rất nhiều sách mê bằng hữu tin tức, Phàm Nhân Tiên Giới Thiên chừng nào thì bắt đầu? Mọi người chờ mong để Vong Ngữ mừng rỡ lại cảm thấy tâm thần bất định. Chỉ là Nhân Giới Thiên cơ hồ hết sạch của ta tâm lực, ta thật sự là không dám viết lại tiếp tục tiếp tục viết. Đằng sau trong vài năm, mặc dù viết « Ma Thiên Ký » « Huyền Giới Chi Môn » cùng hai bộ hai thiên. Trong lòng ta nhớ thương nhất hay là Phàm Nhân. Cho Hàn Lập một cái kết cục một mực là giấc mộng của ta. Lúc rảnh rỗi cũng sẽ lối suy nghĩ một chút tình tiết, nhưng là tổng không để cho mình hài lòng. 
          <br></br>
          <br></br> 
          Như thế nào viết Hàn Lập kết cục, đây là ta một mực suy nghĩ vấn đề. Người đã trung niên, thường xuyên sẽ suy nghĩ lung tung, người tồn tại ý nghĩa ở đâu? Cho ngươi một lần cơ hội lựa chọn lần nữa, ngươi là có hay không hay là ngươi bây giờ? Ngươi là có hay không sẽ còn thuận buồm xuôi gió hoặc là gập ghềnh? Là quyết định gì một người vận mệnh? Vận mệnh phải chăng có thể cải biến? <br></br> <br></br>Ta hỏi mình, cũng đang hỏi Hàn Lập, một lần nhìn thấy chính mình thời niên thiếu ngây ngô ảnh chụp đột nhiên có linh cảm. Dù là ta không viết Phàm Nhân Tu Tiên Truyện, ta vẫn là sẽ đi viết một chuyện xưa khác, cuối cùng vẫn là sẽ từ sự tình sáng tác con đường, đi truy tìm lý tưởng của mình, khả năng quá trình khác biệt, khả năng kết cục khác biệt, nhưng là tâm không thay đổi. Sau đó bắt đầu lối suy nghĩ Tiên Giới Thiên cố sự.
          <br></br>
          <br></br>
          Mấy năm gần đây hoạt động xã hội dần dần nhiều, có khi không có khả năng thoát thân, mà ta lại không quen giao lưu, hữu lực không theo tâm cảm giác. Mà phàm nhân cố sự thiên đầu vạn tự, phục bút đông đảo, làm sao chỉnh hợp, hết sức để Tiên Giới Thiên có thể miêu tả ra trong nội tâm của ta Tiên giới, đang nổi lên nhiều năm đằng sau, dần dần có manh mối. Cuối năm 2017, ta rốt cục quyết định viết bắt đầu viết tiếp Phàm Nhân.
          <br></br>
          <br></br>
          Nhoáng một cái hơn hai năm đi qua, Phàm Nhân Tu Tiên Truyện Tiên Giới Thiên rốt cục cũng đến bản hoàn tất thời điểm. Hàn Lập do phàm nhân trải qua khó khăn trắc trở trở thành Chí Tôn Đạo Tổ, nhưng cuối cùng hắn vẫn là từ bỏ Đạo Tổ, lựa chọn con đường của mình, có thể không bị ước thúc. Lựa chọn có rượu có trà, có ba năm cái bạn thân, có người yêu làm bạn, có con trai có con gái.
          <br></br>
          <br></br>
          Vong Ngữ bút lực có hạn, Hàn Lập trong chuyện xưa có rất nhiều tiếc nuối, còn có rất nhiều lối suy nghĩ không có viết ra, bất kể như thế nào đây cũng là giải quyết xong ta một cọc tâm sự. Phía sau có thời gian sẽ viết một chút trong chính văn không có nói đến cố sự, lấy phiên ngoại thiên hình thức phát ra tới, đền bù mọi người một chút tiếc nuối<br></br>Hàn Lập đã có kết cục, mà Vong Ngữ đường vẫn còn muốn tiếp tục. Tương lai, hi vọng các bạn đọc có thể tiếp tục cùng ta kết bạn mà đi cho ta duy trì.<br></br>Tiên Giới Thiên bản hoàn tất chỉ là Phàm Nhân thế giới quan một điểm đỗ đứng, toàn bộ Phàm Nhân đại thế giới còn có thể đản sinh ra truyền kỳ cố sự mới tới. Vong Ngữ cũng không bài trừ, về sau có càng nhiều tích lũy linh cảm về sau, lại đi viết viết trong Phàm Nhân thế giới một cái khác "Hàn Lập" một cái khác đoạn đặc sắc tu tiên truyện nói.
          <br></br>
          <br></br>
          Vong Ngữ lại báo trước dưới, tiếp theo quyển tiểu thuyết vẫn là tu tiên loại, đại khái tại tháng năm năm nay phần bắt đầu ở Qidian tiểu thuyết đăng nhiều kỳ, hi vọng các bạn đọc đến lúc đó nhiều hơn chú ý.
          <br></br>
          <br></br>
          Cuối cùng, Vong Ngữ ở đây chân thành cảm tạ tất cả thư hữu nhiều năm duy trì! Nhiều năm làm bạn! Vạn phần cảm tạ các ngươi!
          <br></br>
          <br></br>
          -----
          <br></br>
          <br></br>
          Lão nhân giảng, Ba Sơn vô biên vô hạn, trên núi có vô số dược liệu, vô số phi cầm tẩu thú.
          <br></br>
          <br></br>
          Chỉ cần tay chân chịu khó, can đảm cẩn trọng, liền sẽ có thu hoạch, liền có thể ăn no mặc ấm sống được giàu có tưới nhuần.
          <br></br>
          <br></br>
          Từ 1980 Ba Sơn Săn Cày Ký
          <br></br>
          <br></br>
          Giả, đều là giả!
          <br></br>
          <br></br>
          Sống lại một lần, lại rời đi đường sống Trần An biết rõ: Trong núi không giàu có, lấy ở đâu ngày nhàn nhã!
          <br></br>
          <br></br>
          Đi đến đi săn, hái thuốc đường đi Trần An, chuẩn bị đem nghề phụ làm lớn!
        </span>
        <div className="Chap__action_bottom">
          <button className="Chap__action_bottom_btn">
            <FontAwesomeIcon className="btn_icon" icon={faCircleChevronLeft} />
            Chương trước
          </button>
          <button className="Chap__action_bottom_btn">
            <FontAwesomeIcon className="btn_icon" icon={faStar} />
            Chấm điểm
          </button>
          <button className="Chap__action_bottom_btn">
            <FontAwesomeIcon className="btn_icon" icon={faGift} />
            Tặng quà
          </button>
          <button className="Chap__action_bottom_btn">
            <FontAwesomeIcon className="btn_icon" icon={faFlag} />
            Báo cáo
          </button>
          <button className="Chap__action_bottom_btn">
            <FontAwesomeIcon className="btn_icon" icon={faThumbsUp} />
            Đề cử
          </button>
          <button className="Chap__action_bottom_btn">
            Chương sau
            <FontAwesomeIcon className="btn_icon" icon={faCircleChevronRight} />
          </button>
        </div>
        <Discuss/>
      </div>
      <Footer />
    </div>
  );
}

export default ChapDetail;