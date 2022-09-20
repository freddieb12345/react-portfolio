import {toggleModalContent} from "./toggleModalContent.js"
let modalToggle

export function toggleModalWithDelay(delay) {
  console.log(delay)
  setTimeout(() => {
    toggleModal()
  }, delay)
}

export function toggleModal() {
    modalToggle = !modalToggle;
    

    if(modalToggle) {
      document.documentElement.style.setProperty("--modal-opacity", "1");
      document.documentElement.style.setProperty("--body-overflow", "hidden");
      document.getElementById("modal_logo").classList.add('modal__logoAnimation');

      document.documentElement.style.setProperty("--header-opacity", "0");

      setTimeout(() => {
        toggleModalContent(true)
        
      }, 1500)
    } else {
      document.documentElement.style.setProperty("--modal-opacity", "0");
      document.documentElement.style.setProperty("--body-overflow", "auto");
      document.documentElement.style.setProperty("--body-overflow", "auto");
      document.documentElement.style.setProperty("--header-opacity", "1");
      document.getElementById("modal_logo").classList.remove('modal__logoAnimation');
      toggleModalContent(false);
    }
  }