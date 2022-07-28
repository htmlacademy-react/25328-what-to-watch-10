import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {getFilm} from '../../../fetch/request-to-server';
import ErrorRequestPage from '../../../pages/error-request';
import {FilmDataType} from '../../../types/types';
import Spinner from '../../spinner/spinner';
import {getRatingLevel} from '../../utils/utils';

const MoviePageOverviewElement = () => {
  const { id } = useParams();
  const [filmData, setFilmData] = useState<FilmDataType | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    (async () => {
      try {const data = await getFilm(Number(id));
        setFilmData(data);
      } catch (e) {
        setError(true);
      }
    })();
  }, [id]);

  if(error) {
    return <ErrorRequestPage />;
  }

  if(filmData === null){
    return (
      <Spinner />
    );
  }
  const {rating, scoresCount, description, director, starring} = filmData;

  return (
    <>
      <div className="film-rating">
        <div className="film-rating__score">{rating}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">{getRatingLevel(rating)}</span>
          <span className="film-rating__count">{`${scoresCount} ratings`}</span>
        </p>
      </div>
      <div className="film-card__text">
        <p>{description}</p>

        <p className="film-card__director"><strong>{`Director: ${director}`}</strong></p>

        <p className="film-card__starring"><strong>Starring: {starring ? starring.join(', ') : ''} and other</strong>
        </p>
      </div>
    </>
  );
};

export default MoviePageOverviewElement;
