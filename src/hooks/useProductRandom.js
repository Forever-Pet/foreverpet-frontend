import axios from "axios";
import { useState } from "react";

const useProductRandom = (url) => {
  const [snack, setSnack] = useState([]);

  const getRandom = async () => {
    try {
      const baseUrl =
        "http://ec2-15-164-206-172.ap-northeast-2.compute.amazonaws.com";
      const res = await axios.get(baseUrl + url);
      res.data.sort((a, b) => a.id - b.id);
      const randomSnackItem = [];
      while (true) {
        if (randomSnackItem.length == 4) {
          break;
        }
        const random = Math.floor(Math.random() * res.data.length);
        if (
          randomSnackItem.filter((item) => item.id === random + 1).length === 0
        ) {
          randomSnackItem.push(res.data[random]);
        }
      }
      // console.log(randomBestItem);
      setSnack(randomSnackItem);
    } catch (error) {
      console.log(error);
    }
  };
  return [snack, getRandom];
};
export default useProductRandom;
