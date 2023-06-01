import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { InputForm, Button } from "../../components";

const Login = () => {
  const location = useLocation();
  const [isRegister, setIsRegister] = useState(
    location.state?.flag === "register" ? true : false
  );

  useEffect(() => {
    setIsRegister(location.state?.flag === "register" ? true : false);
  }, [location.state?.flag]);

  return (
    <div className="bg-white w-[600px] p-[30px] pb-[100px] rounded-md shadow-sm">
      <h3 className="font-semibold text-2xl mb-3">
        {isRegister ? "Đăng ký tài khoản" : "Đăng nhập"}
      </h3>
      <div className="w-full flex flex-col gap-5">
        {isRegister && <InputForm label={"HỌ VÀ TÊN"} />}
        <InputForm label={"SỐ ĐIỆN THOẠI"} />
        <InputForm label={"MẬT KHẨU"} />
        <Button
          text={isRegister ? "Đăng ký" : "Đăng nhập"}
          bgColor="bg-secondary1"
          textColor="text-white"
          fullWidth
        />
      </div>
      <div className="mt-7 flex items-center justify-between">
        {isRegister ? (
          <small>
            Bạn đã có tài khoản? &nbsp;
            <span
              className="text-blue-500 hover:underline cursor-pointer"
              onClick={() => setIsRegister(false)}
            >
              Đăng nhập ngay
            </span>
          </small>
        ) : (
          <>
            <small
              className="text-[blue] hover:text-[red] cursor-pointer"
              onClick={() => {}}
            >
              Bạn quên mật khẩu?
            </small>
            <small
              className="text-[blue] hover:text-[red] cursor-pointer"
              onClick={() => setIsRegister(true)}
            >
              Tạo tài khoản mới
            </small>
          </>
        )}
      </div>
    </div>
  );
};

export default Login;
