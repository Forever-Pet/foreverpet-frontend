import Image from "../../common/Img/Image"
import styles from '../../styles/css/components/Tab/OrderList.module.css'
import { useSelector } from "react-redux"
import { useGetMemberData } from "../../hooks/useGetMemberData"
import { useEffect } from "react"

const OrderList = () => {

  const auth = useSelector((state) => { return state.auth.token })
  const { data, fetchData } = useGetMemberData();

   useEffect(() => {
     if(auth) {
      fetchData('order')
     } else {
       alert('로그인이 필요합니다.')
     }
   }, [auth])

  return (
    <>
      <div>
        <table className={styles['cart-table']}>
          <thead></thead>
          <tbody>
            {data !== null &&
              data.map((d, i) => {
                return (
                  <tr key={i}>
                    <td>
                      <Image src={d.productImage|| ''} className="img-100" />
                    </td>
                    <td className={styles['cart-table__width']}>{d.productName || ''}</td>
                    <td>{d.productAmount | ''}개</td>
                    <td className={styles['cart-table__width']}>{d.productTotalPrice| ''}원</td>
                    <td>{d.orderProcess | ''}</td>
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