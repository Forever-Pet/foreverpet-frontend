import { useState } from "react";

//css
import styles from "../../styles/css/components/Banner/HeaderBan.module.css";

//icon
import { RxCross2 } from "react-icons/rx";

//헤더 상단 베너
const HeaderBan = () => {
  const [banner, setBanner] = useState(true);

  return (
    <>
    {banner ? (
      <div className={styles.banner}>
      <div className={styles.banner_text}>
        포에버펫 회원가입하고 첫 구매 혜택과 쿠폰 받아가세요!
      </div>   
      <RxCross2 onClick={() => {setBanner(false);}} className={styles.icon} />
    </div>
    ) : null}
    </>
  );
};

export default HeaderBan;
