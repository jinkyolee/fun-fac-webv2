const setCurrentPage = (location) => {
  const controlItems = document.querySelectorAll(".control-item");

  for (const item of controlItems) {
    if (item.classList.contains("item--selected")) {
      item.classList.remove("item--selected");
    }
  }

  if (location === "/content/main") {
    controlItems[0].classList.add("item--selected");
  } else if (location === "/content/palace") {
    controlItems[1].classList.add("item--selected");
  } else if (location === "/content/game") {
    controlItems[2].classList.add("item--selected");
  } else if (location === "/content/novel") {
    controlItems[3].classList.add("item--selected");
  }
};

export default setCurrentPage;
