import React from 'react';
import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {getFilm} from '../../../fetch/request-to-server';
import ErrorRequestPage from '../../../pages/error-request';
import {FilmDataType} from '../../../types/types';
import Spinner from '../../spinner/spinner';
import {convertRunTime} from '../../utils/utils';

const MoviePageDetailsElement = () => {
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

  const { director, starring, runTime, genre, released } = filmData;

  return (
    <div className="film-card__text film-card__row">
      <div className="film-card__text-col">
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Director</strong>
          <span className="film-card__details-value">{director}</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Starring</strong>
          <span className="film-card__details-value">
            {starring.map((actor, i) => (i !== starring.length - 1 ?
              <React.Fragment key={actor}>{actor}, <br /></React.Fragment> :
              <React.Fragment key={actor}>{actor}</React.Fragment>))}
          </span>
        </p>
      </div>

      <div className="film-card__text-col">
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Run Time</strong>
          <span className="film-card__details-value">{convertRunTime(runTime)}</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Genre</strong>
          <span className="film-card__details-value">{genre}</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Released</strong>
          <span className="film-card__details-value">{released}</span>
        </p>
      </div>
    </div>
  );
};

export default MoviePageDetailsElement;
