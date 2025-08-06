export default function EditAvatar() {
  return (
    <form className="popup__avatar-form" id="avatar-form" noValidate>
      <input
        className="popup__avatar"
        type="url"
        id="avatar-link"
        name="avatar"
        placeholder="Link para foto de perfil"
        required
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
