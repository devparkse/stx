window.onload = function () {
  AOS.init();

  // 모달창
  let body = document.querySelector("body");
  let modal = document.querySelector(".modal");
  modal.addEventListener("click", function () {
    // modal.style.display = "none";
    // fadeOut(modal);
    anime({
      targets: ".modal",
      // delay: 200,
      duration: 500,
      opacity: 0,
      easing: "easeInOutQuad",
      complete: function () {
        modal.style.display = "none";
        body.classList.add("active");
      },
    });
  });
};
