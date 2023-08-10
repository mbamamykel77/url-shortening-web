let formButton = document.querySelector(".form_text");
let output = document.querySelector(".link_output");
let input_link = document.querySelector("#link");
let input_res = document.querySelector(".input_res");
let inputRes = document.querySelector(".input_link")
let section2 = document.querySelector(".section2")
let alert_text = document.querySelector(".alert_text");
let resButton = document.querySelector(".resButton")


function displayForm(event) {
  if (input_link.value === "") {
    output.style.display = "none";
    event.preventDefault();
    input_link.style.borderColor = "red";
    alert_text.style.display = "block"
  } else {
    event.preventDefault();
    alert_text.style.display = "none"
    input_link.style.borderColor = "transparent";
    output.style.display = "inline";
    output.style.height = "auto";
    output.style.textAlign = "start";
    inputRes.style.padding = "1rem";
    inputRes.style.cursor = "pointer";
    input_res.textContent = input_link.value;
    input_res.style.display = "block";
    input_res.style.marginTop = "30px";
    input_res.style.borderBottom = "1px solid gray";
    input_res.style.padding = "1rem";
    input_res.style.wordWrap = "break-word";

    // Add event listener for screen size changes
    window.addEventListener("resize", adjustLayout);
    adjustLayout();
  }
}
function adjustLayout() {
  if (window.innerWidth < 1040) {
    section2.style.paddingBottom = "128rem";
  } else {
    section2.style.paddingBottom = "80rem";
  }
}
formButton.addEventListener("click", displayForm);



// function to copy text
function myFunctions() {
  let copyText = inputRes.textContent;

  let tempTextarea = document.createElement("textarea");
  tempTextarea.value = copyText;
  document.body.appendChild(tempTextarea);

  tempTextarea.select();
  tempTextarea.setSelectionRange(0, 99999);

  navigator.clipboard.writeText(copyText);
  let tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "Copied!";
}
function outFunc() {
  let tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "Copy to clipboard";
}


inputRes.addEventListener("click", function() {
  let url = inputRes.textContent;

  if (url) {
    let tempLink = document.createElement("a");
    tempLink.href = url;
    tempLink.target = "_blank";
    tempLink.click(); 
  }
});


// funtion for burger menu
function myFunction(x) {
  x.classList.toggle("change");
}
function openSlideMenu() {
  document.getElementById("burger-menu").classList.toggle("open");
}
function closeSlideMenu() {
  document.getElementById("burger-menu").style.width = "0px";
}
