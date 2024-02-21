document.addEventListener("DOMContentLoaded", () => {
    startApp();
  });
  
  const startApp = () => {
    stickyNav();
  
    createGallery();
  
    smoothNav();
  
    document.getElementById("current-year").textContent =
      new Date().getFullYear();
  };
  
  const stickyNav = () => {
    const header = document.querySelector("header");
    const limitSection = document.querySelector(".hero__video-section");
    const body = document.querySelector("body");
  
    const offsetHeight = header.offsetHeight;
  
    window.addEventListener("scroll", () => {
        if (
            limitSection.getBoundingClientRect().bottom <= offsetHeight &&
            window.innerWidth >= 768
        ) {
            header.classList.add("sticky");
            body.style.paddingTop = headerHeight + "px"; 
            body.classList.add("overflow-hidden");
        } else {
            header.classList.remove("sticky");
            body.style.paddingTop = 0; 
            body.classList.remove("overflow-hidden");
        }
    });
  };
  
  
  const smoothNav = () => {
      const links = document.querySelectorAll(".scroll");
      links.forEach((link) => {
          link.addEventListener("click", (e) => {
          e.preventDefault();
      
          const section = document.querySelector(e.target.attributes.href.value);
          section.scrollIntoView({ behavior: "smooth" });
          });
      });
  };
  
  const createGallery = () => {
      const gallery = document.querySelector('.gallery__section-list');
  
      for(let i = 1; i <= 12; i++) {
          const image = document.createElement('picture');
          image.innerHTML = `
          <source srcset='build/img/thumb/${i}.webp' type='image/webp'>
          <img loading='lazy' src='build/img/thumb/${i}.jpg' alt='Gallery Image ${i}'>
          `;
  
          image.onclick = () => {
              openModal(i);
          }
  
          gallery.appendChild(image);
      }
      
  };
  
  const openModal = (id) => {
      const image = document.createElement('picture');
      image.innerHTML = `
      <source srcset='build/img/grande/${id}.webp' type='image/webp'>
      <img loading='lazy' src='build/img/thumb/${id}.jpg' alt='Gallery Image ${id}'>
      `;
  
      const modal = document.createElement('div');
      modal.appendChild(image);
      modal.classList.add('modal');
      modal.onclick = () => {
          const body = document.querySelector('body');
          body.classList.remove('overflow-hidden');
          modal.remove();
      };
  
      const closeModal = document.createElement('p');
      closeModal.textContent = 'X';
      closeModal.classList.add('close-modal');
      closeModal.onclick = () => {
          const body = document.querySelector('body');
          body.classList.remove('overflow-hidden');
          modal.remove();
      };
  
      modal.appendChild(closeModal);
  
      const body = document.querySelector('body');
      body.classList.add('overflow-hidden');
      body.appendChild(modal);
  }
  