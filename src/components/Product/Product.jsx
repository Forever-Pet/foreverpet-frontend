import styles from "../../styles/css/components/Product/Product.module.css";
import ProductItem from "../../components/Card/ProductItem";
import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md";
import { useClickHook } from "../../hooks/ClickHook/useClickHook";
import ProductFilter from "./ProductFilter";
import { useState } from "react";
import Header from "../Header/Header";
import Title from "../../common/Title/Title";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Product = (props) => {
  const [click, checkClick] = useClickHook(false);
  const [selectedValue, setSelectedValue] = useState("추천순");
  const [list, setList] = useState([]);
  const location = useLocation();

  useEffect(() => {
    if (props.data) {
      const id = props.data.map((d) => d.id);
      setList(id);
    }
  }, [props.data]);

  useEffect(() => {
    switch (selectedValue) {
      case "추천순":
        props.getData("products", props.category || list);
        break;
      case "베스트":
        props.getData("products/best", props.category || list);
        break;
      case "최신순":
        props.getData("products/new", props.category || list);
    }
  }, [selectedValue, location]);

  return (
    <>
      <Header></Header>
      {props.data && (
        <div className={styles.base}>
          <div>
            <Title className="product-title" title={props.title}></Title>
            <div className={styles.filterBox}>
              <span>{props.data.length}개</span>
              <div className={styles.filterBox__filter} onClick={checkClick}>
                <span>{selectedValue}</span>
                {click ? <MdArrowDropUp /> : <MdArrowDropDown />}
              </div>
            </div>
            <hr></hr>
          </div>

          {click && (
            <div className={styles.selectDrop__cont}>
              <ProductFilter
                selectedValue={selectedValue}
                setSelectedValue={setSelectedValue}
                checkClick={checkClick}
              ></ProductFilter>
            </div>
          )}
          <ProductItem
            data={props.data}
            className="container-4columns"
          ></ProductItem>
        </div>
      )}
    </>
  );
};

export default Product;
