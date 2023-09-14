import React from "react";

function Card({card, onCardClick }) {
function handleCardClick() {
    onCardClick(card);
}
  return (
    <article className="element">
      <button
        className="element__del"
        type="button"
        aria-label="Удалить"
        title="Удалить карточку"
      ></button>
      <img src={card.link} alt={card.name} onClick={handleCardClick} className="element__image" aria-label="Увеличить изображение" title="Увеличить" />
      <div className="element__container">
        <h2 className="element__title">{card.name}</h2>
        <div className="element__like-container">
          <button
            className="element__like-button"
            type="button"
            aria-label="Кнопка лайка"
            title="Нравится"
          ></button>
          <span className="element__like-count">0</span>
        </div>
      </div>
    </article>
  );
}

export default Card;
