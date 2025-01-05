import s from "./ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard";

const ImageGallery = ({ images, handleOpen }) => {
  return (
    <div>
      <ul className={s.gallery}>
        {images.map((item) => {
          return (
            <li className={s.gallery_item} key={item.id}>
              <ImageCard
                photo={item.urls.small}
                alt={item.alt_description}
                author={item.user.name}
                collections={item.user.total_collections}
                total_photos={item.user.total_photos}
                likes={item.user.total_likes}
                onClick={() => handleOpen(item)}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ImageGallery;
