import db from "../models";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { v4 as uuidv4 } from "uuid";

require("dotenv").config();

const hashPassword = (password) =>
  bcrypt.hashSync(password, bcrypt.genSaltSync(12));

export const registerService = ({ phone, password, name }) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.User.findOrCreate({
        where: { phone },
        defaults: {
          id: uuidv4(),
          name,
          phone,
          password: hashPassword(password),
        },
      });
      const accessToken =
        response[1] &&
        jwt.sign(
          {
            id: response[0].id,
            phone: response[0].phone,
          },
          process.env.SECRET_KEY,
          {
            expiresIn: "1d",
          }
        );
      resolve({
        err: accessToken ? 0 : 2,
        msg: accessToken ? "Register successfully" : "Phone number existed",
        accessToken: accessToken ? `Bearer ${accessToken}` : null,
      });
    } catch (error) {
      reject(error);
    }
  });

export const loginService = ({ phone, password }) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.User.findOne({
        where: { phone },
        raw: true,
      });
      const isCheckedPassword =
        response && bcrypt.compareSync(password, response.password);
      const accessToken =
        isCheckedPassword &&
        jwt.sign(
          {
            id: response.id,
            phone: response.phone,
          },
          process.env.SECRET_KEY,
          {
            expiresIn: "1d",
          }
        );
      resolve({
        err: accessToken ? 0 : 2,
        msg: accessToken
          ? "Login successfully"
          : response
          ? "Wrong password"
          : "Phone number not existed",
        accessToken: accessToken ? `Bearer ${accessToken}` : null,
      });
    } catch (error) {
      reject(error);
    }
  });
