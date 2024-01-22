import { type FC } from 'react';
import { Text } from '../../components';
import { KarminHero } from '../../assets/images';
import './About.scss';
import { skills } from './content';

const About: FC = () => {
  return (
    <div className="about container" id="about">
      <div className="about__info">
        <Text size="m" fontStyle="italic" color="grey" transform="uppercase">
          Привет, меня зовут
        </Text>
        <Text size="xl" color="white" transform="uppercase">
          АНАСТАСИЯ КАРМИН
        </Text>
        <Text size="m" color="grey">
          Я рада приветствовать вас у себя в клубе, расположенном в г. Нови Сад
          (республика Сербия). Здесь ты найдешь для себя пользу для души и тела, новых
          друзей и знакомых, общение и поддержку в новой для себя стране. Я, тренер с 10-м
          стажем в области тайского бокса, фитнеса и стрейчинга, диетолог-нутрициолог,
          приглашаю тебя в место твоей силы. It’s time!
        </Text>
        <div className="skills">
          <Text size="m" color="white" transform="uppercase">
            Training skills
          </Text>
          <div className="skills__list">
            {skills.map((skill, index) => (
              <Text
                key={`skill_${index}`}
                size="ml"
                color={skill.color}
                transform="uppercase"
                fontStyle="italic"
              >
                {skill.title}
              </Text>
            ))}
          </div>
        </div>
      </div>
      <div className="about__picture">
        <img src={KarminHero} alt="" />
      </div>
    </div>
  );
};

export default About;
