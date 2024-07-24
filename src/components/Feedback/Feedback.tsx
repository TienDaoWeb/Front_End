import React from "react";
import './Feedback.css'
import Rating from "../Rating";

function Feedback() {
  const [rating, setRating] = React.useState(0);
  return (
    <div className='Feedback__wrapper'>
      <div className="Feedback">
        <div className='Feedback__rating_score'>
          <label className="Feedback_form__label">Đánh giá nội dung truyện</label>
          {/* <ReactStarRating
            name="rating"
            count={5}
            size={50}
          // edit={isFeedbackable}
          // value={feedback.rating_score}
          // onChange={setRating}
          /> */}
          <Rating
          count={5}
          value={rating}
          edit={true}
          onChange={(value) => setRating(value)}
          />
          </div>
        <div className="Feedback__content">
          <label htmlFor="content" className='Feedback_form__label'>Nội dung đánh giá</label>
          <textarea
            // type="text"
            id="content"
            // value={feedback.content}
            // readOnly = {!isFeedbackable}
            // disabled = {!isFeedbackable}
            name="content"
            placeholder='Nội dung...'
            className="Feedback_form__input"
            // className={errors.feedback_content ? "Feedback_form__input error-input" : "Feedback_form__input normal-input"}
            // onChange={(e) => handleChange(e)} 
            rows={4}
            cols={40}
          />
        </div>
        <button className="Feedback__submit_btn">Gửi đánh giá</button>
      </div>
    </div>
  );
}

export default Feedback;