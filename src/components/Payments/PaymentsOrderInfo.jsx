// Components
import OrderList from "../Card/OrderList/OrderList";
import PaymentsInputHeader from "./PaymentsInputHeader/PaymentsInputHeader";

const PaymentsOrderInfo = () => {
  return (
    <>
      <PaymentsInputHeader title="주문상품" />
      <OrderList />
    </>
  );
};

export default PaymentsOrderInfo;
