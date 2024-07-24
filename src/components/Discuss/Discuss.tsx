import './Discuss.css'

function Discuss() {
  return (
    <div className='Discuss__wrapper'>
      <div className="Discuss">
        <div className="Discuss__content">
          <label htmlFor="content" className='Discuss_form__label'>Nội dung thảo luận</label>
          <textarea
            // type="text"
            id="content"
            // value={Discuss.content}
            // readOnly = {!isDiscussable}
            // disabled = {!isDiscussable}
            name="content"
            placeholder='Thảo luận...'
            className="Discuss_form__input"
            // className={errors.Discuss_content ? "Discuss_form__input error-input" : "Discuss_form__input normal-input"}
            // onChange={(e) => handleChange(e)} 
            rows={4}
            cols={40}
          />
        </div>
        <button className="Discuss__submit_btn">Gửi</button>
      </div>
    </div>
  );
}

export default Discuss;