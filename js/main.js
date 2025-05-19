window.addEventListener("DOMContentLoaded", () => {
  const videoFacade = document.querySelector(`a[target="iframe-bande-annonce"]`);
  const videoPlayBtn = document.querySelector("#videoPlayBtn");
  const iframeBA = document.querySelector(`iframe[name="iframe-bande-annonce"]`);

  videoPlayBtn.addEventListener("click", e => {
    e.preventDefault();
    videoFacade.classList.add("hidden");
    iframeBA.src = "https://www.youtube.com/embed/78r33GHdlbo?cc_load_policy=1";
    e.stopPropagation();
  });
});