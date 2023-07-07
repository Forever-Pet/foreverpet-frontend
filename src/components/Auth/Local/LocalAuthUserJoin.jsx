import { useState, useEffect } from "react";

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
  const [userMainAddress, setUserMainAddress] = useState("");

  const userAddressInfoUpdate = (type, address) => {
    if (type === "modal") return setUserAddressInfo((prev) => !prev);
    if (type === "address") return setUserMainAddress(address);
  };

  const getUserMainAddressInfo = () => setUserAddressInfo((prev) => !prev);

  const checkEmailAuth = () => setEnableEmailAuth((prev) => !prev);

  const getAuthEmailCode = () => console.log("이메일 인증이 완료 되었습니다.");

  // 이메일 중복확인 후 인증 동적 활성화 렌더링
  const emailAuth = enableEmailAuth
    ? styles[""]
    : styles["localUser-join__itemList-hidden"];

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
              maxLength="5"
              required={true}
              className="localUser-join__name"
              name="user-name"
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
              name="user-email"
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
              name="user-emailAuth"
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
              name="user-password"
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
              name="user-password2"
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
              name="user-phoneNumber"
            />
          </li>
          <li className={styles["localUser-join__itemList"]}>
            <label>주소</label>
            <Input
              type="text"
              className="localUser-join__mainAddress"
              name="user-mainAddress"
              value={userMainAddress}
              disabled={true}
              placeholder="기본 주소를 입력해주세요"
            />
            <div
              onClick={getUserMainAddressInfo}
              className={styles["localuser-join__mainAddress-btn"]}
            >
              주소 검색
            </div>
          </li>
          <li className={styles["localUser-join__itemList"]}>
            <Input
              type="text"
              className="localUser-join__mainAddress"
              name="user-subAddress"
              placeholder="상세 주소를 입력해주세요"
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
