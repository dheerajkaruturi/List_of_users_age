import classes from "./ModalComponent.module.css";

import ButtonComponent from "./ButtonComponent";

const ModalComponent = (props) => {
  return (
    <div>
      <div
        className={classes.backdrop__modal}
        onClick={props.on_toCloseModal}
      ></div>
      <div className={classes.modal__modal}>
        <header className={classes.header__modal}>
          <h2>{props.title}</h2>
        </header>
        <div className={classes.content__modal}>
          <p>{props.content}</p>
        </div>
        <footer className={classes.actions__modal}>
          <ButtonComponent onClick={props.on_toCloseModal}>
            Okay
          </ButtonComponent>
        </footer>
      </div>
    </div>
  );
};

export default ModalComponent;
