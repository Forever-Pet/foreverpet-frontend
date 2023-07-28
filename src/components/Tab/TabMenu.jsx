import { useState } from 'react';
import styles from '../../styles/css/components/Tab/TabMenu.module.css'
import TabContent from './TabContent';

const OrderList = () => {
  const data = [
    {
      id: 0,
      title: "주문내역",
    },
    {
      id: 1,
      title: "찜 리스트",
    },
  ];

  const [id, setId] = useState(0)

  return (
    <>
      <div className={styles['tabMenu']}>
        {
          data.map((d) => {
            return (
              <p className={`${styles['orderList']} ${id == d.id && styles['active']} `} key={d.id} onClick={() => setId(d.id)}>{d.title}</p>
            )
          })
        }
      </div>
      <div className={styles['line']}></div>
      <TabContent tab={id} />
    </>
  )
}

export default OrderList