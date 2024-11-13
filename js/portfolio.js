const btnTabs = document.querySelectorAll(".btn-tab");
const tabPanels = document.querySelectorAll(".page-contents article");
const makeupLists = document.querySelectorAll(".makeup li:not(.show)");
const hairstyleLists = document.querySelectorAll(".hairstyle li:not(.show)");
const btnMores = document.querySelectorAll(".btn-more");
const initialWidth = window.innerWidth;

const IMAGE_MOBILE = 4;
const IMAGE_TABLET = 6;
const IMAGE_DESKTOP = 9;

handleImages(initialWidth);

function handleTab(event) {
  const target = event.target;
  const targetText = target.textContent.toLowerCase();
  const tab = target.parentElement;

  tab.classList.add("on");
  if(tab.previousElementSibling !== null) {
    tab.previousElementSibling.classList.remove("on");
  } else if(tab.nextElementSibling !== null) {
    tab.nextElementSibling.classList.remove("on");
  }
  tabPanels.forEach(tabPanel => {
    tabPanel.classList.add("hide");
    if (tabPanel.classList.contains(targetText)) {
      tabPanel.classList.remove("hide");
    }
  })
}

function handleImages(width) {
  if(width > 1000) {
    showImages(IMAGE_DESKTOP);
  } else if(width > 600) {
    showImages(IMAGE_TABLET);
  } else {
    showImages(IMAGE_MOBILE);
  }
}

function showImages(count) {
  makeupLists.forEach((makeupList, index) => {
    if (index < count) {
      makeupList.classList.add("show");
    } else {
      makeupList.classList.remove("show");
    }
  })
  hairstyleLists.forEach((hairstyleList, index) => {
    if (index < count) {
      hairstyleList.classList.add("show");
    } else {
      hairstyleList.classList.remove("show");
    }
  })
}

function handleViewMore(event) {
  const target = event.target;
  const panel = target.parentElement;
  const windowWidth = window.innerWidth;

  showImages(windowWidth);
}

btnTabs.forEach(btnTab => {
  btnTab.addEventListener("click", handleTab);
})

btnMores.forEach(btnMore => {
  btnMore.addEventListener("click", handleViewMore)
})

window.addEventListener("resize", function (event) {
  handleImages(event.target.innerWidth);
});

