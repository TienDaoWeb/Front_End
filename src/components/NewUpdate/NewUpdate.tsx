import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function NewUpdate() {
  return (
    <div className="Homepage__new_update px-5">
      <div className="flex justify-between w-full items-center px-5">
        <h1 className="Homepage__new_update--title">Mới cập nhật</h1>
        <button className="flex gap-2.5 items-center px-5 text-[1.6rem] hover:text-[color:var(--gold)]">
          Xem thêm
          <FontAwesomeIcon icon={faCaretRight} />
        </button>
      </div>
      <div className="line"></div>
      <div className="Homepage__new_update--comic_list px-8">
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
  );
}

export default NewUpdate;