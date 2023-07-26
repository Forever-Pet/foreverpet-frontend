// React Hooks
import { useState } from "react";

// CSS
import styles from "../../styles/css/components/ModifyMemberInfo/ModifyMember.module.css";

// // Components
import PaymentsInputHeader from "../Payments/PaymentsInputHeader/PaymentsInputHeader";
import DeliveryRegisterInputList from "./ModifyInputList/DeliveryRegisterInputList";
import DaumAddress from "../Auth/Address/DaumAddress";
import ModifyButton from "./ModifyButton/ModifyButton";

const DeliveryRegister = () => {
  const [deliveryUserInfo, setDeliveryUserInfo] = useState({
    deliveryName: "",
    deliveryMainAddress: "",
    deliverySubAddress: "",
    deliveryTel: "",
  });

  const [userAddressInfo, setUserAddressInfo] = useState(false);

  // 배송지 등록 정보 Get
  const deliveryUserInfoUpdate = (e) => {
    const { name, value } = e.target;
    setDeliveryUserInfo((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));
    console.log(deliveryUserInfo);
  };

  // DaumAddress 컴포넌트 활성화, 클릭한 주소정보 Get
  const userAddressInfoUpdate = (type, address) => {
    if (type === "modal") return setUserAddressInfo((prev) => !prev);
    if (type === "address") {
      const { value } = address.target;
      setDeliveryUserInfo((prevInput) => ({
        ...prevInput,
        deliveryMainAddress: value,
      }));
    }
  };

  // Input의 주소검색 버튼 누를시 DaumAddress 컴포넌트 활성화
  const getUserMainAddressInfo = () => setUserAddressInfo((prev) => !prev);

  // modify 정보변경 검증 함수
  const deliveryRegisterInfoChangeUpdate = () => {
    const { deliveryName, deliveryMainAddress, deliveryTel } = deliveryUserInfo;
    if (deliveryName.trim().length === 0)
      return alert("받는 분의 이름을 입력해 주세요");
    if (deliveryMainAddress.trim().length === 0)
      return alert("배송지의 주소를 입력해 주세요");
    if (deliveryTel.trim().length < 8)
      return alert("핸드폰 번호를 제대로 입력해 주세요");

    sendDeliveryRegisterInfoChangeCallback();
  };

  // API 콜백
  const sendDeliveryRegisterInfoChangeCallback = () => {
    // 해당 정보를 서버로 POST 요청
    console.log("배송지 변경 완료");
  };

  return (
    <div className={styles["delivery-register"]}>
      <PaymentsInputHeader title="배송지 등록" />
      <DaumAddress
        userAddressInfo={userAddressInfo}
        userAddressInfoUpdate={userAddressInfoUpdate}
      />
      <DeliveryRegisterInputList
        getUserMainAddressInfo={getUserMainAddressInfo}
        deliveryUserInfo={deliveryUserInfo}
        deliveryUserInfoUpdate={deliveryUserInfoUpdate}
      />
      <ModifyButton
        title="배송지 등록"
        onClick={deliveryRegisterInfoChangeUpdate}
      />
    </div>
  );
};

export default DeliveryRegister;
