// CSS
import styles from "../../../styles/css/pages/Member/ModifyMemberInfo/ModifyMember.module.css";

// Components
import PaymentsInputHeader from "../../../components/Payments/PaymentsInputHeader/PaymentsInputHeader";
import PasswordInputList from "./ModifyInputList/PasswordInputList";

const ChangePassword = () => {
  return (
    <div>
      <PaymentsInputHeader />
      <PasswordInputList />
    </div>
  );
};

export default ChangePassword;
