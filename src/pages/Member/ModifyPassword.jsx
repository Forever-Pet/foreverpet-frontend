// React Hooks
import { useEffect } from "react";

// Custom Hooks
import usePathMove from "../../hooks/usePathMove";

// Components
import ChangePassword from "../../components/ModifyMemberInfo/ChangePassword";
import Profile from "../../components/Profile/Profile";

const ModifyPassword = () => {
  const pathMove = usePathMove();
  useEffect(() => {
    const getKakaoUser = sessionStorage.getItem("kakao");
    if (getKakaoUser !== null) {
      pathMove("/");
    }
  }, []);

  return (
    <>
      <Profile rightTitle={<ChangePassword />} />
    </>
  );
};

export default ModifyPassword;
