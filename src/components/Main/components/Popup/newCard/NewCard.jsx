import { useState, useContext } from "react";
import CurrentUserContext from "../../../../../contexts/CurrentUserContext";
export default function NewCard({ onClose, onAddCard }) {
  const { handleAddCard } = useContext(CurrentUserContext);
  const [name, setName] = useState("");
  const [link, setLink] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddCard({ name, link })
      .then((newCard) => {
        onAddCard(newCard);
        onClose();
      })
      .catch((err) => console.error(err));
  };
  return (
    <form
      className="popup__addpic"
      noValidate
      id="place"
      onSubmit={handleSubmit}
    >
      {" "}
      <input
        className="popup__name"
        id="local-name"
        type="text"
        placeholder="Título"
        minLength="2"
        maxLength="30"
        name="local-name"
        required
        value={name}
        onChange={(e) => setName(e.target.value)}
      />{" "}
      <span id="local-name-error" className="popup__error"></span>{" "}
      <input
        className="popup__about"
        id="link"
        type="url"
        placeholder="Link de Imagem"
        name="link"
        required
        value={link}
        onChange={(e) => setLink(e.target.value)}
      />{" "}
      <span id="link-error" className="popup__error"></span>{" "}
      <button
        className="popup__save popup__button_disabled"
        id="save"
        type="submit"
      >
        {" "}
        Criar{" "}
      </button>{" "}
    </form>
  );
}
