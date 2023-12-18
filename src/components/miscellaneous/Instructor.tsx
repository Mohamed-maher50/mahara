import React from "react";
interface Props {
  dir?: "rtl" | "ltr";
  name: string;
  subTitle: string;
  seo: string;
  imgUrl: string;
}
const Instructor: React.FC<Props> = ({ dir, name, subTitle, seo, imgUrl }) => {
  return (
    <div
      className="border-2 rounded-lg border-gray-300 shadow-lg p-5"
      dir={dir}
    >
      <h1 className="text-xl text-center lg:text-start font-bold  text-black-500 mb-4">
        About the instructor
      </h1>
      <div className="grid gap-x-4 place-items-center lg:place-items-start">
        <img src={imgUrl} className="w-32 h-32" />

        <div className="flex flex-col gap-y-1 text-center lg:text-start">
          <h1 className="text-lg  text-gray-800">{name}</h1>
          <span className="text-sm text-gray-500">{subTitle}</span>
          <p className="text-sm text-gray-800">{seo}</p>
        </div>
      </div>
    </div>
  );
};

export default Instructor;
