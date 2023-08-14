// Components
import ChangePassword from "../../components/ModifyMemberInfo/ChangePassword";
import Profile from "../../components/Profile/Profile";

const ModifyPassword = () => {
  return (
    <>
      <Profile rightTitle={<ChangePassword />} />
    </>
  );
};

export default ModifyPassword;
