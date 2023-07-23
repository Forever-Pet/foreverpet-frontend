// CSS
import styles from "../../../styles/css/components/Payments/PaymentsInputList/PaymentsInputList.module.css";

// Components
import Input from "../../../common/Input/Input";

const DeliveryInputList = (props) => {
  return (
    <ul className={styles["delivery-input"]}>
      <li className={styles["delivery-input__list"]}>
        <label>
          받는 분<span>*</span>
        </label>
        <Input
          type="text"
          placeholder="한글, 영문, 숫자만 입력해 주세요"
          className="delivery-input__name"
          onChange={props.updatePaymentInfo}
          value={props.paymentReinfo.deliveryName}
          required={true}
          minLength="5"
          name="deliveryName"
        />
      </li>
      <li className={styles["delivery-input__list"]}>
        <label>
          주소<span>*</span>
        </label>
        <Input
          type="text"
          className="delivery-input__mainAddress"
          onChange={props.updatePaymentInfo}
          value={props.paymentReinfo.deliveryMainAddress}
          required={true}
          name="deliveryMainAddress"
          disabled={true}
        />
        <div
          onClick={props.getUserMainAddressInfo}
          className={styles["delivery-input__mainAddress-btn"]}
        >
          주소 검색
        </div>
      </li>
      <li className={styles["delivery-input__list"]}>
        <Input
          type="text"
          className="delivery-input__subAddress"
          onChange={props.updatePaymentInfo}
          value={props.paymentReinfo.deliverySubAddress}
          required={true}
          placeholder="상세 주소를 입력해주세요"
          name="deliverySubAddress"
        />
      </li>
      <li className={styles["delivery-input__list"]}>
        <label>
          핸드폰 번호<span>*</span>
        </label>
        <Input
          type="tel"
          placeholder="휴대폰 번호를 입력해 주세요"
          className="delivery-input__tel"
          onChange={props.updatePaymentInfo}
          value={props.paymentReinfo.deliveryTel}
          required={true}
          minLength="7"
          name="deliveryTel"
        />
      </li>
    </ul>
  );
};

export default DeliveryInputList;
