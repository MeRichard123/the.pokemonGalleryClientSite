import React from "react";
import styles from "../styles/Gallery.module.css";
import Modal from "react-modal";
import { MdClose } from "react-icons/md";

const imageMap = [
  {
    url: "karcoal.jpg",
    desc:
      "Managed to evolve a Rolycoly, and now let's speed up the Scorbunny hunt",
  },
  { url: "motostoke.jpg", desc: "First time in a big city" },
  {
    url: "raboot.jpg",
    desc: "My Lovely Scorbunny is evolving! Say Hello to Raboot",
  },
  { url: "start.jpg", desc: "Let's start this adventure" },
  { url: "room.jpg", desc: "About to pack" },
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
