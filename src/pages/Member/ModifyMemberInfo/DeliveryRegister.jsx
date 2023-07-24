// CSS
import styles from "../../../styles/css/pages/Member/ModifyMemberInfo/MoidfyMember.module.css";

// Components
import PaymentsInputHeader from "../../../components/Payments/PaymentsInputHeader/PaymentsInputHeader";
import DeliveryInputList from "../../../components/Payments/PaymentsInputList/DeliveryInputList";

const DeliveryRegister = () => {
  return (
    <div>
      <PaymentsInputHeader />
      <DeliveryInputList />
    </div>
  );
};

export default DeliveryRegister;
