import classes from "./cart.module.css";
import Modal from "../UI/modal";
const Cart = (props) => {
  const cartitem = (
    <ul className={classes["cart-items"]}>
      {[{ id: 'c1', name: "sushi", amount: 2, price: 12 }].map((item) => {
        return <li>{item.name}</li>;
      })}
    </ul>
  );

  return (
    <Modal>
      {cartitem}
      <div className={classes.total}>
        <span>total amount</span>
        <span>35</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]}>close</button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};
export default Cart;
