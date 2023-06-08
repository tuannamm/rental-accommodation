import React from "react";

import { location } from "../utils/constants";
import ProvinceBtn from "./provinceBtn";

const Province = () => {
  return (
    <div className="flex items-center gap-5 justify-center py-5">
      {location.map((item) => (
        <div>
          <ProvinceBtn key={item.id} title={item.name} image={item.image} />
        </div>
      ))}
    </div>
  );
};

export default Province;
