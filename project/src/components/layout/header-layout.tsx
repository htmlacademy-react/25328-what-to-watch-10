import Logo from '../logo/logo';
import { HeaderPropsType } from '../../types/types';

function HeaderElement({ children}: HeaderPropsType): JSX.Element {
  return (
    <header className="page-header film-card__head">
      <Logo />
      {children}
    </header>
  );
}

export default HeaderElement;
