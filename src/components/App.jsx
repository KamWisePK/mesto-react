import {useEffect, useState} from 'react';
import "../index.css";
import Header from "./Header.jsx";
import Main from "./Main.jsx";
import Footer from "./Footer.jsx";
import PopupWithForm from "./PopupWithForm.jsx";
import ImagePopup from "./ImagePopup.jsx";


function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  function handleCardClick(card) {
setSelectedCard(card);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleEditPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function closeAllPopups() {
    setIsAddPlacePopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard(null);
  }

  return (
    <div className="page">
      <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleEditPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick}

      />
      <Footer />
      <PopupWithForm
        name="profile"
        title="Редактировать профиль"
        buttonName="Сохранить"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      >
        <input
          name="userName"
          className="edit-form__input edit-form__input_type_name"
          minLength="2"
          maxLength="40"
          autoFocus
          placeholder="Укажите имя"
          required
        />
        <span id="userName-error" className="edit-form__error"></span>
        <input
          name="userJob"
          className="edit-form__input edit-form__input_type_job"
          minLength="2"
          maxLength="200"
          placeholder="Укажите профессию"
          required
        />
        <span id="userJob-error" className="edit-form__error"></span>
      </PopupWithForm>
      <PopupWithForm
        name="new-card"
        title="Новое место"
        buttonName="Создать"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
      >
        <label className="edit-form__label">
          <input
            name="name"
            className="edit-form__input edit-form__input_type_card-name"
            minLength="2"
            maxLength="30"
            autoFocus
            placeholder="Укажите название"
            required
          />
          <span id="name-error" className="edit-form__error"></span>
        </label>
        <label className="edit-form__label">
          <input
            type="url"
            name="link"
            className="edit-form__input edit-form__input_type_card-url"
            minLength="4"
            placeholder="Ссылка на картинку"
            required
          />
          <span id="link-error" className="edit-form__error"></span>
        </label>
      </PopupWithForm>
      <PopupWithForm
        name="avatar-change"
        title="Смена аватара"
        buttonName="Cменить"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      >
        <label className="edit-form__label">
          <input
            type="url"
            name="avatarLink"
            className="edit-form__input edit-form__input_type_avatar-url"
            minLength="4"
            placeholder="Ссылка на аватар"
            required
          />
          <span id="avatarLink-error" className="edit-form__error"></span>
        </label>
      </PopupWithForm>
      <PopupWithForm
        name="delete-card"
        title="Удалить карточку?"
        buttonName="Удалить"
      ></PopupWithForm>
      <ImagePopup card={selectedCard} onClose={closeAllPopups}/>
    </div>
  );
}

export default App;
