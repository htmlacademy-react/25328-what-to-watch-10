import {Link} from 'react-router-dom';
import { LogoProps } from '../../types/types';
import {AppRoute} from '../utils/const';

const Logo = ({ isInFooter }: LogoProps): JSX.Element => (
  <div className="logo">
    <Link to={AppRoute.Main} className={isInFooter ? 'logo__link logo__link--light' : 'logo__link'}>
      <span className="logo__letter logo__letter--1">W</span>
      <span className="logo__letter logo__letter--2">T</span>
      <span className="logo__letter logo__letter--3">W</span>
    </Link>
  </div>
);

export default Logo;
