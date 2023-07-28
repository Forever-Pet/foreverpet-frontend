import axios from "axios"
import { useEffect, useState } from "react"

const useGetData = (type, category) => {
  const [data, setData] = useState(null)

  const getData = (type, category) => {
    axios.get('http://ec2-3-39-122-241.ap-northeast-2.compute.amazonaws.com/' + type)
      .then((result) => result.data)
      .then((result) => {
        const found = result.filter(e => e.categories === category)
        setData(found)
      })
  }

  useEffect(() => {
    getData(type, category)
  }, [])

  return [data, getData]
}

export default useGetData