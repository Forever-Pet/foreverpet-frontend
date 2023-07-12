// CSS
import styles from "../../../styles/css/components/Auth/Local/LocalAuthUser.module.css";

// Components
import DefaultModal from "../../../common/Modal/DefaultModal";
import LocalAuthUserHeader from "./HeaderTitle/LocalAuthUserHeader";
import Input from "../../../common/Input/Input";
import Button from "../../../common/Button/Button";
import Title from "../../../common/Title/Title";

const LocalAuthUserLogin = () => {
  return (
    <DefaultModal className="localUser-login">
      <LocalAuthUserHeader title="로그인" />
      <form className={styles["localUser-login__form"]}>
        <Input
          type="text"
          placeholder="이메일을 입력해주세요."
          className="localUser-login__email"
        />
        <Input
          type="password"
          placeholder="비밀번호를 입력해주세요."
          className="localUser-login__password"
        />
        <div className={styles["localUser-login__bottom-section"]}>
          <div className={styles["localUser-login__save-account"]}>
            <Input type="checkbox" id="save-acocunt" />
            <label htmlFor="save-acocunt">아이디 저장</label>
          </div>
          <div className={styles["localUser-login__recovery-section"]}>
            <span>회원가입</span>
            <span>아이디 / 비밀번호 찾기</span>
          </div>
        </div>
        <Button title="로그인" className="localUser-login__footer-btn" />
      </form>
      <div className={styles["localUser-login__sns-list"]}>
        <Title
          title="SNS 계정으로 로그인"
          className="localUser-login__sns-title"
        />
        <div className={styles["localUser-login_sns"]}>
          <span>카카오</span>
          <span>네이버</span>
          <span>구글</span>
        </div>
      </div>
    </DefaultModal>
  );
};

export default LocalAuthUserLogin;
