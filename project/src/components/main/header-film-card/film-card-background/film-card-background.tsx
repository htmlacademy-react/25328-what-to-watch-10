import {FilmDataPropsType} from '../../../../types/types';

const FilmCardBackground = ({filmData}: FilmDataPropsType): JSX.Element => {
  const {backgroundImage, name} = filmData;
  return (
    <div className="film-card__bg">
      <img src={backgroundImage} alt={name} />
    </div>
  );
};

export default FilmCardBackground;
