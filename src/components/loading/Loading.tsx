import React, { FC } from "react";
import { Loading as LoadingContext } from "../../context/Loading";
const Loading: FC = () => {
  const { loading } = LoadingContext();
  if (!loading) return <></>;
  return (
    <div
      className={`fixed top-0 left-0 bottom-0 right-0 bg-white z-50 flex items-center justify-center`}
    >
      <img src="/images/loading.svg" alt="loading..." />
    </div>
  );
};

export default Loading;
