var loadingScreen = document.getElementById("loadingScreen");

window.addEventListener("load", (event) => {
  loadingScreen.classList.add("hide-loading");
  setTimeout(() => {
    loadingScreen.remove();
  }, 1000);
});
