import Image from "../../common/Img/Image"
import testImg from '../../assets/image 26.svg'
import styles from '../../styles/css/components/Tab/OrderList.module.css'

const OrderList = () => {
  const data = [
    { id: 0, productName: '껌', img: testImg, price: 9000, count: 2, state: '결제완료' },
    { id: 1, productName: '사료', img: testImg, price: 4500, count: 1, state: '결제대기중' }
  ]

  return (
    <>
      <div>
        <table className={styles['cart-table']}>
          <thead></thead>
          <tbody>
            {data &&
              data.map((d, i) => {
                return (
                  <tr key={i}>
                    <td>
                      <Image src={testImg} className="img-100" />
                    </td>
                    <td className={styles['cart-table__width']}>{d.productName}</td>
                    <td>{d.count}개</td>
                    <td className={styles['cart-table__width']}>{d.price}원</td>
                    <td>{d.state}</td>
                  </tr>

                )
              })
            }
          </tbody>
        </table>
      </div>

    </>
  )
}

export default OrderList