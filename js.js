function switchImage() {
    x = (x === imagesLeft.length - 1) ? 0 : x + 1;
    document.getElementById("img").src = imagesLeft[x];
    document.getElementById("img2").src = imagesRight[x];
    document.getElementById("p1").innerHTML = paragraphsLeft[x];
    document.getElementById("p2").innerHTML = paragraphsRight[x];
}

function timer() {
    setInterval(switchImage, 5000);
}

var x = -1;

var imagesLeft = [];
imagesLeft[0] = "slikeZaSajt/lososkikiriki.jpg";
imagesLeft[1] = "slikeZaSajt/maxresdefault.jpg";

var paragraphsLeft = [];
paragraphsLeft[0] = "Filet svežeg lososa";
paragraphsLeft[1] = "Vrhunsko osoblje!";

var imagesRight = [];
imagesRight[0] = "slikeZaSajt/cokoladniwrap.jpg";
imagesRight[1] = "slikeZaSajt/promena3.jpg";

var paragraphsRight = [];
paragraphsRight[0] = "Čokoladni wrap";
paragraphsRight[1] = "Restoran sa tradicijom!";