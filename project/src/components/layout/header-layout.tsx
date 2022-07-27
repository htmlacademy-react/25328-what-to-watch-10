import Logo from '../logo/logo';
import { HeaderPropsType } from '../../types/types';

const HeaderElement = ({ children}: HeaderPropsType): JSX.Element => (
  <header className="page-header film-card__head">
    <Logo />
    {children}
  </header>
);

export default HeaderElement;
