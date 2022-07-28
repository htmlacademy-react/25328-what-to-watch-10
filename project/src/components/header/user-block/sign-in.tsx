import { Link } from 'react-router-dom';
import { AppRoute } from '../../utils/const';

const SignIn = (): JSX.Element => (
  <div className="user-block">
    <Link to={AppRoute.SignIn} className="user-block__link">Sign in</Link>
  </div>
);

export default SignIn;
