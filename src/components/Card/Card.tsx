import { CSSProperties, FC, ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  style?: CSSProperties;
  className?: string;
}

interface CardHeaderProps {
  children: ReactNode;
  style?: CSSProperties;
  className?: string;
}

interface CardSubTitleProps {
  children: ReactNode;
  style?: CSSProperties;
  className?: string;
}

interface CardContentProps {
  children: ReactNode;
  style?: CSSProperties;
  className?: string;
}

interface CardFooterProps {
  children: ReactNode;
}

interface CardImageProps {
  style?: CSSProperties;
  className?: string;
  src?: string;
  alt?: string;
}

interface CardComposition extends FC<CardProps> {
  Header: FC<CardHeaderProps>;
  SubTitle: FC<CardSubTitleProps>;
  Image: FC<CardImageProps>;
  Content: FC<CardContentProps>;
  Footer: FC<CardFooterProps>;
}

const Card: CardComposition = ({ children, style, className }: CardProps) => (
  <div style={style} className={className}>
    {children}
  </div>
);

const CardHeader: FC<CardHeaderProps> = ({ children, style, className }) => (
  <div style={style} className={className}>
    {children}
  </div>
);

const CardImage: FC<CardImageProps> = ({ className, style, src, alt }) => (
  <img className={className} style={style} src={src} alt={alt} />
);

const CardSubtitle: FC<CardSubTitleProps> = ({
  children,
  style,
  className,
}) => (
  <div style={style} className={className}>
    {children}
  </div>
);

const CardContent: FC<CardContentProps> = ({ children, style, className }) => (
  <div style={style} className={className}>
    {children}
  </div>
);

const CardFooter: FC<CardFooterProps> = ({ children }) => <div>{children}</div>;

Card.Header = CardHeader;
Card.SubTitle = CardSubtitle;
Card.Content = CardContent;
Card.Footer = CardFooter;
Card.Image = CardImage;

export default Card;
