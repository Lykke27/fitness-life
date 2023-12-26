import type { FC, PropsWithChildren } from 'react';

interface IMainProps {
  className?: string;
}

const Main: FC<PropsWithChildren<IMainProps>> = ({ children, className }) => {
  return <main className={className}>{children}</main>;
};

export default Main;
