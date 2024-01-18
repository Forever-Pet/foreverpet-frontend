// Components
import PaymentsInputHeader from "./PaymentsInputHeader/PaymentsInputHeader";
import OwnerInputList from "./PaymentsInputList/OwnerInputList";

const PaymentsOwnerInfo = (props) => {
  return (
    <>
      <PaymentsInputHeader title="주문자 정보" />
      <OwnerInputList
        paymentReinfo={props.paymentReinfo}
        updatePaymentInfo={props.updatePaymentInfo}
      />
    </>
  );
};

export default PaymentsOwnerInfo;
