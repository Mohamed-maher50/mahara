import React, { useRef, useState } from "react";

import DropDown from "./DropDown";
import DropDownItem from "./DropDownItem";

interface Props {
  filterData: (topic: number) => void;
}
const FilterCourses: React.FC<Props> = ({ filterData }) => {
  const [filterValue, setFilterValue] = useState("all");

  return (
    <div className="flex justify-between py-5">
      <div>Courses</div>
      <div className="relative">
        <div id="DropDownFilter">{filterValue}</div>
        <DropDown label="DropDownFilter">
          <DropDownItem
            value="past"
            handler={(value) => {
              setFilterValue(value);
              filterData(1);
            }}
          />
          <DropDownItem
            value="in progress"
            handler={(value) => {
              setFilterValue(value);
              filterData(2);
            }}
          />
          <DropDownItem
            value="future"
            handler={(value) => {
              setFilterValue(value);
              filterData(3);
            }}
          />
          <DropDownItem
            value="removed from view"
            handler={(value) => {
              setFilterValue(value);
              filterData(4);
            }}
          />
        </DropDown>

        {/* <FilterButton onclick={handler} options={["in progress", "past"]} /> */}
      </div>
    </div>
  );
};

export default FilterCourses;
