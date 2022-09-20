export function toggleModalContent(display) {
  
  function removeLogo() {
    document.getElementById("modal_logo").classList.remove('display-none')
  }

  function removeForm() {
    document.getElementById("contact-form").classList.add('display-none')
  }

  function toggleFormOpactiy(formOpacity) {
    if(!formOpacity) {
      document.documentElement.style.setProperty("--form1-opacity", "0");
      console.log("hello")
    } else {
      document.documentElement.style.setProperty("--form1-opacity", "1");
    }
  }  
  
  if(!display){
      toggleFormOpactiy(false)
      if (document.getElementById("contact-form")) {
        setTimeout(() => {
          removeForm()
        },500)
      }
      setTimeout(() => {
        removeLogo()
      },1000)
      

    } else {
      if (document.getElementById("contact-form")) {
        document.getElementById("contact-form").classList.remove('display-none')
      }
      document.getElementById("modal_logo").classList.add('display-none')
      setTimeout(() => {
        toggleFormOpactiy(true)
      },500)
    }
  }