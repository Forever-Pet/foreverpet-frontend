import { useEffect } from "react";
import axios from "axios";

const KakaoCallback = () => {
  useEffect(() => {
    const kakaoDataAxios = async () => {
      try {
        const params = new URL(document.location.toString()).searchParams;
        const CODE = params.get("code");
        const GRANT_TYPE = "authorization_code";
        const CLIENT_ID = "a6bfe93b460dd365f9951854df478ab9";
        const REDIRECT_URL = "http://localhost:5173/oauth/kakaoCallback";
        const KAKAO_ACCESS_URL = `https://kauth.kakao.com/oauth/token?grant_type=${GRANT_TYPE}&client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URL}&code=${CODE}`;
        const KAKAO_USER_INFO_URL = `https://kapi.kakao.com/v2/user/me`;
        const ACCESS_HEADERS_CONTENT_TYPE = {
          "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
        };
        const res = await axios.post(
          KAKAO_ACCESS_URL,
          {},
          {
            headers: ACCESS_HEADERS_CONTENT_TYPE,
          }
        );
        const { access_token } = res.data;
        const body = {
          authorizationCode: access_token,
        };
        console.log(body);
        const serverRes = await axios.post(
          "http://ec2-15-164-206-172.ap-northeast-2.compute.amazonaws.com/user/kakao",
          body
        );
        console.log(body);
        console.log(access_token);
      } catch (error) {
        console.log(error);
      }
    };
    kakaoDataAxios();
  }, []);

  return <></>;
};

export default KakaoCallback;
