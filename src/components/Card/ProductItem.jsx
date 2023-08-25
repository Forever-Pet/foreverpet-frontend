import styles from "../../styles/css/components/Card/ProductItem.module.css";
import Image from "../../common/Img/Image";
import {
  BsHeart,
  BsFillHeartFill,
  BsHandbag,
  BsHandbagFill,
} from "react-icons/bs";
import { useHandleWishBag } from "../../hooks/ClickHook/useHandleWishBag";
import ProductContent from "./ProductContent";
import { useDispatch } from "react-redux";
import BagModal from "../../common/Modal/BagModal";
import usePathMove from "../../hooks/usePathMove";

const ProductItem = (props) => {
  const move = usePathMove();
  const [iconCk, isLogin] = useHandleWishBag();

  return (
    <>
      <div className={styles[props.className || ""]}>
        {props.data &&
          props.data.map((d, i) => {
            return (
              <div
                key={i}
                className={styles.productItem}
                onClick={() => move("/product/detail/" + d.id)}
              >
                <div className={styles.productItem__img}>
                  <Image src={d.productImage} />
                  <div
                    onClick={(e) => {
                      e.stopPropagation();
                      isLogin(d.id, true);
                    }}
                    className={`${styles.productItem__img__button} ${styles.productItem__img__button__heart}`}
                  >
                    {iconCk(d.id, "wish") ? (
                      <BsFillHeartFill
                        className={`${styles.productItem__img__button__icon} ${styles.productItem__img__button__heart__fill}`}
                      />
                    ) : (
                      <BsHeart
                        className={styles.productItem__img__button__icon}
                      />
                    )}
                  </div>

                  <div
                    onClick={(e) => {
                      e.stopPropagation();
                      isLogin(d);
                    }}
                    className={`${styles.productItem__img__button} ${styles.productItem__img__button__bag}`}
                  >
                    {iconCk(d.id, "cart") ? (
                      <BsHandbagFill
                        className={styles.productItem__img__button__icon}
                      />
                    ) : (
                      <BsHandbag
                        className={styles.productItem__img__button__icon}
                      />
                    )}
                  </div>
                </div>
                <ProductContent data={props.data[i]}></ProductContent>
              </div>
            );
          })}
      </div>
      <BagModal />
    </>
  );
};

export default ProductItem;
