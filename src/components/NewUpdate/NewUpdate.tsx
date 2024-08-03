import { faBook, faCaretRight, faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function NewUpdate() {
  return (
    <div className="Homepage__new_update px-5 xs:p-0">
      <div className="flex justify-between w-full items-center px-5">
        <h1 className="Homepage__new_update--title">Mới cập nhật</h1>
        <button className="flex gap-2.5 items-center xs:px-1 sm:px-5 text-[1.6rem] hover:text-[color:var(--gold)]">
            <span className="xs:hidden">Xem thêm</span>
            <FontAwesomeIcon icon={faCaretRight} />
          </button>
      </div>
      <div className="line"></div>
      <div className="Homepage__new_update--comic_list px-8 xs:p-0">
        <div className="Homepage__new_update--comic xs:flex-col xs:items-start xs:py-2 xs:gap-2">
          <span className="New_update__comic--type xs:hidden">Khoa huyễn</span>
          <h2 className="New_update__comic--title xs:font-bold">Linh cảnh hành giả</h2>
          <div className="flex w-full items-center justify-between xs:text-[1.4rem] text-[1.6rem] text-[color:var(--gray)]">
            <span className="New_update__comic--author w-[170px] xs:flex xs:gap-2 xs:items-center">
              <FontAwesomeIcon icon={faCircleUser} className="sm:hidden"/>
              <span className="author_name">Mại Báo Tiểu Lang Quân </span>
              </span>
            <span className="New_update__comic--chapter  sm:w-[300px]">Chương 101<span className="xs:hidden">: Trong nháy mắt giết địch</span></span>
          </div>
          {/* <span className="New_update__comic--translator xs:hidden">DarkHero</span> */}
          <div className="flex w-full items-center justify-between text-[1.4rem]">
          <span className="New_update__comic--type sm:hidden xs:flex xs:items-center xs:gap-2">
              <FontAwesomeIcon icon={faBook} className="sm:hidden"/>
              Khoa huyễn</span>
            <span className="New_update__comic--updating_time">2 phút trước</span>
          </div>
        </div>
        <div className="Homepage__new_update--comic xs:flex-col xs:items-start xs:py-2 xs:gap-2">
          <span className="New_update__comic--type xs:hidden">Khoa huyễn</span>
          <h2 className="New_update__comic--title xs:font-bold">Linh cảnh hành giả</h2>
          <div className="flex w-full items-center justify-between xs:text-[1.4rem] text-[1.6rem] text-[color:var(--gray)]">
            <span className="New_update__comic--author w-[170px] xs:flex xs:gap-2 xs:items-center">
              <FontAwesomeIcon icon={faCircleUser} className="sm:hidden"/>
              <span className="author_name">Mại Báo Tiểu Lang Quân </span>
              </span>
            <span className="New_update__comic--chapter  sm:w-[300px]">Chương 101<span className="xs:hidden">: Trong nháy mắt giết địch</span></span>
          </div>
          {/* <span className="New_update__comic--translator xs:hidden">DarkHero</span> */}
          <div className="flex w-full items-center justify-between text-[1.4rem]">
          <span className="New_update__comic--type sm:hidden xs:flex xs:items-center xs:gap-2">
              <FontAwesomeIcon icon={faBook} className="sm:hidden"/>
              Khoa huyễn</span>
            <span className="New_update__comic--updating_time">2 phút trước</span>
          </div>
        </div>
        <div className="Homepage__new_update--comic xs:flex-col xs:items-start xs:py-2 xs:gap-2">
          <span className="New_update__comic--type xs:hidden">Khoa huyễn</span>
          <h2 className="New_update__comic--title xs:font-bold">Linh cảnh hành giả</h2>
          <div className="flex w-full items-center justify-between xs:text-[1.4rem] text-[1.6rem] text-[color:var(--gray)]">
            <span className="New_update__comic--author w-[170px] xs:flex xs:gap-2 xs:items-center">
              <FontAwesomeIcon icon={faCircleUser} className="sm:hidden"/>
              <span className="author_name">Mại Báo Tiểu Lang Quân </span>
              </span>
            <span className="New_update__comic--chapter  sm:w-[300px]">Chương 101<span className="xs:hidden">: Trong nháy mắt giết địch</span></span>
          </div>
          {/* <span className="New_update__comic--translator xs:hidden">DarkHero</span> */}
          <div className="flex w-full items-center justify-between text-[1.4rem]">
          <span className="New_update__comic--type sm:hidden xs:flex xs:items-center xs:gap-2">
              <FontAwesomeIcon icon={faBook} className="sm:hidden"/>
              Khoa huyễn</span>
            <span className="New_update__comic--updating_time">2 phút trước</span>
          </div>
        </div>
        <div className="Homepage__new_update--comic xs:flex-col xs:items-start xs:py-2 xs:gap-2">
          <span className="New_update__comic--type xs:hidden">Khoa huyễn</span>
          <h2 className="New_update__comic--title xs:font-bold">Linh cảnh hành giả</h2>
          <div className="flex w-full items-center justify-between xs:text-[1.4rem] text-[1.6rem] text-[color:var(--gray)]">
            <span className="New_update__comic--author w-[170px] xs:flex xs:gap-2 xs:items-center">
              <FontAwesomeIcon icon={faCircleUser} className="sm:hidden"/>
              <span className="author_name">Mại Báo Tiểu Lang Quân </span>
              </span>
            <span className="New_update__comic--chapter  sm:w-[300px]">Chương 101<span className="xs:hidden">: Trong nháy mắt giết địch</span></span>
          </div>
          {/* <span className="New_update__comic--translator xs:hidden">DarkHero</span> */}
          <div className="flex w-full items-center justify-between text-[1.4rem]">
          <span className="New_update__comic--type sm:hidden xs:flex xs:items-center xs:gap-2">
              <FontAwesomeIcon icon={faBook} className="sm:hidden"/>
              Khoa huyễn</span>
            <span className="New_update__comic--updating_time">2 phút trước</span>
          </div>
        </div>
        <div className="Homepage__new_update--comic xs:flex-col xs:items-start xs:py-2 xs:gap-2">
          <span className="New_update__comic--type xs:hidden">Khoa huyễn</span>
          <h2 className="New_update__comic--title xs:font-bold">Linh cảnh hành giả</h2>
          <div className="flex w-full items-center justify-between xs:text-[1.4rem] text-[1.6rem] text-[color:var(--gray)]">
            <span className="New_update__comic--author w-[170px] xs:flex xs:gap-2 xs:items-center">
              <FontAwesomeIcon icon={faCircleUser} className="sm:hidden"/>
              <span className="author_name">Mại Báo Tiểu Lang Quân </span>
              </span>
            <span className="New_update__comic--chapter  sm:w-[300px]">Chương 101<span className="xs:hidden">: Trong nháy mắt giết địch</span></span>
          </div>
          {/* <span className="New_update__comic--translator xs:hidden">DarkHero</span> */}
          <div className="flex w-full items-center justify-between text-[1.4rem]">
          <span className="New_update__comic--type sm:hidden xs:flex xs:items-center xs:gap-2">
              <FontAwesomeIcon icon={faBook} className="sm:hidden"/>
              Khoa huyễn</span>
            <span className="New_update__comic--updating_time">2 phút trước</span>
          </div>
        </div>
        <div className="Homepage__new_update--comic xs:flex-col xs:items-start xs:py-2 xs:gap-2">
          <span className="New_update__comic--type xs:hidden">Khoa huyễn</span>
          <h2 className="New_update__comic--title xs:font-bold">Linh cảnh hành giả</h2>
          <div className="flex w-full items-center justify-between xs:text-[1.4rem] text-[1.6rem] text-[color:var(--gray)]">
            <span className="New_update__comic--author w-[170px] xs:flex xs:gap-2 xs:items-center">
              <FontAwesomeIcon icon={faCircleUser} className="sm:hidden"/>
              <span className="author_name">Mại Báo Tiểu Lang Quân </span>
              </span>
            <span className="New_update__comic--chapter  sm:w-[300px]">Chương 101<span className="xs:hidden">: Trong nháy mắt giết địch</span></span>
          </div>
          {/* <span className="New_update__comic--translator xs:hidden">DarkHero</span> */}
          <div className="flex w-full items-center justify-between text-[1.4rem]">
          <span className="New_update__comic--type sm:hidden xs:flex xs:items-center xs:gap-2">
              <FontAwesomeIcon icon={faBook} className="sm:hidden"/>
              Khoa huyễn</span>
            <span className="New_update__comic--updating_time">2 phút trước</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewUpdate;