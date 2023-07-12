// CSS
import styles from "../../../styles/css/components/Auth/Address/DaumAddress.module.css";

// 다음 주소 API
import DaumPostcode from "react-daum-postcode";

// Components
import { AiOutlineClose } from "react-icons/ai";

const DaumAddress = (props) => {
  const getUserMainAddressInfo = () => props.userAddressInfoUpdate("modal");

  const completeUserAddress = (e) => {
    props.userAddressInfoUpdate("modal");
    props.userAddressInfoUpdate("address", e.address);
  };

  // DaumPostcode Style
  const postStyleCode = {
    height: "500px",
    width: "700px",
  };

  return (
    <>
      {props.userAddressInfo && (
        <div className={styles["daum-address"]}>
          <div className={styles["daum-address__cancle"]}>
            <AiOutlineClose
              className={styles["daum-address__cancle-btn"]}
              onClick={getUserMainAddressInfo}
            />
          </div>
          <DaumPostcode
            onComplete={completeUserAddress}
            style={postStyleCode}
          />
        </div>
      )}
    </>
  );
};

export default DaumAddress;
