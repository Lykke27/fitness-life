import { instagramLogo, telegramLogo } from "../images";

export interface SocialLinkTypes {
  title: string;
  link: string;
  logo: string; // Здесь предполагается, что путь к логотипу является строкой
}

export const socialLinks: SocialLinkTypes[] = [
  {
    title: 'Instagram',
    link: 'https://www.instagram.com/karmin_anastasiya_/',
    logo: instagramLogo,
  },
  { title: 'Telegram', link: 'https://t.me/Fitnes_NoviSad', logo: telegramLogo },
];