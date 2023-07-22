// CSS
import styles from "../../styles/css/components/Product/Payments/PaymentsOrderInfo.module.css";

// Components
import Title from "../../common/Title/Title";
import OrderList from "../Card/OrderList/OrderList";

const PaymentsOrderInfo = () => {
  return (
    <div>
      <div className={styles["payments-orderlist__header"]}>
        <Title title="주문상품" />
      </div>
      <OrderList />
    </div>
  );
};

export default PaymentsOrderInfo;
