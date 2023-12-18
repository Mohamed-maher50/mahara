import React, { FC } from "react";
export interface CardSchema {
  id: string;
  courseTitle: string;
  price: number;
  discount: number;
  courseCount: number;
  imgUrl: string;
}

interface Props {
  data: CardSchema;
}
const Card: FC<Props> = ({ data }) => {
  return (
    <div className="mx-auto" key={data.id}>
      <img src={"./" + data.imgUrl} />
    </div>
  );
};

export default Card;
