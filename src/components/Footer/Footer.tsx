import './Footer.css'

function Footer() {
  return (
    <div className='Footer__wrapper'>
      <div className="Footer">
          <div className="Footer__web_name">
            <img src="https://res.cloudinary.com/djkgwo9kc/image/upload/v1721899786/azkbpvnmztc7ziuoog60.png" alt="Logo" className="Footer__logo" />
            <h1 className="Footer__web_name">Tiên Đạo</h1>
          </div>
          <span className="Footer__web_introduction">Với Tiên đạo, mỗi trang truyện là một hành trình phiêu lưu đầy mê hoặc. Hãy để trí tưởng tượng của bạn bay bổng và khám phá những câu chuyện kỳ diệu, nơi các nhân vật sống động và thế giới kỳ ảo hiện ra trước mắt bạn.</span>
          <span className='Footer__license'>©2024 TienDao. All rights reserved.</span>
          {/* <div className="Footer__nav">
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
          </div>     */}
      </div>
    </div>
  );
}

export default Footer;