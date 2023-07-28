// CSS
import styles from "../../../styles/css/components/ModifyMemberInfo/ModifyMember.module.css";

// Components
import Button from "../../../common/Button/Button";

const ModifyButton = (props) => {
  return (
    <div className={styles["modify-member__btn-box"]}>
      <Button
        title={props.title}
        className="modify-membere__btn"
        onClick={props.onClick}
      />
    </div>
  );
};

export default ModifyButton;
