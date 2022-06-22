import anime from "animejs";

// Import stylesheets
import "./styles.scss";

// Write Javascript code!
const appDiv = document.getElementById("app");
appDiv.innerHTML = `
<nav>
  <a href="#" data-page="headlines">Headlines</a>
  <a href="#" data-page="buttons">Buttons </a>
  <a href="#" data-page="spinners">Spinners</a>
  <a href="#" data-page="about">About</a>
  <span class="Indicator"></span>
  <span class="ShadowIndicator"></span>
</nav>`;

const setIndicator = ({ event, elem, indicatorClass, loadPage }) => {
  event.preventDefault();
  const target = event?.currentTarget || elem;
  const indicator = document.querySelector(`.${indicatorClass}`);
  indicator.classList.add("is-visible");

  const nav = document.querySelector("nav");
  const { width, x } = target.getBoundingClientRect();
  const { x: indicatorX } = indicator.getBoundingClientRect();
  const { x: navX } = nav.getBoundingClientRect();
  anime({
    targets: indicator,
    width,
    translateX: [indicatorX - navX, x - navX - 4],
    translateZ: 0,
    easing: "spring(1, 70, 12, 6)"
  });
  if (loadPage) {
    // load your page
  }
};
const hideIndicator = ({ indicatorClass }) => {
  const indicator = document.querySelector(`.${indicatorClass}`);
  if (indicator) {
    indicator.classList.toggle("is-visible");
  }
};

const navigationItems = document.querySelectorAll("nav > a");
navigationItems.forEach((i) => {
  i.addEventListener("click", (event) =>
    setIndicator({ event, indicatorClass: "Indicator", loadPage: true })
  );
  i.addEventListener("mouseover", (event) =>
    setIndicator({ event, indicatorClass: "ShadowIndicator" })
  );
  i.addEventListener("mouseleave", (event) =>
    hideIndicator({ event, indicatorClass: "ShadowIndicator" })
  );
});

