import styles from "../../styles/css/components/Profile/Profile.module.css";
import { AiOutlineRight, AiOutlineUser } from "react-icons/ai";
<<<<<<< HEAD
import TemporaryHeader from "../Header/TemporaryHeader";
=======
import TemporaryHeader from '../Header/TemporaryHeader';
import Title from '../../common/Title/Title';
>>>>>>> 8dddd77faead7c15b1e6d717d1b7e542ced90e70

const Profile = (props) => {
  const userData = [
    { id: 0, grade: "silver", point: "1000", cupon: "2", userName: "가나다" },
  ];
  const buttonData = ["배송지 등록", "비밀번호 변경", "회원탈퇴"];

<<<<<<< HEAD
  return (
    <>
      <div className={styles["container"]} style={{ maxWidth: "1300px" }}>
        <div className={styles["setWidth-100"]}>
          <div className={styles["flex-box__top"]}>
            <div className={styles["flex-box__top__profilePadding"]}>
              <h2>마이페이지</h2>
              <div className={styles["leftTitle__user-box"]}>
                <div className={styles["leftTitle__user-box__padding"]}>
                  <div className={styles["flex-box"]}>
                    <div className={styles["leftTitle__user-box__userIconBox"]}>
                      <AiOutlineUser
                        className={
                          styles["leftTitle__user-box__userIconBox--icon"]
                        }
                      ></AiOutlineUser>
                    </div>
                    <div className={styles["setWidth-50"]}>
                      {userData.map((d) => {
=======
  return <>
    <TemporaryHeader></TemporaryHeader>
    <div className={styles['container']} style={{ maxWidth: '1300px' }}>
      <div className={styles['setWidth-100']} >
        <div className={styles['flex-box__top']}>
          <div className={styles['flex-box__top__profilePadding']}>
            <Title className="mypage-title" title="마이페이지"></Title>
            <div className={styles['leftTitle__user-box']}>
              <div className={styles['leftTitle__user-box__padding']}>
                <div className={styles['flex-box']}>
                  <div className={styles['leftTitle__user-box__userIconBox']}>
                    <AiOutlineUser className={styles['leftTitle__user-box__userIconBox--icon']}></AiOutlineUser>
                  </div>
                  <div className={styles['setWidth-50']}>
                    {
                      userData.map((d) => {
>>>>>>> 8dddd77faead7c15b1e6d717d1b7e542ced90e70
                        return (
                          <div key={d.id}>
                            <span>{d.grade}</span>
                            <h2>{d.userName} 님,</h2>
                            <h2>반갑습니다!</h2>
                          </div>
                        );
                      })}
                    </div>
                  </div>
<<<<<<< HEAD
                  {userData.map((d) => {
=======
                </div>
                {
                  userData.map((d) => {
                    const formattedPoint = (d.point).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
>>>>>>> 8dddd77faead7c15b1e6d717d1b7e542ced90e70
                    return (
                      <div key={d.id} className={styles["point-cupon-box"]}>
                        <div className={styles["point-cupon-box__width"]}>
                          <span>포인트</span>
<<<<<<< HEAD
                          <h3 className={styles["point-cupon-box__marginTop"]}>
                            {d.point}원
                          </h3>
=======
                          <h3 className={styles['point-cupon-box__marginTop']}>{formattedPoint}원</h3>
>>>>>>> 8dddd77faead7c15b1e6d717d1b7e542ced90e70
                        </div>
                        <div className={styles["point-cupon-box__width"]}>
                          <span>쿠폰</span>
                          <h3 className={styles["point-cupon-box__marginTop"]}>
                            {d.cupon}장
                          </h3>
                        </div>
                      </div>
                    );
                  })}
                  <hr style={{ marginTop: "20px" }}></hr>
                </div>
                {buttonData.map((d, i) => {
                  return (
                    <div
                      key={i}
                      className={`${styles["flex-box"]} ${styles["setCursor"]}`}
                    >
                      <div className={styles["button-box"]}>
                        <p className={styles["button-box__text"]}>{d}</p>
                      </div>
                      <div className={styles["button-box__iconDiv"]}>
                        <AiOutlineRight
                          className={styles["button-box__icon"]}
                        ></AiOutlineRight>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className={styles["setWidth-100"]}>{props.rightTitle}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
