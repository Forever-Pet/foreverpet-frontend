// React Hooks
import { useEffect, useState } from "react";

// Redux
import { useSelector } from "react-redux";

// CSS
import styles from "../../styles/css/components/Payments/PaymentsAmountInfo.module.css";

// Utils
import { addPriceComma } from "../../utils/addPriceComma";

// Compoennts
import Title from "../../common/Title/Title";

const PaymentsAmountInfoAll = (props) => {
  const [productAmount, setProductAmount] = useState({
    productAmount: 0,
    productDeliveryAmount: 0,
    productCouponAmount: 0,
    productTotalAmount: 0,
  });

  const cartData = useSelector((state) => state.cart.cartItem);

  useEffect(() => {
    // 각각 가정한 배송료와 쿠폰 할인 값
    const deliveryAmount = 0;
    const couponDiscountAmount = 0;
    const productAmount = cartData.reduce(
      (total, item) => total + item.count * item.productPrice,
      0
    );
    // 결제 총금액
    const totalAmount = productAmount + deliveryAmount - couponDiscountAmount;
    setProductAmount({
      productAmount: productAmount,
      productDeliveryAmount: deliveryAmount,
      productCouponAmount: couponDiscountAmount,
      productTotalAmount: totalAmount,
    });
    // 결제금액 상향식 통신으로 전송
    props.paymentsAmountBtn(totalAmount);
  }, [cartData]);

  return (
    <div className={styles["payment-amount__info"]}>
      <div className={styles["payment-amount__info--text"]}>
        <Title title="상품금액" />
      </div>
      <div className={styles["payment-amount__card"]}>
        <div className={styles["payment-amount__card--desc"]}>
          <div>총 상품금액</div>
          <div>총 배송료</div>
          <div>쿠폰 할인</div>
        </div>
        <div className={styles["payment-amount__card--amount"]}>
          <div>{addPriceComma(productAmount.productAmount)}원</div>
          <div>{addPriceComma(productAmount.productDeliveryAmount)}원</div>
          <div>{`-${addPriceComma(productAmount.productCouponAmount)}`}원</div>
        </div>
      </div>
      <div className={styles["payment-amount__card--totalAmount"]}>
        <div>최종 결제금액</div>
        <div>{addPriceComma(productAmount.productTotalAmount)}원</div>
      </div>
    </div>
  );
};

export default PaymentsAmountInfoAll;
