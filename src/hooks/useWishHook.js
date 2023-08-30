import axios from "axios"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"

export const useWishHook = () => {
  const [data, setData] = useState(null)
  const auth = useSelector((state) => { return state.auth.token })
  useEffect(() => {
    if (auth) {
      axios.post(`http://ec2-15-164-206-172.ap-northeast-2.compute.amazonaws.com/user/wish`, {}, {
        headers: {
          Authorization: auth
        }
      }).then((res) => setData(res.data))
    }
  }, [])

  useEffect(() => {
    if (auth) {
      axios.post(`http://ec2-15-164-206-172.ap-northeast-2.compute.amazonaws.com/user/wish`, {}, {
        headers: {
          Authorization: auth
        }
      }).then((res) => setData(res.data))
    }
  }, [data])

  return { data }
}