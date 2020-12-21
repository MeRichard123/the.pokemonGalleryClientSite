import React from "react";
import styles from "../styles/Gallery.module.css";
import Modal from "react-modal";
import { MdClose } from "react-icons/md";

const imageMap = [
  { url: "karcoal.jpg", desc: "" },
  { url: "motostoke.jpg", desc: "" },
  { url: "raboot.jpg", desc: "" },
  { url: "room.jpg", desc: "" },
  { url: "start.jpg", desc: "" },
];

const Gallery: React.FC = () => {
  const [modalIsOpen, setModalIsOpen] = React.useState<boolean>(false);
  const [currentImg, setCurrentImage] = React.useState<string>("");
  const [currentDesc, setCurrentDesc] = React.useState<string>("");
  return (
    <div className={styles.gallery}>
      {imageMap.map((image, index) => (
        <div key={index}>
          <img
            className={styles.galleryInstance}
            src={`/assets/${image.url}`}
            alt=""
            onClick={() => {
              setModalIsOpen(true);
              setCurrentImage(`/assets/${image.url}`);
              setCurrentDesc(image.desc);
            }}
          />
        </div>
      ))}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={{
          overlay: { zIndex: 999 },
          content: { zIndex: 999 },
        }}
      >
        <div className={styles.modalContainer}>
          <img
            src={currentImg}
            alt=""
            className={styles.imageModal}
            onClick={() => setModalIsOpen(true)}
          />
          <p>{currentDesc}</p>
          <div>
            <button
              onClick={() => setModalIsOpen(false)}
              className={styles.ButtonStyles}
            >
              <MdClose size="1.5rem" />
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Gallery;
