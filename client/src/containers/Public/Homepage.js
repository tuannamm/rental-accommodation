import React from "react";

import Search from "./Search";
import { constants } from "../../utils/constants";

const Homepage = () => {
  return (
    <div className="w-full flex flex-col gap-3 mt-3">
      <Search />
      <div>
        <h1 className="text-[25px] font-bold">{constants.HOME_TITLE}</h1>
        <p className="text-sm text-gray">{constants.HOME_DESCRIPTION}</p>
      </div>
    </div>
  );
};

export default Homepage;
