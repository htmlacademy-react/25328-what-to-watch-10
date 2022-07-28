import {RatingLevelCountValue, RatingLevel, SIXTY_VALUE, ZERO_VALUE} from '../utils/const';

const getRatingLevel = (ratingCount: number): string => {
  switch (true) {
    case (RatingLevelCountValue.Zero <= ratingCount && ratingCount < RatingLevelCountValue.Three): return RatingLevel.Bad;
    case (RatingLevelCountValue.Three <= ratingCount && ratingCount < RatingLevelCountValue.Five): return RatingLevel.Normal;
    case (RatingLevelCountValue.Five <= ratingCount && ratingCount < RatingLevelCountValue.Eight): return RatingLevel.Good;
    case (RatingLevelCountValue.Eight <= ratingCount && ratingCount < RatingLevelCountValue.Ten): return RatingLevel.VeryGood;
    case (ratingCount === RatingLevelCountValue.Ten): return RatingLevel.Awesome;
    default: throw new Error('ERROR');
  }
};

const convertRunTime = (runTime: number): string => {
  switch (true) {
    case (runTime < SIXTY_VALUE) : return `${runTime}m`;
    case (runTime % SIXTY_VALUE === ZERO_VALUE) : return `${runTime / SIXTY_VALUE}h`;
    case (runTime > SIXTY_VALUE) : {
      const hours = Math.floor(runTime / SIXTY_VALUE);
      const minutes = runTime - (hours * SIXTY_VALUE);
      return `${hours}h ${minutes}m`;
    }
    default : throw new Error ('Невалидное значение');
  }
};

export {
  getRatingLevel,
  convertRunTime,
};
