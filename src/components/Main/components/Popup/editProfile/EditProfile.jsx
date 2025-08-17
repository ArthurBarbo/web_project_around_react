import { useState, useContext, useEffect } from "react";
import CurrentUserContext from "../../../../../contexts/CurrentUserContext";
import api from "../../../../../utils/api"

export default function EditProfile({ onClose }) {
  const { currentUser, handleUpdateUser } = useContext(CurrentUserContext);

  const [name, setName] = useState("");
  const [about, setAbout] = useState("");

  useEffect(() => {
    if (currentUser) {
      setName(currentUser.name);
      setAbout(currentUser.about);
    }
  }, [currentUser]);

  function handleSubmit(e) {
    e.preventDefault();
    handleUpdateUser({ name, about });
    onClose();
  }

  return (
    <form className="popup__profile" onSubmit={handleSubmit} noValidate>
      <label htmlFor="name"></label>
      <input
        className="popup__name"
        type="text"
        id="name"
        name="name"
        placeholder="Nome"
        minLength="2"
        maxLength="40"
        required
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <span id="name-error" className="popup__error"></span>

      <label htmlFor="about"></label>
      <input
        className="popup__about"
        type="text"
        id="about"
        name="about"
        placeholder="Sobre mim"
        minLength="2"
        maxLength="200"
        required
        value={about}
        onChange={(e) => setAbout(e.target.value)}
      />
      <span id="about-error" className="popup__error"></span>

      <button
        className="popup__save popup__button_disabled"
        type="submit"
        aria-label="save form"
      >
        Salvar
      </button>
    </form>
  );
}
