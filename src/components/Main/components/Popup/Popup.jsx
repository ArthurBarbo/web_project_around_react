export default function Popup(props) {
  const { title, children, onClose } = props;
  return (
    <div className="popup">
      <div
        className={`popup__conteiner ${!title ? "popup__conteiner-zoom" : ""}`}
      >
        <button
          className="popup__close"
          id="close"
          type="button"
          aria-label="close form"
          onClick={onClose}
        ></button>
        {title && <h3 className="popup__title popup__text">{title}</h3>}
        {children}
      </div>
    </div>
  );
}
