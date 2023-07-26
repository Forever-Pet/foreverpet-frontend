// CSS
import styles from "../../../styles/css/components/ModifyMemberInfo/ModifyInputList.module.css";

// Components
import Input from "../../../common/Input/Input";

const PasswordInputList = (props) => {
  return (
    <ul>
      <li className={styles["modify-password__list"]}>
        <label>
          현재 비밀번호<span>*</span>
        </label>
        <Input
          type="password"
          placeholder="현재 비밀번호를 입력해 주세요"
          className="modify-password__current"
          name="currentPassword"
          minLength="10"
          onChange={props.updateUserPassword}
          required={true}
        />
      </li>
      <li className={styles["modify-password__list"]}>
        <label>
          새 비밀번호<span>*</span>
        </label>
        <Input
          type="password"
          placeholder="비밀번호를 입력해 주세요 (영문, 숫자 사용 10~20자)"
          className="modify-password_new"
          name="newPassword"
          minLength="10"
          maxLength="20"
          onChange={props.updateUserPassword}
          required={true}
        />
      </li>
      <li className={styles["modify-password__list"]}>
        <label>
          새 비밀번호 확인<span>*</span>
        </label>
        <Input
          type="password"
          placeholder="비밀번호를 입력해 주세요 (영문, 숫자 사용 10~20자)"
          className="modify-password_new"
          name="newPassword2"
          minLength="10"
          maxLength="20"
          onChange={props.updateUserPassword}
          required={true}
        />
      </li>
    </ul>
  );
};

export default PasswordInputList;
