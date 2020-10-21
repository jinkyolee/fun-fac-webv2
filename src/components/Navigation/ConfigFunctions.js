const setNavbar = () => {
  const navbar = document.querySelector(".nav-bar");
  const links = document.querySelectorAll(".nav__text");
  let positionY = window.pageYOffset;

  if (positionY > 5) {
    navbar.classList.add("nav-dir--move");
    for (const link of links) {
      link.classList.add("button-move");
    }
  } else {
    navbar.classList.remove("nav-dir--move");
    for (const link of links) {
      link.classList.remove("button-move");
    }
  }
};

const setSelectedTab = (location) => {
  const navTabs = document.querySelectorAll(".nav__text.nav__button");

  if (location === "/") {
    navTabs.forEach((tab) => {
      if (tab.classList.contains("button--selected")) {
        tab.classList.remove("button--selected");
      }
    });
  } else if (location.includes("/content")) {
    navTabs[0].classList.add("button--selected");
  }
};

export { setNavbar, setSelectedTab };
