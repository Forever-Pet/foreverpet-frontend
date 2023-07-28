// CSS
import styles from "../../../styles/css/components/Auth/Address/DaumAddress.module.css";

// 다음 주소 API
import DaumPostcode from "react-daum-postcode";

// Components
import { AiOutlineClose } from "react-icons/ai";

const DaumAddress = (props) => {
  const getUserMainAddressInfo = () => props.userAddressInfoUpdate("modal");

  const completeUserAddress = (event) => {
    const e = {
      target: {
        name: "deliveryMainAddress",
        value: event.address,
      },
    };
    props.userAddressInfoUpdate("modal");
    props.userAddressInfoUpdate("address", e);
  };

  // DaumPostcode Style
  const postStyleCode = {
    maxWidth: "700px",
    height: "500px",
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
