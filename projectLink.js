const links = document.querySelectorAll(".projectLink");

links.forEach(link => {
  link.addEventListener("click", function (e) {
    if (window.innerWidth < 768) {
      e.preventDefault();
    }
  });
});