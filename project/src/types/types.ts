type FilmDataType = {
  id: number,
  name: string,
  posterImage: string,
  previewImage: string,
  backgroundImage: string,
  backgroundColor: string,
  videoLink: string,
  previewVideoLink: string
  description: string,
  rating: number,
  scoresCount: number,
  director: string,
  starring: string[],
  runTime: number,
  genre: string,
  released: number,
  isFavorite: boolean,
};

type FilmsDataPropsType = {
  filmsList: FilmDataType[]
};

type FilmDataPropsType = {
  filmData: FilmDataType
};

type DataFromServer = {
  promoFilm: FilmDataType & string,
  filmsData: FilmDataType[] & string,
}

type formDataSubmitType = {
  rating: number,
  comment: string
}

type LogoProps = {
  isInFooter?: boolean
}

type HeaderPropsType = {
  children: JSX.Element | JSX.Element[],
}

type FilmCardForCatalogPropsType = {
  item: FilmDataType,
};

type CommentDataType = {
  comment: string,
  date: Date,
  id: number,
  rating: number,
  user: {
    id: number,
    name: string,
  }
};

export type {
  FilmDataType,
  FilmsDataPropsType,
  FilmDataPropsType,
  DataFromServer,
  formDataSubmitType,
  LogoProps,
  HeaderPropsType,
  FilmCardForCatalogPropsType,
  CommentDataType,
};
