import React from "react";

import Button from "../../components/button";
import Item from "../../components/items";

const List = () => {
  return (
    <div className="w-full rounded-md p-2 bg-white shadow-md">
      <div className="flex items-center justify-between mt-2">
        <h4 className="text-xl font-semibold">Danh sách tin đăng</h4>
        <span>Cập nhật: 14:14 11/6/2023</span>
      </div>
      <div className="flex items-center gap-3 my-2">
        <span>Sắp xếp: </span>
        <Button text="Mới nhất" bgColor="bg-gray-200"></Button>
        <Button text="Mặc định" bgColor="bg-gray-200"></Button>
      </div>
      <div className="items">
        <Item />
      </div>
    </div>
  );
};

export default List;
