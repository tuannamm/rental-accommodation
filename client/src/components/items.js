import React, { memo, useState } from "react";

import icons from "../utils/icons";

const images = [
  "https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2020/11/18/photo-2020-06-20-10-52-15_1605671242.jpg",
  "https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2023/05/20/14fa7f46-1cd6-4ee8-bbd0-b01dd1b9f2c3_1684568179.jpg",
  "https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2023/05/20/e68d7e53-8bfe-4a00-a5d4-233cf71df298_1684568179.jpg",
  "https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2023/05/20/cbe0af38-d8d5-4c9c-867d-0acd22bf0149_1684568183.jpg",
];

const { GrStar, RiHeartFill, RiHeartLine, BsBookmarkStarFill } = icons;

const Items = () => {
  const [isHoverHeart, setIsHoverHeart] = useState(false);

  return (
    <div className="w-full flex border-t border-orange-600 p-4">
      <div className="w-2/5 flex flex-wrap gap-[2px] items-center relative cursor-pointer">
        <div className="flex gap-[1px]">
          <img
            src={images[0]}
            alt="demo"
            className="w-[110px] h-[110px] object-cover"
          />
          <img
            src={images[1]}
            alt="demo"
            className="w-[110px] h-[110px] object-cover"
          />
        </div>
        <div className="flex gap-[1px]">
          <img
            src={images[2]}
            alt="demo"
            className="w-[110px] h-[110px] object-cover"
          />
          <img
            src={images[3]}
            alt="demo"
            className="w-[110px] h-[110px] object-cover"
          />
          <span className="bg-overlay-70 text-white px-2 rounded-md absolute left-2 bottom-1">
            4 ảnh
          </span>
          <span
            className="text-white absolute right-1 bottom-2"
            onMouseEnter={() => setIsHoverHeart(true)}
            onMouseLeave={() => setIsHoverHeart(false)}
          >
            {isHoverHeart ? (
              <RiHeartFill size={26} color="red" />
            ) : (
              <RiHeartLine size={26} />
            )}
          </span>
        </div>
      </div>
      <div className="w-3/5 ml-5">
        <div className="flex justify-between gap-4 w-full">
          <div className=" text-red-600 font-medium">
            <GrStar className="start-item" size={18} color="yellow" />
            <GrStar className="start-item" size={18} color="yellow" />
            <GrStar className="start-item" size={18} color="yellow" />
            <GrStar className="start-item" size={18} color="yellow" />
            <GrStar className="start-item" size={18} color="yellow" />
            CHO THUÊ CĂN HỘ HOẶC VĂN PHÒNG LÀM VIỆC
          </div>
          <div className="w-[10%] flex justify-end">
            <BsBookmarkStarFill size={24} color="orange" />
          </div>
        </div>
        <div className="my-2 flex items-center justify-around">
          <span>3.7 triệu / tháng</span>
          <span>28m</span>
          <span>Quận Bình Thạnh</span>
        </div>
        <p className="text-gray-500">
          Cho thuê căn hộ hoặc văn phòng làm việc, địa chỉ ở 15/1/1 Nguyễn Hữu
        </p>
        <div className="flex items-center my-5 justify-between">
          <div className="flex items-center">
            <img
              src="https://lnsel.com/wp-content/uploads/2018/12/anon-avatar.png"
              alt="avatar"
              className="w-[30px] h-[30px] rounded-full object-cover"
            />
            <p>Tuệ Thu</p>
          </div>
          <div className="flex items-center gap-1">
            <button
              type="button"
              className="bg-blue-700 text-white p-1 rounded-md"
            >
              Gọi 123456789
            </button>
            <button
              type="button"
              className="text-blue-700 px-1 border rounded-md border-blue-700"
            >
              Nhắn zalo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Items);
