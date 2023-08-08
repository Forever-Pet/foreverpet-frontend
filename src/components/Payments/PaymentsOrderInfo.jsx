// Components
import OrderList from "../Card/OrderList/OrderList";
import PaymentsInputHeader from "./PaymentsInputHeader/PaymentsInputHeader";

// 장바구니 > 장바구니 모든 데이터 전달
const PaymentsOrderInfo = (props) => {
  return (
    <>
      <PaymentsInputHeader title="주문상품" />
      <OrderList />
    </>
  );
};

export default PaymentsOrderInfo;
