// React Hooks
import { useState } from "react";

// Components
import PaymentsInputHeader from "./PaymentsInputHeader/PaymentsInputHeader";
import DeliveryInputList from "./PaymentsInputList/DeliveryInputList";
import DaumAddress from "../Auth/Address/DaumAddress";

const PaymentsDeliveryInfo = (props) => {
  const [userAddressInfo, setUserAddressInfo] = useState(false);

  // DaumAddress 컴포넌트 활성화, 클릭한 주소정보 Get
  const userAddressInfoUpdate = (type, address) => {
    if (type === "modal") return setUserAddressInfo((prev) => !prev);
    if (type === "address") return props.updatePaymentInfo(address);
  };

  // Input의 주소검색 버튼 누를시 DaumAddress 컴포넌트 활성화
  const getUserMainAddressInfo = () => setUserAddressInfo((prev) => !prev);

  return (
    <>
      <DaumAddress
        userAddressInfo={userAddressInfo}
        userAddressInfoUpdate={userAddressInfoUpdate}
      />
      <PaymentsInputHeader title="배송지 정보" />
      <DeliveryInputList
        paymentReinfo={props.paymentReinfo}
        updatePaymentInfo={props.updatePaymentInfo}
        getUserMainAddressInfo={getUserMainAddressInfo}
      />
    </>
  );
};

export default PaymentsDeliveryInfo;
