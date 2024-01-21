import { type FC, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { socialLinks } from '../../assets/constants/socials';
import Text from '../Text/Text';
import './Footer.scss';

const Footer: FC = () => {
  const socialItems = socialLinks.map((item) => (
    <li className="social__item" key={item.title}>
      <Link className="footer__link" to={item.link} target="blank">
        <img src={item.logo} alt="" />
      </Link>
    </li>
  ));

  return (
    <footer className="footer container">
      <div className="footer__logo">
        <Text as="span" color="pink">
          Nasty Fitness Life
        </Text>
      </div>
      <div className="footer__contacts contacts">
        <a type="tel" className="footer__link">
          <Text color="white" size="m">
            +381637024433
          </Text>
        </a>
        <a type="tel" className="footer__link">
          <Text color="white" size="m">
            NastyFitnessLive@gmail.com
          </Text>
        </a>
        <div className="contacts__address">
          <Text color="grey" size="m">
            21000, Serbia, Novi Sad, Мiše Dimitrijevića br 54-56
          </Text>
        </div>
        <div className="contacts__socials socials">
          <ul className="socials__list">{socialItems}</ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
