import Modal from "react-modal";
import s from "./ImageModal.module.css";
import { LuSquareUserRound } from "react-icons/lu";
import { RiInstagramFill } from "react-icons/ri";

const ImageModal = ({ image, isOpen, onRequestClose }) => {
  const instagramUrl = `https://www.instagram.com/${image.user.social.instagram_username}`;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Image Modal"
      ariaHideApp={false}
      className={s.ImageModal}
      overlayClassName={s.modalfieldwrap}
    >
      <div className={s.modalContent}>
        <button onClick={onRequestClose} className={s.closeButton}>
          ✖
        </button>
        <img
          src={image.urls.regular}
          alt={image.alt_description}
          className={s.image}
        />
        <div className={s.authorInfo}>
          <p className={s.text}>
            <LuSquareUserRound size={22} /> <strong>Author:</strong>{" "}
            {image.user.name}
          </p>
          {image.user.social.instagram_username && (
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={s.instagramLink}
            >
              <RiInstagramFill size={22} /> Instagram
            </a>
          )}
        </div>
      </div>
    </Modal>
  );
};

export default ImageModal;
