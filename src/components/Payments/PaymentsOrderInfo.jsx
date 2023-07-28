// Components
import OrderList from "../Card/OrderList/OrderList";
import PaymentsInputHeader from "./PaymentsInputHeader/PaymentsInputHeader";

const PaymentsOrderInfo = (props) => {
  return (
    <>
      <PaymentsInputHeader title="주문상품" />
      <OrderList dummyOrderListData={props.dummyOrderListData} />
    </>
  );
};

export default PaymentsOrderInfo;
