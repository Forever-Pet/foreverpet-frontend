// CSS
import styles from '../../styles/css/components/Product/Payments/PaymentsAmountInfo.module.css';

// Utils
import { addPriceAmount } from '../../utils/addPriceComma';

// Compoennts
import Title from '../../common/Title/Title';

// Dummy Data
const data = {
  totalAmount: 13500,
  deliveryPrice: 0,
  couponSale: 0,
};

const PaymentsAmountInfo = (props) => {
  const { totalAmount, deliveryPrice, couponSale } = data;

  return (
    <div className={styles['payment-amount__info']}>
      <div className={styles['payment-amount__info--text']}>
        <Title title="상품금액" />
      </div>
      <div className={styles['payment-amount__card']}>
        <div className={styles['payment-amount__card--desc']}>
          <div>총 상품금액</div>
          <div>총 배송료</div>
          <div>쿠폰 할인</div>
        </div>
        <div className={styles['payment-amount__card--amount']}>
          <div>{addPriceAmount(totalAmount)} 원</div>
          <div>{addPriceAmount(deliveryPrice)} 원</div>
          <div>-{addPriceAmount(couponSale)} 원</div>
        </div>
      </div>
      <div className={styles['payment-amount__card--totalAmount']}>
        <div>최종 결제금액</div>
        <div>{addPriceAmount(totalAmount)}원 </div>
      </div>
    </div>
  );
};

export default PaymentsAmountInfo;
