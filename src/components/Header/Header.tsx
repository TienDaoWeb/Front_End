import './Header.css';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { faList, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUp } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Header() {
  return (
    <nav className='Header__wrapper'>
      <div className="Header">
        <div className='Header__left'>
          <Link to={'/'}>
            <div className='Header__name'>
              <div className="Header__logo"></div>
              <h1 className="Header__website-name">Tiên Đạo</h1>
            </div>
          </Link>
          <Dropdown>
            <DropdownButton
              id="dropdown-basic-button"
              title={
                <span  className="Header__Type">
                  <FontAwesomeIcon icon={faList} />
                  Thể loại
                </span>
              }
              className='Header__dropdown-button'
            >
              <div className='Header__dropdown'>
                <div className='Header__dropdown--column'>
                  <Dropdown.Item href="#/action-1">Tiên Hiệp</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Huyền Huyễn</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Đô Thị</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Đồng Nhân</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Dã Sử</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Cạnh Kỹ</Dropdown.Item>
                </div>
                <div className='Header__dropdown--column'>
                  <Dropdown.Item href="#/action-3">Khoa Huyễn</Dropdown.Item>
                  <Dropdown.Item href="#/action-4">Võng Du</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Huyền Nghi</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Kiếm Hiệp</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Kỳ Ảo</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Tiểu Thuyết</Dropdown.Item>
                </div>
              </div>
            </DropdownButton>
          </Dropdown>
          <Link to={'/rank'}>
            <span className="Header_rank">Bảng xếp hạng</span>
          </Link>
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
          <Link to={'/login-register'} className='Header__action--btn-login'>Đăng nhập/Đăng ký</Link>
        </div>
      </div>
    </nav>
  );
}

export default Header;