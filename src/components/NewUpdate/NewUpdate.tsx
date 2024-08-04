import { faBook, faCaretRight, faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function NewUpdate() {
  return (
    <div className="Homepage__new_update px-5">
      <div className="flex justify-between w-full items-center px-5">
        <h1 className="Homepage__new_update--title">Mới cập nhật</h1>
        <button className="flex gap-2.5 items-center max-lg:px-1 sm:px-5 text-[1.6rem] hover:text-[color:var(--gold)]">
            <span className="max-lg:hidden">Xem thêm</span>
            <FontAwesomeIcon icon={faCaretRight} />
          </button>
      </div>
      <div className="line"></div>
      <div className="Homepage__new_update--comic_list px-8">
        <div className="Homepage__new_update--comic">
          <span className="New_update__comic--type">Khoa huyễn</span>
          <h2 className="New_update__comic--title w-[250px] font-bold">Linh cảnh hành giả</h2>
          <div className="flex w-full items-center justify-between text-[1.4rem] lg:text-[1.6rem] text-[color:var(--gray)]">
            <div className="New_update__comic--author lg:w-[180px]">
              <FontAwesomeIcon icon={faCircleUser} className="lg:hidden"/>
              <span className="author_name">Mại Báo Tiểu Lang Quân </span>
            </div>
            <span className="New_update__comic--chapter max-lg:text-right xl:text-start">Chương 101<span className="max-lg:hidden">: Trong nháy mắt giết địch</span></span>
          </div>
          {/* <span className="New_update__comic--translator max-lg:hidden">DarkHero</span> */}
          <div className="flex w-full lg:w-fit items-center justify-between text-[1.4rem] text-[color:var(--gray)]">
          <span className="lg:hidden flex items-center gap-2">
              <FontAwesomeIcon icon={faBook} className="lg:hidden"/>
              Khoa huyễn</span>
            <span className="New_update__comic--updating_time">2 phút trước</span>
          </div>
        </div>
        <div className="Homepage__new_update--comic">
          <span className="New_update__comic--type">Khoa huyễn</span>
          <h2 className="New_update__comic--title w-[250px] font-bold">Linh cảnh hành giả</h2>
          <div className="flex w-full items-center justify-between text-[1.4rem] lg:text-[1.6rem] text-[color:var(--gray)]">
            <div className="New_update__comic--author lg:w-[180px]">
              <FontAwesomeIcon icon={faCircleUser} className="lg:hidden"/>
              <span className="author_name">Mại Báo Tiểu Lang Quân </span>
            </div>
            <span className="New_update__comic--chapter max-lg:text-right xl:text-start">Chương 101<span className="max-lg:hidden">: Trong nháy mắt giết địch</span></span>
          </div>
          {/* <span className="New_update__comic--translator max-lg:hidden">DarkHero</span> */}
          <div className="flex w-full lg:w-fit items-center justify-between text-[1.4rem] text-[color:var(--gray)]">
          <span className="lg:hidden flex items-center gap-2">
              <FontAwesomeIcon icon={faBook} className="lg:hidden"/>
              Khoa huyễn</span>
            <span className="New_update__comic--updating_time">2 phút trước</span>
          </div>
        </div>
        <div className="Homepage__new_update--comic">
          <span className="New_update__comic--type">Khoa huyễn</span>
          <h2 className="New_update__comic--title w-[250px] font-bold">Linh cảnh hành giả</h2>
          <div className="flex w-full items-center justify-between text-[1.4rem] lg:text-[1.6rem] text-[color:var(--gray)]">
            <div className="New_update__comic--author lg:w-[180px]">
              <FontAwesomeIcon icon={faCircleUser} className="lg:hidden"/>
              <span className="author_name">Mại Báo Tiểu Lang Quân </span>
            </div>
            <span className="New_update__comic--chapter max-lg:text-right xl:text-start">Chương 101<span className="max-lg:hidden">: Trong nháy mắt giết địch</span></span>
          </div>
          {/* <span className="New_update__comic--translator max-lg:hidden">DarkHero</span> */}
          <div className="flex w-full lg:w-fit items-center justify-between text-[1.4rem] text-[color:var(--gray)]">
          <span className="lg:hidden flex items-center gap-2">
              <FontAwesomeIcon icon={faBook} className="lg:hidden"/>
              Khoa huyễn</span>
            <span className="New_update__comic--updating_time">2 phút trước</span>
          </div>
        </div>
        <div className="Homepage__new_update--comic">
          <span className="New_update__comic--type">Khoa huyễn</span>
          <h2 className="New_update__comic--title w-[250px] font-bold">Linh cảnh hành giả</h2>
          <div className="flex w-full items-center justify-between text-[1.4rem] lg:text-[1.6rem] text-[color:var(--gray)]">
            <div className="New_update__comic--author lg:w-[180px]">
              <FontAwesomeIcon icon={faCircleUser} className="lg:hidden"/>
              <span className="author_name">Mại Báo Tiểu Lang Quân </span>
            </div>
            <span className="New_update__comic--chapter max-lg:text-right xl:text-start">Chương 101<span className="max-lg:hidden">: Trong nháy mắt giết địch</span></span>
          </div>
          {/* <span className="New_update__comic--translator max-lg:hidden">DarkHero</span> */}
          <div className="flex w-full lg:w-fit items-center justify-between text-[1.4rem] text-[color:var(--gray)]">
          <span className="lg:hidden flex items-center gap-2">
              <FontAwesomeIcon icon={faBook} className="lg:hidden"/>
              Khoa huyễn</span>
            <span className="New_update__comic--updating_time">2 phút trước</span>
          </div>
        </div>
        <div className="Homepage__new_update--comic">
          <span className="New_update__comic--type">Khoa huyễn</span>
          <h2 className="New_update__comic--title w-[250px] font-bold">Linh cảnh hành giả</h2>
          <div className="flex w-full items-center justify-between text-[1.4rem] lg:text-[1.6rem] text-[color:var(--gray)]">
            <div className="New_update__comic--author lg:w-[180px]">
              <FontAwesomeIcon icon={faCircleUser} className="lg:hidden"/>
              <span className="author_name">Mại Báo Tiểu Lang Quân </span>
            </div>
            <span className="New_update__comic--chapter max-lg:text-right xl:text-start">Chương 101<span className="max-lg:hidden">: Trong nháy mắt giết địch</span></span>
          </div>
          {/* <span className="New_update__comic--translator max-lg:hidden">DarkHero</span> */}
          <div className="flex w-full lg:w-fit items-center justify-between text-[1.4rem] text-[color:var(--gray)]">
          <span className="lg:hidden flex items-center gap-2">
              <FontAwesomeIcon icon={faBook} className="lg:hidden"/>
              Khoa huyễn</span>
            <span className="New_update__comic--updating_time">2 phút trước</span>
          </div>
        </div>
        <div className="Homepage__new_update--comic">
          <span className="New_update__comic--type">Khoa huyễn</span>
          <h2 className="New_update__comic--title w-[250px] font-bold">Linh cảnh hành giả</h2>
          <div className="flex w-full items-center justify-between text-[1.4rem] lg:text-[1.6rem] text-[color:var(--gray)]">
            <div className="New_update__comic--author lg:w-[180px]">
              <FontAwesomeIcon icon={faCircleUser} className="lg:hidden"/>
              <span className="author_name">Mại Báo Tiểu Lang Quân </span>
            </div>
            <span className="New_update__comic--chapter max-lg:text-right xl:text-start">Chương 101<span className="max-lg:hidden">: Trong nháy mắt giết địch</span></span>
          </div>
          {/* <span className="New_update__comic--translator max-lg:hidden">DarkHero</span> */}
          <div className="flex w-full lg:w-fit items-center justify-between text-[1.4rem] text-[color:var(--gray)]">
          <span className="lg:hidden flex items-center gap-2">
              <FontAwesomeIcon icon={faBook} className="lg:hidden"/>
              Khoa huyễn</span>
            <span className="New_update__comic--updating_time">2 phút trước</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewUpdate;