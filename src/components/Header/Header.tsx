import './Header.scss';

import { type FC, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';

import Text from '../Text/Text';
import { menuLinks, socialLinks } from './headerContent';

const Header: FC = () => {
  const menuItems = menuLinks.map((item) => (
    <li className="menu__item" key={item.link}>
      <NavLink className="menu__link" to={item.link}>
        <Text size="s" as="span" fontStyle="italic" fontWeight={500}>
          {item.title}
        </Text>
      </NavLink>
    </li>
  ));

  const socialItems = socialLinks.map((item) => (
    <li className="social__item" key={item.title}>
      <Link className="menu__link" to={item.link}>
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
