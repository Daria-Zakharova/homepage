export class ImageModal {
  constructor() {
    this.body = document.querySelector("body");
    this.create();
    this.backdrop = document.querySelector(".backdrop");
    this.image = this.backdrop.querySelector("img");
  }

  create = () => {
    const modalImage = document.createElement("img");
    const modal = document.createElement("div");
    const backdrop = document.createElement("div");
    modalImage.classList.add("modalImage");
    modalImage.src = "";
    modalImage.alt = "image";
    modal.classList.add("modal");
    backdrop.classList.add("backdrop", "hidden");
    modal.appendChild(modalImage);
    backdrop.appendChild(modal);
    this.body.appendChild(backdrop);
  };

  hideOnClickOutside = (e) => {
    if (e.target.nodeName !== "IMG") {
      this.hide();
    }
  };

  show = ({ link, alt }) => {
    this.backdrop.classList.remove("hidden");
    this.image.src = link;
    this.image.alt = alt;
    this.body.classList.add("no-scroll");
    this.body.addEventListener("click", this.hideOnClickOutside);
  };

  hide = () => {
    this.backdrop.classList.add("hidden");
    this.body.classList.remove("no-scroll");
  };
}
