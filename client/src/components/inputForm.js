import React, { memo } from "react";

const InputForm = ({
  label,
  value,
  setValue,
  type,
  setInvalidField,
  invalidField,
}) => {
  return (
    <div>
      <label htmlFor="phone" className="text-xs">
        {label}
      </label>
      <input
        type="text"
        id="phone"
        className="outline-none bg-[#e8f0fe] p-2 rounded-md w-full"
        value={value}
        onChange={(e) =>
          setValue((prev) => ({ ...prev, [type]: e.target.value }))
        }
        onFocus={() => setInvalidField([])}
      />
      {invalidField?.length > 0 &&
        invalidField.some((item) => item.name === type) && (
          <small className="text-red-500 italic">
            {invalidField.find((item) => item.name === type)?.message}
          </small>
        )}
    </div>
  );
};

export default memo(InputForm);
