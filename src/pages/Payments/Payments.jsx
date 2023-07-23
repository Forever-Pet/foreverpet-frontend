// CSS
import styles from "../../styles/css/pages/Payments/Payments.module.css";

// Components
import Title from "../../common/Title/Title";
import PaymentsAmountInfo from "../../components/Payments/PaymentsAmountInfo";
import PaymentsOrderInfo from "../../components/Payments/PaymentsOrderInfo";
import PaymentsOwnerInfo from "../../components/Payments/PaymentsOwnerInfo";
import PaymentsDeliveryInfo from "../../components/Payments/PaymentsDeliveryInfo";
import PaymentsType from "../../components/Payments/PaymentsType";

const Payments = () => {
  return (
    <div className={styles["payments-wrap"]}>
      <div
        style={{
          width: "100%",
          height: "202px",
          position: "fixed",
          backgroundColor: "teal",
          zIndex: "20",
        }}
      >
        헤더임
      </div>
      <div className={styles["payments-info"]}>
        <div className={styles["payments-text"]}>
          <Title title="주문결제" />
        </div>
        <div className={styles["payments-info__list"]}>
          <PaymentsOrderInfo />
        </div>
        <div className={styles["payments-info__list"]}>
          <PaymentsOwnerInfo />
        </div>
        <div className={styles["payments-info__list"]}>
          <PaymentsDeliveryInfo />
        </div>
        <div className={styles["payments-info__list"]}>
          <PaymentsType />
        </div>
      </div>
      <div className={styles["payments-info-amount"]}>
        <PaymentsAmountInfo />
      </div>
    </div>
  );
};

export default Payments;
