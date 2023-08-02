import axios from "axios";
import { useState } from "react";

const useLocalAuthSignUp = () => {
  const [responsive, setResponsive] = useState([]);

  const authSingUp = async (url, bodyData) => {
    const API_URL = `http://ec2-15-164-206-172.ap-northeast-2.compute.amazonaws.com/${url}`;
    const res = await axios.post(API_URL, { data: bodyData });
    setResponsive(res);
  };
  return [responsive, authSingUp];
};

export default useLocalAuthSignUp;
