import React from "react";
import { FaUserGraduate } from "react-icons/fa";
type TMainCard = {
  id: string;
  imgUrl: string;
  title: string;
  UpdatedDate: string;
  studentsNumber: number;
  price: number;
  discount: number;
  handler: (id: string) => void;
};

const MainCard: React.FC<TMainCard> = ({
  id,
  discount,
  imgUrl,
  price,
  studentsNumber,
  UpdatedDate,
  title,
  handler,
}) => {
  return (
    <div className="card mx-auto" key={id} onClick={() => handler(id)}>
      <img src={"./" + imgUrl} alt={title} />
      <div className="body mb-8">
        <span className="subtitle">{UpdatedDate}</span>
        <h2 className="title">{title}</h2>
      </div>
      <div className="footer">
        <div className="body flex justify-between">
          <div className="flex items-center text-gray-500 text-xs">
            <FaUserGraduate />
            <span className="ml-2">{studentsNumber}</span>
          </div>
          <span className=" text-secondary text-lg uppercase "> Free</span>
        </div>
      </div>
    </div>
  );
};

export default MainCard;
