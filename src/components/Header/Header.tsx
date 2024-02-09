import { type FC } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Link } from 'react-router-dom';
import Text from '../Text/Text';
import { MenuLinkTypes, menuLinks } from './headerContent';
import { SocialLinkTypes, socialLinks } from '../../assets/constants/socials';
import './Header.scss';

const Header: FC = (): JSX.Element => {
  const menuItems = menuLinks.map((item: MenuLinkTypes) => (
    <li className="menu__item" key={item.link}>
      <ScrollLink
        className="menu__link"
        to={item.link}
        spy={true}
        smooth={true}
        duration={700}
      >
        <Text size="s" as="span" fontStyle="italic" fontWeight={500}>
          {item.title}
        </Text>
      </ScrollLink>
    </li>
  ));

  const socialItems = socialLinks.map((item: SocialLinkTypes) => (
    <li className="social__item" key={item.title}>
      <Link className="menu__link" to={item.link} target="_blank">
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
              Nastya Fitness Life
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
