console.log("Hello world!");
const body = document.getElementById("bodyIframe");

body.addEventListener("load", function() {
    console.log("loaded")
    body.style.height = '0px'; 
    body.style.height = body.contentWindow.document.documentElement.scrollHeight + 'px';
});

function loadHome() {
    body.src = "home.html";
    console.log("home clicked");
};

function loadPortfolio() {
    body.src = "portfolio.html";
    console.log("portfolio clicked");
};