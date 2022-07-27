import FilmCardBackground from './film-card-background/film-card-background';
import PageHeader from './page-header/page-header';
import FilmCardWrap from './film-card-wrap/film-card-wrap';
import {FilmDataPropsType} from '../../../types/types';

const HeaderFilmCard = ({filmData}: FilmDataPropsType): JSX.Element => (
  <section className="film-card">
    <FilmCardBackground filmData={filmData} />
    <h1 className="visually-hidden">WTW</h1>
    <PageHeader />
    <FilmCardWrap filmData={filmData} />
  </section>
);

export default HeaderFilmCard;
