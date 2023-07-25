// CSS
import styles from "../../../styles/css/pages/Member/ModifyMemberInfo/ModifyMember.module.css";

// // Components
import PaymentsInputHeader from "../../../components/Payments/PaymentsInputHeader/PaymentsInputHeader";
import DeliveryRegisterInputList from "./ModifyInputList/DeliveryRegisterInputList";

const DeliveryRegister = () => {
  return (
    <div>
      <PaymentsInputHeader />
      <DeliveryRegisterInputList />
    </div>
  );
};

export default DeliveryRegister;
