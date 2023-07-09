// CSS
import styles from "../../../../styles/css/components/Auth/Local/LocalAuthUser.module.css";

// Components
import Input from "../../../../common/Input/Input";

const AuthInputList = (props) => {
  return (
    <ul className={styles["localUser-join__item"]}>
      <li className={styles["localUser-join__itemList"]}>
        <label>
          이름 <span>*</span>
        </label>
        <Input
          type="text"
          placeholder="한글, 영문, 숫자만 입력해 주세요"
          minLength="2"
          maxLength="5"
          required={true}
          className="localUser-join__name"
          name="name"
          onChange={props.getInputValueInfo}
        />
      </li>
      <li className={styles["localUser-join__itemList"]}>
        <label>
          이메일 주소 <span>*</span>
        </label>
        <Input
          type="email"
          placeholder="이메일 주소를 입력해 주세요."
          minLength="3"
          required={true}
          className="localUser-join__email"
          name="email"
          onChange={props.getInputValueInfo}
        />
        <div
          className={styles["localuser-join__getEmail-btn"]}
          onClick={props.checkEmailAuth}
        >
          중복확인
        </div>
      </li>
      <li className={styles["localUser-join__itemList"]} id={props.emailAuth}>
        <Input
          type="text"
          placeholder="승인번호를 입력해주세요"
          minLength="3"
          className="localUser-join__email"
          name="emailAuth"
          onChange={props.getInputValueInfo}
        />
        <div
          className={styles["localuser-join__checkEmail-auth"]}
          onClick={props.getAuthEmailCode}
        >
          승인번호 확인
        </div>
      </li>
      <li className={styles["localUser-join__itemList"]}>
        <label>
          비밀번호 <span>*</span>
        </label>
        <Input
          type="password"
          placeholder="비밀번호를 입력해 주세요 (영문, 숫자 사용10~20자)"
          minLength="10"
          maxLength="20"
          required={true}
          className="localUser-join__password"
          name="password"
          onChange={props.getInputValueInfo}
        />
      </li>
      <li className={styles["localUser-join__itemList"]}>
        <label>
          비밀번호 확인 <span>*</span>
        </label>
        <Input
          type="password"
          placeholder="비밀번호를 재입력해 주세요"
          minLength="10"
          maxLength="20"
          required={true}
          className="localUser-join__password2"
          name="password2"
          onChange={props.getInputValueInfo}
        />
      </li>
      <li className={styles["localUser-join__itemList"]}>
        <label>
          휴대폰 번호 <span>*</span>
        </label>
        <Input
          type="tel"
          placeholder="휴대폰 번호를 '-' 없이 입력해 주세요"
          minLength="8"
          maxLength="11"
          required={true}
          className="localUser-join__phoneNumber"
          name="tel"
          onChange={props.getInputValueInfo}
        />
      </li>
      <li className={styles["localUser-join__itemList"]}>
        <label>주소</label>
        <Input
          type="text"
          placeholder="기본 주소를 입력해주세요"
          className="localUser-join__mainAddress"
          name="mainAddress"
          value={props.localAuthUserInput.mainAddress}
          disabled={true}
        />
        <div
          onClick={props.getUserMainAddressInfo}
          className={styles["localuser-join__mainAddress-btn"]}
        >
          주소 검색
        </div>
      </li>
      <li
        className={styles["localUser-join__itemList"]}
        id={props.subEmailStye}
      >
        <Input
          type="text"
          className="localUser-join__mainAddress"
          name="subAddress"
          placeholder="상세 주소를 입력해주세요"
          onChange={props.getInputValueInfo}
        />
      </li>
    </ul>
  );
};

export default AuthInputList;
