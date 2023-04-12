import classes from "./modal.module.css";
import { Fragment } from "react";
import ReactDOM from 'react-dom'
const Backdrop = (props) => {
  return (<div className={classes.backdrop} />);
};
const Overlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children} </div>
    </div>
  );
};
const portalelement=document.getElementById('overlay')

const Modal = (props) => {
    return(
      <Fragment>
        {ReactDOM.createPortal(<Backdrop/>,portalelement)}  
        {ReactDOM.createPortal(<Overlay>{props.children}</Overlay>,portalelement)}   
      </Fragment>  

    )
};
export default Modal;
