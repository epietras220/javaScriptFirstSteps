function ifEven() {
    var number = document.getElementById("pole").value; // uchwyt który znalazł id = pole i bierze wartość czyli liczbe
    document.write(number);
if (number%2 === 0) {
    return "parzysta";
} else {
    return "nieparzysta";
}
}