export default function NewCard() {
  return (
    <form className="popup__addpic" noValidate id="place">
      <input
        className="popup__name"
        id="local-name"
        type="text"
        placeholder="Título"
        minLength="2"
        maxLength="30"
        name="local-name"
        required
      />
      <span id="local-name-error" className="popup__error"></span>
      <input
        className="popup__about"
        id="link"
        type="url"
        placeholder="Link de Imagem"
        name="link"
        required
      />
      <span id="link-error" className="popup__error"></span>
      <button
        className="popup__save popup__button_disabled"
        id="save"
        type="submit"
      >
        Criar
      </button>
    </form>
  );
}
