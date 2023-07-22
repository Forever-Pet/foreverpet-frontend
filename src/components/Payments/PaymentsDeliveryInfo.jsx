// React Hooks
import { useState } from "react";

// Components
import PaymentsInputHeader from "./PaymentsInputHeader/PaymentsInputHeader";
import DeliveryInputList from "./PaymentsInputList/DeliveryInputList";

const PaymentsDeliveryInfo = () => {
  const [deliveryInputValue, setDeliveryInputValue] = useState({
    deliveryName: "",
    deliveryMainAddress: "",
    deliverySubAddress: "",
    deliveryTel: "",
  });

  // 배송지 정보 입력값 업데이트 함수
  const getDeliveryInputValue = (e) => {
    const { name, value } = e.target;
    setDeliveryInputValue((prevDeliveryInput) => ({
      ...prevDeliveryInput,
      [name]: value,
    }));
  };

  return (
    <>
      <PaymentsInputHeader title="배송지 정보" />

      <DeliveryInputList
        getDeliveryInputValue={getDeliveryInputValue}
        deliveryInputValue={deliveryInputValue}
      />
    </>
  );
};

export default PaymentsDeliveryInfo;
