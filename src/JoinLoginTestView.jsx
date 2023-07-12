import LocalAuthUserJoin from "./components/Auth/Local/LocalAuthUserJoin";
import LocalAuthUserLogin from "./components/Auth/Local/LocalAuthUserLogin";

const JoinLoginTestView = () => {
  return (
    <div>
      <LocalAuthUserJoin />
      <LocalAuthUserLogin />
    </div>
  );
};

export default JoinLoginTestView;
