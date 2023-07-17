import { useEffect } from "react";
import axios from "axios";

const KakaoCallback = () => {
  useEffect(() => {
    const params = new URL(document.location.toString()).searchParams;
    const code = params.get("code");
    const grantType = "authorization_code";
    const CLIENT_ID = "a6bfe93b460dd365f9951854df478ab9";
    const REDIRECT_URL = "http://localhost:5173/oauth/kakaoCallback";

    const data = async () => {
      try {
        const res = await axios.post(
          `https://kauth.kakao.com/oauth/token?grant_type=${grantType}&client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URL}&code=${code}`,
          {},
          {
            headers: {
              "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
            },
          }
        );

        const { access_token } = res.data;
        const res_axios = await axios.post(
          `https://kapi.kakao.com/v2/user/me`,
          {},
          {
            headers: {
              Authorization: `Bearer ${access_token}`,
              "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
            },
          }
        );
        console.log(res_axios);
      } catch (error) {
        console.log(error);
      }
    };
    data();
  }, []);

  return <div>카카오 콜백</div>;
};

export default KakaoCallback;
