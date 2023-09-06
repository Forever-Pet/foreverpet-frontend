import styles from "../../styles/css/components/Profile/Profile.module.css";
import { AiOutlineRight, AiOutlineUser } from "react-icons/ai";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Title from "../../common/Title/Title";
import usePathMove from "../../hooks/usePathMove";
import { useGetMemberData } from "../../hooks/useGetMemberData";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const Profile = (props) => {
  const move = usePathMove();
  const auth = useSelector((state) => { return state.auth.token })
  const { data: userData, fetchData } = useGetMemberData();

  const buttonData = [
    { title: "배송지 등록", url: "delivery" },
    { title: "비밀번호 변경", url: "password" },
    { title: "회원탈퇴", url: "" },
  ];


   useEffect(() => {
     if(auth) {
      fetchData('user')
     } else {
       alert('로그인이 필요합니다.')
     }
   }, [auth])




  return (
    <>
      {userData !== null && (
        <>
          <Header></Header>
          <div className={styles["container"]} style={{ maxWidth: "1200px" }}>
            <div className={styles["setWidth-100"]}>
              <div className={styles["flex-box__top"]}>
                <div className={styles["flex-box__top__profilePadding"]}>
                  <Title
                    title={"마이페이지"}
                    className={"profile_mypage"}
                  ></Title>
                  <div className={styles["leftTitle__user-box"]}>
                    <div className={styles["leftTitle__user-box__padding"]}>
                      <div className={styles["flex-box"]}>
                        <div
                          className={styles["leftTitle__user-box__userIconBox"]}
                        >
                          <AiOutlineUser
                            className={
                              styles["leftTitle__user-box__userIconBox--icon"]
                            }
                          ></AiOutlineUser>
                        </div>
                        <div className={styles["setWidth-50"]}>
                          <div>
                            <span>{userData.user_membership}</span>
                            <h2>{userData.user_nickname} 님,</h2>
                            <h2>반갑습니다!</h2>
                          </div>
                        </div>
                      </div>
                      <div className={styles["point-cupon-box"]}>
                        <div className={styles["point-cupon-box__width"]}>
                          <span>포인트</span>
                          <h3 className={styles["point-cupon-box__marginTop"]}>
                            {userData.user_point}원
                          </h3>
                        </div>
                        <div className={styles["point-cupon-box__width"]}>
                          <span>쿠폰</span>
                          <h3 className={styles["point-cupon-box__marginTop"]}>
                            {userData.coupon_cnt}장
                          </h3>
                        </div>
                      </div>

                      <hr style={{ marginTop: "20px" }}></hr>
                    </div>
                    {buttonData.map((d, i) => {
                      return (
                        <div
                          key={i}
                          className={`${styles["flex-box"]} ${styles["setCursor"]}`}
                          onClick={() => move(`/member/modify/${d.url}`)}
                        >
                          <div className={styles["button-box"]}>
                            <p className={styles["button-box__text"]}>
                              {d.title}
                            </p>
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
          <Footer></Footer>
        </>
      )}
    </>
  );
};

export default Profile;
