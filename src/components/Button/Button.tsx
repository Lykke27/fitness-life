import './Button.scss';

import { type FC, ReactNode } from 'react';
interface ButtonTypes {
  children: ReactNode;
}

const Button: FC<ButtonTypes> = ({ children }) => {
  return <button className="button">{children}</button>;
};

export default Button;
