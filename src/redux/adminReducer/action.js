import axios from "axios";

export const addData = (obj) => {
  axios.post(
    `https://lifestyle-mock-server-api.onrender.com/PKR{obj.gender}`,
    obj
  );
};
