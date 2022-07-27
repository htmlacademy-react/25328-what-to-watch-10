import React, { useEffect, useState } from 'react';
import {Navigate} from 'react-router-dom';
import {DataFromServer} from '../../types/types';
import HeaderFilmCard from './header-film-card/header-film-card';
import PageContent from './page-content/page-content';
import {AppRoute, ERROR} from '../utils/const';
import { getFilmsList, getPromoFilm } from '../../fetch/request-to-server';
import Spinner from '../spinner/spinner';

const MainPage = (): JSX.Element => {
  const [filmData, setFilmData] = useState<DataFromServer | null>(null);

  useEffect(() => {
    (async () => {
      const promoFilm = await getPromoFilm();
      const films = await getFilmsList();

      const data: DataFromServer = {
        promoFilm: promoFilm,
        filmsData: films,
      };

      setFilmData(data);
    })();
  }, []);

  if(filmData === null){
    return (
      <Spinner />
    );
  }

  const {promoFilm, filmsData} = filmData;
  if (promoFilm === ERROR || filmsData === ERROR) {
    return (
      <Navigate to={AppRoute.ErrorRequest}/>
    );
  }

  return (
    <React.Fragment>
      <HeaderFilmCard filmData={promoFilm}/>
      <PageContent filmsList={filmsData}/>
    </React.Fragment>
  );
};

export default MainPage;
