import React, { useCallback } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import logo from "../../assets/logowithoutbg.png";
import { Button } from "../../components";
import icons from "../../utils/icons";
import { path } from "../../utils/constant";
import * as actions from "../../store/actions";

const { AiOutlinePlusCircle } = icons;

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state) => state.auth);

  const goAuth = useCallback((flag) => {
    navigate(path.LOGIN, { state: { flag } });
  }, []);

  return (
    <div className="w-1100">
      <div className="w-1100 flex items-center justify-between">
        <Link to="/">
          <img
            src={logo}
            alt="logo"
            className="w-[240px] h-[60px] object-contain"
          />
        </Link>

        <div className="flex items-center gap-1">
          {isLoggedIn ? (
            <>
              <small>Xin chào!</small>
              <Button
                text={"Đăng xuất"}
                textColor="text-white"
                bgColor="bg-red-500"
                onClick={() => dispatch(actions.logout())}
              />
              <Button
                text={"Đăng tin mới"}
                textColor="text-white"
                bgColor="bg-secondary2"
                icon={AiOutlinePlusCircle}
              />
            </>
          ) : (
            <>
              <small>phongtro123 xin chào!</small>
              <Button
                text={"Đăng nhập"}
                textColor="text-white"
                bgColor="bg-[#3961fb]"
                onClick={() => goAuth("login")}
              />
              <Button
                text={"Đăng ký"}
                textColor="text-white"
                bgColor="bg-[#3961fb]"
                onClick={() => goAuth("register")}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
