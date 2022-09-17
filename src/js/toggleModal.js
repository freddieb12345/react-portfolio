let modalToggle

export function toggleModal() {
    console.log(modalToggle)
    modalToggle = !modalToggle;
    
    function displayNone(display) {
      if(!display){
        document.getElementById("modal_logo").classList.remove('display-none')
        if (document.getElementById("contact-form")) {
          document.getElementById("contact-form").classList.add('display-none')
        }

      } else {
        if (document.getElementById("contact-form")) {
          document.getElementById("contact-form").classList.remove('display-none')
        }
        document.getElementById("modal_logo").classList.add('display-none')
      }
    }

    if(modalToggle) {
      document.documentElement.style.setProperty("--modal-opacity", "1");
      document.documentElement.style.setProperty("--body-overflow", "hidden");
      console.log(document.getElementById("modal_logo"))
      document.getElementById("modal_logo").classList.add('modal__logoAnimation')
      document.getElementById("header").classList.add('display-none')
      document.documentElement.style.setProperty("--display", "block");

      setTimeout(() => {
        displayNone(true)
      }, 2000)
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