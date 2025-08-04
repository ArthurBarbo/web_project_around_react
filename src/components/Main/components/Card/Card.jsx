export default function Card(props) {
  const { card, onImageClick } = props;
  const { name, link, isLiked } = props.card;
  return (
    <article className="elements__card">
      <img className="elements__image" src={link} alt={name} onClick={()=> onImageClick(card)} />

      <button className="elements__remove" type="button" aria-label="trash" />
      <div className="elements__caption">
        <p className="elements__text">{name}</p>
        <button
          className="elements__like"
          type="button"
          aria-label="Like"
          aria-pressed={isLiked}
        />
      </div>
    </article>
  );
}
