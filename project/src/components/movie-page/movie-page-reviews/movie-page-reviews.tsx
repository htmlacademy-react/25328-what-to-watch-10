import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {CommentDataType} from '../../../types/types';
import {getCommentsFilm} from '../../../fetch/request-to-server';
import ReviewElement from './review-element/review-element';
import Spinner from '../../spinner/spinner';
import ErrorRequestPage from '../../../pages/error-request';

const MoviePageReviewsElement = () => {
  const { id } = useParams();
  const [commentsData, setCommentsData] = useState<CommentDataType[] | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    (async () => {
      try {const data = await getCommentsFilm(Number(id));
        setCommentsData(data);
      } catch (e) {
        setError(true);
      }
    })();
  }, [id]);

  if(error) {
    return <ErrorRequestPage />;
  }

  if(commentsData === null){
    return (
      <Spinner />
    );
  }

  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {
          commentsData.map((item, index) => (index % 2 === 0 ?
            <ReviewElement key={`review-${item.id}`} {...item} /> :
            null
          ))
        }
      </div>
      <div className="film-card__reviews-col">
        {
          commentsData.map((item, index) => (index % 2 !== 0 ?
            <ReviewElement key={`review-${item.id}`} {...item} /> :
            null
          ))
        }
      </div>
    </div>
  );
};

export default MoviePageReviewsElement;
