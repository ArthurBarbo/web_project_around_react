import { useState } from "react";
import avatarImg from "../../images/avatar.jpg";
import Popup from "./components/Popup/Popup.jsx";
import EditProfile from "./components/Popup/components/EditProfile/EditProfile.jsx";
import NewCard from "./components/Popup/components/NewCard/NewCard.jsx";
import EditAvatar from "./components/Popup/components/EditAvatar/EditAvatar.jsx";
import ImagePopup from "./components/ImagePopup/ImagePopup.jsx";
import Card from "./components/Card/Card.Jsx";

const cards = [
  {
    isLiked: false,
    _id: "5d1f0611d321eb4bdcd707dd",
    name: "Yosemite Valley",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg",
    owner: "5d1f0611d321eb4bdcd707dd",
    createdAt: "2019-07-05T08:10:57.741Z",
  },
  {
    isLiked: false,
    _id: "5d1f064ed321eb4bdcd707de",
    name: "Lake Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg",
    owner: "5d1f0611d321eb4bdcd707dd",
    createdAt: "2019-07-05T08:11:58.324Z",
  },
];

console.log(cards);

export default function Main() {
  const [popup, setPopup] = useState(null);
  const [selectedCard, setselectedCard] = useState(null);

  const newCardPopup = {
    title: "Novo Local",
    children: <NewCard />,
  };
  const editProfilePopup = {
    title: "Editar perfil",
    children: <EditProfile />,
  };
  const editAvatarPopup = {
    title: "Editar avatar",
    children: <EditAvatar />,
  };

  function handleOpenPopup(popup) {
    setPopup(popup);
  }

  function handleClosePopup() {
    setPopup(null);
  }
  function handleCloseImagePopup() {
    setselectedCard(null);
  }

  return (
    <main className="main page__section">
      <section className="profile">
        <div
          className="profile__avatar-container"
          onClick={() => handleOpenPopup(editAvatarPopup)}
        >
          <img
            className="profile__avatar"
            src={avatarImg}
            alt="Jacques Cousteau, foto de perfil"
          />
          <div className="profile__avatar-overlay"></div>
        </div>

        <div className="profile__text">
          <h1 className="profile__name">Jacques Cousteau</h1>
          <button
            className="profile__pen"
            type="button"
            aria-label="edit profile"
            onClick={() => handleOpenPopup(editProfilePopup)}
          ></button>
          <h2 className="profile__description">Explorador</h2>
        </div>

        <button
          className="profile__plus"
          type="button"
          aria-label="edit card"
          onClick={() => handleOpenPopup(newCardPopup)}
        ></button>
      </section>

      <section className="elements">
        {cards.map((card) => (
          <Card key={card._id} card={card} onImageClick={setselectedCard} />
        ))}
      </section>

      {popup && (
        <Popup onClose={handleClosePopup} title={popup.title}>
          {popup.children}
        </Popup>
      )}

      {selectedCard && (
        <ImagePopup card={selectedCard} onClose={handleCloseImagePopup} />
      )}
    </main>
  );
}
