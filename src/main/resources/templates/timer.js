function odliczanie() {
    var dzisiaj = new Date(); // do zmiennej dzisiaj wkładam obiekt klasy Date

    var godzina = dzisiaj.getHours();
    if (godzina<10) godzina = "0"+godzina;
    var minuta = dzisiaj.getMinutes();
    if (minuta<10) minuta = "0"+minuta; // mozńa pominąć nawiasy i wtedy if będzie sie tyczył tylko kodu bezpośrednio po if
    var sekunda = dzisiaj.getSeconds();
    if (sekunda<10){
        sekunda = "0"+sekunda; // standardowy zapis też jest ok
    }


    document.getElementById("zegar").innerHTML = godzina + ":" + minuta + ":" + sekunda; // zastępuje wszystko pod id zegar tym co jest po znaku =

    setTimeout("odliczanie()", 1000); // uruchamianie funkcji odliczanie co jedną sek
}