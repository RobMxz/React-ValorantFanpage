import { CSSProperties, FC, ReactNode } from "react";

interface CompoundListProps {
  children: ReactNode;
}

interface CompoundListItemProps {
  children: ReactNode;
  style?: CSSProperties;
  className?: string;
}

interface ListComposition extends FC<CompoundListProps> {
  Item: FC<CompoundListItemProps>;
}

const CompoundList: ListComposition = ({ children }) => <ul>{children}</ul>;

const ListItem: FC<CompoundListItemProps> = ({
  children,
  style,
  className,
}) => (
  <li style={style} className={className}>
    {children}
  </li>
);

CompoundList.Item = ListItem;

// <CompoundList.Item>Descendencia</CompoundList.Item>
export default CompoundList;
