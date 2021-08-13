import Style from "../styles/components.module.css";

const PopUP = () => {
  return (
    <div className={Style["popup"]}>
      <span>Are you sure you want to complete this action</span>
      <button>Yes</button>
      <button>No</button>
    </div>
  );
};

export default PopUP;
