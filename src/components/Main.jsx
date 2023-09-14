import React from 'react';
import api from "../utils/Api.js";
import profileAvatar from '../images/Kusto-profile.jpg';
import Card from './Card.jsx';


function Main(props) {
  const [userName, setUserName] = React.useState("Жак Ив Кусто");
  const [userDescription, setUserDescription] = React.useState("Исследователь океана");
  const [userAvatar, setUserAvatar] = React.useState(profileAvatar);
  const [card, setCard] = React.useState([]);

  React.useEffect(() => {
    api.getCards().then((card) => {
      setCard(card)
    })
    .catch((err) => {
      console.log(err);
    });
  },[]);

  React.useEffect(() => {
    api
      .getUserInfo()
      .then((res) => {
        setUserName(res.name);
        setUserDescription(res.about);
        setUserAvatar(res.avatar);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar-container">
          <img
          //  style={{ backgroundImage: `url(${userAvatar})` }} 
          src={userAvatar}
            alt="Фото профиля"
            className="profile__avatar"
          />
          <button
            className="profile__avatar-btn"
            type="button"
            aria-label="Поменять аватар"
            title="Поменять аватар"
            onClick={props.onEditAvatar}
          ></button>
        </div>
        <div className="profile__info">
          <div className="profile__container">
            <h1 className="profile__info-name">{userName}</h1>
            <button
              className="profile__edit-btn opacity"
              type="button"
              aria-label="Редактирвоать профиль"
              title="Редактировать профиль"
              onClick={props.onEditProfile}
            ></button>
          </div>
          <p className="profile__info-job">{userDescription } </p>
        </div>
        <button
          className="profile__add-btn opacity"
          type="button"
          aria-label="Добавить карточку"
          title="Добавить карточку"
          onClick={props.onAddPlace}
        ></button>
      </section>
      <section className="elements">{card.map((item) => (
<Card card={item} onCardClick={props.onCardClick} key={item._id}/>
      )
      )}</section>
    </main>
  );
}

export default Main;