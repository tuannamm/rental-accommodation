import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { InputForm, Button } from "../../components";
import Swal from "sweetalert2";

import * as actions from "../../store/actions";

const Login = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoggedIn, msg, update } = useSelector((state) => state.auth);
  const [invalidField, setInvalidField] = useState([]);
  const [isRegister, setIsRegister] = useState(
    location.state?.flag === "register" ? true : false
  );

  const [payload, setPayload] = useState({
    name: "",
    phone: "",
    password: "",
  });

  useEffect(() => {
    setIsRegister(location.state?.flag === "register" ? true : false);
    setPayload({
      name: "",
      phone: "",
      password: "",
    });
  }, [location.state?.flag]);

  useEffect(() => {
    isLoggedIn && navigate("/");
  }, [isLoggedIn]);

  useEffect(() => {
    msg && Swal.fire("Oops !", msg, "error");
  }, [msg, update]);

  const validate = (payload) => {
    let invalids = 0;
    let fields = Object.entries(payload);
    fields.forEach((item) => {
      if (item[1] === "") {
        setInvalidField((prev) => [
          ...prev,
          {
            name: item[0],
            message: "Bạn không được bỏ trống trường này.",
          },
        ]);
        invalids++;
      }
    });
    fields.forEach((item) => {
      switch (item[0]) {
        case "password":
          if (item[1].length < 6) {
            setInvalidField((prev) => [
              ...prev,
              {
                name: item[0],
                message: "Mật khẩu phải có tối thiểu 6 kí tự.",
              },
            ]);
            invalids++;
          }
          break;
        case "phone":
          if (!+item[1]) {
            setInvalidField((prev) => [
              ...prev,
              {
                name: item[0],
                message: "Số điện thoại không hợp lệ.",
              },
            ]);
            invalids++;
          }
          break;

        default:
          break;
      }
    });
    return invalids;
  };

  const handleSubmit = async () => {
    let finalPayload = isRegister
      ? payload
      : { phone: payload.phone, password: payload.password };
    const invalids = validate(finalPayload);
    if (invalids > 0) return;
    isRegister
      ? dispatch(actions.register(finalPayload))
      : dispatch(actions.login(finalPayload));
    setIsRegister(false);
  };

  return (
    <div className="bg-white w-[600px] p-[30px] pb-[100px] rounded-md shadow-sm mt-5">
      <h3 className="font-semibold text-2xl mb-3 flex items-center justify-center">
        {isRegister ? "Đăng ký tài khoản" : "Đăng nhập"}
      </h3>
      <div className="w-full flex flex-col gap-5">
        {isRegister && (
          <InputForm
            type="name"
            label={"HỌ VÀ TÊN"}
            value={payload.name}
            setValue={setPayload}
            setInvalidField={setInvalidField}
            invalidField={invalidField}
          />
        )}
        <InputForm
          type="phone"
          label={"SỐ ĐIỆN THOẠI"}
          value={payload.phone}
          setValue={setPayload}
          setInvalidField={setInvalidField}
          invalidField={invalidField}
        />
        <InputForm
          type="password"
          label={"MẬT KHẨU"}
          value={payload.password}
          setValue={setPayload}
          setInvalidField={setInvalidField}
          invalidField={invalidField}
        />
        <Button
          text={isRegister ? "Đăng ký" : "Đăng nhập"}
          bgColor="bg-secondary1"
          textColor="text-white"
          fullWidth
          onClick={() => handleSubmit()}
        />
      </div>
      <div className="mt-7  n">
        {isRegister ? (
          <small>
            Bạn đã có tài khoản? &nbsp;
            <span
              className="text-blue-500 hover:underline cursor-pointer"
              onClick={() => {
                setIsRegister(false);
                setPayload({
                  name: "",
                  phone: "",
                  password: "",
                });
              }}
            >
              Đăng nhập ngay
            </span>
          </small>
        ) : (
          <>
            <small
              className="text-[blue] hover:text-[red] cursor-pointer"
              onClick={() => {
                setIsRegister(true);
                setPayload({
                  name: "",
                  phone: "",
                  password: "",
                });
              }}
            >
              Bạn quên mật khẩu? &nbsp;
            </small>
            <small
              className="text-[blue] hover:text-[red] cursor-pointer"
              onClick={() => {
                setIsRegister(true);
                setPayload({
                  name: "",
                  phone: "",
                  password: "",
                });
              }}
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
