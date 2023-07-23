// React Hooks
import { useState } from "react";

// CSS
import styles from "../../styles/css/components/Payments/PaymentsFinal.module.css";

// Utils
import { addPriceComma } from "../../utils/addPriceComma";

// Components
import Input from "../../common/Input/Input";

const PaymentsFinal = (props) => {
  const [paymentInputAgree, setPaymentInputAgree] = useState({
    paymentAgree: false,
    privacyAgree: false,
  });

  // 결제버튼
  const orderPayment = () => {
    const {
      ownerName,
      ownerTel,
      deliveryName,
      deliveryMainAddress,
      deliveryTel,
    } = props.paymentReinfo;
    if (ownerName.trim().length <= 0)
      return alert("보내시는 분에 정보를 입력해 주세요.");
    if (ownerTel.trim().length <= 0)
      return alert("주문자의 핸드폰 번호를 입력해 주세요.");
    if (deliveryName.trim().length <= 0)
      return alert("받는 분의 정보를 입력해 주세요.");
    if (deliveryMainAddress.trim().length <= 0)
      return alert("주소를 입력해 주세요.");
    if (deliveryTel.trim().length <= 0)
      return alert("배송지의 핸드폰 번호를 입력해 주세요.");
    if (!paymentInputAgree.paymentAgree || !paymentInputAgree.privacyAgree)
      return alert("필수란에 동의를 체크해 주세요.");

    // 결제 API 전송
    console.log("결제 api");
  };

  // 체크박스 활성 여부
  const paymentInputAgreeFuc = (e) => {
    const { name, checked } = e.target;

    setPaymentInputAgree((prevAgree) => ({
      ...prevAgree,
      [name]: checked,
    }));
  };

  return (
    <div className={styles["payments-final"]}>
      <div className={styles["payments-checkbox"]}>
        <Input
          type="checkbox"
          onChange={paymentInputAgreeFuc}
          name="paymentAgree"
        />
        <label className={styles["payments-checkbox__label"]}>
          <span className={styles["payments-checkbox__required-text"]}>
            (필수)
          </span>
          &nbsp; 위 내용을 확인하였으며, 결제에 동의합니다.
        </label>
      </div>
      <div className={styles["payments-checkbox"]}>
        <Input
          type="checkbox"
          name="privacyAgree"
          onChange={paymentInputAgreeFuc}
        />
        <label className={styles["payments-checkbox__label"]}>
          <span className={styles["payments-checkbox__required-text"]}>
            (필수)
          </span>
          &nbsp; 개인정보 수집, 이용에 관한 동의
        </label>
      </div>
      <div className={styles["patments-final__price"]} onClick={orderPayment}>
        {addPriceComma(props.paymentsFinalAmount)}원 주문하기
      </div>
    </div>
  );
};

export default PaymentsFinal;
