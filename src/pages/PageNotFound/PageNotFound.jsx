// Hooks
import usePathMove from "../../hooks/usePathMove";

// Components
import Button from "../../common/Button/Button";

const PageNotFound = () => {
  const pathMove = usePathMove();
  const rootPathMove = () => pathMove("/");
  return (
    <div>
      <Button title="홈으로" onClick={rootPathMove} />
    </div>
  );
};

export default PageNotFound;
