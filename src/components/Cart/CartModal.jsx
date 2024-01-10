import styles from "../../styles/css/components/Cart/CartModal.module.css";
import { IoMdClose } from "react-icons/io";
import Image from "../../common/Img/Image";
import Button from "../../common/Button/Button";
import usePathMove from "../../hooks/usePathMove";
import { addPriceComma } from "../../utils/addPriceComma";
import { useCartDataHook } from "../../hooks/useCartDataHook";
import { useDispatch, useSelector } from "react-redux";
import { removeCart } from "../../store/Slice/CartSlice";

const CarModal = () => {
  const move = usePathMove();
  const dispatch = useDispatch();

  const { data: cartItems, DeleteData, handleCount } = useCartDataHook();
  const auth = useSelector((state) => {
    return state.auth.token;
  });

  return (
    <>
      {cartItems && auth && (
        <>
          <div className={styles["container"]}>
            <div className={styles["cart-container"]}>
              <p>장바구니</p>
              {cartItems.length == 0 ? (
                <div className={styles["empty-modal"]}>
                  장바구니가 비었습니다.
                </div>
              ) : (
                cartItems &&
                cartItems.length > 0 &&
                cartItems.map((d) => {
                  const formattedPrice = addPriceComma(
                    d.productPrice * d.quantity
                  );
                  return (
                    <div
                      key={d.id}
                      className={styles["cart-container__insideBg"]}
                    >
                      <IoMdClose
                        onClick={() => {
                          DeleteData(d.id);
                          dispatch(removeCart(d));
                        }}
                        className={styles["cart-container__insideBg--icon"]}
                      ></IoMdClose>
                      <div
                        className={styles["cart-container__insideBg--content"]}
                      >
                        <div
                          className={
                            styles["cart-container__insideBg--content__img"]
                          }
                        >
                          <Image
                            src={d.productImage}
                            className="img-100"
                          ></Image>
                        </div>
                        <div
                          className={
                            styles["cart-container__insideBg--content__text"]
                          }
                        >
                          <p>{d.brandName}</p>
                          <h3>{d.productName}</h3>
                        </div>
                      </div>
                      <div
                        className={
                          styles["cart-container__insideBg--bottomContent"]
                        }
                      >
                        <div
                          className={
                            styles[
                              "cart-container__insideBg--bottomContent__left"
                            ]
                          }
                        >
                          <Button
                            className="cart-btn-count"
                            onClick={() => {
                              if (d.quantity > 1) {
                                handleCount(d.id, "decrease");
                              }
                            }}
                            title="-"
                          ></Button>
                          <span>{d.quantity}</span>
                          <Button
                            className="cart-btn-count"
                            onClick={() => {
                              handleCount(d.id, "increase");
                            }}
                            title="+"
                          ></Button>
                        </div>
                        <div></div>
                        <span style={{ fontSize: "20px" }}>
                          {formattedPrice}원
                        </span>
                      </div>
                    </div>
                  );
                })
              )}

              {cartItems && cartItems.length > 0 ? (
                <Button
                  className="cart-pay-btn"
                  title={"결제하기"}
                  onClick={() => move("/payments/all")}
                ></Button>
              ) : (
                ""
              )}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default CarModal;
