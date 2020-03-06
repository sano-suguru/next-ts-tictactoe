import { FC, useState } from "react";

interface Props {
  value: string | null;
  onClick: () => void;
}

const Square: FC<Props> = ({ value, onClick }) => {
  return (
    <button className="square" onClick={onClick}>
      {value}
    </button>
  );
};
export default Square;
