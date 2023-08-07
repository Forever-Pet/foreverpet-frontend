// CSS
import styles from "../../styles/css/pages/Member/Modify.module.css";

// Components
import DeliveryRegister from "../../components/ModifyMemberInfo/DeliveryRegister";
import Profile from "../../components/Profile/Profile";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const ModifyDeliveryRegister = () => {
  return (
    <div>
      <Header />
      <div className={styles["modify-container"]}>
        <div className={styles["modify-userInfo"]}>
          <Profile />
        </div>
        <div className={styles["modify-userInfo__edit"]}>
          <DeliveryRegister />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ModifyDeliveryRegister;
