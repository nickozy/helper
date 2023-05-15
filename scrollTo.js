const navLink = document.querySelectorAll(".nav-manifest__menu-link");

for (let i = 0; i < navLink.length; i++) {
  console.log(navLink[i]);
  const href = navLink[i].getAttribute("href");
  console.log(href);
  navLink[i].addEventListener("click", () => {
    scrollTo(href);
  });
}

function scrollTo(el) {
  const element = document.querySelector(el);
  element.scrollIntoView({ behavior: "auto" });
}
