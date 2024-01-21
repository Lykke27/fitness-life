import { type FC, useEffect } from 'react';
import { Link } from 'react-scroll';
import Text from '../Text/Text';
import { menuLinks } from './headerContent';
import { socialLinks } from '../../assets/contants/socials';
import './Header.scss';

const Header: FC = () => {
  const menuItems = menuLinks.map((item) => (
    <li className="menu__item" key={item.link}>
      <Link className="menu__link" to={item.link} spy={true} smooth={true} duration={700}>
        <Text size="s" as="span" fontStyle="italic" fontWeight={500}>
          {item.title}
        </Text>
      </Link>
    </li>
  ));

  const socialItems = socialLinks.map((item) => (
    <li className="social__item" key={item.title}>
      <Link className="menu__link" to={item.link} target="blank">
        <img src={item.logo} alt="" />
      </Link>
    </li>
  ));

  return (
    <header className="header">
      <div className="header__container">
        <div className="header__inner">
          <div className="header__logo">
            <Text as="span" color="pink">
              Nasty Fitness Life
            </Text>
          </div>
          <nav className="header__menu menu">
            <ul className="menu__list">{menuItems}</ul>
          </nav>
          <div className="header__socials socials">
            <ul className="socials__list">{socialItems}</ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
