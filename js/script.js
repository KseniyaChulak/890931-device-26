	  var link = document.querySelector(".feedback");
  
      var popup = document.querySelector(".modal-feedback");
      var close = popup.querySelector(".modal-close");
      
      var form = popup.querySelector("form");
      var name = popup.querySelector("[name=user-name]");
      var email = popup.querySelector("[name=user-email]");
      var letterUser = popup.querySelector("textarea")
      
      var isStorageSupport = true;
      var storageName = "";
      var storageEmail = "";

      try {
        storageName = localStorage.getItem("name");
        storageEmail = localStorage.getItem("email");
      } catch (err) {
        isStorageSupport = false;
      }
      
      link.addEventListener("click", function (evt) {
        evt.preventDefault();
        popup.classList.add("modal-show");
        
        if (storageName) {
          name.value = storageName;
          email.focus();
        } else {
            name.focus();

          } if (storageEmail) {
            email.value = storageEmail;
            letterUser.focus();
          }
            else {
              email.focus();
            }

      });
      
      close.addEventListener("click", function (evt) {
        evt.preventDefault();
        popup.classList.remove("modal-show");
        popup.classList.remove("modal-error");
      });
      
      form.addEventListener("submit", function (evt) {
        if (!name.value || !email.value || !letterUser.value) {
          evt.preventDefault();
          popup.classList.remove("modal-error");
          popup.offsetWidth = popup.offsetWidth;
          popup.classList.add("modal-error");
        } else {
          if (isStorageSupport) {
            localStorage.setItem("name", name.value);
            localStorage.setItem("email", email.value);
          }
        }
      });
      
      window.addEventListener("keydown", function (evt) {
        if (evt.keyCode === 27) {
          evt.preventDefault();
          if (popup.classList.contains("modal-show")) {
            popup.classList.remove("modal-show");
            popup.classList.remove("modal-error");
          }
        }
      });

      var mapLink = document.querySelector(".button-map");
      var mapPopup = document.querySelector(".modal-map");
      var mapClose = mapPopup.querySelector(".modal-close");
      
      mapLink.addEventListener("click", function (evt) {
        evt.preventDefault();
        mapPopup.classList.add("modal-show");
      });

      mapClose.addEventListener("click", function (evt) {
        evt.preventDefault();
        mapPopup.classList.remove("modal-show");
      });

      window.addEventListener("keydown", function (evt) {
        if (evt.keyCode === 27) {
          evt.preventDefault();
          if (mapPopup.classList.contains("modal-show")) {
            mapPopup.classList.remove("modal-show");
          }
        }
      });
