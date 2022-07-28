import React from 'react';
import { useState } from 'react';
import { RATING_STARS } from '../../utils/const';

const SubmitCommentForm = (): JSX.Element => {
  const [formData, setFormData] = useState({
    rating: 0,
    reviewText: '',
  });

  const handleFieldChange: React.ChangeEventHandler<HTMLInputElement & HTMLLabelElement & HTMLTextAreaElement> = (evt) => {
    const { name, value } = evt.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit: React.FormEventHandler<HTMLFormElement> = (evt) => {
    evt.preventDefault();
  };

  return (
    <form onSubmit={handleFormSubmit} className="add-review__form">
      <div className='rating'>
        <div onChange={handleFieldChange} className='rating__stars'>
          {RATING_STARS.map((star) => (
            <React.Fragment key={star}>
              <input className='rating__input' id={`star-${star}`} type='radio' name='rating' value={star} />
              <label className='rating__label' htmlFor={`star-${star}`}>Rating {star}</label>
            </React.Fragment>
          ))}
        </div>
      </div>

      <div className="add-review__text">
        <textarea
          onChange={handleFieldChange}
          className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text"
        >{formData.reviewText}
        </textarea>
        <div className="add-review__submit">
          <button className="add-review__btn" type="submit">Post</button>
        </div>
      </div>
    </form>
  );
};

export { SubmitCommentForm };
