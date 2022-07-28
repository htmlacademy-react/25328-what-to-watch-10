import Footer from '../footer/footer';
import Logo from '../logo/logo';
import SignInForm from './sign-in-form';

const SignIn = () => (
  <div className="user-page">
    <header className="page-header user-page__head">
      <Logo />

      <h1 className="page-title user-page__title">Sign in</h1>
    </header>

    <div className="sign-in user-page__content">
      <SignInForm/>
    </div>

    <Footer />
  </div>
);

export default SignIn;
