const page = document.querySelector(".page");
const body = document.querySelector("body");
const routes =
{
  "/": { "route": "/pages/home.html", "image": "/images/mountains-universe01.png", "name": ".home-page" },
  "/universo": { "route": "/pages/universo.html", "image": "/images/mountains-universe02.png", "name": ".universo-page" },
  "/exploracao": { "route": "/pages/exploracao.html", "image": "/images/mountains-universe03.png", "name": ".exploracao-page" },
}
let previousPage = "/";


router = (route) => {
  fetch(route).then(response => response.text()).then(data => page.innerHTML = data)
}

changeBackground = (pathname) => {
  body.style.backgroundImage = `url(${routes[pathname].image})`;
}

handle = () => {
  const { pathname } = window.location;
  document.querySelector(`${routes[pathname].name}`).classList.toggle("current-page");
  previousPage = pathname;
  router(routes[pathname].route);
  changeBackground(pathname);
}

changeRoute = (event) => {
  event = event || window.event;
  event.preventDefault();
  event.target.href = event.target.href || event.target.parentElement.href;
  document.querySelector(`${routes[previousPage].name}`).classList.toggle("current-page");
  window.history.pushState({}, "", event.target.href);
  handle();
}

window.addEventListener('popstate', () => {
  document.querySelector(`${routes[previousPage].name}`).classList.toggle("current-page");
  handle();
});
