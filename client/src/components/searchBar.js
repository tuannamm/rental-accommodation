import React, { memo } from "react";

const SearchBar = ({ text, iconFirst, iconSecond, fontWeight }) => {
  return (
    <div className="bg-white px-4 w-full py-2 rounded-md text-black text-[11.5px] text-gray-400 flex justify-between items-center">
      <div className="flex items-center gap-1 w-full">
        {iconFirst}
        <span
          className={`${
            fontWeight && "font-medium text-black"
          } w-full overflow-hidden text-ellipsis whitespace-nowrap`}
        >
          {text}
        </span>
      </div>

      {iconSecond}
    </div>
  );
};

export default memo(SearchBar);
