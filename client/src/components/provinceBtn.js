import React from "react";

const ProvinceBtn = ({ image, key, title }) => {
  return (
    <div className="w-full shadow-md rounded-bl-md rounded-br-md" key={key}>
      <img
        src={image}
        alt={title}
        className="w-[190px] h-[110px] object-cover rounded-tl-md rounded-tr-md"
      />
      <p className="font-medium p-2 text-blue-700 text-center">{title}</p>
    </div>
  );
};

export default ProvinceBtn;
