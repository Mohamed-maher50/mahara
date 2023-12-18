import React from "react";
import { IoMdSearch } from "react-icons/io";
import { useForm } from "react-hook-form";
interface Props {
  setSearchStatus: React.Dispatch<React.SetStateAction<boolean>>;
}
const Search: React.FC<Props> = ({ setSearchStatus }) => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<{
    searchValue: string;
  }>();

  const handleSearch = (e: { searchValue: string }) => {
    setSearchStatus(false);
  };
  return (
    <form
      onSubmit={handleSubmit(handleSearch)}
      className="bg-white items-center flex w-1/2"
    >
      <input
        type="search"
        placeholder="Search"
        className="grow outline-none px-4 h-14 rounded-lg shadow-sm shadow-white"
        {...register("searchValue", { min: 2 })}
      />
      <button type="submit">
        <IoMdSearch className="text-gray-400 w-9 text-4xl" />
      </button>
    </form>
  );
};

export default Search;
