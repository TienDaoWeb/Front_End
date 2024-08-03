import './Header.css';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { faBars, faList, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Header() {
  return (
    <nav className='Header__wrapper'>
      <div className="Header">
        <div className='Header__left flex items-center'>
          <Link to={'/'}>
            <div className='Header__name flex items-center'>
              <div className="Header__logo"></div>
              <h1 className="Header__website-name hidden sm:block">Tiên Đạo</h1>
            </div>
          </Link>
          <Dropdown>
            <DropdownButton
              id="dropdown-basic-button"
              title={
                <span className="Header__Type flex items-center">
                  <FontAwesomeIcon icon={faList} />
                  Thể loại
                </span>
              }
              className='Header__dropdown-button'
            >
              <div className='Header__dropdown flex'>
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
          <Link to={'/rank'} className='Header_rank__link'>
            <span className="Header_rank">Bảng xếp hạng</span>
          </Link>
        </div>
        <div className="Header__search xs:w-1/2">
          <input type="text" className="Header__search--input" placeholder='Tìm kiếm...' />
          <FontAwesomeIcon className='Header__search--icon' icon={faMagnifyingGlass} />
        </div>
        <div className="Header__action flex items-center">
          <Link to={'/login-register'} className='Header__action--btn-login'>Đăng nhập/Đăng ký</Link>
        </div>
        <div className="drop-down-responsive relative xs:hidden text-left">
          <Dropdown>
            <DropdownButton
              id="dropdown-basic-button"
              title={
                <span className="Header__Type flex items-center space-x-2 bg-transparent">
                  <FontAwesomeIcon icon={faBars} />
                </span>
              }
              className="Header__dropdown-button_responsive"
            >
              <div className="Header__dropdown--column bg-white shadow-lg rounded-lg p-4 mt-2">
                <div className="Header__dropdown--item">
                  <Link to={'/genres'} className="block px-4 py-2 text-gray-800 hover:bg-gray-200 rounded text-[1.6rem] font-DFVNBridgeType">
                    Thể loại
                  </Link>
                </div>
                <div className="Header__dropdown--item">
                  <Link to={'/rank'} className="block px-4 py-2 text-gray-800 hover:bg-gray-200 rounded text-[1.6rem] font-DFVNBridgeType">
                    Bảng xếp hạng
                  </Link>
                </div>
                <div className="Header__dropdown--item">
                  <Link to={'/login-register'} className="block px-4 py-2 text-gray-800 hover:bg-gray-200 rounded text-[1.6rem] font-DFVNBridgeType">
                    Đăng nhập/Đăng ký
                  </Link>
                </div>
              </div>
            </DropdownButton>
          </Dropdown>
        </div>
      </div>
    </nav>
  );
}

export default Header;
