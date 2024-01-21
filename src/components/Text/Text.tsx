import React, { CSSProperties, ReactNode } from 'react';

type SizeType = 's' | 'm' | 'ml' | 'l' | 'xl' | 'xxl';

interface TextProps {
  as?: keyof JSX.IntrinsicElements;
  size?: SizeType;
  align?: 'left' | 'center' | 'right';
  maxWidth?: number | string;
  children: ReactNode;
  fontStyle?: 'italic' | 'normal';
  fontWeight?: 400 | 500 | 700;
  color?: string;
  transform?: 'uppercase';
}

const sizeMapping: Record<SizeType, string> = {
  s: '12px',
  m: '14px',
  ml: '20px',
  l: '36px',
  xl: '40px',
  xxl: '48px',
};

const colors: Record<string, string> = {
  pink: 'var(--primary-pink)',
  white: 'var(--white)',
  grey: 'var(--grey)',
};

const Text: React.FC<TextProps> = ({
  as = 'p',
  size,
  align,
  maxWidth,
  children,
  fontWeight,
  fontStyle,
  color = '#fff',
  transform,
}) => {
  const Element = as;

  const parsedColor = color && colors[color] ? colors[color] : color;

  const styles: CSSProperties = {
    fontSize: size ? sizeMapping[size] : '1rem',
    textAlign: align || 'left',
    maxWidth: typeof maxWidth === 'number' ? `${maxWidth}rem` : maxWidth,
    fontStyle: fontStyle === 'italic' ? 'italic' : 'normal',
    fontWeight: fontWeight ? fontWeight : 400,
    color: parsedColor,
    textTransform: transform,
  };

  return <Element style={styles}>{children}</Element>;
};

export default Text;
