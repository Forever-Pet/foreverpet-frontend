// Components
import ProductOrderList from "../Card/OrderList/ProductOrderList";
import PaymentsInputHeader from "./PaymentsInputHeader/PaymentsInputHeader";

// 상품 상세 > 결제 > 단수형 데이터 전달(수정예정)
const PaymentsProductOrderInfo = (props) => {
  return (
    <>
      <PaymentsInputHeader title="주문상품" />
      <ProductOrderList
        paymentsProductDetailInfo={props.paymentsProductDetailInfo}
      />
    </>
  );
};

export default PaymentsProductOrderInfo;
