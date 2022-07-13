import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';
import PrivateRoute from '../private-route/private-route';
import Main from '../../pages/main/main';
import AddReviewPage from '../../pages/add-review/add-review';
import Film from '../../pages/movie-page/movie-page';
import MyList from '../../pages/my-list/my-list';
import SignIn from '../../pages/sign-in/sign-in';
import Player from '../../pages/player/player';
import Error from '../../pages/error/error';

type Props = {
  name: string;
  genre: string;
  year: number;
}

function App({ name, genre, year }: Props): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Root}
          element={<Main name={name} genre={genre} year={year} />}
        />
        <Route
          path={AppRoute.AddReview}
          element={<AddReviewPage/>}
        />
        <Route
          path={AppRoute.Film}
          element={<Film/>}
        />
        <Route
          path={AppRoute.MyList}
          element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
              <MyList/>
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.SignIn}
          element={<SignIn/>}
        />
        <Route
          path={AppRoute.Player}
          element={<Player/>}
        />
        <Route
          path={AppRoute.Error}
          element={<Error/>}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
