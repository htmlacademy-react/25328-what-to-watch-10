import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';

const Setting = {
  NAME: 'The Grand Budapest Hotel',
  GENRE: 'Drama',
  YEAR: 2014,
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App name={Setting.NAME} genre={Setting.GENRE} year={Setting.YEAR} />
  </React.StrictMode>,
);
