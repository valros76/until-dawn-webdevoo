window.addEventListener("DOMContentLoaded", () => {
  const videoFacade = document.querySelector(`a[target="iframe-bande-annonce"]`);
  const videoPlayBtn = document.querySelector("#videoPlayBtn");

  videoPlayBtn.addEventListener("click", e => {
    e.preventDefault();
    videoFacade.classList.add("hidden");
    e.stopPropagation();
  });
});