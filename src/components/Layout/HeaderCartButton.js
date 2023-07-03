import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = () => {
  return (
    <button className={classes.button}>
      <span>Your Cart</span>
    </button>
  );
};

export default HeaderCartButton;
