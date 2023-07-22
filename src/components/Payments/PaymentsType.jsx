// CSS
import styles from "../../styles/css/components/Payments/PaymentsType.module.css";

// Components
import PaymentsInputHeader from "./PaymentsInputHeader/PaymentsInputHeader";

const PaymentsType = () => {
  return (
    <>
      <PaymentsInputHeader title="결제수단" />
      <div className={styles["payments-type"]}>
        <div className={styles["payments-type__text"]}>결제수단 선택</div>
        <div className={styles["payments-type__list"]}>
          <span className={styles["payments-type__kakaopay"]}>카카오페이</span>
        </div>
      </div>
    </>
  );
};

export default PaymentsType;
