import React from "react";

import { SearchBar } from "../../components";
import icons from "../../utils/icons";
import { constants } from "../../utils/constants";

const {
  BsChevronRight,
  BiMap,
  MdApartment,
  RiDeleteBack2Line,
  MdAttachMoney,
  GiPackedPlanks,
  IoSearchOutline,
} = icons;

const Search = () => {
  return (
    <div className="p-[10px] w-3/5 bg-[#febb02] rounded-lg flex item-center justify-around gap-2 rounded-lg flex-col lg:flex-row flex my-3">
      <SearchBar
        iconFirst={<MdApartment color="rgb(156,163,175)" />}
        text={"Phòng trọ, nhà trọ"}
        iconSecond={<RiDeleteBack2Line color="rgb(156,163,175)" />}
        fontWeight
      />
      <SearchBar
        iconFirst={<BiMap color="rgb(156,163,175)" />}
        text={"Toàn quốc"}
        iconSecond={<BsChevronRight color="rgb(156,163,175)" />}
      />
      <SearchBar
        iconFirst={<MdAttachMoney color="rgb(156,163,175)" />}
        text={"Chọn giá"}
        iconSecond={<BsChevronRight color="rgb(156,163,175)" />}
      />
      <SearchBar
        iconFirst={<GiPackedPlanks color="rgb(156,163,175)" />}
        text={"Chọn diện tích"}
        iconSecond={<BsChevronRight color="rgb(156,163,175)" />}
      />
      <button
        type="button"
        className="flex gap-2 items-center content-center justify-center font-medium text-white outline-none py-2 px-4 w-full rounded-md bg-[#3961fb] text-[11.5px]"
      >
        {<IoSearchOutline />}
        {constants.FIND}
      </button>
    </div>
  );
};

export default Search;
