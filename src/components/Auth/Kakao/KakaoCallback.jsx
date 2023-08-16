// React Hooks
import { useEffect } from "react";

// Custom Hooks
import usePathMove from "../../../hooks/usePathMove";

import axios from "axios";

const KakaoCallback = () => {
  const pathMove = usePathMove();
  useEffect(() => {
    const kakaoDataAxios = async () => {
      try {
        const params = new URL(document.location.toString()).searchParams;
        const CODE = params.get("code");
        const body = {
          authorizationCode: CODE,
        };
        console.log(body);
        const serverRes = await axios.post(
          "http://ec2-15-164-206-172.ap-northeast-2.compute.amazonaws.com/user/kakao",
          body
        );
        console.log(serverRes);
        if (serverRes.status === 200) {
          sessionStorage.setItem("auth", serverRes.data.accessToken);
          sessionStorage.setItem("kakao", serverRes.data.userSocialType);
          alert("로그인 되었습니다.");
          pathMove("/");
          return;
        }
      } catch (error) {
        console.log(error);
      }
    };
    kakaoDataAxios();
  }, []);

  return <></>;
};

export default KakaoCallback;
