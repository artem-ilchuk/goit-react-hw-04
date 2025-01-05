import s from "./ImageCard.module.css";

const ImageCard = ({
  photo,
  alt,
  author,
  collections,
  total_photos,
  likes,
  onClick,
}) => {
  return (
    <div className={s.gallery_item} onClick={onClick}>
      <img className={s.gallery_image} src={photo} alt={alt} />
      <div className={s.description}>
        <ul className={s.list}>
          <li className={s.item}>
            <p className={s.subtitle}>Author:</p>
            <p className={s.text}>{author}</p>
          </li>
          <li className={s.item}>
            <p className={s.subtitle}>Collections:</p>
            <p className={s.text}>{collections}</p>
          </li>
          <li className={s.item}>
            <p className={s.subtitle}>Total photos:</p>
            <p className={s.text}>{total_photos}</p>
          </li>
          <li className={s.item}>
            <p className={s.subtitle}>Likes:</p>
            <p className={s.text}>{likes}</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ImageCard;
