const btnTabs = document.querySelectorAll(".btn-tab");
const tabPanels = document.querySelectorAll(".page-contents article");
const makeupLists = document.querySelectorAll(".makeup li");
const hairstyleLists = document.querySelectorAll(".hairstyle li");

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

btnTabs.forEach(btnTab => {
  btnTab.addEventListener("click", handleTab);
})

window.addEventListener("resize", function (event) {

  if(event.target.innerWidth > 500) {
    console.log("true")
  }
})