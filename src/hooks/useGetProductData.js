import axios from "axios"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"

const useGetProductData = (type, category) => {
  const [data, setData] = useState(null)

  const getData = (type, category) => {
    axios.get('http://ec2-15-164-206-172.ap-northeast-2.compute.amazonaws.com/' + type)
      .then((result) => result.data)
      .then((result) => {
        const found = result.filter(e => e.categories === category)
        setData(found)
      })
      .catch(() => {
        console.log('실패')
      })
  }

  useEffect(() => {
    getData(type, category)
  }, [])


  return [data, getData]
}

export default useGetProductData