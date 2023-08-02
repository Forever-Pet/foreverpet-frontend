// CSS
import styles from "../../styles/css/pages/Member/Modify.module.css";

// Components
import ChangePassword from "../../components/ModifyMemberInfo/ChangePassword";
import DeliveryRegister from "../../components/ModifyMemberInfo/DeliveryRegister";
import Profile from "../../components/Profile/Profile";

const Modify = () => {
  return (
    <div>
      <div
        style={{
          width: "100%",
          height: "202px",
          backgroundColor: "teal",
          position: "fixed",
          zIndex: "20",
          top: "0",
        }}
      >
        헤더임
      </div>
      <div className={styles["modify-container"]}>
        <div className={styles["modify-userInfo"]}>
          <Profile />
        </div>
        <div className={styles["modify-userInfo__edit"]}>
          <ChangePassword />
        </div>
      </div>
    </div>
  );
};

export default Modify;
