import Footer from '../components/footer/footer';
import Logo from '../components/logo/logo';

function ErrorRequestPage(): JSX.Element {
  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo/>
      </header>

      <div className="sign-in user-page__content">
        <div className="sign-in__message">
          <h1>ERROR REQUEST</h1>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ErrorRequestPage;
