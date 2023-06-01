import express from "express";
import * as authServices from "../services";

export const register = async (req, res) => {
  const { name, phone, password } = req.body;
  try {
    if (!name || !phone || !password) {
      return res.status(400).json({
        err: 1,
        msg: "Please fill all fields",
      });
    }
    const response = await authServices.registerService(req.body);
    return res.status(200).json(response);
  } catch (error) {
    res.status(500).json({
      err: -1,
      msg: "Failed to register " + error,
    });
  }
};

export const login = async (req, res) => {
  const { phone, password } = req.body;
  try {
    if (!phone || !password) {
      return res.status(400).json({
        err: 1,
        msg: "Please fill all fields",
      });
    }
    const response = await authServices.loginService(req.body);
    return res.status(200).json(response);
  } catch (error) {
    res.status(500).json({
      err: -1,
      msg: "Failed to login " + error,
    });
  }
};
