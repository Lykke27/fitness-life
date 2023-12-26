import { useEffect, type FC } from 'react';
import { Link } from 'react-scroll';
import './Header.scss';

import { menuLinks, socialLinks } from './headerContent';

const Header: FC = () => {
  const menuItems = menuLinks.map((item) => (
    <li className="menu__item" key={item.section}>
      <Link
        className="menu__link"
        to={item.section}
        spy={true}
        smooth={true}
        duration={700}
      >
        {item.title}
      </Link>
    </li>
  ));

  const socialItems = socialLinks.map((item) => (
    <li className="social__item" key={item.title}>
      <Link className="menu__link" to={item.link}>
        <img src={item.logo} alt="" />
      </Link>
    </li>
  ));

  console.log('socialLinks', socialLinks);

  return (
    <header className="header">
      <div className="header__container">
        <div className="header__inner">
          <span className="header__logo">NASTYA FITNESS LIFE</span>
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
