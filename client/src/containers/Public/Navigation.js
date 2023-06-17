import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import { apiGetCategories } from "../../services/category";
import formatVietnameseToString from "../../utils/common/formatVNeseToString";
import { constants } from "../../utils/constants";

// const nav = [
//   { name: "Trang chủ", path: "home" },
//   { name: "Cho thuê phòng trọ", path: "cho-thue-phong-tro" },
//   { name: "Nhà cho thuê", path: "nha-cho-thue" },
//   { name: "Cho thuê căn hộ", path: "cho-thue-can-ho" },
//   { name: "Cho thuê mặt bằng", path: "cho-thue-mat-bang" },
// ];

const notActive = "hover:bg-secondary2 h-full flex items-center px-4";
const active =
  "hover:bg-secondary2 h-full flex items-center py-2 px-4 bg-secondary2";

const Navigation = () => {
  const [categories, setCategories] = useState([]);

  const fetchCategories = async () => {
    const response = await apiGetCategories();
    if (response?.err === 0) {
      setCategories([...response.data]);
    }
  };
  useEffect(() => {
    fetchCategories();
  }, []);
  return (
    <div className="w-full h-[40px] flex justify-center items-center  bg-secondary1 text-white">
      <div className="w-3/5 h-full flex items-center text-sm font-medium">
        <NavLink
          className={({ isActive }) => (isActive ? active : notActive)}
          to={"/"}
        >
          {constants.HOME}
        </NavLink>
        {categories &&
          categories.length > 0 &&
          categories.map((item) => (
            <div
              key={item.code}
              className="h-[40px] flex items-center justify-center"
            >
              <NavLink
                className={({ isActive }) => (isActive ? active : notActive)}
                to={`${formatVietnameseToString(item.value)}`}
              >
                {item.value}
              </NavLink>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Navigation;
