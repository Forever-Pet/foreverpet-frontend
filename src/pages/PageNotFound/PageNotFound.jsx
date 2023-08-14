// CSS
import styles from "./PageNotFound.module.css";

// Hooks
import usePathMove from "../../hooks/usePathMove";

// Components
import Title from "../../common/Title/Title";
import Button from "../../common/Button/Button";

const PageNotFound = () => {
  const pathMove = usePathMove();
  const rootPathMove = () => pathMove("/");
  return (
    <div className={styles["no_page"]}>
      <div className={styles["no_page--container"]}>
        <Title className="no_page--title" title="404" />
        <div>해당 페이지는 개발 중이에요 ㅜㅜ</div>
        <Button
          title="홈으로"
          onClick={rootPathMove}
          className="no_page--btn"
        />
      </div>
    </div>
  );
};

export default PageNotFound;
