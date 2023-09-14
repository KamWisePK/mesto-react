import React from "react";

function PopupWithForm(props) {
  return (
    <section className={`popup popup_type_${props.name} ${props.isOpen ? "popup_opened" : ""} `}>
      <div className="popup__container">
        <h2 className="popup__title">{props.title}</h2>
        <button
          className="popup__close-btn opacity"
          type="button"
          aria-label="Закрыть без сохранения"
          title="Закрыть"
          onClick={props.onClose}
        ></button>
        <form className="edit-form" name={props.name} id={props.name} noValidate>
          {props.children}
          <button
            className={`edit-form__button edit-form__button_type_${props.name} opacity`}
            type="submit"
          >
            {props.buttonName}
          </button>
        </form>
      </div>
    </section>
  );
}

export default PopupWithForm;
