import { useNavigate } from "react-router-dom";

const usePathMove = () => {
  const navigate = useNavigate();

  const pathMove = (location) => {
    navigate(location);
  };

  return pathMove;
};

export default usePathMove;
