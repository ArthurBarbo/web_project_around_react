import { useState, useContext } from "react";
import CurrentUserContext from "../../../../../contexts/CurrentUserContext";

export default function EditAvatar({ onClose }) {
  const { handleUpdateAvatar } = useContext(CurrentUserContext);
  const [avatar, setAvatar] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    handleUpdateAvatar(avatar)
      .then(() => {
        setAvatar("");
        onClose();
      })
      .catch((err) => console.error(err));
  };

  return (
    <form
      className="popup__avatar-form"
      id="avatar-form"
      noValidate
      onSubmit={handleSubmit}
    >
      <input
        className="popup__avatar"
        type="url"
        id="avatar-link"
        name="avatar"
        placeholder="Link para foto de perfil"
        required
        value={avatar}
        onChange={(e) => setAvatar(e.target.value)}
      />
      <span id="avatar-link-error" className="popup__error"></span>
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
