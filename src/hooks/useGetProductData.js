import axios from "axios"
import { useState } from "react"

const useGetProductData = (search = false) => {
  const [data, setData] = useState(null)

  const getData = (params, obj) => {
    if (search) {
      if (obj.length !== 0) { //찾는 문자가 들어왔을 때 통신하도록 통신

        /**통신 코드 짜는 곳 */


      }
      //필터 관련 코드
      if (params == 'products/best' || data !== null) { //베스트나 최신순으로 갔을 때 설정된 값들을 추천순일때 원래대로 복귀 시킴
        const newArr = obj.sort((a, b) => a - b)
        filterData(params, newArr)
      } else if (params == 'products/new') { //new는 내림차순
        const newArr = obj.sort((a, b) => b - a)
        filterData(params, newArr)
      }

    } else {
      axios.get('http://ec2-15-164-206-172.ap-northeast-2.compute.amazonaws.com/' + params)
        .then((result) => result.data)
        .then((result) => {
          const found = result.filter(e => e.categories === obj)
          setData(found)
        })
        .catch(() => {
          console.log('실패')
        })
    }
  }

  const filterData = (params, list) => {
    axios.get('http://ec2-15-164-206-172.ap-northeast-2.compute.amazonaws.com/' + params)
      .then((result) => result.data)
      .then((result) => {
        const found = result.filter(e => list.includes(e.id))
        setData(found)
      })
  }



  return [data, getData]
}

export default useGetProductData