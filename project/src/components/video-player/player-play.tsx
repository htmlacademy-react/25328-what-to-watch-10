import {useEffect, useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import {getFilm} from '../../fetch/request-to-server';
import ErrorRequestPage from '../../pages/error-request';
import {FilmDataType} from '../../types/types';
import Spinner from '../spinner/spinner';
import { KEY_ESCAPE } from '../utils/const';
import { convertRunTime } from '../utils/utils';

const VideoPlayer = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [state, setState] = useState<FilmDataType | null>(null);
  const[error, setError] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const data = await getFilm(Number(id));
        setState(data);
      } catch (e) {
        setError(true);
      }
    })();
  }, [id]);

  useEffect(() => {
    const onKeyDownEsc = (evt: KeyboardEvent) => {
      if (evt.key === KEY_ESCAPE) {
        evt.preventDefault();
        navigate(-1);
      }
    };

    document.addEventListener('keydown', onKeyDownEsc);
    return () => {
      document.removeEventListener('keydown', onKeyDownEsc);
    };
  });

  const handleExitButtonClick: React.MouseEventHandler<HTMLButtonElement> = () => {
    navigate(-1);
  };

  if(error) {
    return <ErrorRequestPage />;
  }

  if(state === null){
    return (
      <Spinner />
    );
  }

  const {name, posterImage, videoLink, runTime} : FilmDataType = state;

  return (
    <div className="player">
      <video src={videoLink} poster={posterImage} className="player__video" muted autoPlay></video>

      <button onClick={handleExitButtonClick} type="button" className="player__exit">Exit</button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value="30" max="100"></progress>
            <div className="player__toggler" style={{
              left: '30%',
            }}
            >Toggler
            </div>
          </div>
          <div className="player__time-value">{convertRunTime(runTime)}</div>
        </div>

        <div className="player__controls-row">
          <button type="button" className="player__play">
            <svg viewBox="0 0 19 19" width="19" height="19">
              <use xlinkHref="#play-s"></use>
            </svg>
            <span>Play</span>
          </button>
          <div className="player__name">{name}</div>

          <button type="button" className="player__full-screen">
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen"></use>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
