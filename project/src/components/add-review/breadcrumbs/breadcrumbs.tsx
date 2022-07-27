import {Link} from 'react-router-dom';
import {FilmDataPropsType} from '../../../types/types';
import {AppRoute, TabNames} from '../../utils/const';

const BreadcrumbsElement = ({ filmData }: FilmDataPropsType): JSX.Element => {
  const { id, name } = filmData;
  return (
    <nav className="breadcrumbs">
      <ul className="breadcrumbs__list">
        <li className="breadcrumbs__item">
          <Link to={`${AppRoute.Film}/${id}${TabNames.Overview}`} className="breadcrumbs__link">{name}</Link>
        </li>
        <li className="breadcrumbs__item">
          <div className="breadcrumbs__link">Add review</div>
        </li>
      </ul>
    </nav>
  );
};

export default BreadcrumbsElement;
