import { ImageModal } from "./modal.js";

export class Lightbox {
  constructor({ selector = ".gallery" }) {
    this.links = [...document.querySelectorAll(`${selector} a`)];
    this.modal = new ImageModal();
    this.activate();
  }

  showImageCard = (e) => {
    e.preventDefault();
    const clickedLink = e.currentTarget;
    const currentImage = clickedLink.href;
    const imageInfo = clickedLink.dataset.descr;
    this.modal.show({ link: currentImage, alt: imageInfo });
  };

  activate = () => {
    this.links.forEach((link) => {
      link.addEventListener("click", this.showImageCard);
    });
  };
}
