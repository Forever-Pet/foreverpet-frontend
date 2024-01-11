import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export const useGetMemberData = (path = "", method = "") => {
  const [data, setData] = useState(null);
  const auth = useSelector((state) => {
    return state.auth.token;
  });

  const fetchData = (path) => {
    axios
      .get(`${import.meta.env.VITE_API_BASE_URL}/${path}`, {
        headers: {
          Authorization: `Bearer ${auth}`,
        },
      })
      .then((res) => setData(res.data))
      .catch((error) => console.log("데이터 가져오기 에러"));
  };

  const postData = async (routing = "") => {
    await axios
      .post(
        `${import.meta.env.VITE_API_BASE_URL}/${path || routing}`,
        {},
        {
          headers: {
            Authorization: auth,
          },
        }
      )
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => console.log("post에러"));
  };

  const DeleteWish = async (id) => {
    await axios.delete(`${import.meta.env.VITE_API_BASE_URL}/user/wish/${id}`, {
      headers: {
        Authorization: auth,
      },
    });
    postData("user/wish").catch((error) => console.log("post에러"));
  };

  useEffect(() => {
    if (method == "post") {
      postData();
    } else if (method == "fetch") {
      fetchData();
    }
  }, []);

  return { data, postData, fetchData, DeleteWish };
};
