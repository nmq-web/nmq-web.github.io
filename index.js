// Navigation
function openMenu() {
  document.getElementsByClassName("navigation-3")[0].style.display = "block";
  document.getElementsByClassName("navigation-4")[0].style.display = "block";
}

function closeMenu() {
  document.getElementsByClassName("navigation-3")[0].style.display = "none";
  document.getElementsByClassName("navigation-4")[0].style.display = "none";
}

// Back To Top
function backTotop() {
  if (sessionStorage.getItem("closebacktotop")) {
    document.getElementsByClassName("back-to-top")[0].style.display = "none";
    document.getElementsByClassName("back-to-top-open")[0].style.display =
      "block";
  } else {
    document.getElementsByClassName("back-to-top")[0].style.display = "block";
    document.getElementsByClassName("back-to-top-open")[0].style.display =
      "none";
  }
}

function openBacktotop() {
  sessionStorage.removeItem("closebacktotop", "closebacktotop");
  backTotop();
}

function closeBacktotop() {
  sessionStorage.setItem("closebacktotop", "closebacktotop");
  backTotop();
}
