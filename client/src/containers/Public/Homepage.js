import React from "react";

import { constants } from "../../utils/constants";
import Province from "../../components/province";

const Homepage = () => {
  return (
    <div className="w-full flex flex-col gap-3 mt-3">
      <div>
        <h1 className="text-[25px] font-bold">{constants.HOME_TITLE}</h1>
        <p className="text-sm text-gray">{constants.HOME_DESCRIPTION}</p>
      </div>
      <Province />
    </div>
  );
};

export default Homepage;
