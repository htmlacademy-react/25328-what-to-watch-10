import React from 'react';
import {useEffect, useState} from 'react';
import {Link, useNavigate, useParams} from 'react-router-dom';
import {FilmDataType} from '../../types/types';
import {AppRoute, TabNames} from '../utils/const';
import { getFilm } from '../../fetch/request-to-server';
import Spinner from '../spinner/spinner';
import PageHeader from '../main/header-film-card/page-header/page-header';
import ErrorRequestPage from '../../pages/error-request';
import MoviePageDetails from './movie-page-details/movie-page-details';
import MoviePageReviews from './movie-page-reviews/movie-page-reviews';
import MoviePageOverview from './movie-page-overview/movie-page-overview';
import LikeThisFilms from './like-this-films/like-this-films';
import Footer from '../footer/footer';

const MoviePage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [filmData, setFilmData] = useState<FilmDataType | null>(null);
  const [error, setError] = useState(false);
  const currentTab = window.location.hash;

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

  const handleNavigateToVideoPlayerClick: React.MouseEventHandler<HTMLButtonElement> = () => {
    navigate(`${AppRoute.VideoPlayer}/${id}`);
  };

  const handleNavigateToMyListClick: React.MouseEventHandler<HTMLButtonElement> = () => {
    navigate(AppRoute.MyList);
  };

  const getCurrentInfoBlock = (): JSX.Element => {
    switch (currentTab) {
      case TabNames.Details:
        return <MoviePageDetails/>;
      case TabNames.Reviews:
        return <MoviePageReviews/>;
      default:
        return <MoviePageOverview/>;
    }
  };

  if(filmData === null){
    return (
      <Spinner />
    );
  }

  const {name, genre, released, backgroundImage, posterImage}: FilmDataType = filmData;

  return (
    <React.Fragment>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={backgroundImage} alt={name} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <PageHeader />

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{genre}</span>
                <span className="film-card__year">{released}</span>
              </p>

              <div className="film-card__buttons">
                <button onClick={handleNavigateToVideoPlayerClick} className="btn btn--play film-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button onClick={handleNavigateToMyListClick} className="btn btn--list film-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                  <span className='film-card__count'>9</span>
                </button>
                <Link to={`${AppRoute.Film}/${id}/${AppRoute.AddReview}`} className="btn film-card__button" state={filmData}>Add review</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={posterImage} alt={name} width="218" height="327" />
            </div>

            <div className="film-card__desc">
              <nav className="film-nav film-card__nav">
                <ul className="film-nav__list">
                  <li className={`film-nav__item ${currentTab === TabNames.Overview ? 'film-nav__item--active' : ''}`}>
                    <Link to={TabNames.Overview} className="film-nav__link">Overview</Link>
                  </li>
                  <li className={`film-nav__item ${currentTab === TabNames.Details ? 'film-nav__item--active' : ''}`}>
                    <Link to={TabNames.Details} className="film-nav__link">Details</Link>
                  </li>
                  <li className={`film-nav__item ${currentTab === TabNames.Reviews ? 'film-nav__item--active' : ''}`}>
                    <Link to={TabNames.Reviews} className="film-nav__link">Reviews</Link>
                  </li>
                </ul>
              </nav>

              {
                getCurrentInfoBlock()
              }
            </div>
          </div>
        </div>
      </section>

      <div className='page-content'>
        <LikeThisFilms />
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default MoviePage;
