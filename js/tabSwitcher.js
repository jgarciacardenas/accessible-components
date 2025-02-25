// This function is modeled after the guide here: https://www.w3schools.com/howto/howto_js_tabs.asp
function switchTab(evt, tabName) {
  // Declare all variables
  var i, tab_body, tabs;

  // Get all elements with class="tabcontent" and hide them
  tab_body = document.getElementsByClassName("tab-body");
  for (i = 0; i < tab_body.length; i++) {
    tab_body[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tabs = document.getElementsByClassName("tabs");
  for (i = 0; i < tabs.length; i++) {
    tabs[i].className = tabs[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(tabName).style.display = "flex";
  evt.currentTarget.className += " active";
}
