document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector("#header .hamburger");
  const navList = document.querySelector("#header .nav-list ul");

  hamburger.addEventListener("click", function () {
    navList.classList.toggle("active");
  });

  const links = document.querySelectorAll("#header .nav-list ul a");

  links.forEach(link => {
    link.addEventListener("click", function (e) {
      const href = this.getAttribute("href");

      // Check if it's an internal link
      if (href.startsWith("#")) {
        e.preventDefault();

        navList.classList.remove("active");

        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - document.querySelector("#header .nav-bar").offsetHeight,
            behavior: "smooth"
          });
        }
      }
    });
  });
});
