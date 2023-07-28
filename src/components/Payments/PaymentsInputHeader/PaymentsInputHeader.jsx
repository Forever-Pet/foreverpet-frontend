// CSS
import styles from "../../../styles/css/components/Payments/PaymentsInputHeader/PaymentsInputHeader.module.css";

// Components
import Title from "../../../common/Title/Title";
const PaymentsInputHeader = (props) => {
  return (
    <div className={styles["payments-header"]}>
      <Title title={props.title} />
    </div>
  );
};

export default PaymentsInputHeader;
