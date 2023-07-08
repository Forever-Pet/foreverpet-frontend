import { useState } from "react";

// CSS
import styles from "../../../styles/css/components/Auth/Local/LocalAuthUser.module.css";

// Components
import DefaultModal from "../../../common/Modal/DefaultModal";
import Input from "../../../common/Input/Input";
import Title from "../../../common/Title/Title";
import DaumAddress from "../Address/DaumAddress";
import Button from "../../../common/Button/Button";
import { AiOutlineClose } from "react-icons/ai";

const LocalAuthUserJoin = () => {
  const [userAddressInfo, setUserAddressInfo] = useState(false);
  const [enableEmailAuth, setEnableEmailAuth] = useState(false);
  const [localAuthUserInput, setLocalAuthUserInput] = useState({
    name: "",
    email: "",
    emailAuth: "",
    password: "",
    password2: "",
    tel: "",
    mainAddress: "",
    subAddress: "",
  });

  // Input Value Set
  const getInputValueInfo = (e) => {
    const { name, value } = e.target;
    setLocalAuthUserInput((prevInputValues) => ({
      ...prevInputValues,
      [name]: value,
    }));
  };

  // DaumAddress 컴포넌트 활성화, 클릭한 주소정보 Get
  const userAddressInfoUpdate = (type, address) => {
    if (type === "modal") return setUserAddressInfo((prev) => !prev);
    if (type === "address")
      return setLocalAuthUserInput((prev) => ({
        ...prev,
        mainAddress: address,
      }));
  };

  // Input의 주소검색 버튼 누를시 DaumAddress 컴포넌트 활성화
  const getUserMainAddressInfo = () => setUserAddressInfo((prev) => !prev);

  // 입력한 이메일 서버중복검증 확인
  const checkEmailAuth = () => setEnableEmailAuth((prev) => !prev);

  // 이메일 인증 통과
  const getAuthEmailCode = () => {
    console.log("이메일 인증이 완료 되었습니다.");
  };

  const SHOW = styles[""];
  const HIDE = styles["localUser-join__itemList-hidden"];

  // 이메일 중복확인 후 인증 동적 활성화 렌더링
  const emailAuth = enableEmailAuth ? SHOW : HIDE;

  // 메인주소 입력시, 서브주소 입력 활성화
  const subEmailStye = localAuthUserInput.mainAddress.length > 1 ? SHOW : HIDE;

  return (
    <DefaultModal className="localUser-join">
      {userAddressInfo && (
        <DaumAddress
          userAddressInfo={userAddressInfo}
          userAddressInfoUpdate={userAddressInfoUpdate}
        />
      )}
      <div className={styles["localUser-join__header"]}>
        <div className={styles["localUser-join__header--closeBtn"]}>
          <AiOutlineClose className={styles["localUser-join__header--btn"]} />
        </div>
        <Title title="회원가입" className="localUser-join__header--title" />
      </div>

      <form className={styles["localUser-join__form"]}>
        <ul className={styles["localUser-join__item"]}>
          <li className={styles["localUser-join__itemList"]}>
            <label>
              이름 <span>*</span>
            </label>
            <Input
              type="text"
              placeholder="한글, 영문, 숫자만 입력해 주세요"
              minLength="2"
              maxLength="52"
              required={true}
              className="localUser-join__name"
              name="name"
              onChange={getInputValueInfo}
              value={localAuthUserInput.name}
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
              onChange={getInputValueInfo}
              value={localAuthUserInput.email}
            />
            <div
              className={styles["localuser-join__getEmail-btn"]}
              onClick={checkEmailAuth}
            >
              중복확인
            </div>
          </li>
          <li className={styles["localUser-join__itemList"]} id={emailAuth}>
            <Input
              type="text"
              placeholder="승인번호를 입력해주세요"
              minLength="3"
              required={true}
              className="localUser-join__email"
              name="emailAuth"
              onChange={getInputValueInfo}
              value={localAuthUserInput.emailAuth}
            />
            <div
              className={styles["localuser-join__checkEmail-auth"]}
              onClick={getAuthEmailCode}
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
              onChange={getInputValueInfo}
              value={localAuthUserInput.password}
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
              onChange={getInputValueInfo}
              value={localAuthUserInput.password2}
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
              onChange={getInputValueInfo}
              value={localAuthUserInput.tel}
            />
          </li>
          <li className={styles["localUser-join__itemList"]}>
            <label>주소</label>
            <Input
              type="text"
              placeholder="기본 주소를 입력해주세요"
              className="localUser-join__mainAddress"
              name="mainAddress"
              value={localAuthUserInput.mainAddress}
              disabled={true}
            />
            <div
              onClick={getUserMainAddressInfo}
              className={styles["localuser-join__mainAddress-btn"]}
            >
              주소 검색
            </div>
          </li>
          <li className={styles["localUser-join__itemList"]} id={subEmailStye}>
            <Input
              type="text"
              className="localUser-join__mainAddress"
              name="subAddress"
              placeholder="상세 주소를 입력해주세요"
              onChange={getInputValueInfo}
              value={localAuthUserInput.subAddress}
            />
          </li>
        </ul>
      </form>

      <div className={styles["localUser-join__footer"]}>
        <Button title="회원가입" className="localUser-join__footer-btn" />
        <div className={styles["localUser-join__footer-box"]}>
          <span className={styles["localUser-join__footer-existingAccount"]}>
            이미 아이디가 있으신가요?
          </span>
          <span className={styles["localUser-join__footer-login"]}>로그인</span>
        </div>
      </div>
    </DefaultModal>
  );
};

export default LocalAuthUserJoin;
