const ZERO_VALUE = 0;
const SIXTY_VALUE = 60;
const ERROR = 'error';
const KEY_ESCAPE = 'Escape';
const RATING_STARS = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

const enum RatingLevelCountValue {
  Zero = 0,
  Three = 3,
  Five = 5,
  Eight = 8,
  Ten = 10
}

const enum RatingLevel {
  Bad = 'Bad',
  Normal = 'Normal',
  Good = 'Good',
  VeryGood = 'Very good',
  Awesome = 'Awesome'
}

const enum AppRoute {
  Main = '/',
  SignIn = '/login',
  MyList = '/mylist',
  Film = '/films',
  DefaultFilm = '/films/:id',
  OverviewFilm = '#overview',
  DetailsFilm = '#details',
  ReviewsFilm = '#reviews',
  VideoPlayer = '/player',
  DefaultVideoPlayer = '/player/:id',
  AddReview = 'review',
  DefaultAddReview = '/films/:id/review',
  NotFound = '*',
  ErrorRequest = '/errorrequest'
}

const enum AuthorizationValue {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'Unknown',
}

const enum TabNames {
  Overview = '#overview',
  Details = '#details',
  Reviews = '#reviews'
}

export {
  ZERO_VALUE,
  SIXTY_VALUE,
  ERROR,
  RATING_STARS,
  KEY_ESCAPE,
  AppRoute,
  AuthorizationValue,
  RatingLevelCountValue,
  RatingLevel,
  TabNames,
};
