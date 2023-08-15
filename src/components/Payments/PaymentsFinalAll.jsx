// React Hooks
import { useState } from "react";

// Redux
import { useSelector } from "react-redux";

// CSS
import styles from "../../styles/css/components/Payments/PaymentsFinal.module.css";

// Utils
import { addPriceComma } from "../../utils/addPriceComma";

// Components
import Input from "../../common/Input/Input";

import axios from "axios";

// uuid
import { v4 as uuidv4 } from "uuid";

const PaymentsFinalAll = (props) => {
  const [paymentInputAgree, setPaymentInputAgree] = useState({
    paymentAgree: false,
    privacyAgree: false,
  });

  const cartData = useSelector((state) => state.cart.cartItem);

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

    const productsName = cartData[0].productName;
    const productLength = cartData.length;
    const defaultProductsName = `${productsName} 외 ${productLength - 1} 개`;

    // 결제 API 전송
    impPayment(defaultProductsName);
  };

  const impPayment = (productsName) => {
    const { ownerName, ownerTel, ownerEmail, deliveryMainAddress } =
      props.paymentReinfo;

    const { IMP } = window;
    IMP.init("imp32173444");

    const uuid = uuidv4();
    const regEX = /[a-zA-Z0-9]/g;
    const filterUUID = uuid.match(regEX).join("");
    const date = new Date().getTime();
    const uuidName = filterUUID + String(date);

    // 결제 데이터
    const impPaymentData = {
      pg: "kakaopay", // PG사
      pay_method: "card", // 결제수단
      merchant_uid: uuidName, // 주문번호
      amount: props.paymentsFinalAmount, // 결제금액
      name: productsName, // 주문명
      buyer_name: ownerName, // 구매자 이름
      buyer_tel: ownerTel, // 구매자 전화번호
      buyer_email: ownerEmail, // 구매자 이메일
      buyer_addr: deliveryMainAddress, // 구매자 주소
    };

    // 결제 창
    IMP.request_pay(impPaymentData, impCallback);
  };

  // 결제 콜백
  const impCallback = (response) => {
    const { success, merchant_uid, error_msg } = response;

    if (success) {
      alert("결제 성공");
      postPaymentsProductInfo();
    } else {
      alert(`결제 실패: ${error_msg}`);
    }
  };

  // 백엔드 서버로 결제정보 전송
  const postPaymentsProductInfo = async () => {
    const {
      deliveryMainAddress,
      deliverySubAddress,
      ownerTel,
      deliveryTel,
      deliveryZipcode,
    } = props.paymentReinfo;

    const uuid = uuidv4();
    const regEX = /[a-zA-Z0-9]/g;
    const filterUUID = uuid.match(regEX).join("");
    const date = new Date().getTime();
    const uuidName = filterUUID + String(date);

    const orderRequest = cartData.map((data) => ({
      orderProductId: data.id,
      orderProductAmount: data.productPrice,
    }));

    const userId = sessionStorage.getItem("auth");

    const bodyData = {
      paymentRequest: {
        paymentName: uuidName,
        paymentGateway: "kakaoPay",
        paymentMethod: "kakaoPay",
      },

      address: {
        city: deliveryMainAddress,
        street: deliverySubAddress,
        zipcode: deliveryZipcode,
      },
      customerPhoneNumber: ownerTel,
      receiverPhoneNumber: deliveryTel,
      orderProductListRequest: orderRequest,
    };

    const res = await axios.post(
      "http://ec2-15-164-206-172.ap-northeast-2.compute.amazonaws.com/order",
      bodyData,
      { headers: { Authorization: `bearer ${userId}` } }
    );
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

export default PaymentsFinalAll;
