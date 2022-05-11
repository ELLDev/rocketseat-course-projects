const page = document.querySelector(".page");
const body = document.querySelector("body");
const navigationLinks = document.querySelectorAll("a");
const routes =
{
  "/": { "route": "/pages/home.html", "image": "/images/mountains-universe01.png" },
  "/universo": { "route": "/pages/universo.html", "image": "/images/mountains-universe02.png" },
  "/exploracao": { "route": "/pages/exploracao.html", "image": "/images/mountains-universe03.png" },
}

router = (route) => {
  fetch(route).then(response => response.text()).then(data => page.innerHTML = data)
}

navigationLinks.forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    link.classList.toggle("current-page");
    window.history.pushState({}, "", link.href);
    const { pathname } = window.location;
    body.style.backgroundImage = `url(${routes[pathname].image})`;
    router(routes[pathname].route);
  })
});
