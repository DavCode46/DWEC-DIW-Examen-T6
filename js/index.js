document.addEventListener("DOMContentLoaded", () => {
  startApp();
});

const startApp = () => {
  stickyNav();
  createGallery();
//   smoothNav();

  document.querySelector("#current-year").textContent =
    new Date().getFullYear();
};

const stickyNav = () => {
  const header = document.querySelector("header");
  const body = document.querySelector("body");
  const limitSection = document.querySelector(".hero__video-section");

  const offsetHeight = header.offsetHeight;

  if (window.innerWidth >= 768) {
    window.addEventListener("scroll", () => {
      if (limitSection.getBoundingClientRect <= offsetHeight) {
        header.classList.add("sticky");
        body.style.paddingTop = offsetHeight + "px";
      } else {
        header.classList.remove("sticky");
        body.style.paddingTop = 0;
      }
    });
  }
};

const smoothNav = () => {
  const links = document.querySelectorAll("a");

  links.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const attribute = e.target.attribute.href.value;
      attribute.scrollIntoView({ behavior: "smooth" });
    });
  });
};

const createGallery = () => {
  const gallery = document.querySelector(".gallery__section-list");

  for (let i = 1; i <= 12; i++) {
    const image = document.createElement("picture");

    image.innerHTML = `
            <source srcset='build/img/thumb/${i}.webp' type='image/webp'>
            <img src='build/img/thumb/${i}.jpg' alt='Image ${i}' loading='lazy'>
        `;

    gallery.appendChild(image);

    openModal(i);
  }
};

const openModal = (id) => {
  const modal = document.createElement("div");

  const image = document.createElement("picture");

  image.innerHTML = `
    <source srcset='build/img/grande/${id}.webp' type='image/webp'>
    <img src='build/img/grande/${id}.jpg' alt='Image ${id}' loading='lazy'>
`;

modal.appendChild(image);
  modal.classList.add("modal");


  const body = document.querySelector('body');

  modal.onclick = () => {
    body.classList.remove('overflow-hidden');
    modal.remove();
  }

  const closeBtn = document.createElement('button');
  closeBtn.textContent = 'X';

  
  closeBtn.onclick = () => {
      body.classList.remove('overflow-hidden');
      modal.remove();
    }
    
    body.appendChild(modal);
    body.classList.add('overflow-hidden');
    modal.appendChild(closeBtn);
};
