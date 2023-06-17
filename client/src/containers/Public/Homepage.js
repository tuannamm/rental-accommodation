import React from "react";

import { constants } from "../../utils/constants";
import Province from "../../components/province";
import List from "./List";

const Homepage = () => {
  return (
    <div className="w-full flex flex-col gap-3 mt-3">
      <div>
        <h1 className="text-[25px] font-bold">{constants.HOME_TITLE}</h1>
        <p className="text-[15px] text-gray">{constants.HOME_DESCRIPTION}</p>
      </div>
      <Province />
      <div className="w-[100%] flex gap-4">
        <div className="w-[70%]">
          <List />
        </div>
        <div className="w-[30%] border border-green-600">Sidebar</div>
      </div>
    </div>
  );
};

export default Homepage;
