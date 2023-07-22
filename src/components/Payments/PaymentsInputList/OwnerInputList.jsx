// CSS
import styles from "../../../styles/css/components/Payments/PaymentsInputList/PaymentsInputList.module.css";

// Components
import Input from "../../../common/Input/Input";

const OwnerInputList = (props) => {
  return (
    <ul className={styles["owner-input"]}>
      <li className={styles["owner-input__list"]}>
        <label>
          보내시는분<span>*</span>
        </label>
        <Input
          type="text"
          placeholder="한글, 영문, 숫자만 입력해 주세요"
          className="owner-input__owner"
          onChange={props.getOwnerInputValue}
          value={props.ownerInputValue.ownerName}
          required={true}
          minLength="5"
          name="ownerName"
        />
      </li>
      <li className={styles["owner-input__list"]}>
        <label>
          핸드폰 번호<span>*</span>
        </label>
        <Input
          type="text"
          placeholder="휴대폰 번호를 입력 해주세요 "
          className="owner-input__tel"
          onChange={props.getOwnerInputValue}
          value={props.ownerInputValue.ownerTel}
          required={true}
          minLength="7"
          name="ownerTel"
        />
      </li>
      <li className={styles["owner-input__list"]}>
        <label>이메일</label>
        <Input
          type="email"
          placeholder="이메일을 입력해주세요"
          className="owner-input__email"
          onChange={props.getOwnerInputValue}
          value={props.ownerInputValue.ownerEmail}
          maxLength="30"
          name="ownerEmail"
        />
      </li>
    </ul>
  );
};

export default OwnerInputList;
