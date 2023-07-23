// React Hooks
import { useState } from "react";

// CSS
import styles from "../../styles/css/pages/Payments/Payments.module.css";

// Components
import Title from "../../common/Title/Title";
import PaymentsAmountInfo from "../../components/Payments/PaymentsAmountInfo";
import PaymentsOrderInfo from "../../components/Payments/PaymentsOrderInfo";
import PaymentsOwnerInfo from "../../components/Payments/PaymentsOwnerInfo";
import PaymentsDeliveryInfo from "../../components/Payments/PaymentsDeliveryInfo";
import PaymentsType from "../../components/Payments/PaymentsType";
import PaymentsFinal from "../../components/Payments/PaymentsFinal";

// Dummy data
const dummyOrderListData = [
  {
    id: 1,
    imageUrl:
      "https://www.bohori.com/web/product/medium/202304/8c40e60df9ad25fdd15c40f72b779ede.jpg",
    name: "채식 애견껌 스틱형 120g (12개임)-오리지널 맛 (초록색) 맛있어요 !대박임 !",
    quantity: 3,
    defaultAmount: 4500,
  },
  {
    id: 2,
    imageUrl:
      "https://www.bohori.com/web/product/medium/202304/a5eaff3c46627bd4f906aecf541bf549.jpg",
    name: "채식 애견껌 스틱형 120g (12개입)-과일 맛 (베이지색)",
    quantity: 4,
    defaultAmount: 4500,
  },
  {
    id: 3,
    imageUrl:
      "https://www.bohori.com/web/product/medium/202304/a5eaff3c46627bd4f906aecf541bf549.jpg",
    name: "아이디3번",
    quantity: 4,
    defaultAmount: 4500,
  },
  {
    id: 4,
    imageUrl:
      "https://www.bohori.com/web/product/medium/202304/a5eaff3c46627bd4f906aecf541bf549.jpg",
    name: "아이디4번",
    quantity: 10,
    defaultAmount: 4500,
  },
];

const Payments = () => {
  const [paymentReinfo, setPaymentReInfo] = useState({
    ownerName: "",
    ownerTel: "",
    ownerEmail: "",
    deliveryName: "",
    deliveryMainAddress: "",
    deliverySubAddress: "",
    deliveryTel: "",
  });
  const [paymentsFinalAmount, setPaymentsFinalAmount] = useState(0);

  // 결제정보 (주문자, 배송지) 업데이트
  const updatePaymentInfo = (e) => {
    const { name, value } = e.target;
    setPaymentReInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  // 결제버튼 금액 확인
  const paymentsAmountBtn = (amount) => setPaymentsFinalAmount(amount);

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
          <PaymentsOrderInfo dummyOrderListData={dummyOrderListData} />
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
          <PaymentsFinal
            paymentsFinalAmount={paymentsFinalAmount}
            paymentReinfo={paymentReinfo}
          />
        </div>
      </div>
      <div className={styles["payments-info-amount"]}>
        <PaymentsAmountInfo
          dummyOrderListData={dummyOrderListData}
          paymentsAmountBtn={paymentsAmountBtn}
        />
      </div>
    </div>
  );
};

export default Payments;
