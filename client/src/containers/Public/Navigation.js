import React from "react";
import { NavLink } from "react-router-dom";

const nav = [
  { name: "Trang chủ", path: "home" },
  { name: "Cho thuê phòng trọ", path: "cho-thue-phong-tro" },
  { name: "Nhà cho thuê", path: "nha-cho-thue" },
  { name: "Cho thuê căn hộ", path: "cho-thue-can-ho" },
  { name: "Cho thuê mặt bằng", path: "cho-thue-mat-bang" },
];

const notActive = "hover:bg-secondary2 h-full flex items-center px-4";
const active =
  "hover:bg-secondary2 h-full flex items-center py-2 px-4 bg-secondary2";

const Navigation = () => {
  return (
    <div className="w-screen h-[40px] flex justify-center items-center  bg-secondary1 text-white">
      <div className="w-1100 h-full flex items-center text-sm font-medium">
        {nav &&
          nav.length > 0 &&
          nav.map((item, index) => (
            <div
              key={index}
              className="h-[40px] flex items-center justify-center"
            >
              <NavLink
                className={({ isActive }) => (isActive ? active : notActive)}
                to={item.path}
              >
                {item.name}
              </NavLink>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Navigation;
