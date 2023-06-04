import db from "../models";

// get all category
export const getCategories = () =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.Category.findAll({
        raw: true,
        attributes: ["code", "value"],
      });
      resolve({
        err: response ? 0 : 1,
        msg: response ? "Success" : "Failed",
        data: response,
      });
    } catch (error) {
      reject(error);
    }
  });
