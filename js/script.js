const divShare = document.querySelector(".div__div-button-share");
const shareButtonDesk = document.querySelector(".desk");
const shareButtonMob = document.querySelector(".mob");
const divProfile = document.querySelector(".div__profile");

let wH = 894;

shareButtonDesk.addEventListener("click", () => {
  const windowWidth = window.innerWidth;
  if (windowWidth >= wH) {
    divShare.classList.toggle("hidden");
    divProfile.classList.replace("hidden", "active");
  } else {
    divShare.classList.toggle("active");
    divProfile.classList.replace("active", "hidden");
  }
});

shareButtonMob.addEventListener("click", () => {
  const windowWidth = window.innerWidth;
  if (windowWidth < wH) {
    divShare.classList.toggle("active");
    divProfile.classList.toggle("active");
  } else {
    divShare.classList.toggle("hidden");
    divProfile.classList.replace("hidden", "active");
  }
});
