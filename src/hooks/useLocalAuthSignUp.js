import axios from "axios";
import { useState } from "react";

const useLocalAuthSignUp = () => {
  const [responsive, setResponsive] = useState(null);

  const authSignUp = async (url, bodyData) => {
    const API_URL = `http://ec2-15-164-206-172.ap-northeast-2.compute.amazonaws.com/${url}`;
    try {
      const res = await axios.post(API_URL, bodyData);
      if (res.data.accessToken !== null)
        return setResponsive(res.data.accessToken);
    } catch (error) {
      console.log(error);
    }
  };
  return [responsive, authSignUp];
};

export default useLocalAuthSignUp;
