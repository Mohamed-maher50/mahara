import React from "react";
export interface CommentsProps {
  UserImg: string;
  name: string;
  date: string;
  body: string;
  dir?: "ltr" | "rtl";
}
const Comment: React.FC<CommentsProps> = ({
  dir,
  UserImg,
  name,
  date,
  body,
}) => {
  return (
    <div
      className="flex border-b-2 last:border-none pb-2 gap-3 h-fit"
      dir={dir}
    >
      <img src={UserImg} className="w-10 h-10" alt="" />
      <div className="text-gray-500 text-sm">
        <h1 className="text-black font-semibold">{name}</h1>
        <span>{date}</span>
        <span>{body}</span>
      </div>
    </div>
  );
};

export default Comment;
