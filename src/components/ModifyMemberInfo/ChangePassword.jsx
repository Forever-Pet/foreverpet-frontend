// React Hooks
import { useState } from "react";

// CSS
import styles from "../../styles/css/components/ModifyMemberInfo/ModifyMember.module.css";

// Components
import PaymentsInputHeader from "../Payments/PaymentsInputHeader/PaymentsInputHeader";
import PasswordInputList from "./ModifyInputList/PasswordInputList";
import ModifyButton from "./ModifyButton/ModifyButton";

const ChangePassword = () => {
  const [userPassword, setUserPassword] = useState({
    currentPassword: "",
    newPassword: "",
    newPassword2: "",
  });

  // 유저 비밀번호 정보 Get
  const updateUserPassword = (e) => {
    const { name, value } = e.target;
    setUserPassword((prevPassword) => ({
      ...prevPassword,
      [name]: value,
    }));
    console.log(userPassword);
  };

  // modify 정보변경 검증 함수
  const passwordInfoChangeUpdate = () => {
    const { currentPassword, newPassword, newPassword2 } = userPassword;
    if (currentPassword.trim().length === 0)
      return alert("현재의 비밀번호를 입력해 주세요.");
    if (newPassword.trim().length < 10 || newPassword.trim().length > 20)
      return alert("신규 비밀번호는 최소 10~20자 이내로 입력해 주세요");
    if (newPassword !== newPassword2)
      return alert("신규비밀번호가 서로 동일하지 않습니다.");
    sendPasswordInfoChangeCallback();
  };

  const sendPasswordInfoChangeCallback = () => {
    // 서버로 api 통신 요청후 현재의 비밀번호가 다를 경우 return
    console.log("비번 변경 완료");
  };

  return (
    <div className={styles["password-change"]}>
      <PaymentsInputHeader title="비밀번호 변경" />
      <PasswordInputList
        updateUserPassword={updateUserPassword}
        userPassword={userPassword}
      />
      <ModifyButton
        title="비밀번호 변경하기"
        onClick={passwordInfoChangeUpdate}
      />
    </div>
  );
};

export default ChangePassword;
