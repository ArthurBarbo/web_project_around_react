export default function ImagePopup({ card, onClose }) {
  if (!card) return null;

  return (
    <div className="popup">
      <div className=" popup__conteiner-zoom">
        <button
          aria-label="Close modal"
          className="popup__close"
          type="button"
          onClick={onClose}
        />
        <img className="popup__zoom" src={card.link} alt={card.name} />
        <p className="popup__caption">{card.name}</p>
      </div>
    </div>
  );
}
