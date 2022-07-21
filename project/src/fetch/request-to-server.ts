import {ERROR} from '../components/utils/const';

const linkToServer = 'https://10.react.pages.academy/wtw';

const enum RequestMethod {
  Get = 'GET',
  Post = 'POST',
  Delete = 'DELETE'
}

const enum GetRequest {
  Promo = '/promo/',
  Films = '/films/',
  Similar = '/similar',
  Favorite = '/favorite',
  Comments = '/comments/',
  Login = '/login',
}

type ObjRequest = {
  method: string,
  headers: Headers,
};

const getPromoFilm = async () => {
  const link = `${linkToServer}${GetRequest.Promo}`;
  const headers: Headers = new Headers();

  const objRequest: ObjRequest = {
    method: RequestMethod.Get,
    headers: headers,
  };

  try {
    const response = await fetch(link, objRequest);
    if (response.ok) {
      return response.json();
    }
    throw response;
  } catch {
    return ERROR;
  }
};

const getFilmsList = async () => {
  const link = `${linkToServer}${GetRequest.Films}`;
  const headers: Headers = new Headers();

  const objRequest: ObjRequest = {
    method: RequestMethod.Get,
    headers: headers,
  };

  try {
    const response = await fetch(link, objRequest);
    if (response.ok) {
      return response.json();
    }
    throw response;
  } catch {
    return ERROR;
  }
};

const getFilm = async (id:string) => {
  const link = `${linkToServer}${GetRequest.Films}${id}`;
  const headers: Headers = new Headers();

  const objRequest: ObjRequest = {
    method: RequestMethod.Get,
    headers: headers,
  };

  try {
    const response = await fetch(link, objRequest);
    if (response.ok) {
      return response.json();
    }
    throw response;
  } catch {
    return ERROR;
  }
};

export {getPromoFilm, getFilmsList, getFilm};
