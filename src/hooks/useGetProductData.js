import axios from "axios";
import { useState } from "react";

const useGetProductData = (search = false, searchName = "") => {
  const [data, setData] = useState(null);

  const getData = (params, obj) => {
    if (search) {
      /*여기에 통신 코드 짜주세요 밑에 코드는 건들이지 말아주세요 */
      axios
        .get(
          `${
            import.meta.env.VITE_API_BASE_URL
          }/products/search?search=${searchName}`
        )
        .then((result) => result.data)
        .then((result) => setData(result))
        .catch(() => {
          console.log("실패");
        });

      if (params == "products/best") {
        //best는 오름차순
        const newArr = obj.sort((a, b) => a - b);
        filterData(params, newArr);
      } else if (params == "products/new") {
        //new는 내림차순
        const newArr = obj.sort((a, b) => b - a);
        filterData(params, newArr);
      }
    } else {
      axios
        .get(`${import.meta.env.VITE_API_BASE_URL}/` + params)
        .then((result) => result.data)
        .then((result) => {
          const found = result.filter((e) => e.categories === obj);
          setData(found);
        })
        .catch(() => {
          console.log("실패");
        });
    }
  };

  const filterData = (params, list) => {
    axios
      .get(`${import.meta.env.VITE_API_BASE_URL}/${params}`)
      .then((result) => result.data)
      .then((result) => {
        const found = result.filter((e) => list.includes(e.id));
        setData(found);
      });
  };

  return [data, getData];
};

export default useGetProductData;
