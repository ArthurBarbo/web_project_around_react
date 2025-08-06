export default function EditProfile() {
  return (
    <form className="popup__profile" noValidate>
      <label htmlFor="name"></label>
      <input
        className="popup__name"
        type="text"
        id="name"
        name="name"
        placeholder="Nome"
        defaultValue="Jacques Cousteau"
        minLength="2"
        maxLength="40"
        required
      />
      <span id="name-error" className="popup__error"></span>

      <label htmlFor="about"></label>
      <input
        className="popup__about"
        type="text"
        id="about"
        name="about"
        placeholder="Sobre mim"
        defaultValue="Explorador"
        minLength="2"
        maxLength="200"
        required
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
