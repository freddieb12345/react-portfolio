let modalToggle

export function toggleModal() {
    console.log(modalToggle)
    modalToggle = !modalToggle;
    function displayNone(display) {
      if(!display){
        document.getElementById("modal_logo").classList.remove('display-none')
        document.getElementById("contact-form").classList.add('display-none')

      } else {
        document.getElementById("modal_logo").classList.add('display-none')
        document.getElementById("contact-form").classList.remove('display-none')
      }
    }

    if(modalToggle) {
      document.documentElement.style.setProperty("--modal-opacity", "1");
      document.documentElement.style.setProperty("--body-overflow", "hidden");
      console.log(document.getElementById("modal_logo"))
      document.getElementById("modal_logo").classList.add('modal__logoAnimation')
      
      setTimeout(() => {
        displayNone(true)
      }, 1000)
      
      document.getElementById("header").classList.add('display-none')
      document.documentElement.style.setProperty("--display", "block");
    } else {
      document.documentElement.style.setProperty("--display", "none");
      document.documentElement.style.setProperty("--modal-opacity", "0");
      document.documentElement.style.setProperty("--body-overflow", "auto");
      document.documentElement.style.setProperty("--body-overflow", "auto");
      document.getElementById("modal_logo").classList.remove('modal__logoAnimation')
      displayNone(false)
      document.getElementById("header").classList.remove('display-none')
    }

  }