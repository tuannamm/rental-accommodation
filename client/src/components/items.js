import React, { memo, useState } from "react";

import icons from "../utils/icons";

const { GrStar, RiHeartFill, RiHeartLine, BsBookmarkStarFill } = icons;

const Items = ({
  id,
  address,
  attributes,
  images,
  description,
  star,
  title,
  user,
}) => {
  const [isHoverHeart, setIsHoverHeart] = useState(false);

  return (
    <div className="w-full flex border-t border-orange-600 p-4">
      <div className="w-2/5 flex flex-wrap gap-[2px] items-center relative cursor-pointer">
        <div className="flex gap-[2px]">
          <img
            src={images[0]}
            alt="demo"
            className="w-[140px] h-[130px] object-cover"
          />
          <img
            src={images[1]}
            alt="demo"
            className="w-[140px] h-[130px] object-cover"
          />
        </div>
        <div className="flex gap-[2px] ">
          <img
            src={images[2]}
            alt="demo"
            className="w-[140px] h-[130px] object-cover"
          />
          <img
            src={images[3]}
            alt="demo"
            className="w-[140px] h-[130px] object-cover"
          />
        </div>

        <span className="bg-overlay-70 text-white px-2 rounded-md absolute left-2 bottom-3">
          {images.length} ảnh
        </span>
        <span
          className="text-white absolute right-6 bottom-2"
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
      <div className="w-3/5 ml-5">
        <div className="flex justify-between gap-4 w-full">
          <div className=" text-red-600 font-medium">
            <GrStar className="start-item" size={18} color="yellow" />
            <GrStar className="start-item" size={18} color="yellow" />
            <GrStar className="start-item" size={18} color="yellow" />
            <GrStar className="start-item" size={18} color="yellow" />
            <GrStar className="start-item" size={18} color="yellow" />
            {title}
          </div>
          <div className="w-[10%] flex justify-end">
            <BsBookmarkStarFill size={24} color="orange" />
          </div>
        </div>
        <div className="my-2 flex items-center justify-around">
          <span className="text-green-600">{attributes?.price}</span>
          <span>{attributes?.acreage}</span>
          <span>{address}</span>
        </div>
        <p className="text-gray-500 w-full h-[50px] text-ellipsis overflow-hidden ">
          {description}
        </p>
        <div className="flex items-center my-5 justify-between">
          <div className="flex items-center">
            <img
              src="https://lnsel.com/wp-content/uploads/2018/12/anon-avatar.png"
              alt="avatar"
              className="w-[30px] h-[30px] rounded-full object-cover"
            />{" "}
            <p>{user?.name}</p>
          </div>
          <div className="flex items-center gap-1">
            <button
              type="button"
              className="bg-blue-700 text-white p-1 rounded-md"
            >
              {`Gọi ${user?.phone}`}
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
