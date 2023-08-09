// React Hooks
import { useEffect, useState } from "react";

// CSS
import styles from "../../styles/css/pages/Payments/Payments.module.css";

// Components
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Title from "../../common/Title/Title";
import PaymentsAmountInfoAll from "../../components/Payments/PaymentsAmountInfoAll";
import PaymentsOrderInfo from "../../components/Payments/PaymentsOrderInfo";
import PaymentsOwnerInfo from "../../components/Payments/PaymentsOwnerInfo";
import PaymentsDeliveryInfo from "../../components/Payments/PaymentsDeliveryInfo";
import PaymentsType from "../../components/Payments/PaymentsType";
import PaymentsFinalAll from "../../components/Payments/PaymentsFinalAll";

const PaymentsAll = () => {
  const [paymentReinfo, setPaymentReInfo] = useState({
    ownerName: "",
    ownerTel: "",
    ownerEmail: "",
    deliveryName: "",
    deliveryMainAddress: "",
    deliverySubAddress: "",
    deliveryZipcode: "",
    deliveryTel: "",
  });
  const [paymentsFinalAmount, setPaymentsFinalAmount] = useState(0);

  // 결제정보 (주문자, 배송지) 업데이트
  const updatePaymentInfo = (e) => {
    const { name, value, zonecode } = e.target;

    // deliveryZipcode를 업데이트하지 않는 경우도 처리
    if (!zonecode) {
      setPaymentReInfo((prevInfo) => ({
        ...prevInfo,
        [name]: value,
      }));
    }
    // deliveryZipcode를 업데이트하는 경우
    else {
      setPaymentReInfo((prevInfo) => ({
        ...prevInfo,
        deliveryMainAddress: value,
        deliveryZipcode: zonecode,
      }));
    }
  };

  // 결제버튼 금액 확인
  const paymentsAmountBtn = (amount) => setPaymentsFinalAmount(amount);

  return (
    <div className={styles["payments-wrap"]}>
      <Header />
      <div className={styles["payments-info"]}>
        <div className={styles["payments-text"]}>
          <Title title="주문결제" />
        </div>
        <div className={styles["payments-info__list"]}>
          <PaymentsOrderInfo />
        </div>
        <div className={styles["payments-info__list"]}>
          <PaymentsOwnerInfo
            paymentReinfo={paymentReinfo}
            updatePaymentInfo={updatePaymentInfo}
          />
        </div>
        <div className={styles["payments-info__list"]}>
          <PaymentsDeliveryInfo
            paymentReinfo={paymentReinfo}
            updatePaymentInfo={updatePaymentInfo}
          />
        </div>
        <div className={styles["payments-info__list"]}>
          <PaymentsType />
        </div>
        <div className={styles["payments-info__list"]}>
          <PaymentsFinalAll
            paymentsFinalAmount={paymentsFinalAmount}
            paymentReinfo={paymentReinfo}
          />
        </div>
      </div>
      <div className={styles["payments-info-amount"]}>
        <PaymentsAmountInfoAll paymentsAmountBtn={paymentsAmountBtn} />
      </div>
      <div className={styles["payments-info-footer"]}>
        <Footer />
      </div>
    </div>
  );
};

export default PaymentsAll;
