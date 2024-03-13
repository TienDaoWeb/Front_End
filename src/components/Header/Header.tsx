import './Header.css'
import '@fortawesome/fontawesome-svg-core/styles.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faList, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUp } from '@fortawesome/free-regular-svg-icons';

library.add(faList);

function Header() {
  return (<div className='Header__wrapper'>
    <div className="Header">
      <div className='Header__left'>
        <div className='Header__name'>
          <div className="Header__logo"></div> 
          <h1 className="Header__website-name">Tiên Đạo</h1>
        </div>
        <span className="Header__Type">
          <FontAwesomeIcon icon={faList} />
          Thể loại
        </span>
        <span className="Header_rank">Bảng xếp hạng</span>
      </div>
      <div className="Header__search">
        <input type="text" className="Header__search--input" placeholder='Tìm kiếm...' />
        <FontAwesomeIcon className='Header__search--icon' icon={faMagnifyingGlass} />
      </div>
      <div className="Header__action">
        <button className='Header__action--btn-up'>
            <FontAwesomeIcon icon={faCircleUp} />
            Đăng truyện
        </button>
        <button className='Header__action--btn-login'>Đăng nhập</button>
        <button className='Header__action--btn-sign-up'>Đăng ký</button>
      </div>
    </div>
  </div>);
}

export default Header;