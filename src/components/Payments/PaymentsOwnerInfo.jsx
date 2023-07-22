// React Hooks
import { useState } from "react";

// Components
import PaymentsInputHeader from "./PaymentsInputHeader/PaymentsInputHeader";
import OwnerInputList from "./PaymentsInputList/OwnerInputList";

const PaymentsOwnerInfo = () => {
  const [ownerInputValue, setOwnerInputValue] = useState({
    ownerName: "",
    ownerTel: "",
    ownerEmail: "",
  });

  // 주문자 정보 입력값 업데이트 함수
  const getOwnerInputValue = (e) => {
    const { name, value } = e.target;
    setOwnerInputValue((prevOwnerInput) => ({
      ...prevOwnerInput,
      [name]: value,
    }));
  };

  return (
    <>
      <PaymentsInputHeader title="주문자 정보" />

      <OwnerInputList
        getOwnerInputValue={getOwnerInputValue}
        ownerInputValue={ownerInputValue}
      />
    </>
  );
};

export default PaymentsOwnerInfo;
