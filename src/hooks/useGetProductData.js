import axios from "axios"
import { useEffect, useState } from "react"

const useGetProductData = (params, obj, search = false) => {
  const [data, setData] = useState(null)

  const getData = (params, obj) => {
    if (search) {
      //임시
    } else {
      axios.get('http://ec2-15-164-206-172.ap-northeast-2.compute.amazonaws.com/' + params)
        .then((result) => result.data)
        .then((result) => {
          if (typeof (obj) == 'string') {
            if (search) { //임시
              setData(result)
            } else {
              const found = result.filter(e => e.categories === obj)
              setData(found)
            }
          }
          else {
            const found = result.filter(e => obj.includes(e.id))
            setData(found)
          }
        })
        .catch(() => {
          console.log('실패')
        })
    }
  }

  useEffect(() => {
    getData(params, obj)
  }, [])


  return [data, getData]
}

export default useGetProductData