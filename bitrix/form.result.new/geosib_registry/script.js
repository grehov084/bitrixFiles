var closeButton = document.querySelector(".close-modal"),
    closeButtonUpper = document.querySelector('.message-close'),
    body = document.getElementsByTagName("body"),
    modalMessage = document.querySelector(".message"),
    showButton = document.querySelector(".modal-button"),
    modalClose = document.querySelector('.modal__close'),
    modalDialog = document.querySelector(".modal__dialog");
body = body[0];
window.addEventListener("scroll", () => {
  modalDialog.parentNode.style.top = window.pageYOffset + "px";
});
function fadeIn(el, timeout, display){
  el.style.opacity = 0;
  el.style.display = display || 'flex';
  el.style.transition = `opacity ${timeout}ms`;
  setTimeout(() => {
  el.style.opacity = 1;
  }, 10);
};
function fadeOut(el, timeout){
    el.style.opacity = 1;
    el.style.transition = `opacity ${timeout}ms`;
    el.style.opacity = 0;
    body.style.cssText = "";
    setTimeout(() => {
      el.style.display = 'none';
    }, timeout);
};
if(closeButton != null){
  closeButton.addEventListener("click", function(){
    fadeOut(modalMessage, 500);
    if(modalDialog != null){
      body.style.cssText = "overflow: hidden";
    }
  }); 
}
if(closeButtonUpper != null){
  closeButtonUpper.addEventListener("click", function(){
    body.style.cssText = "";
    fadeOut(modalMessage, 500);
    if(modalDialog != null){
      body.style.cssText = "overflow: hidden";
    }
  });
}
if(modalClose != null){
  modalClose.addEventListener("click", function(e){
    if(modalClose.parentNode.parentNode.parentNode.parentNode.parentNode.classList.contains("modal--show")){
      modalClose.parentNode.parentNode.parentNode.parentNode.parentNode.classList.remove("modal--show");
      fadeOut(modal, 500);
      body.style.cssText = "";
    }
  });
}
document.addEventListener("keydown", function(e){
    if(e.key == "Escape"){
      if(modal.classList.contains("modal--show")){
        modal.classList.remove("modal--show");
        body.style.cssText = "";
        fadeOut(modal, 500);
      }
      else{
        fadeOut(modalMessage, 500);
        body.style.cssText = "overflow: hidden";
      }  
    }   
});
if(showButton != null){
  showButton.addEventListener("click", function(e){
    modal = showButton.parentNode.parentNode.children[1];
    fadeIn(modal, 500);
    modal.classList.add("modal--show");
    body.style.cssText = "overflow: hidden";
  });
}

