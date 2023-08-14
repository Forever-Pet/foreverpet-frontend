// CSS
import styles from "../../../styles/css/components/ModifyMemberInfo/ModifyInputList.module.css";

// Components
import Input from "../../../common/Input/Input";

const DeliveryRegisterInputList = (props) => {
  return (
    <ul>
      <li className={styles["delivery-register__list"]}>
        <label>
          받는 분<span>*</span>
        </label>
        <Input
          type="text"
          minLength="2"
          maxLength="10"
          required={true}
          placeholder="한글, 영문, 숫자만 입력해 주세요"
          className="delivery-register__input"
          name="deliveryName"
          onChange={props.deliveryUserInfoUpdate}
        />
      </li>
      <li className={styles["delivery-register__list"]}>
        <label>
          주소<span>*</span>
        </label>
        <Input
          type="text"
          disabled={true}
          required={true}
          className="delivery-register__input--address"
          name="deliveryMainAddress"
          value={props.deliveryUserInfo.deliveryMainAddress}
          onChange={props.deliveryUserInfoUpdate}
        />
        <div
          onClick={props.getUserMainAddressInfo}
          className={styles["delivery-register__mainAddress-btn"]}
        >
          주소 검색
        </div>
      </li>
      <li className={styles["delivery-register__list"]}>
        <Input
          type="text"
          placeholder="상세 주소를 입력해 주세요"
          className="delivery-register__input"
          name="deliverySubAddress"
          onChange={props.deliveryUserInfoUpdate}
        />
      </li>
      <li className={styles["delivery-register__list"]}>
        <label>
          핸드폰 번호 <span>*</span>
        </label>
        <Input
          type="tel"
          required={true}
          minLength="8"
          maxLength="13"
          className="delivery-register__input"
          name="deliveryTel"
          onChange={props.deliveryUserInfoUpdate}
        />
      </li>
    </ul>
  );
};

export default DeliveryRegisterInputList;
