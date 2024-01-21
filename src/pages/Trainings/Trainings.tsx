import { type FC } from 'react';
import { Text } from '../../components';
import { trainingsList } from './content';
import './Trainings.scss';

const Trainings: FC = () => {
  return (
    <div className="trainings" id="trainings">
      {/* <div className="trainings__title container">
        <Text size="l" color="white" transform="uppercase">
          Trainings
        </Text>
      </div> */}
      <div className="trainings__list">
        {trainingsList.map((training, index) => {
          const markup = { __html: training.description };
          const isOdd = index % 2 !== 0;
          return (
            <div className={`training ${isOdd && 'reverse'}`} key={index}>
              <div className="picture">
                <img src={training.image} alt="" />
              </div>
              <div className="info">
                <Text color="pink" transform="uppercase" size="l">
                  {training.title}
                </Text>
                <Text color="grey" size="s">
                  <div dangerouslySetInnerHTML={markup} />
                </Text>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Trainings;
