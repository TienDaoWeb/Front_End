import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Footer.css'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons/faFacebookF';
import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram';
import { faYoutube } from '@fortawesome/free-brands-svg-icons/faYoutube';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';

function Footer() {
  return (
    <div className='Footer__wrapper'>
      <div className="Footer">
        <img src="/assets/Logo.png" alt="Logo" className="Footer__logo" />
        <div className="Footer__nav">
          <a className='Footer__nav--item' href="#introduction">Giới thiệu</a>
          <a className='Footer__nav--item' href="#policyandsecurity">Chính sách và bảo mật</a>
          <a className='Footer__nav--item' href="#manual">Hướng dẫn sử dụng</a>
          <a className='Footer__nav--item' href="#term">Điều khoản</a>
        </div>
        <div className="Footer__link">
          <button className='Footer__link--btn'><FontAwesomeIcon icon={faFacebookF} /></button>
          <button className='Footer__link--btn'><FontAwesomeIcon icon={faInstagram} /></button>
          <button className='Footer__link--btn'><FontAwesomeIcon icon={faYoutube} /></button>
          <button className='Footer__link--btn'><FontAwesomeIcon icon={faLinkedinIn} /></button>
        </div>
      </div>
    </div>
  );
}

export default Footer;