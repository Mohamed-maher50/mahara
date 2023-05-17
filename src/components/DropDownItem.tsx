import React from "react";
import { useDropDown } from "./DropDown";

interface Props {
  className?: string;
  handler?: (value?: any) => void;
  value: string | number | React.ReactNode;
  children?: React.ReactNode | string;
}

const DropDownItem: React.FC<Props> = ({
  className,
  handler,
  value,
  children,
}) => {
  const { status, setStatus } = useDropDown();
  const clickHandler = () => {
    handler && handler(value);
    setStatus(!status);
  };
  return (
    <li className={className} onClick={clickHandler}>
      {value || children}
    </li>
  );
};

export default DropDownItem;
