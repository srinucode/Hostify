
const collapsibles = document.querySelectorAll(".collapsible");
collapsibles.forEach((item) =>
  item.addEventListener("click", function () {
    console.log("Clicked");
    this.classList.toggle("collapsible--expanded");
  })
);
