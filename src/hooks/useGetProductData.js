import axios from "axios"
import { useEffect, useState } from "react"

const useGetProductData = (type, list, dataProps = false) => {
  const [data, setData] = useState(null)

  const getData = (type, list) => {
    if (dataProps) {

    } else {
      axios.get('http://ec2-15-164-206-172.ap-northeast-2.compute.amazonaws.com/' + type)
        .then((result) => result.data)
        .then((result) => {
          if (typeof (list) == 'string') {
            const found = result.filter(e => e.categories === list)
            setData(found)
          } else {
            const found = result.filter(e => list.includes(e.id))
            setData(found)
          }
        })
        .catch(() => {
          console.log('실패')
        })
    }
  }

  useEffect(() => {
    getData(type, list)
  }, [])


  return [data, getData]
}

export default useGetProductData