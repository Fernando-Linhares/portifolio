var i = setInterval(function () {
    clearInterval(i);
    // O código desejado é apenas isto:
    document.getElementById("loading").style.display = "none";

}, 100);

