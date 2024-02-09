export interface MenuLinkTypes {
  title: string;
  link: string;
}

export const menuLinks: MenuLinkTypes[] = [
  { title: 'Главная', link: 'hero' },
  { title: 'Обо мне', link: 'about' },
  // { title: 'Отзывы', link: '/reviews' },
  { title: 'Тренировки', link: 'trainings' },
  // { title: 'Зал', link: '/club' },
  // { title: 'Связаться', link: '/contacts' },
];
