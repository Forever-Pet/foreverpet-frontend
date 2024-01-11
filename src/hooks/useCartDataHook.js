import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export const useCartDataHook = () => {
  const [data, setData] = useState(null);
  const auth = useSelector((state) => {
    return state.auth.token;
  });

  const CartData = async () => {
    if (auth) {
      await axios
        .post(
          `${import.meta.env.VITE_API_BASE_URL}/user/cart`,
          {},
          {
            headers: {
              Authorization: auth,
            },
          }
        )
        .then((res) => setData(res.data));
    }
  };

  const handleCount = async (id, path) => {
    try {
      await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}/user/cart/${id}/${path}-quantity`,
        {},
        {
          headers: {
            Authorization: auth,
          },
        }
      );
      CartData();
    } catch (error) {
      console.error("데이터 가져오기 에러", error);
    }
  };
  const DeleteData = async (id) => {
    await axios.delete(`${import.meta.env.VITE_API_BASE_URL}/user/cart/${id}`, {
      headers: {
        Authorization: auth,
      },
    });
    CartData();
  };

  const postCart = async (id) => {
    await axios
      .post(
        `${import.meta.env.VITE_API_BASE_URL}/user/cart/${id}`,
        {},
        {
          headers: {
            Authorization: auth,
          },
        }
      )
      .then((res) => setData(res.data));
    CartData();
  };

  useEffect(() => {
    CartData();
  }, []);

  return { data, CartData, handleCount, DeleteData, postCart };
};
