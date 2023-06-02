import instance from "../axiosConfig";

// const apiRegister = (payload) =>
//   new Promise(async (resolve, reject) => {
//     try {
//       const response = await instance.post({
//         url: "/api/v1/auth/register",
//         method: "POST",
//         data: payload,
//       });
//       resolve(response);
//     } catch (error) {
//       reject(error);
//     }
//   });

const apiRegister = (payload) => {
  return instance.post("/api/v1/auth/register", payload);
};

const apiLogin = (payload) => {
  return instance.post("/api/v1/auth/login", payload);
};

export { apiRegister, apiLogin };
