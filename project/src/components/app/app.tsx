import Main from '../../pages/main/main';

type Props = {
  name: string;
  genre: string;
  year: number;
}

function App({ name, genre, year }: Props): JSX.Element {
  return (
    <Main name={name} genre={genre} year={year} />
  );
}

export default App;
