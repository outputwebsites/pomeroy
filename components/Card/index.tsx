import { FC } from "react";

interface ICardProps {
  children?: JSX.Element[] | JSX.Element | string;
  className?: string;
};

const Card: FC<ICardProps> = ({
  children,
  className
}): JSX.Element => {
  return (
    <div className={"shadow rounded p-4 flex flex-col gap-2 justify-top text-center " + className}>
      {children}
    </div>
  );
};

export default Card;